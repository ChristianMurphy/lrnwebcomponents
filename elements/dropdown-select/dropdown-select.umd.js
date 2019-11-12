!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e=e||self).DropdownSelect={},e.litElement_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function c(){var e=s(["\n        :host {\n          display: block;\n        }\n        paper-listbox ::slotted(paper-item) {\n          display: block;\n          width: calc(100% - 32px);\n          padding: 0 16px;\n          min-height: 32px;\n          vertical-align: text-top;\n          line-height: 32px;\n        }\n      "]);return c=function(){return e},e}function u(){var e=s(['\n      <paper-dropdown-menu\n        id="menu"\n        error-message="','"\n        horizontal-align="','"\n        label="','"\n        placeholder="','"\n        vertical-align="','"\n        vertical-offset="','"\n        ?allow-outside-scroll="','"\n        ?always-float-label="','"\n        ?dynamic-align="','"\n        ?no-animations="','"\n        ?no-label-float="','"\n        ?restore-focus-on-close="','"\n        @paper-dropdown-open="','"\n        @paper-dropdown-close="','"\n        @selected-item-changed="','"\n      >\n        <paper-listbox\n          id="listbox"\n          slot="dropdown-content"\n          class="dropdown-content"\n          .selected="','"\n        >\n          <slot id="content"></slot>\n        </paper-listbox>\n      </paper-dropdown-menu>\n    ']);return u=function(){return e},e}var p=function(e){function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=a(this,i(o).call(this))).allowOutsideScroll=!1,e.alwaysFloatLabel=!1,e.dynamicAlign=!1,e.horizontalAlign="right",e.label="Select an option.",e.noAnimations=!1,e.noLabelFloat=!1,e.opened=!1,e.restoreFocusOnClose=!0,e.selectedItemIndex=null,e.selectedItemLabel=null,e.value=null,e.verticalAlign="top",import("@polymer/paper-dropdown-menu/paper-dropdown-menu.js"),import("@polymer/paper-item/paper-item.js"),import("@polymer/paper-listbox/paper-listbox.js"),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(o,t.LitElement),l(o,[{key:"render",value:function(){return t.html(u(),this.errorMessage,this.horizontalAlign,this.label,this.placeholder,this.verticalAlign,this.verticalOffset,this.allowOutsideScroll,this.alwaysFloatLabel,this.dynamicAlign,this.noAnimations,this.noLabelFloat,this.restoreFocusOnClose,this._onOpen,this.onClose,this._dropDownChanged,this.selectedItemIndex)}}],[{key:"styles",get:function(){return[t.css(c())]}},{key:"tag",get:function(){return"dropdown-select"}}]),l(o,[{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"value"===n&&t._valueChanged(t.value,e)}),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!0,composed:!0,detail:{value:this.value}}))}},{key:"_onOpen",value:function(){this.opened=!0}},{key:"_onClose",value:function(){this.opened=!1}},{key:"_dropDownChanged",value:function(e){this.value=e.detail.value?e.detail.value.getAttribute("value"):null}},{key:"_valueChanged",value:function(e,t){var o=Array.prototype.slice.call(this.querySelectorAll("paper-item"));this.selectedItem=this.querySelector('paper-item[value="'.concat(e,'"]')),this.selectedItemLabel=this.selectedItem?this.selectedItem.innerHTML:null,this.selectedItemIndex=this.selectedItem?o.indexOf(this.selectedItem):null,"undefined"!==n(t)&&(this.dispatchEvent(new CustomEvent("value-changed",{bubbles:!0,cancelable:!0,composed:!0,target:this,detail:{value:e,oldValue:t}})),this.dispatchEvent(new CustomEvent("dropdown-select-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:this})))}}],[{key:"properties",get:function(){return{allowOutsideScroll:{attribute:"allow-outside-scroll",type:Boolean},alwaysFloatLabel:{attribute:"always-float-label",type:Boolean},dynamicAlign:{attribute:"dynamic-align",type:Boolean},errorMessage:{attribute:"error-message",type:String},horizontalAlign:{attribute:"horizontal-align",type:String},label:{type:String},noAnimations:{attribute:"no-animations",type:Boolean},noLabelFloat:{attribute:"no-label-float",type:Boolean},opened:{type:Boolean},placeholder:{type:String},restoreFocusOnClose:{attribute:"restore-focus-on-close",type:Boolean},selectedItem:{attribute:"selected-item",type:Object},selectedItemIndex:{attribute:"selected-item-index",type:Number},selectedItemLabel:{attribute:"selected-item-label",type:String},value:{type:String,reflect:!0},verticalAlign:{attribute:"vertical-align",type:String},verticalOffset:{attribute:"vertical-offset",type:Number}}}}]),o}();window.customElements.define(p.tag,p),e.DropdownSelect=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=dropdown-select.umd.js.map
