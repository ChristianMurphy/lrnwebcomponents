!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).DragNDrop={})}(this,function(t){"use strict";function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e,r){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&o(i,r.prototype),i}).apply(null,arguments)}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return a(t,arguments,i(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o(n,t)})(t)}function u(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t,e,r){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}var s=function(t){function e(){var t,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=u(this,i(e).call(this))).__dragging={},t.tag=e.tag;var n=e.properties;for(var o in n)n.hasOwnProperty(o)&&(t.hasAttribute(o)?t[o]=t.getAttribute(o):(t.setAttribute(o,n[o].value),t[o]=n[o].value));return t.template=document.createElement("template"),t.attachShadow({mode:"open"}),r||t.render(),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(e,l(HTMLElement)),r(e,[{key:"html",get:function(){return'\n<style>\n:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([editing]) .items ::slotted(.hold) {\n  border: solid 5px #ccc;\n}\n\n:host([editing]) .items ::slotted([data-droppable]) {\n  margin: 10px;\n  border: solid 3px salmon;\n  background: white;\n}\n\n:host([editing]) .items ::slotted(.hovered) {\n  background: #f4f4f4;\n  border-style: dashed;\n}\n        </style>\n<div class="items">\n  <slot></slot>\n</div>'}}],[{key:"properties",get:function(){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),i.forEach(function(e){n(t,e,r[e])})}return t}({},d(i(e),"properties",this),{editing:{name:"editing",type:Boolean}})}},{key:"tag",get:function(){return"drag-n-drop"}}]),r(e,[{key:"connectedCallback",value:function(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"_copyAttribute",value:function(t,e){var r=this.shadowRoot.querySelectorAll(e),n=this.getAttribute(t),i=null==n?"removeAttribute":"setAttribute",o=!0,a=!1,l=void 0;try{for(var u,d=r[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){u.value[i](t,n)}}catch(t){a=!0,l=t}finally{try{o||null==d.return||d.return()}finally{if(a)throw l}}}},{key:"_setProperty",value:function(t){var e=t.name,r=t.value;this[e]=r}},{key:"render",value:function(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}},{key:"attributeChangedCallback",value:function(t,e,r){if("editing"===t){var n=this.querySelectorAll("[data-draggable]"),i=this.querySelectorAll("[data-droppable]");if(r){var o=!0,a=!1,l=void 0;try{for(var u,d=i[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){var s=u.value;s.setAttribute("droppable","true"),s.addEventListener("dragover",this.dragOver.bind(this)),s.addEventListener("dragenter",this.dragEnter.bind(this)),s.addEventListener("dragleave",this.dragLeave.bind(this)),s.addEventListener("drop",this.dragDrop.bind(this))}}catch(t){a=!0,l=t}finally{try{o||null==d.return||d.return()}finally{if(a)throw l}}var c=!0,f=!1,p=void 0;try{for(var g,h=n[Symbol.iterator]();!(c=(g=h.next()).done);c=!0){var v=g.value;v.setAttribute("draggable","true"),v.addEventListener("dragstart",this.dragStart.bind(this)),v.addEventListener("dragend",this.dragEnd.bind(this))}}catch(t){f=!0,p=t}finally{try{c||null==h.return||h.return()}finally{if(f)throw p}}}else{var y=!0,b=!1,m=void 0;try{for(var w,S=i[Symbol.iterator]();!(y=(w=S.next()).done);y=!0){var O=w.value;O.removeAttribute("droppable"),O.removeEventListener("dragover",this.dragOver.bind(this)),O.removeEventListener("dragenter",this.dragEnter.bind(this)),O.removeEventListener("dragleave",this.dragLeave.bind(this)),O.removeEventListener("drop",this.dragDrop.bind(this))}}catch(t){b=!0,m=t}finally{try{y||null==S.return||S.return()}finally{if(b)throw m}}var E=!0,_=!1,k=void 0;try{for(var A,L=n[Symbol.iterator]();!(E=(A=L.next()).done);E=!0){var j=A.value;j.removeAttribute("draggable"),j.removeEventListener("dragstart",this.dragStart.bind(this)),j.removeEventListener("dragend",this.dragEnd.bind(this))}}catch(t){_=!0,k=t}finally{try{E||null==L.return||L.return()}finally{if(_)throw k}}}}}},{key:"dragStart",value:function(t){var e=this;this.__dragging=t.target,this.__dragging.className+=" hold",setTimeout(function(){return e.__dragging.className="invisible"},0)}},{key:"dragEnd",value:function(t){this.__dragging.className="fill"}},{key:"dragOver",value:function(t){t.preventDefault()}},{key:"dragEnter",value:function(t){t.preventDefault(),t.target.className+=" hovered"}},{key:"dragLeave",value:function(t){t.target.className="empty"}},{key:"dragDrop",value:function(t){t.target.className="empty",t.target.appendChild(this.__dragging)}},{key:"editing",get:function(){this.getAttribute("editing")},set:function(t){t?this.setAttribute("editing",t):this.removeAttribute("editing")}}],[{key:"observedAttributes",get:function(){return["editing"]}}]),e}();window.customElements.define(s.tag,s),t.DragNDrop=s,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=drag-n-drop.umd.js.map
