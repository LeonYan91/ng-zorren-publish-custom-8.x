/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { isNotNil } from '../util';
import { NzTreeNode } from './nz-tree-base-node';
import { isCheckDisabled, isInArray } from './nz-tree-base-util';
var NzTreeBaseService = /** @class */ (function () {
    function NzTreeBaseService() {
        this.DRAG_SIDE_RANGE = 0.25;
        this.DRAG_MIN_GAP = 2;
        this.isCheckStrictly = false;
        this.isMultiple = false;
        this.rootNodes = [];
        this.selectedNodeList = [];
        this.expandedNodeList = [];
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        this.matchedNodeList = [];
        this.triggerEventChange$ = new Subject();
    }
    /**
     * trigger event
     */
    /**
     * trigger event
     * @return {?}
     */
    NzTreeBaseService.prototype.eventTriggerChanged = /**
     * trigger event
     * @return {?}
     */
    function () {
        return this.triggerEventChange$.asObservable();
    };
    /**
     * reset tree nodes will clear default node list
     */
    /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    NzTreeBaseService.prototype.initTree = /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    function (nzNodes) {
        var _this = this;
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.matchedNodeList = [];
        // refresh node checked state
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.refreshCheckState(_this.isCheckStrictly);
        }));
    };
    /**
     * @return {?}
     */
    NzTreeBaseService.prototype.getSelectedNode = /**
     * @return {?}
     */
    function () {
        return this.selectedNode;
    };
    /**
     * get some list
     */
    /**
     * get some list
     * @return {?}
     */
    NzTreeBaseService.prototype.getSelectedNodeList = /**
     * get some list
     * @return {?}
     */
    function () {
        return this.conductNodeState('select');
    };
    /**
     * return checked nodes
     */
    /**
     * return checked nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.getCheckedNodeList = /**
     * return checked nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('check');
    };
    /**
     * @return {?}
     */
    NzTreeBaseService.prototype.getHalfCheckedNodeList = /**
     * @return {?}
     */
    function () {
        return this.conductNodeState('halfCheck');
    };
    /**
     * return expanded nodes
     */
    /**
     * return expanded nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.getExpandedNodeList = /**
     * return expanded nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('expand');
    };
    /**
     * return search matched nodes
     */
    /**
     * return search matched nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.getMatchedNodeList = /**
     * return search matched nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('match');
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeBaseService.prototype.isArrayOfNzTreeNode = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.every((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item instanceof NzTreeNode; }));
    };
    /**
     * reset selectedNodeList
     */
    /**
     * reset selectedNodeList
     * @param {?} selectedKeys
     * @param {?} nzNodes
     * @param {?=} isMulti
     * @return {?}
     */
    NzTreeBaseService.prototype.calcSelectedKeys = /**
     * reset selectedNodeList
     * @param {?} selectedKeys
     * @param {?} nzNodes
     * @param {?=} isMulti
     * @return {?}
     */
    function (selectedKeys, nzNodes, isMulti) {
        if (isMulti === void 0) { isMulti = false; }
        /** @type {?} */
        var calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        function (nodes) {
            return nodes.every((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                if (isInArray(node.key, selectedKeys)) {
                    node.isSelected = true;
                    if (!isMulti) {
                        // if not support multi select
                        return false;
                    }
                }
                else {
                    node.isSelected = false;
                }
                if (node.children.length > 0) {
                    // Recursion
                    return calc(node.children);
                }
                return true;
            }));
        });
        calc(nzNodes);
    };
    /**
     * reset expandedNodeList
     */
    /**
     * reset expandedNodeList
     * @param {?} expandedKeys
     * @param {?} nzNodes
     * @return {?}
     */
    NzTreeBaseService.prototype.calcExpandedKeys = /**
     * reset expandedNodeList
     * @param {?} expandedKeys
     * @param {?} nzNodes
     * @return {?}
     */
    function (expandedKeys, nzNodes) {
        this.expandedNodeList = [];
        /** @type {?} */
        var calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        function (nodes) {
            nodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                node.isExpanded = isInArray(node.key, expandedKeys);
                if (node.children.length > 0) {
                    calc(node.children);
                }
            }));
        });
        calc(nzNodes);
    };
    /**
     * reset checkedNodeList
     */
    /**
     * reset checkedNodeList
     * @param {?} checkedKeys
     * @param {?} nzNodes
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    NzTreeBaseService.prototype.calcCheckedKeys = /**
     * reset checkedNodeList
     * @param {?} checkedKeys
     * @param {?} nzNodes
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    function (checkedKeys, nzNodes, isCheckStrictly) {
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        /** @type {?} */
        var calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        function (nodes) {
            nodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            function (node) {
                if (isInArray(node.key, checkedKeys)) {
                    node.isChecked = true;
                    node.isHalfChecked = false;
                }
                else {
                    node.isChecked = false;
                    node.isHalfChecked = false;
                }
                if (node.children.length > 0) {
                    calc(node.children);
                }
            }));
        });
        calc(nzNodes);
        // controlled state
        this.refreshCheckState(isCheckStrictly);
    };
    /**
     * set drag node
     */
    /**
     * set drag node
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setSelectedNode = /**
     * set drag node
     * @param {?} node
     * @return {?}
     */
    function (node) {
        this.selectedNode = node;
    };
    /**
     * set node selected status
     */
    /**
     * set node selected status
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setNodeActive = /**
     * set node selected status
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (!this.isMultiple && node.isSelected) {
            this.selectedNodeList.forEach((/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                if (node.key !== n.key) {
                    // reset other nodes
                    n.isSelected = false;
                }
            }));
            // single mode: remove pre node
            this.selectedNodeList = [];
        }
        this.setSelectedNodeList(node, this.isMultiple);
    };
    /**
     * add or remove node to selectedNodeList
     */
    /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    NzTreeBaseService.prototype.setSelectedNodeList = /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    function (node, isMultiple) {
        if (isMultiple === void 0) { isMultiple = false; }
        /** @type {?} */
        var index = this.selectedNodeList.findIndex((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return node.key === n.key; }));
        if (isMultiple) {
            if (node.isSelected && index === -1) {
                this.selectedNodeList.push(node);
            }
        }
        else {
            if (node.isSelected && index === -1) {
                this.selectedNodeList = [node];
            }
        }
        if (!node.isSelected) {
            this.selectedNodeList = this.selectedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
        }
    };
    /**
     * merge checked nodes
     */
    /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setHalfCheckedNodeList = /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.halfCheckedNodeList.findIndex((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return node.key === n.key; }));
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList = this.halfCheckedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return node.key !== n.key; }));
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setCheckedNodeList = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.checkedNodeList.findIndex((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return node.key === n.key; }));
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList = this.checkedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return node.key !== n.key; }));
        }
    };
    /**
     * conduct checked/selected/expanded keys
     */
    /**
     * conduct checked/selected/expanded keys
     * @param {?=} type
     * @return {?}
     */
    NzTreeBaseService.prototype.conductNodeState = /**
     * conduct checked/selected/expanded keys
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        if (type === void 0) { type = 'check'; }
        /** @type {?} */
        var resultNodesList = [];
        switch (type) {
            case 'select':
                resultNodesList = this.selectedNodeList;
                break;
            case 'expand':
                resultNodesList = this.expandedNodeList;
                break;
            case 'match':
                resultNodesList = this.matchedNodeList;
                break;
            case 'check':
                resultNodesList = this.checkedNodeList;
                /** @type {?} */
                var isIgnore_1 = (/**
                 * @param {?} node
                 * @return {?}
                 */
                function (node) {
                    /** @type {?} */
                    var parentNode = node.getParentNode();
                    if (parentNode) {
                        if (_this.checkedNodeList.findIndex((/**
                         * @param {?} n
                         * @return {?}
                         */
                        function (n) { return n.key === parentNode.key; })) > -1) {
                            return true;
                        }
                        else {
                            return isIgnore_1(parentNode);
                        }
                    }
                    return false;
                });
                // merge checked
                if (!this.isCheckStrictly) {
                    resultNodesList = this.checkedNodeList.filter((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return !isIgnore_1(n); }));
                }
                break;
            case 'halfCheck':
                if (!this.isCheckStrictly) {
                    resultNodesList = this.halfCheckedNodeList;
                }
                break;
        }
        return resultNodesList;
    };
    /**
     * set expanded nodes
     */
    /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.setExpandedNodeList = /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.isLeaf) {
            return;
        }
        /** @type {?} */
        var index = this.expandedNodeList.findIndex((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return node.key === n.key; }));
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList = this.expandedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return node.key !== n.key; }));
        }
    };
    /**
     * check state
     * @param isCheckStrictly
     */
    /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    NzTreeBaseService.prototype.refreshCheckState = /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    function (isCheckStrictly) {
        var _this = this;
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach((/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            _this.conduct(node);
        }));
    };
    // reset other node checked state based current node
    // reset other node checked state based current node
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.conduct = 
    // reset other node checked state based current node
    /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var isChecked = node.isChecked;
        if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    };
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.conductUp = /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var parentNode = node.getParentNode();
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.children.every((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked); }))) {
                    parentNode.isChecked = true;
                    parentNode.isHalfChecked = false;
                }
                else if (parentNode.children.some((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) { return child.isHalfChecked || child.isChecked; }))) {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = true;
                }
                else {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = false;
                }
            }
            this.setCheckedNodeList(parentNode);
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    };
    /**
     * reset child check state
     */
    /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    NzTreeBaseService.prototype.conductDown = /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    function (node, value) {
        var _this = this;
        if (!isCheckDisabled(node)) {
            node.isChecked = value;
            node.isHalfChecked = false;
            this.setCheckedNodeList(node);
            this.setHalfCheckedNodeList(node);
            node.children.forEach((/**
             * @param {?} n
             * @return {?}
             */
            function (n) {
                _this.conductDown(n, value);
            }));
        }
    };
    /**
     * search value & expand node
     * should add expandlist
     */
    /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    NzTreeBaseService.prototype.searchExpand = /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.matchedNodeList = [];
        /** @type {?} */
        var expandedKeys = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        /** @type {?} */
        var expandParent = (/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            // expand parent node
            /** @type {?} */
            var parentNode = n.getParentNode();
            if (parentNode) {
                expandedKeys.push(parentNode.key);
                expandParent(parentNode);
            }
        });
        /** @type {?} */
        var searchChild = (/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            if (value && n.title.includes(value)) {
                // match the node
                n.isMatched = true;
                _this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.isMatched = false;
            }
            n.canHide = !n.isMatched;
            n.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                searchChild(child);
            }));
        });
        this.rootNodes.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            searchChild(child);
        }));
        // expand matched keys
        this.calcExpandedKeys(expandedKeys, this.rootNodes);
    };
    /**
     * flush after delete node
     */
    /**
     * flush after delete node
     * @param {?} nodes
     * @return {?}
     */
    NzTreeBaseService.prototype.afterRemove = /**
     * flush after delete node
     * @param {?} nodes
     * @return {?}
     */
    function (nodes) {
        var _this = this;
        // to reset selectedNodeList & expandedNodeList
        /** @type {?} */
        var loopNode = (/**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            // remove selected node
            _this.selectedNodeList = _this.selectedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
            // remove expanded node
            _this.expandedNodeList = _this.expandedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
            // remove checked node
            _this.checkedNodeList = _this.checkedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== node.key; }));
            if (node.children) {
                node.children.forEach((/**
                 * @param {?} child
                 * @return {?}
                 */
                function (child) {
                    loopNode(child);
                }));
            }
        });
        nodes.forEach((/**
         * @param {?} n
         * @return {?}
         */
        function (n) {
            loopNode(n);
        }));
        this.refreshCheckState(this.isCheckStrictly);
    };
    /**
     * drag event
     */
    /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.refreshDragNode = /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        if (node.children.length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            function (child) {
                _this.refreshDragNode(child);
            }));
        }
    };
    // reset node level
    // reset node level
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeBaseService.prototype.resetNodeLevel = 
    // reset node level
    /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var e_1, _a;
        /** @type {?} */
        var parentNode = node.getParentNode();
        if (parentNode) {
            node.level = parentNode.level + 1;
        }
        else {
            node.level = 0;
        }
        try {
            for (var _b = tslib_1.__values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                this.resetNodeLevel(child);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeBaseService.prototype.calcDropPosition = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var clientY = event.clientY;
        // to fix firefox undefined
        var _a = event.srcElement
            ? ((/** @type {?} */ (event.srcElement))).getBoundingClientRect()
            : ((/** @type {?} */ (event.target))).getBoundingClientRect(), top = _a.top, bottom = _a.bottom, height = _a.height;
        /** @type {?} */
        var des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    };
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    NzTreeBaseService.prototype.dropAndApply = /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    function (targetNode, dragPos) {
        var _this = this;
        if (dragPos === void 0) { dragPos = -1; }
        if (!targetNode || dragPos > 1) {
            return;
        }
        /** @type {?} */
        var treeService = targetNode.treeService;
        /** @type {?} */
        var targetParent = targetNode.getParentNode();
        /** @type {?} */
        var isSelectedRootNode = this.selectedNode.getParentNode();
        // remove the dragNode
        if (isSelectedRootNode) {
            isSelectedRootNode.children = isSelectedRootNode.children.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== _this.selectedNode.key; }));
        }
        else {
            this.rootNodes = this.rootNodes.filter((/**
             * @param {?} n
             * @return {?}
             */
            function (n) { return n.key !== _this.selectedNode.key; }));
        }
        switch (dragPos) {
            case 0:
                targetNode.addChildren([this.selectedNode]);
                this.resetNodeLevel(targetNode);
                break;
            case -1:
            case 1:
                /** @type {?} */
                var tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    /** @type {?} */
                    var parentNode = this.selectedNode.getParentNode();
                    if (parentNode) {
                        this.resetNodeLevel(parentNode);
                    }
                }
                else {
                    /** @type {?} */
                    var targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // Insert root node.
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.rootNodes[targetIndex].level = 0;
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach((/**
         * @param {?} child
         * @return {?}
         */
        function (child) {
            if (!child.treeService) {
                child.service = treeService;
            }
            _this.refreshDragNode(child);
        }));
    };
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    NzTreeBaseService.prototype.formatEvent = /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    function (eventName, node, event) {
        /** @type {?} */
        var emitStructure = {
            eventName: eventName,
            node: node,
            event: event
        };
        switch (eventName) {
            case 'dragstart':
            case 'dragenter':
            case 'dragover':
            case 'dragleave':
            case 'drop':
            case 'dragend':
                Object.assign(emitStructure, { dragNode: this.getSelectedNode() });
                break;
            case 'click':
            case 'dblclick':
                Object.assign(emitStructure, { selectedKeys: this.selectedNodeList });
                Object.assign(emitStructure, { nodes: this.selectedNodeList });
                Object.assign(emitStructure, { keys: this.selectedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
            case 'check':
                /** @type {?} */
                var checkedNodeList = this.getCheckedNodeList();
                Object.assign(emitStructure, { checkedKeys: checkedNodeList });
                Object.assign(emitStructure, { nodes: checkedNodeList });
                Object.assign(emitStructure, { keys: checkedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
            case 'search':
                Object.assign(emitStructure, { matchedKeys: this.getMatchedNodeList() });
                Object.assign(emitStructure, { nodes: this.getMatchedNodeList() });
                Object.assign(emitStructure, { keys: this.getMatchedNodeList().map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
            case 'expand':
                Object.assign(emitStructure, { nodes: this.expandedNodeList });
                Object.assign(emitStructure, { keys: this.expandedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.key; })) });
                break;
        }
        return emitStructure;
    };
    /**
     * @return {?}
     */
    NzTreeBaseService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.triggerEventChange$.complete();
    };
    NzTreeBaseService.decorators = [
        { type: Injectable }
    ];
    return NzTreeBaseService;
}());
export { NzTreeBaseService };
if (false) {
    /** @type {?} */
    NzTreeBaseService.prototype.DRAG_SIDE_RANGE;
    /** @type {?} */
    NzTreeBaseService.prototype.DRAG_MIN_GAP;
    /** @type {?} */
    NzTreeBaseService.prototype.isCheckStrictly;
    /** @type {?} */
    NzTreeBaseService.prototype.isMultiple;
    /** @type {?} */
    NzTreeBaseService.prototype.selectedNode;
    /** @type {?} */
    NzTreeBaseService.prototype.rootNodes;
    /** @type {?} */
    NzTreeBaseService.prototype.selectedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.expandedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.checkedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.halfCheckedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.matchedNodeList;
    /** @type {?} */
    NzTreeBaseService.prototype.triggerEventChange$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ0cmVlL256LXRyZWUtYmFzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRW5DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR2pFO0lBQUE7UUFFRSxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUVqQixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBQzdCLHFCQUFnQixHQUFpQixFQUFFLENBQUM7UUFDcEMscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQUNwQyxvQkFBZSxHQUFpQixFQUFFLENBQUM7UUFDbkMsd0JBQW1CLEdBQWlCLEVBQUUsQ0FBQztRQUN2QyxvQkFBZSxHQUFpQixFQUFFLENBQUM7UUFDbkMsd0JBQW1CLEdBQUcsSUFBSSxPQUFPLEVBQXFCLENBQUM7SUE2Z0J6RCxDQUFDO0lBM2dCQzs7T0FFRzs7Ozs7SUFDSCwrQ0FBbUI7Ozs7SUFBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILG9DQUFROzs7OztJQUFSLFVBQVMsT0FBcUI7UUFBOUIsaUJBV0M7UUFWQyxJQUFJLENBQUMsU0FBUyxHQUFH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QyxHQUFHOzs7O29CQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsRUFBTCxDQUFLLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzlFLE1BQU07U0FDVDtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7Z0JBMWhCRixVQUFVOztJQTJoQlgsd0JBQUM7Q0FBQSxBQTNoQkQsSUEyaEJDO1NBMWhCWSxpQkFBaUI7OztJQUM1Qiw0Q0FBdUI7O0lBQ3ZCLHlDQUFpQjs7SUFFakIsNENBQWlDOztJQUNqQyx1Q0FBNEI7O0lBQzVCLHlDQUF5Qjs7SUFDekIsc0NBQTZCOztJQUM3Qiw2Q0FBb0M7O0lBQ3BDLDZDQUFvQzs7SUFDcEMsNENBQW1DOztJQUNuQyxnREFBdUM7O0lBQ3ZDLDRDQUFtQzs7SUFDbkMsZ0RBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi9uei10cmVlLWJhc2Utbm9kZSc7XG5pbXBvcnQgeyBpc0NoZWNrRGlzYWJsZWQsIGlzSW5BcnJheSB9IGZyb20gJy4vbnotdHJlZS1iYXNlLXV0aWwnO1xuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuL256LXRyZWUtYmFzZS5kZWZpbml0aW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelRyZWVCYXNlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIERSQUdfU0lERV9SQU5HRSA9IDAuMjU7XG4gIERSQUdfTUlOX0dBUCA9IDI7XG5cbiAgaXNDaGVja1N0cmljdGx5OiBib29sZWFuID0gZmFsc2U7XG4gIGlzTXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2VsZWN0ZWROb2RlOiBOelRyZWVOb2RlO1xuICByb290Tm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xuICBzZWxlY3RlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcbiAgZXhwYW5kZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XG4gIGNoZWNrZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XG4gIGhhbGZDaGVja2VkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xuICBtYXRjaGVkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xuICB0cmlnZ2VyRXZlbnRDaGFuZ2UkID0gbmV3IFN1YmplY3Q8TnpGb3JtYXRFbWl0RXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIHRyaWdnZXIgZXZlbnRcbiAgICovXG4gIGV2ZW50VHJpZ2dlckNoYW5nZWQoKTogT2JzZXJ2YWJsZTxOekZvcm1hdEVtaXRFdmVudD4ge1xuICAgIHJldHVybiB0aGlzLnRyaWdnZXJFdmVudENoYW5nZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgdHJlZSBub2RlcyB3aWxsIGNsZWFyIGRlZmF1bHQgbm9kZSBsaXN0XG4gICAqL1xuICBpbml0VHJlZShuek5vZGVzOiBOelRyZWVOb2RlW10pOiB2b2lkIHtcbiAgICB0aGlzLnJvb3ROb2RlcyA9IG56Tm9kZXM7XG4gICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gW107XG4gICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gW107XG4gICAgdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0ID0gW107XG4gICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSBbXTtcbiAgICB0aGlzLm1hdGNoZWROb2RlTGlzdCA9IFtdO1xuICAgIC8vIHJlZnJlc2ggbm9kZSBjaGVja2VkIHN0YXRlXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hDaGVja1N0YXRlKHRoaXMuaXNDaGVja1N0cmljdGx5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkTm9kZSgpOiBOelRyZWVOb2RlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWROb2RlO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCBzb21lIGxpc3RcbiAgICovXG4gIGdldFNlbGVjdGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdzZWxlY3QnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gY2hlY2tlZCBub2Rlc1xuICAgKi9cbiAgZ2V0Q2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZHVjdE5vZGVTdGF0ZSgnY2hlY2snKTtcbiAgfVxuXG4gIGdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdoYWxmQ2hlY2snKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gZXhwYW5kZWQgbm9kZXNcbiAgICovXG4gIGdldEV4cGFuZGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdleHBhbmQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm4gc2VhcmNoIG1hdGNoZWQgbm9kZXNcbiAgICovXG4gIGdldE1hdGNoZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ21hdGNoJyk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGlzQXJyYXlPZk56VHJlZU5vZGUodmFsdWU6IGFueVtdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlLmV2ZXJ5KGl0ZW0gPT4gaXRlbSBpbnN0YW5jZW9mIE56VHJlZU5vZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0IHNlbGVjdGVkTm9kZUxpc3RcbiAgICovXG4gIGNhbGNTZWxlY3RlZEtleXMoc2VsZWN0ZWRLZXlzOiBzdHJpbmdbXSwgbnpOb2RlczogTnpUcmVlTm9kZVtdLCBpc011bHRpOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBjYWxjID0gKG5vZGVzOiBOelRyZWVOb2RlW10pOiBib29sZWFuID0+IHtcbiAgICAgIHJldHVybiBub2Rlcy5ldmVyeShub2RlID0+IHtcbiAgICAgICAgaWYgKGlzSW5BcnJheShub2RlLmtleSwgc2VsZWN0ZWRLZXlzKSkge1xuICAgICAgICAgIG5vZGUuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKCFpc011bHRpKSB7XG4gICAgICAgICAgICAvLyBpZiBub3Qgc3VwcG9ydCBtdWx0aSBzZWxlY3RcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIC8vIFJlY3Vyc2lvblxuICAgICAgICAgIHJldHVybiBjYWxjKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjYWxjKG56Tm9kZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlc2V0IGV4cGFuZGVkTm9kZUxpc3RcbiAgICovXG4gIGNhbGNFeHBhbmRlZEtleXMoZXhwYW5kZWRLZXlzOiBzdHJpbmdbXSwgbnpOb2RlczogTnpUcmVlTm9kZVtdKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gW107XG4gICAgY29uc3QgY2FsYyA9IChub2RlczogTnpUcmVlTm9kZVtdKSA9PiB7XG4gICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBub2RlLmlzRXhwYW5kZWQgPSBpc0luQXJyYXkobm9kZS5rZXksIGV4cGFuZGVkS2V5cyk7XG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjYWxjKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNhbGMobnpOb2Rlcyk7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgY2hlY2tlZE5vZGVMaXN0XG4gICAqL1xuICBjYWxjQ2hlY2tlZEtleXMoY2hlY2tlZEtleXM6IHN0cmluZ1tdLCBuek5vZGVzOiBOelRyZWVOb2RlW10sIGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSBbXTtcbiAgICB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QgPSBbXTtcbiAgICBjb25zdCBjYWxjID0gKG5vZGVzOiBOelRyZWVOb2RlW10pID0+IHtcbiAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmIChpc0luQXJyYXkobm9kZS5rZXksIGNoZWNrZWRLZXlzKSkge1xuICAgICAgICAgIG5vZGUuaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICBub2RlLmlzSGFsZkNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIG5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjYWxjKG5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNhbGMobnpOb2Rlcyk7XG4gICAgLy8gY29udHJvbGxlZCBzdGF0ZVxuICAgIHRoaXMucmVmcmVzaENoZWNrU3RhdGUoaXNDaGVja1N0cmljdGx5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgZHJhZyBub2RlXG4gICAqL1xuICBzZXRTZWxlY3RlZE5vZGUobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWROb2RlID0gbm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgbm9kZSBzZWxlY3RlZCBzdGF0dXNcbiAgICovXG4gIHNldE5vZGVBY3RpdmUobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc011bHRpcGxlICYmIG5vZGUuaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0LmZvckVhY2gobiA9PiB7XG4gICAgICAgIGlmIChub2RlLmtleSAhPT0gbi5rZXkpIHtcbiAgICAgICAgICAvLyByZXNldCBvdGhlciBub2Rlc1xuICAgICAgICAgIG4uaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIHNpbmdsZSBtb2RlOiByZW1vdmUgcHJlIG5vZGVcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZSwgdGhpcy5pc011bHRpcGxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgb3IgcmVtb3ZlIG5vZGUgdG8gc2VsZWN0ZWROb2RlTGlzdFxuICAgKi9cbiAgc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlLCBpc011bHRpcGxlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5maW5kSW5kZXgobiA9PiBub2RlLmtleSA9PT0gbi5rZXkpO1xuICAgIGlmIChpc011bHRpcGxlKSB7XG4gICAgICBpZiAobm9kZS5pc1NlbGVjdGVkICYmIGluZGV4ID09PSAtMSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QucHVzaChub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5vZGUuaXNTZWxlY3RlZCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gW25vZGVdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW5vZGUuaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gdGhpcy5zZWxlY3RlZE5vZGVMaXN0LmZpbHRlcihuID0+IG4ua2V5ICE9PSBub2RlLmtleSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIG1lcmdlIGNoZWNrZWQgbm9kZXNcbiAgICovXG4gIHNldEhhbGZDaGVja2VkTm9kZUxpc3Qobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0LmZpbmRJbmRleChuID0+IG5vZGUua2V5ID09PSBuLmtleSk7XG4gICAgaWYgKG5vZGUuaXNIYWxmQ2hlY2tlZCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoIW5vZGUuaXNIYWxmQ2hlY2tlZCAmJiBpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QgPSB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QuZmlsdGVyKG4gPT4gbm9kZS5rZXkgIT09IG4ua2V5KTtcbiAgICB9XG4gIH1cblxuICBzZXRDaGVja2VkTm9kZUxpc3Qobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja2VkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbm9kZS5rZXkgPT09IG4ua2V5KTtcbiAgICBpZiAobm9kZS5pc0NoZWNrZWQgJiYgaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLmNoZWNrZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAoIW5vZGUuaXNDaGVja2VkICYmIGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0ID0gdGhpcy5jaGVja2VkTm9kZUxpc3QuZmlsdGVyKG4gPT4gbm9kZS5rZXkgIT09IG4ua2V5KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogY29uZHVjdCBjaGVja2VkL3NlbGVjdGVkL2V4cGFuZGVkIGtleXNcbiAgICovXG4gIGNvbmR1Y3ROb2RlU3RhdGUodHlwZTogc3RyaW5nID0gJ2NoZWNrJyk6IE56VHJlZU5vZGVbXSB7XG4gICAgbGV0IHJlc3VsdE5vZGVzTGlzdDogTnpUcmVlTm9kZVtdID0gW107XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICByZXN1bHROb2Rlc0xpc3QgPSB0aGlzLnNlbGVjdGVkTm9kZUxpc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXhwYW5kJzpcbiAgICAgICAgcmVzdWx0Tm9kZXNMaXN0ID0gdGhpcy5leHBhbmRlZE5vZGVMaXN0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21hdGNoJzpcbiAgICAgICAgcmVzdWx0Tm9kZXNMaXN0ID0gdGhpcy5tYXRjaGVkTm9kZUxpc3Q7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICByZXN1bHROb2Rlc0xpc3QgPSB0aGlzLmNoZWNrZWROb2RlTGlzdDtcbiAgICAgICAgY29uc3QgaXNJZ25vcmUgPSAobm9kZTogTnpUcmVlTm9kZSk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZE5vZGVMaXN0LmZpbmRJbmRleChuID0+IG4ua2V5ID09PSBwYXJlbnROb2RlLmtleSkgPiAtMSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBpc0lnbm9yZShwYXJlbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICAvLyBtZXJnZSBjaGVja2VkXG4gICAgICAgIGlmICghdGhpcy5pc0NoZWNrU3RyaWN0bHkpIHtcbiAgICAgICAgICByZXN1bHROb2Rlc0xpc3QgPSB0aGlzLmNoZWNrZWROb2RlTGlzdC5maWx0ZXIobiA9PiAhaXNJZ25vcmUobikpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaGFsZkNoZWNrJzpcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2hlY2tTdHJpY3RseSkge1xuICAgICAgICAgIHJlc3VsdE5vZGVzTGlzdCA9IHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdE5vZGVzTGlzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgZXhwYW5kZWQgbm9kZXNcbiAgICovXG4gIHNldEV4cGFuZGVkTm9kZUxpc3Qobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGlmIChub2RlLmlzTGVhZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZXhwYW5kZWROb2RlTGlzdC5maW5kSW5kZXgobiA9PiBub2RlLmtleSA9PT0gbi5rZXkpO1xuICAgIGlmIChub2RlLmlzRXhwYW5kZWQgJiYgaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3QucHVzaChub2RlKTtcbiAgICB9IGVsc2UgaWYgKCFub2RlLmlzRXhwYW5kZWQgJiYgaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gdGhpcy5leHBhbmRlZE5vZGVMaXN0LmZpbHRlcihuID0+IG5vZGUua2V5ICE9PSBuLmtleSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrIHN0YXRlXG4gICAqIEBwYXJhbSBpc0NoZWNrU3RyaWN0bHlcbiAgICovXG4gIHJlZnJlc2hDaGVja1N0YXRlKGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKGlzQ2hlY2tTdHJpY3RseSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrZWROb2RlTGlzdC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgdGhpcy5jb25kdWN0KG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gcmVzZXQgb3RoZXIgbm9kZSBjaGVja2VkIHN0YXRlIGJhc2VkIGN1cnJlbnQgbm9kZVxuICBjb25kdWN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSBub2RlLmlzQ2hlY2tlZDtcbiAgICBpZiAobm9kZSkge1xuICAgICAgdGhpcy5jb25kdWN0VXAobm9kZSk7XG4gICAgICB0aGlzLmNvbmR1Y3REb3duKG5vZGUsIGlzQ2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIDHjgIFjaGlsZHJlbiBoYWxmIGNoZWNrZWRcbiAgICogMuOAgWNoaWxkcmVuIGFsbCBjaGVja2VkLCBwYXJlbnQgY2hlY2tlZFxuICAgKiAz44CBbm8gY2hpbGRyZW4gY2hlY2tlZFxuICAgKi9cbiAgY29uZHVjdFVwKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgIGlmICghaXNDaGVja0Rpc2FibGVkKHBhcmVudE5vZGUpKSB7XG4gICAgICAgIGlmIChwYXJlbnROb2RlLmNoaWxkcmVuLmV2ZXJ5KGNoaWxkID0+IGlzQ2hlY2tEaXNhYmxlZChjaGlsZCkgfHwgKCFjaGlsZC5pc0hhbGZDaGVja2VkICYmIGNoaWxkLmlzQ2hlY2tlZCkpKSB7XG4gICAgICAgICAgcGFyZW50Tm9kZS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIHBhcmVudE5vZGUuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudE5vZGUuY2hpbGRyZW4uc29tZShjaGlsZCA9PiBjaGlsZC5pc0hhbGZDaGVja2VkIHx8IGNoaWxkLmlzQ2hlY2tlZCkpIHtcbiAgICAgICAgICBwYXJlbnROb2RlLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIHBhcmVudE5vZGUuaXNIYWxmQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50Tm9kZS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBwYXJlbnROb2RlLmlzSGFsZkNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRDaGVja2VkTm9kZUxpc3QocGFyZW50Tm9kZSk7XG4gICAgICB0aGlzLnNldEhhbGZDaGVja2VkTm9kZUxpc3QocGFyZW50Tm9kZSk7XG4gICAgICB0aGlzLmNvbmR1Y3RVcChwYXJlbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgY2hpbGQgY2hlY2sgc3RhdGVcbiAgICovXG4gIGNvbmR1Y3REb3duKG5vZGU6IE56VHJlZU5vZGUsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFpc0NoZWNrRGlzYWJsZWQobm9kZSkpIHtcbiAgICAgIG5vZGUuaXNDaGVja2VkID0gdmFsdWU7XG4gICAgICBub2RlLmlzSGFsZkNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0Q2hlY2tlZE5vZGVMaXN0KG5vZGUpO1xuICAgICAgdGhpcy5zZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KG5vZGUpO1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKG4gPT4ge1xuICAgICAgICB0aGlzLmNvbmR1Y3REb3duKG4sIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBzZWFyY2ggdmFsdWUgJiBleHBhbmQgbm9kZVxuICAgKiBzaG91bGQgYWRkIGV4cGFuZGxpc3RcbiAgICovXG4gIHNlYXJjaEV4cGFuZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5tYXRjaGVkTm9kZUxpc3QgPSBbXTtcbiAgICBjb25zdCBleHBhbmRlZEtleXM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKCFpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdG8gcmVzZXQgZXhwYW5kZWROb2RlTGlzdFxuICAgIGNvbnN0IGV4cGFuZFBhcmVudCA9IChuOiBOelRyZWVOb2RlKSA9PiB7XG4gICAgICAvLyBleHBhbmQgcGFyZW50IG5vZGVcbiAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBuLmdldFBhcmVudE5vZGUoKTtcbiAgICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgIGV4cGFuZGVkS2V5cy5wdXNoKHBhcmVudE5vZGUua2V5KTtcbiAgICAgICAgZXhwYW5kUGFyZW50KHBhcmVudE5vZGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgc2VhcmNoQ2hpbGQgPSAobjogTnpUcmVlTm9kZSkgPT4ge1xuICAgICAgaWYgKHZhbHVlICYmIG4udGl0bGUuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgIC8vIG1hdGNoIHRoZSBub2RlXG4gICAgICAgIG4uaXNNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXRjaGVkTm9kZUxpc3QucHVzaChuKTtcbiAgICAgICAgLy8gZXhwYW5kIHBhcmVudE5vZGVcbiAgICAgICAgZXhwYW5kUGFyZW50KG4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbi5pc01hdGNoZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG4uY2FuSGlkZSA9ICFuLmlzTWF0Y2hlZDtcbiAgICAgIG4uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgIHNlYXJjaENoaWxkKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5yb290Tm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBzZWFyY2hDaGlsZChjaGlsZCk7XG4gICAgfSk7XG4gICAgLy8gZXhwYW5kIG1hdGNoZWQga2V5c1xuICAgIHRoaXMuY2FsY0V4cGFuZGVkS2V5cyhleHBhbmRlZEtleXMsIHRoaXMucm9vdE5vZGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmbHVzaCBhZnRlciBkZWxldGUgbm9kZVxuICAgKi9cbiAgYWZ0ZXJSZW1vdmUobm9kZXM6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xuICAgIC8vIHRvIHJlc2V0IHNlbGVjdGVkTm9kZUxpc3QgJiBleHBhbmRlZE5vZGVMaXN0XG4gICAgY29uc3QgbG9vcE5vZGUgPSAobm9kZTogTnpUcmVlTm9kZSkgPT4ge1xuICAgICAgLy8gcmVtb3ZlIHNlbGVjdGVkIG5vZGVcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5maWx0ZXIobiA9PiBuLmtleSAhPT0gbm9kZS5rZXkpO1xuICAgICAgLy8gcmVtb3ZlIGV4cGFuZGVkIG5vZGVcbiAgICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdCA9IHRoaXMuZXhwYW5kZWROb2RlTGlzdC5maWx0ZXIobiA9PiBuLmtleSAhPT0gbm9kZS5rZXkpO1xuICAgICAgLy8gcmVtb3ZlIGNoZWNrZWQgbm9kZVxuICAgICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSB0aGlzLmNoZWNrZWROb2RlTGlzdC5maWx0ZXIobiA9PiBuLmtleSAhPT0gbm9kZS5rZXkpO1xuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICBsb29wTm9kZShjaGlsZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgbm9kZXMuZm9yRWFjaChuID0+IHtcbiAgICAgIGxvb3BOb2RlKG4pO1xuICAgIH0pO1xuICAgIHRoaXMucmVmcmVzaENoZWNrU3RhdGUodGhpcy5pc0NoZWNrU3RyaWN0bHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGRyYWcgZXZlbnRcbiAgICovXG4gIHJlZnJlc2hEcmFnTm9kZShub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgaWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyB1bnRpbCByb290XG4gICAgICB0aGlzLmNvbmR1Y3RVcChub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoRHJhZ05vZGUoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gcmVzZXQgbm9kZSBsZXZlbFxuICByZXNldE5vZGVMZXZlbChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICBub2RlLmxldmVsID0gcGFyZW50Tm9kZS5sZXZlbCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUubGV2ZWwgPSAwO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwoY2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGNEcm9wUG9zaXRpb24oZXZlbnQ6IERyYWdFdmVudCk6IG51bWJlciB7XG4gICAgY29uc3QgeyBjbGllbnRZIH0gPSBldmVudDtcbiAgICAvLyB0byBmaXggZmlyZWZveCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHRvcCwgYm90dG9tLCBoZWlnaHQgfSA9IGV2ZW50LnNyY0VsZW1lbnRcbiAgICAgID8gKGV2ZW50LnNyY0VsZW1lbnQgYXMgRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIDogKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkZXMgPSBNYXRoLm1heChoZWlnaHQgKiB0aGlzLkRSQUdfU0lERV9SQU5HRSwgdGhpcy5EUkFHX01JTl9HQVApO1xuXG4gICAgaWYgKGNsaWVudFkgPD0gdG9wICsgZGVzKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIGlmIChjbGllbnRZID49IGJvdHRvbSAtIGRlcykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogZHJvcFxuICAgKiAwOiBpbm5lciAtMTogcHJlIDE6IG5leHRcbiAgICovXG4gIGRyb3BBbmRBcHBseSh0YXJnZXROb2RlOiBOelRyZWVOb2RlLCBkcmFnUG9zOiBudW1iZXIgPSAtMSk6IHZvaWQge1xuICAgIGlmICghdGFyZ2V0Tm9kZSB8fCBkcmFnUG9zID4gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0cmVlU2VydmljZSA9IHRhcmdldE5vZGUudHJlZVNlcnZpY2U7XG4gICAgY29uc3QgdGFyZ2V0UGFyZW50ID0gdGFyZ2V0Tm9kZS5nZXRQYXJlbnROb2RlKCk7XG4gICAgY29uc3QgaXNTZWxlY3RlZFJvb3ROb2RlID0gdGhpcy5zZWxlY3RlZE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuICAgIC8vIHJlbW92ZSB0aGUgZHJhZ05vZGVcbiAgICBpZiAoaXNTZWxlY3RlZFJvb3ROb2RlKSB7XG4gICAgICBpc1NlbGVjdGVkUm9vdE5vZGUuY2hpbGRyZW4gPSBpc1NlbGVjdGVkUm9vdE5vZGUuY2hpbGRyZW4uZmlsdGVyKG4gPT4gbi5rZXkgIT09IHRoaXMuc2VsZWN0ZWROb2RlLmtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm9vdE5vZGVzID0gdGhpcy5yb290Tm9kZXMuZmlsdGVyKG4gPT4gbi5rZXkgIT09IHRoaXMuc2VsZWN0ZWROb2RlLmtleSk7XG4gICAgfVxuICAgIHN3aXRjaCAoZHJhZ1Bvcykge1xuICAgICAgY2FzZSAwOlxuICAgICAgICB0YXJnZXROb2RlLmFkZENoaWxkcmVuKFt0aGlzLnNlbGVjdGVkTm9kZV0pO1xuICAgICAgICB0aGlzLnJlc2V0Tm9kZUxldmVsKHRhcmdldE5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLTE6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGNvbnN0IHRJbmRleCA9IGRyYWdQb3MgPT09IDEgPyAxIDogMDtcbiAgICAgICAgaWYgKHRhcmdldFBhcmVudCkge1xuICAgICAgICAgIHRhcmdldFBhcmVudC5hZGRDaGlsZHJlbihbdGhpcy5zZWxlY3RlZE5vZGVdLCB0YXJnZXRQYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0YXJnZXROb2RlKSArIHRJbmRleCk7XG4gICAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IHRoaXMuc2VsZWN0ZWROb2RlLmdldFBhcmVudE5vZGUoKTtcbiAgICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldE5vZGVMZXZlbChwYXJlbnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLnJvb3ROb2Rlcy5pbmRleE9mKHRhcmdldE5vZGUpICsgdEluZGV4O1xuICAgICAgICAgIC8vIEluc2VydCByb290IG5vZGUuXG4gICAgICAgICAgdGhpcy5yb290Tm9kZXMuc3BsaWNlKHRhcmdldEluZGV4LCAwLCB0aGlzLnNlbGVjdGVkTm9kZSk7XG4gICAgICAgICAgdGhpcy5yb290Tm9kZXNbdGFyZ2V0SW5kZXhdLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgIHRoaXMucm9vdE5vZGVzW3RhcmdldEluZGV4XS5sZXZlbCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIGZsdXNoIGFsbCBub2Rlc1xuICAgIHRoaXMucm9vdE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgaWYgKCFjaGlsZC50cmVlU2VydmljZSkge1xuICAgICAgICBjaGlsZC5zZXJ2aWNlID0gdHJlZVNlcnZpY2U7XG4gICAgICB9XG4gICAgICB0aGlzLnJlZnJlc2hEcmFnTm9kZShjaGlsZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogZW1pdCBTdHJ1Y3R1cmVcbiAgICogZXZlbnROYW1lXG4gICAqIG5vZGVcbiAgICogZXZlbnQ6IE1vdXNlRXZlbnQgLyBEcmFnRXZlbnRcbiAgICogZHJhZ05vZGVcbiAgICovXG4gIGZvcm1hdEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBub2RlOiBOelRyZWVOb2RlIHwgbnVsbCwgZXZlbnQ6IE1vdXNlRXZlbnQgfCBEcmFnRXZlbnQgfCBudWxsKTogTnpGb3JtYXRFbWl0RXZlbnQge1xuICAgIGNvbnN0IGVtaXRTdHJ1Y3R1cmU6IE56Rm9ybWF0RW1pdEV2ZW50ID0ge1xuICAgICAgZXZlbnROYW1lOiBldmVudE5hbWUsXG4gICAgICBub2RlOiBub2RlLFxuICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgfTtcbiAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xuICAgICAgY2FzZSAnZHJhZ3N0YXJ0JzpcbiAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XG4gICAgICBjYXNlICdkcmFnb3Zlcic6XG4gICAgICBjYXNlICdkcmFnbGVhdmUnOlxuICAgICAgY2FzZSAnZHJvcCc6XG4gICAgICBjYXNlICdkcmFnZW5kJzpcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IGRyYWdOb2RlOiB0aGlzLmdldFNlbGVjdGVkTm9kZSgpIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgIGNhc2UgJ2RibGNsaWNrJzpcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IHNlbGVjdGVkS2V5czogdGhpcy5zZWxlY3RlZE5vZGVMaXN0IH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgbm9kZXM6IHRoaXMuc2VsZWN0ZWROb2RlTGlzdCB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IGtleXM6IHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5tYXAobiA9PiBuLmtleSkgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2hlY2snOlxuICAgICAgICBjb25zdCBjaGVja2VkTm9kZUxpc3QgPSB0aGlzLmdldENoZWNrZWROb2RlTGlzdCgpO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBjaGVja2VkS2V5czogY2hlY2tlZE5vZGVMaXN0IH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgbm9kZXM6IGNoZWNrZWROb2RlTGlzdCB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IGtleXM6IGNoZWNrZWROb2RlTGlzdC5tYXAobiA9PiBuLmtleSkgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IG1hdGNoZWRLZXlzOiB0aGlzLmdldE1hdGNoZWROb2RlTGlzdCgpIH0pO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgbm9kZXM6IHRoaXMuZ2V0TWF0Y2hlZE5vZGVMaXN0KCkgfSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyBrZXlzOiB0aGlzLmdldE1hdGNoZWROb2RlTGlzdCgpLm1hcChuID0+IG4ua2V5KSB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdleHBhbmQnOlxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgbm9kZXM6IHRoaXMuZXhwYW5kZWROb2RlTGlzdCB9KTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7IGtleXM6IHRoaXMuZXhwYW5kZWROb2RlTGlzdC5tYXAobiA9PiBuLmtleSkgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gZW1pdFN0cnVjdHVyZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudHJpZ2dlckV2ZW50Q2hhbmdlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=