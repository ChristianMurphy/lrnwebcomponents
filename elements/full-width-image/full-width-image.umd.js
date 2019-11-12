!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js"],t):t((e=e||self).FullWidthImage={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function l(){var e,t,n=(e=['\n<style>\n:host {\n  display: block;\n  background-color: #000000;\n  height: 300px;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n#image {\n  left: 0;\n  right: 0;\n  position: absolute;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  width: 100%;\n  text-align: center;\n}\n\n:host([hax-preview-mode]) #image {\n  left: unset;\n  right: unset;\n  position: unset;\n}\n\n.wrapper {\n  opacity: 1;\n  background-color: rgba(0,0,0,.6);\n  padding: 100px;\n  height: 100px;\n  transition: 0.5s all ease-in-out;\n  -webkit-transition: 0.5s all ease-in-out;\n  -moz-transition: 0.5s all ease-in-out;\n  -ms-transition: 0.5s all ease-in-out;\n  -o-transition: 0.5s all ease-in-out;\n}\n.wrapper:hover {\n  opacity: 0;\n  background-color: transparent;\n}\n\n.caption {\n  padding: 35px 0;\n  font-size: 25px;\n  line-height: 40px;\n  color: #fff;\n  font-style: italic;\n}\n        </style>\n<div id="image">\n  <div class="wrapper">\n    <div class="caption">\n      [[caption]]\n      <slot></slot>\n    </div>\n  </div>\n</div>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return n},n}var p=function(e){function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),c(this,i(p).apply(this,arguments))}var s,f,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(p,t.PolymerElement),s=p,d=[{key:"template",get:function(){return t.html(l())}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"Full width-image",description:"full width image that flows beyond boundaries",icon:"image:image",color:"green",groups:["Width"],handles:[{type:"image",source:"source",caption:"caption",title:"caption"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[{property:"source",description:"",inputMethod:"textfield",required:!0,icon:"image:image",validationType:"url"}],configure:[{property:"source",description:"",inputMethod:"haxupload",required:!0,icon:"icons:link",validationType:"url"},{property:"caption",description:"",inputMethod:"textfield"}],advanced:[]}}}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},u(i(p),"properties",this),{source:{name:"source",type:String,reflectToAttributes:!0,observer:"_sourceChanged"},caption:{name:"caption",type:String,reflectToAttributes:!0}})}},{key:"tag",get:function(){return"full-width-image"}}],(f=[{key:"_sourceChanged",value:function(e,t){"undefined"!==n(e)&&(this.shadowRoot.querySelector("#image").style.backgroundImage='url("'.concat(e,'")'))}}])&&o(s.prototype,f),d&&o(s,d),p}();window.customElements.define("full-width-image",p),e.FullWidthImage=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=full-width-image.umd.js.map
