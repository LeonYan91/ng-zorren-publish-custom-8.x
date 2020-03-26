"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular/cdk/schematics");
const schema_1 = require("@schematics/angular/component/schema");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const config_1 = require("@schematics/angular/utility/config");
const find_module_1 = require("@schematics/angular/utility/find-module");
const parse_name_1 = require("@schematics/angular/utility/parse-name");
const project_1 = require("@schematics/angular/utility/project");
const validation_1 = require("@schematics/angular/utility/validation");
const fs_1 = require("fs");
const path_1 = require("path");
/**
 * List of style extensions which are CSS compatible. All supported CLI style extensions can be
 * found here: angular/angular-cli/master/packages/schematics/angular/ng-new/schema.json#L118-L122
 */
const supportedCssExtensions = ['css', 'scss', 'sass', 'less'];
// tslint:disable-next-line no-any
function readIntoSourceFile(host, modulePath) {
    const text = host.read(modulePath);
    if (text === null) {
        throw new schematics_1.SchematicsException(`File ${modulePath} does not exist.`);
    }
    return schematics_2.ts.createSourceFile(modulePath, text.toString('utf-8'), schematics_2.ts.ScriptTarget.Latest, true);
}
// tslint:disable-next-line no-any
function getModuleClassnamePrefix(source) {
    const className = ast_utils_1.getFirstNgModuleName(source);
    if (className) {
        const execArray = /(\w+)Module/gi.exec(className);
        if (execArray && execArray[1]) {
            return execArray[1];
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
}
function addDeclarationToNgModule(options) {
    return (host) => {
        if (options.skipImport || !options.module) {
            return host;
        }
        const modulePath = options.module;
        let source = readIntoSourceFile(host, modulePath);
        const componentPath = `/${options.path}/${options.flat ? '' : core_1.strings.dasherize(options.name) + '/'}${core_1.strings.dasherize(options.name)}.component`;
        const relativePath = find_module_1.buildRelativePath(modulePath, componentPath);
        let classifiedName = core_1.strings.classify(`${options.name}Component`);
        if (options.classnameWithModule) {
            const modulePrefix = getModuleClassnamePrefix(source);
            if (modulePrefix) {
                classifiedName = `${modulePrefix}${classifiedName}`;
            }
        }
        const declarationChanges = ast_utils_1.addDeclarationToModule(
        // TODO: TypeScript version mismatch due to @schematics/angular using a different version
        // than Material. Cast to any to avoid the type assignment failure.
        // tslint:disable-next-line no-any
        source, modulePath, classifiedName, relativePath);
        const declarationRecorder = host.beginUpdate(modulePath);
        for (const change of declarationChanges) {
            if (change instanceof change_1.InsertChange) {
                declarationRecorder.insertLeft(change.pos, change.toAdd);
            }
        }
        host.commitUpdate(declarationRecorder);
        if (options.export) {
            // Need to refresh the AST because we overwrote the file in the host.
            source = readIntoSourceFile(host, modulePath);
            const exportRecorder = host.beginUpdate(modulePath);
            const exportChanges = ast_utils_1.addExportToModule(
            // TODO: TypeScript version mismatch due to @schematics/angular using a different version
            // than Material. Cast to any to avoid the type assignment failure.
            // tslint:disable-next-line no-any
            source, modulePath, classifiedName, relativePath);
            for (const change of exportChanges) {
                if (change instanceof change_1.InsertChange) {
                    exportRecorder.insertLeft(change.pos, change.toAdd);
                }
            }
            host.commitUpdate(exportRecorder);
        }
        if (options.entryComponent) {
            // Need to refresh the AST because we overwrote the file in the host.
            source = readIntoSourceFile(host, modulePath);
            const entryComponentRecorder = host.beginUpdate(modulePath);
            const entryComponentChanges = ast_utils_1.addEntryComponentToModule(
            // TODO: TypeScript version mismatch due to @schematics/angular using a different version
            // than Material. Cast to any to avoid the type assignment failure.
            // tslint:disable-next-line no-any
            source, modulePath, classifiedName, relativePath);
            for (const change of entryComponentChanges) {
                if (change instanceof change_1.InsertChange) {
                    entryComponentRecorder.insertLeft(change.pos, change.toAdd);
                }
            }
            host.commitUpdate(entryComponentRecorder);
        }
        return host;
    };
}
function buildSelector(options, projectPrefix, modulePrefixName) {
    let selector = core_1.strings.dasherize(options.name);
    let modulePrefix = '';
    if (modulePrefixName) {
        modulePrefix = core_1.strings.dasherize(modulePrefixName) + '-';
    }
    if (options.prefix) {
        selector = `${options.prefix}-${modulePrefix}${selector}`;
    }
    else if (options.prefix === undefined && projectPrefix) {
        selector = `${projectPrefix}-${modulePrefix}${selector}`;
    }
    return selector;
}
/**
 * Indents the text content with the amount of specified spaces. The spaces will be added after
 * every line-break. This utility function can be used inside of EJS templates to properly
 * include the additional files.
 */
function indentTextContent(text, numSpaces) {
    // In the Material project there should be only LF line-endings, but the schematic files
    // are not being linted and therefore there can be also CRLF or just CR line-endings.
    return text.replace(/(\r\n|\r|\n)/g, `$1${' '.repeat(numSpaces)}`);
}
/**
 * Rule that copies and interpolates the files that belong to this schematic context. Additionally
 * a list of file paths can be passed to this rule in order to expose them inside the EJS
 * template context.
 *
 * This allows inlining the external template or stylesheet files in EJS without having
 * to manually duplicate the file content.
 */
function buildComponent(options, additionalFiles = {}) {
    return (host, context) => {
        const workspace = config_1.getWorkspace(host);
        const project = schematics_2.getProjectFromWorkspace(workspace, options.project);
        const defaultZorroComponentOptions = schematics_2.getDefaultComponentOptions(project);
        let modulePrefix = '';
        // TODO(devversion): Remove if we drop support for older CLI versions.
        // This handles an unreported breaking change from the @angular-devkit/schematics. Previously
        // the description path resolved to the factory file, but starting from 6.2.0, it resolves
        // to the factory directory.
        const schematicPath = fs_1.statSync(context.schematic.description.path).isDirectory() ?
            context.schematic.description.path :
            path_1.dirname(context.schematic.description.path);
        const schematicFilesUrl = './files';
        const schematicFilesPath = path_1.resolve(schematicPath, schematicFilesUrl);
        options.style = (options.style && options.style !== schema_1.Style.Css
            ? options.style : options.styleext) || schema_1.Style.Css;
        options.skipTests = options.skipTests || !options.spec;
        // Add the default component option values to the options if an option is not explicitly
        // specified but a default component option is available.
        Object.keys(options)
            .filter(optionName => options[optionName] == null && defaultZorroComponentOptions[optionName])
            .forEach(optionName => options[optionName] = defaultZorroComponentOptions[optionName]);
        if (options.path === undefined) {
            // TODO(jelbourn): figure out if the need for this `as any` is a bug due to two different
            // incompatible `WorkspaceProject` classes in @angular-devkit
            // tslint:disable-next-line no-any
            options.path = project_1.buildDefaultPath(project);
        }
        options.module = find_module_1.findModuleFromOptions(host, options);
        const parsedPath = parse_name_1.parseName(options.path, options.name);
        if (options.classnameWithModule && !options.skipImport && options.module) {
            const source = readIntoSourceFile(host, options.module);
            modulePrefix = getModuleClassnamePrefix(source);
        }
        options.name = parsedPath.name;
        options.path = parsedPath.path;
        options.selector = options.selector || buildSelector(options, project.prefix, modulePrefix);
        validation_1.validateName(options.name);
        validation_1.validateHtmlSelector(options.selector);
        // In case the specified style extension is not part of the supported CSS supersets,
        // we generate the stylesheets with the "css" extension. This ensures that we don't
        // accidentally generate invalid stylesheets (e.g. drag-drop-comp.styl) which will
        // break the Angular CLI project. See: https://github.com/angular/material2/issues/15164
        if (!supportedCssExtensions.includes(options.style)) {
            // TODO: Cast is necessary as we can't use the Style enum which has been introduced
            // within CLI v7.3.0-rc.0. This would break the schematic for older CLI versions.
            options.style = schema_1.Style.Css;
        }
        const classifyCovered = (name) => {
            return `${modulePrefix}${core_1.strings.classify(name)}`;
        };
        // Object that will be used as context for the EJS templates.
        const baseTemplateContext = Object.assign({}, core_1.strings, { 'if-flat': (s) => options.flat ? '' : s, classify: classifyCovered }, options);
        // Key-value object that includes the specified additional files with their loaded content.
        // The resolved contents can be used inside EJS templates.
        const resolvedFiles = {};
        for (const key in additionalFiles) {
            if (additionalFiles[key]) {
                const fileContent = fs_1.readFileSync(path_1.join(schematicFilesPath, additionalFiles[key]), 'utf-8');
                // Interpolate the additional files with the base EJS template context.
                resolvedFiles[key] = core_1.template(fileContent)(baseTemplateContext);
            }
        }
        const templateSource = schematics_1.apply(schematics_1.url(schematicFilesUrl), [
            options.skipTests ? schematics_1.filter(path => !path.endsWith('.spec.ts.template')) : schematics_1.noop(),
            options.inlineStyle ? schematics_1.filter(path => !path.endsWith('.__style__.template')) : schematics_1.noop(),
            options.inlineTemplate ? schematics_1.filter(path => !path.endsWith('.html.template')) : schematics_1.noop(),
            // Treat the template options as any, because the type definition for the template options
            // is made unnecessarily explicit. Every type of object can be used in the EJS template.
            // tslint:disable-next-line no-any
            schematics_1.applyTemplates(Object.assign({ indentTextContent, resolvedFiles }, baseTemplateContext)),
            // TODO(devversion): figure out why we cannot just remove the first parameter
            // See for example: angular-cli#schematics/angular/component/index.ts#L160
            // tslint:disable-next-line no-any
            schematics_1.move(null, parsedPath.path)
        ]);
        return schematics_1.chain([
            schematics_1.branchAndMerge(schematics_1.chain([
                addDeclarationToNgModule(options),
                schematics_1.mergeWith(templateSource)
            ]))
        ])(host, context);
    };
}
exports.buildComponent = buildComponent;
//# sourceMappingURL=build-component.js.map