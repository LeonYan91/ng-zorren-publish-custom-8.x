/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
export function MeasureResult() { }
if (false) {
    /** @type {?} */
    MeasureResult.prototype.finished;
    /** @type {?} */
    MeasureResult.prototype.node;
}
// We only handle element & text node.
/** @type {?} */
var ELEMENT_NODE = 1;
/** @type {?} */
var TEXT_NODE = 3;
/** @type {?} */
var COMMENT_NODE = 8;
/** @type {?} */
var ellipsisContainer;
/** @type {?} */
var wrapperStyle = {
    padding: '0',
    margin: '0',
    display: 'inline',
    lineHeight: 'inherit'
};
/**
 * @param {?} value
 * @return {?}
 */
export function pxToNumber(value) {
    if (!value) {
        return 0;
    }
    /** @type {?} */
    var match = value.match(/^\d*(\.\d*)?/);
    return match ? Number(match[0]) : 0;
}
/**
 * @param {?} style
 * @return {?}
 */
function styleToString(style) {
    // There are some different behavior between Firefox & Chrome.
    // We have to handle this ourself.
    /** @type {?} */
    var styleNames = Array.prototype.slice.apply(style);
    return styleNames.map((/**
     * @param {?} name
     * @return {?}
     */
    function (name) { return name + ": " + style.getPropertyValue(name) + ";"; })).join('');
}
/**
 * @param {?} children
 * @return {?}
 */
function mergeChildren(children) {
    /** @type {?} */
    var childList = [];
    children.forEach((/**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        /** @type {?} */
        var prevChild = childList[childList.length - 1];
        if (prevChild && child.nodeType === TEXT_NODE && prevChild.nodeType === TEXT_NODE) {
            ((/** @type {?} */ (prevChild))).data += ((/** @type {?} */ (child))).data;
        }
        else {
            childList.push(child);
        }
    }));
    return childList;
}
/**
 * @param {?} originEle
 * @param {?} rows
 * @param {?} contentNodes
 * @param {?} fixedContent
 * @param {?} ellipsisStr
 * @return {?}
 */
export function measure(originEle, rows, contentNodes, fixedContent, ellipsisStr) {
    if (!ellipsisContainer) {
        ellipsisContainer = document.createElement('div');
        ellipsisContainer.setAttribute('aria-hidden', 'true');
        document.body.appendChild(ellipsisContainer);
    }
    // Get origin style
    /** @type {?} */
    var originStyle = window.getComputedStyle(originEle);
    /** @type {?} */
    var originCSS = styleToString(originStyle);
    /** @type {?} */
    var lineHeight = pxToNumber(originStyle.lineHeight);
    /** @type {?} */
    var maxHeight = lineHeight * (rows + 1) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom);
    // Set shadow
    ellipsisContainer.setAttribute('style', originCSS);
    ellipsisContainer.style.position = 'fixed';
    ellipsisContainer.style.left = '0';
    ellipsisContainer.style.height = 'auto';
    ellipsisContainer.style.minHeight = 'auto';
    ellipsisContainer.style.maxHeight = 'auto';
    ellipsisContainer.style.top = '-999999px';
    ellipsisContainer.style.zIndex = '-1000';
    // clean up css overflow
    ellipsisContainer.style.textOverflow = 'clip';
    ellipsisContainer.style.whiteSpace = 'normal';
    // tslint:disable-next-line no-any
    ((/** @type {?} */ (ellipsisContainer.style))).webkitLineClamp = 'none';
    /** @type {?} */
    var contentList = mergeChildren(contentNodes);
    /** @type {?} */
    var container = document.createElement('div');
    /** @type {?} */
    var contentContainer = document.createElement('span');
    /** @type {?} */
    var fixedContainer = document.createElement('span');
    // Add styles in container
    Object.assign(container.style, wrapperStyle);
    Object.assign(contentContainer.style, wrapperStyle);
    Object.assign(fixedContainer.style, wrapperStyle);
    contentList.forEach((/**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        contentContainer.appendChild(n);
    }));
    fixedContent.forEach((/**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        fixedContainer.appendChild(node.cloneNode(true));
    }));
    container.appendChild(contentContainer);
    container.appendChild(fixedContainer);
    // Render in the fake container
    ellipsisContainer.appendChild(container);
    // Check if ellipsis in measure div is height enough for content
    /**
     * @return {?}
     */
    function inRange() {
        return ellipsisContainer.offsetHeight < maxHeight;
    }
    if (inRange()) {
        /** @type {?} */
        var text = ellipsisContainer.innerHTML;
        ellipsisContainer.removeChild(container);
        return { contentNodes: contentNodes, text: text, ellipsis: false };
    }
    // We should clone the childNode since they're controlled by React and we can't reuse it without warning
    /** @type {?} */
    var childNodes = Array.prototype.slice
        .apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes)
        .filter((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var nodeType = _a.nodeType;
        return nodeType !== COMMENT_NODE;
    }));
    /** @type {?} */
    var fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
    ellipsisContainer.removeChild(container);
    // ========================= Find match ellipsis content =========================
    ellipsisContainer.innerHTML = '';
    // Create origin content holder
    /** @type {?} */
    var ellipsisContentHolder = document.createElement('span');
    ellipsisContainer.appendChild(ellipsisContentHolder);
    /** @type {?} */
    var ellipsisTextNode = document.createTextNode(ellipsisStr);
    ellipsisContentHolder.appendChild(ellipsisTextNode);
    fixedNodes.forEach((/**
     * @param {?} childNode
     * @return {?}
     */
    function (childNode) {
        ellipsisContainer.appendChild(childNode);
    }));
    // Append before fixed nodes
    /**
     * @param {?} node
     * @return {?}
     */
    function appendChildNode(node) {
        ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
    }
    // Get maximum text
    /**
     * @param {?} textNode
     * @param {?} fullText
     * @param {?=} startLoc
     * @param {?=} endLoc
     * @param {?=} lastSuccessLoc
     * @return {?}
     */
    function measureText(textNode, fullText, startLoc, endLoc, lastSuccessLoc) {
        if (startLoc === void 0) { startLoc = 0; }
        if (endLoc === void 0) { endLoc = fullText.length; }
        if (lastSuccessLoc === void 0) { lastSuccessLoc = 0; }
        /** @type {?} */
        var midLoc = Math.floor((startLoc + endLoc) / 2);
        /** @type {?} */
        var currentText = fullText.slice(0, midLoc);
        textNode.textContent = currentText;
        if (startLoc >= endLoc - 1) {
            // Loop when step is small
            for (var step = endLoc; step >= startLoc; step -= 1) {
                /** @type {?} */
                var currentStepText = fullText.slice(0, step);
                textNode.textContent = currentStepText;
                if (inRange()) {
                    return step === fullText.length
                        ? {
                            finished: false,
                            node: document.createTextNode(fullText)
                        }
                        : {
                            finished: true,
                            node: document.createTextNode(currentStepText)
                        };
                }
            }
        }
        if (inRange()) {
            return measureText(textNode, fullText, midLoc, endLoc, midLoc);
        }
        else {
            return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
        }
    }
    /**
     * @param {?} childNode
     * @param {?} index
     * @return {?}
     */
    function measureNode(childNode, index) {
        /** @type {?} */
        var type = childNode.nodeType;
        if (type === ELEMENT_NODE) {
            // We don't split element, it will keep if whole element can be displayed.
            // appendChildNode(childNode);
            if (inRange()) {
                return {
                    finished: false,
                    node: contentList[index]
                };
            }
            // Clean up if can not pull in
            ellipsisContentHolder.removeChild(childNode);
            return {
                finished: true,
                node: null
            };
        }
        else if (type === TEXT_NODE) {
            /** @type {?} */
            var fullText = childNode.textContent || '';
            /** @type {?} */
            var textNode = document.createTextNode(fullText);
            appendChildNode(textNode);
            return measureText(textNode, fullText);
        }
        // Not handle other type of content
        // PS: This code should not be attached after react 16
        return {
            finished: false,
            node: null
        };
    }
    /** @type {?} */
    var ellipsisNodes = [];
    childNodes.some((/**
     * @param {?} childNode
     * @param {?} index
     * @return {?}
     */
    function (childNode, index) {
        var _a = measureNode(childNode, index), finished = _a.finished, node = _a.node;
        if (node) {
            ellipsisNodes.push(node);
        }
        return finished;
    }));
    /** @type {?} */
    var result = {
        contentNodes: ellipsisNodes,
        text: ellipsisContainer.innerHTML,
        ellipsis: true
    };
    while (ellipsisContainer.firstChild) {
        ellipsisContainer.removeChild(ellipsisContainer.firstChild);
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1tZWFzdXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC90ZXh0LW1lYXN1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFRQSxtQ0FHQzs7O0lBRkMsaUNBQWtCOztJQUNsQiw2QkFBa0I7Ozs7SUFJZCxZQUFZLEdBQUcsQ0FBQzs7SUFDaEIsU0FBUyxHQUFHLENBQUM7O0lBQ2IsWUFBWSxHQUFHLENBQUM7O0lBRWxCLGlCQUF1Qzs7SUFFckMsWUFBWSxHQUFHO0lBQ25CLE9BQU8sRUFBRSxHQUFHO0lBQ1osTUFBTSxFQUFFLEdBQUc7SUFDWCxPQUFPLEVBQUUsUUFBUTtJQUNqQixVQUFVLEVBQUUsU0FBUztDQUN0Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLEtBQW9CO0lBQzdDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLENBQUMsQ0FBQztLQUNWOztRQUVLLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztJQUV6QyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQzs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxLQUEwQjs7OztRQUd6QyxVQUFVLEdBQWEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMvRCxPQUFPLFVBQVUsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQSxJQUFJLElBQUksT0FBRyxJQUFJLFVBQUssS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFHLEVBQTNDLENBQTJDLEVBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEYsQ0FBQzs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxRQUFnQjs7UUFDL0IsU0FBUyxHQUFXLEVBQUU7SUFFNUIsUUFBUSxDQUFDLE9BQU87Ozs7SUFBQyxVQUFDLEtBQVc7O1lBQ3JCLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxTQUFTLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDakYsQ0FBQyxtQkFBQSxTQUFTLEVBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLG1CQUFBLEtBQUssRUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ2xEO2FBQU07WUFDTCxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQyxFQUFDLENBQUM7SUFFSCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDOzs7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixTQUFzQixFQUN0QixJQUFZLEVBQ1osWUFBb0IsRUFDcEIsWUFBMkIsRUFDM0IsV0FBbUI7SUFFbkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBQ3RCLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsaUJBQWlCLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0RCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQzlDOzs7UUFHSyxXQUFXLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQzs7UUFDaEQsU0FBUyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7O1FBQ3RDLFVBQVUsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQzs7UUFDL0MsU0FBUyxHQUNiLFVBQVUsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO0lBQ3RHLGFBQWE7SUFDYixpQkFBaUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzNDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ25DLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3hDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQzNDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQzNDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDO0lBQzFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBRXpDLHdCQUF3QjtJQUN4QixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUM5QyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztJQUM5QyxrQ0FBa0M7SUFDbEMsQ0FBQyxtQkFBQSxpQkFBaUIsQ0FBQyxLQUFLLEVBQU8sQ0FBQyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7O1FBRXBELFdBQVcsR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDOztRQUN6QyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7O1FBQ3pDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOztRQUNqRCxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFFckQsMEJBQTBCO0lBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNwRCxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFFbEQsV0FBVyxDQUFDLE9BQU87Ozs7SUFBQyxVQUFBLENBQUM7UUFDbkIsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsRUFBQyxDQUFDO0lBQ0gsWUFBWSxDQUFDLE9BQU87Ozs7SUFBQyxVQUFBLElBQUk7UUFDdkIsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQyxFQUFDLENBQUM7SUFDSCxTQUFTLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUV0QywrQkFBK0I7SUFDL0IsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7OztJQUd6QyxTQUFTLE9BQU87UUFDZCxPQUFPLGlCQUFpQixDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDcEQsQ0FBQztJQUVELElBQUksT0FBTyxFQUFFLEVBQUU7O1lBQ1AsSUFBSSxHQUFHLGlCQUFpQixDQUFDLFNBQVM7UUFDeEMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sRUFBRSxZQUFZLGNBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7S0FDaEQ7OztRQUdLLFVBQVUsR0FBZ0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLO1NBQ2xELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUM7U0FDL0UsTUFBTTs7OztJQUFDLFVBQUMsRUFBdUI7WUFBckIsc0JBQVE7UUFBa0IsT0FBQSxRQUFRLEtBQUssWUFBWTtJQUF6QixDQUF5QixFQUFDOztRQUMzRCxVQUFVLEdBQWdCLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDekQsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUN6RTtJQUNELGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV6QyxrRkFBa0Y7SUFDbEYsaUJBQWlCLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7O1FBRzNCLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzVELGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOztRQUMvQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztJQUM3RCxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUVwRCxVQUFVLENBQUMsT0FBTzs7OztJQUFDLFVBQUEsU0FBUztRQUMxQixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQyxFQUFDLENBQUM7Ozs7OztJQUdILFNBQVMsZUFBZSxDQUFDLElBQWU7UUFDdEMscUJBQXFCLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7Ozs7SUFHRCxTQUFTLFdBQVcsQ0FDbEIsUUFBYyxFQUNkLFFBQWdCLEVBQ2hCLFFBQW9CLEVBQ3BCLE1BQWdDLEVBQ2hDLGNBQTBCO1FBRjFCLHlCQUFBLEVBQUEsWUFBb0I7UUFDcEIsdUJBQUEsRUFBQSxTQUFpQixRQUFRLENBQUMsTUFBTTtRQUNoQywrQkFBQSxFQUFBLGtCQUEwQjs7WUFFcEIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUM1QyxXQUFXLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBRW5DLElBQUksUUFBUSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUIsMEJBQTBCO1lBQzFCLEtBQUssSUFBSSxJQUFJLEdBQUcsTUFBTSxFQUFFLElBQUksSUFBSSxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRTs7b0JBQzdDLGVBQWUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7Z0JBQy9DLFFBQVEsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO2dCQUV2QyxJQUFJLE9BQU8sRUFBRSxFQUFFO29CQUNiLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxNQUFNO3dCQUM3QixDQUFDLENBQUM7NEJBQ0UsUUFBUSxFQUFFLEtBQUs7NEJBQ2YsSUFBSSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO3lCQUN4Qzt3QkFDSCxDQUFDLENBQUM7NEJBQ0UsUUFBUSxFQUFFLElBQUk7NEJBQ2QsSUFBSSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDO3lCQUMvQyxDQUFDO2lCQUNQO2FBQ0Y7U0FDRjtRQUNELElBQUksT0FBTyxFQUFFLEVBQUU7WUFDYixPQUFPLFdBQVcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNMLE9BQU8sV0FBVyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztTQUMxRTtJQUNILENBQUM7Ozs7OztJQUVELFNBQVMsV0FBVyxDQUFDLFNBQW9CLEVBQUUsS0FBYTs7WUFDaEQsSUFBSSxHQUFHLFNBQVMsQ0FBQyxRQUFRO1FBRS9CLElBQUksSUFBSSxLQUFLLFlBQVksRUFBRTtZQUN6QiwwRUFBMEU7WUFDMUUsOEJBQThCO1lBQzlCLElBQUksT0FBTyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTztvQkFDTCxRQUFRLEVBQUUsS0FBSztvQkFDZixJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQztpQkFDekIsQ0FBQzthQUNIO1lBRUQsOEJBQThCO1lBQzlCLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QyxPQUFPO2dCQUNMLFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQztTQUNIO2FBQU0sSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFOztnQkFDdkIsUUFBUSxHQUFHLFNBQVMsQ0FBQyxXQUFXLElBQUksRUFBRTs7Z0JBQ3RDLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQztZQUNsRCxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDMUIsT0FBTyxXQUFXLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsbUNBQW1DO1FBQ25DLHNEQUFzRDtRQUN0RCxPQUFPO1lBQ0wsUUFBUSxFQUFFLEtBQUs7WUFDZixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7SUFDSixDQUFDOztRQUVLLGFBQWEsR0FBVyxFQUFFO0lBQ2hDLFVBQVUsQ0FBQyxJQUFJOzs7OztJQUFDLFVBQUMsU0FBUyxFQUFFLEtBQUs7UUFDekIsSUFBQSxrQ0FBa0QsRUFBaEQsc0JBQVEsRUFBRSxjQUFzQztRQUN4RCxJQUFJLElBQUksRUFBRTtZQUNSLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDLEVBQUMsQ0FBQzs7UUFDRyxNQUFNLEdBQUc7UUFDYixZQUFZLEVBQUUsYUFBYTtRQUMzQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsU0FBUztRQUNqQyxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsT0FBTyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUU7UUFDbkMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzdEO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lYXN1cmVSZXN1bHQge1xuICBmaW5pc2hlZDogYm9vbGVhbjtcbiAgbm9kZTogTm9kZSB8IG51bGw7XG59XG5cbi8vIFdlIG9ubHkgaGFuZGxlIGVsZW1lbnQgJiB0ZXh0IG5vZGUuXG5jb25zdCBFTEVNRU5UX05PREUgPSAxO1xuY29uc3QgVEVYVF9OT0RFID0gMztcbmNvbnN0IENPTU1FTlRfTk9ERSA9IDg7XG5cbmxldCBlbGxpcHNpc0NvbnRhaW5lcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG5cbmNvbnN0IHdyYXBwZXJTdHlsZSA9IHtcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwJyxcbiAgZGlzcGxheTogJ2lubGluZScsXG4gIGxpbmVIZWlnaHQ6ICdpbmhlcml0J1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHB4VG9OdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bGwpOiBudW1iZXIge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb25zdCBtYXRjaCA9IHZhbHVlLm1hdGNoKC9eXFxkKihcXC5cXGQqKT8vKTtcblxuICByZXR1cm4gbWF0Y2ggPyBOdW1iZXIobWF0Y2hbMF0pIDogMDtcbn1cblxuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbik6IHN0cmluZyB7XG4gIC8vIFRoZXJlIGFyZSBzb21lIGRpZmZlcmVudCBiZWhhdmlvciBiZXR3ZWVuIEZpcmVmb3ggJiBDaHJvbWUuXG4gIC8vIFdlIGhhdmUgdG8gaGFuZGxlIHRoaXMgb3Vyc2VsZi5cbiAgY29uc3Qgc3R5bGVOYW1lczogc3RyaW5nW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoc3R5bGUpO1xuICByZXR1cm4gc3R5bGVOYW1lcy5tYXAobmFtZSA9PiBgJHtuYW1lfTogJHtzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpfTtgKS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VDaGlsZHJlbihjaGlsZHJlbjogTm9kZVtdKTogTm9kZVtdIHtcbiAgY29uc3QgY2hpbGRMaXN0OiBOb2RlW10gPSBbXTtcblxuICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogTm9kZSkgPT4ge1xuICAgIGNvbnN0IHByZXZDaGlsZCA9IGNoaWxkTGlzdFtjaGlsZExpc3QubGVuZ3RoIC0gMV07XG4gICAgaWYgKHByZXZDaGlsZCAmJiBjaGlsZC5ub2RlVHlwZSA9PT0gVEVYVF9OT0RFICYmIHByZXZDaGlsZC5ub2RlVHlwZSA9PT0gVEVYVF9OT0RFKSB7XG4gICAgICAocHJldkNoaWxkIGFzIFRleHQpLmRhdGEgKz0gKGNoaWxkIGFzIFRleHQpLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkTGlzdC5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZExpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlKFxuICBvcmlnaW5FbGU6IEhUTUxFbGVtZW50LFxuICByb3dzOiBudW1iZXIsXG4gIGNvbnRlbnROb2RlczogTm9kZVtdLFxuICBmaXhlZENvbnRlbnQ6IEhUTUxFbGVtZW50W10sXG4gIGVsbGlwc2lzU3RyOiBzdHJpbmdcbik6IHsgY29udGVudE5vZGVzOiBOb2RlW107IHRleHQ6IHN0cmluZzsgZWxsaXBzaXM6IGJvb2xlYW4gfSB7XG4gIGlmICghZWxsaXBzaXNDb250YWluZXIpIHtcbiAgICBlbGxpcHNpc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsbGlwc2lzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxsaXBzaXNDb250YWluZXIpO1xuICB9XG5cbiAgLy8gR2V0IG9yaWdpbiBzdHlsZVxuICBjb25zdCBvcmlnaW5TdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9yaWdpbkVsZSk7XG4gIGNvbnN0IG9yaWdpbkNTUyA9IHN0eWxlVG9TdHJpbmcob3JpZ2luU3R5bGUpO1xuICBjb25zdCBsaW5lSGVpZ2h0ID0gcHhUb051bWJlcihvcmlnaW5TdHlsZS5saW5lSGVpZ2h0KTtcbiAgY29uc3QgbWF4SGVpZ2h0ID1cbiAgICBsaW5lSGVpZ2h0ICogKHJvd3MgKyAxKSArIHB4VG9OdW1iZXIob3JpZ2luU3R5bGUucGFkZGluZ1RvcCkgKyBweFRvTnVtYmVyKG9yaWdpblN0eWxlLnBhZGRpbmdCb3R0b20pO1xuICAvLyBTZXQgc2hhZG93XG4gIGVsbGlwc2lzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBvcmlnaW5DU1MpO1xuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLmxlZnQgPSAnMCc7XG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gJ2F1dG8nO1xuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS5tYXhIZWlnaHQgPSAnYXV0byc7XG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLnRvcCA9ICctOTk5OTk5cHgnO1xuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS56SW5kZXggPSAnLTEwMDAnO1xuXG4gIC8vIGNsZWFuIHVwIGNzcyBvdmVyZmxvd1xuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS50ZXh0T3ZlcmZsb3cgPSAnY2xpcCc7XG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLndoaXRlU3BhY2UgPSAnbm9ybWFsJztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICAoZWxsaXBzaXNDb250YWluZXIuc3R5bGUgYXMgYW55KS53ZWJraXRMaW5lQ2xhbXAgPSAnbm9uZSc7XG5cbiAgY29uc3QgY29udGVudExpc3QgPSBtZXJnZUNoaWxkcmVuKGNvbnRlbnROb2Rlcyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBmaXhlZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAvLyBBZGQgc3R5bGVzIGluIGNvbnRhaW5lclxuICBPYmplY3QuYXNzaWduKGNvbnRhaW5lci5zdHlsZSwgd3JhcHBlclN0eWxlKTtcbiAgT2JqZWN0LmFzc2lnbihjb250ZW50Q29udGFpbmVyLnN0eWxlLCB3cmFwcGVyU3R5bGUpO1xuICBPYmplY3QuYXNzaWduKGZpeGVkQ29udGFpbmVyLnN0eWxlLCB3cmFwcGVyU3R5bGUpO1xuXG4gIGNvbnRlbnRMaXN0LmZvckVhY2gobiA9PiB7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChuKTtcbiAgfSk7XG4gIGZpeGVkQ29udGVudC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGZpeGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKHRydWUpKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpeGVkQ29udGFpbmVyKTtcblxuICAvLyBSZW5kZXIgaW4gdGhlIGZha2UgY29udGFpbmVyXG4gIGVsbGlwc2lzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgLy8gQ2hlY2sgaWYgZWxsaXBzaXMgaW4gbWVhc3VyZSBkaXYgaXMgaGVpZ2h0IGVub3VnaCBmb3IgY29udGVudFxuICBmdW5jdGlvbiBpblJhbmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBlbGxpcHNpc0NvbnRhaW5lci5vZmZzZXRIZWlnaHQgPCBtYXhIZWlnaHQ7XG4gIH1cblxuICBpZiAoaW5SYW5nZSgpKSB7XG4gICAgY29uc3QgdGV4dCA9IGVsbGlwc2lzQ29udGFpbmVyLmlubmVySFRNTDtcbiAgICBlbGxpcHNpc0NvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIHJldHVybiB7IGNvbnRlbnROb2RlcywgdGV4dCwgZWxsaXBzaXM6IGZhbHNlIH07XG4gIH1cblxuICAvLyBXZSBzaG91bGQgY2xvbmUgdGhlIGNoaWxkTm9kZSBzaW5jZSB0aGV5J3JlIGNvbnRyb2xsZWQgYnkgUmVhY3QgYW5kIHdlIGNhbid0IHJldXNlIGl0IHdpdGhvdXQgd2FybmluZ1xuICBjb25zdCBjaGlsZE5vZGVzOiBDaGlsZE5vZGVbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgIC5hcHBseShlbGxpcHNpc0NvbnRhaW5lci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2xvbmVOb2RlKHRydWUpLmNoaWxkTm9kZXMpXG4gICAgLmZpbHRlcigoeyBub2RlVHlwZSB9OiBDaGlsZE5vZGUpID0+IG5vZGVUeXBlICE9PSBDT01NRU5UX05PREUpO1xuICBjb25zdCBmaXhlZE5vZGVzOiBDaGlsZE5vZGVbXSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShcbiAgICBlbGxpcHNpc0NvbnRhaW5lci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0uY2xvbmVOb2RlKHRydWUpLmNoaWxkTm9kZXNcbiAgKTtcbiAgZWxsaXBzaXNDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IEZpbmQgbWF0Y2ggZWxsaXBzaXMgY29udGVudCA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGVsbGlwc2lzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gIC8vIENyZWF0ZSBvcmlnaW4gY29udGVudCBob2xkZXJcbiAgY29uc3QgZWxsaXBzaXNDb250ZW50SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlbGxpcHNpc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbGxpcHNpc0NvbnRlbnRIb2xkZXIpO1xuICBjb25zdCBlbGxpcHNpc1RleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxsaXBzaXNTdHIpO1xuICBlbGxpcHNpc0NvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQoZWxsaXBzaXNUZXh0Tm9kZSk7XG5cbiAgZml4ZWROb2Rlcy5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgZWxsaXBzaXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgfSk7XG5cbiAgLy8gQXBwZW5kIGJlZm9yZSBmaXhlZCBub2Rlc1xuICBmdW5jdGlvbiBhcHBlbmRDaGlsZE5vZGUobm9kZTogQ2hpbGROb2RlKTogdm9pZCB7XG4gICAgZWxsaXBzaXNDb250ZW50SG9sZGVyLmluc2VydEJlZm9yZShub2RlLCBlbGxpcHNpc1RleHROb2RlKTtcbiAgfVxuXG4gIC8vIEdldCBtYXhpbXVtIHRleHRcbiAgZnVuY3Rpb24gbWVhc3VyZVRleHQoXG4gICAgdGV4dE5vZGU6IFRleHQsXG4gICAgZnVsbFRleHQ6IHN0cmluZyxcbiAgICBzdGFydExvYzogbnVtYmVyID0gMCxcbiAgICBlbmRMb2M6IG51bWJlciA9IGZ1bGxUZXh0Lmxlbmd0aCxcbiAgICBsYXN0U3VjY2Vzc0xvYzogbnVtYmVyID0gMFxuICApOiBNZWFzdXJlUmVzdWx0IHtcbiAgICBjb25zdCBtaWRMb2MgPSBNYXRoLmZsb29yKChzdGFydExvYyArIGVuZExvYykgLyAyKTtcbiAgICBjb25zdCBjdXJyZW50VGV4dCA9IGZ1bGxUZXh0LnNsaWNlKDAsIG1pZExvYyk7XG4gICAgdGV4dE5vZGUudGV4dENvbnRlbnQgPSBjdXJyZW50VGV4dDtcblxuICAgIGlmIChzdGFydExvYyA+PSBlbmRMb2MgLSAxKSB7XG4gICAgICAvLyBMb29wIHdoZW4gc3RlcCBpcyBzbWFsbFxuICAgICAgZm9yIChsZXQgc3RlcCA9IGVuZExvYzsgc3RlcCA+PSBzdGFydExvYzsgc3RlcCAtPSAxKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGVwVGV4dCA9IGZ1bGxUZXh0LnNsaWNlKDAsIHN0ZXApO1xuICAgICAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IGN1cnJlbnRTdGVwVGV4dDtcblxuICAgICAgICBpZiAoaW5SYW5nZSgpKSB7XG4gICAgICAgICAgcmV0dXJuIHN0ZXAgPT09IGZ1bGxUZXh0Lmxlbmd0aFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgZmluaXNoZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5vZGU6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZ1bGxUZXh0KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICBmaW5pc2hlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBub2RlOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50U3RlcFRleHQpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGluUmFuZ2UoKSkge1xuICAgICAgcmV0dXJuIG1lYXN1cmVUZXh0KHRleHROb2RlLCBmdWxsVGV4dCwgbWlkTG9jLCBlbmRMb2MsIG1pZExvYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtZWFzdXJlVGV4dCh0ZXh0Tm9kZSwgZnVsbFRleHQsIHN0YXJ0TG9jLCBtaWRMb2MsIGxhc3RTdWNjZXNzTG9jKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtZWFzdXJlTm9kZShjaGlsZE5vZGU6IENoaWxkTm9kZSwgaW5kZXg6IG51bWJlcik6IE1lYXN1cmVSZXN1bHQge1xuICAgIGNvbnN0IHR5cGUgPSBjaGlsZE5vZGUubm9kZVR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gRUxFTUVOVF9OT0RFKSB7XG4gICAgICAvLyBXZSBkb24ndCBzcGxpdCBlbGVtZW50LCBpdCB3aWxsIGtlZXAgaWYgd2hvbGUgZWxlbWVudCBjYW4gYmUgZGlzcGxheWVkLlxuICAgICAgLy8gYXBwZW5kQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG4gICAgICBpZiAoaW5SYW5nZSgpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZmluaXNoZWQ6IGZhbHNlLFxuICAgICAgICAgIG5vZGU6IGNvbnRlbnRMaXN0W2luZGV4XVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhbiB1cCBpZiBjYW4gbm90IHB1bGwgaW5cbiAgICAgIGVsbGlwc2lzQ29udGVudEhvbGRlci5yZW1vdmVDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmluaXNoZWQ6IHRydWUsXG4gICAgICAgIG5vZGU6IG51bGxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBURVhUX05PREUpIHtcbiAgICAgIGNvbnN0IGZ1bGxUZXh0ID0gY2hpbGROb2RlLnRleHRDb250ZW50IHx8ICcnO1xuICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmdWxsVGV4dCk7XG4gICAgICBhcHBlbmRDaGlsZE5vZGUodGV4dE5vZGUpO1xuICAgICAgcmV0dXJuIG1lYXN1cmVUZXh0KHRleHROb2RlLCBmdWxsVGV4dCk7XG4gICAgfVxuXG4gICAgLy8gTm90IGhhbmRsZSBvdGhlciB0eXBlIG9mIGNvbnRlbnRcbiAgICAvLyBQUzogVGhpcyBjb2RlIHNob3VsZCBub3QgYmUgYXR0YWNoZWQgYWZ0ZXIgcmVhY3QgMTZcbiAgICByZXR1cm4ge1xuICAgICAgZmluaXNoZWQ6IGZhbHNlLFxuICAgICAgbm9kZTogbnVsbFxuICAgIH07XG4gIH1cblxuICBjb25zdCBlbGxpcHNpc05vZGVzOiBOb2RlW10gPSBbXTtcbiAgY2hpbGROb2Rlcy5zb21lKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBmaW5pc2hlZCwgbm9kZSB9ID0gbWVhc3VyZU5vZGUoY2hpbGROb2RlLCBpbmRleCk7XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIGVsbGlwc2lzTm9kZXMucHVzaChub2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmlzaGVkO1xuICB9KTtcbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGNvbnRlbnROb2RlczogZWxsaXBzaXNOb2RlcyxcbiAgICB0ZXh0OiBlbGxpcHNpc0NvbnRhaW5lci5pbm5lckhUTUwsXG4gICAgZWxsaXBzaXM6IHRydWVcbiAgfTtcbiAgd2hpbGUgKGVsbGlwc2lzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBlbGxpcHNpc0NvbnRhaW5lci5yZW1vdmVDaGlsZChlbGxpcHNpc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuIl19