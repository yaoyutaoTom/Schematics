define(["require","exports"],function(e,t){"use strict";function n(e){if(void 0===e){var t=window.getSelection();if(null===t)throw"Pass an explicit value for selection,\n      or call it only if you are sure window.getSelection() will not return null";e=t}return e.getRangeAt(0)}function o(e){return e?Array.from(e.getClientRects()):[]}function i(e,t){return e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY}Object.defineProperty(t,"__esModule",{value:!0}),t.getTextSelectionRange=n,t.getClientRects=o,t.containsNode=i});
//# sourceMappingURL=utilities.min.js-vflVb5dpx.map