!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/chartist-render/chartist-render.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/chartist-render/chartist-render.js"],t):t((e=e||self).DataViz={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function u(){var e,t,n=(e=['\n      <chartist-render\n        id="barChart"\n        type="bar"\n        scale="ct-major-twelfth"\n        chart-title="Quiz Distribution"\n        chart-desc="A bar graph of quizzes completed by student"\n      >\n      </chartist-render>\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return n},n}window.DataViz=window.DataViz||{},window.DataViz.requestAvailability=function(){return window.DataViz.instance||(window.DataViz.instance=document.createElement("data-viz"),document.body.appendChild(window.DataViz.instance)),window.DataViz.instance};var l=function(e){function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),a(this,o(l).apply(this,arguments))}var s,f,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(l,t.PolymerElement),s=l,p=[{key:"template",get:function(){return t.html(u())}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},c(o(l),"properties",this),{title:{name:"title",type:String,value:"data-viz-default-value",reflectToAttribute:!1,observer:!1}})}},{key:"tag",get:function(){return"data-viz"}}],(f=[{key:"connectedCallback",value:function(){c(o(l.prototype),"connectedCallback",this).call(this),window.addEventListener("show-data",this.showDataFunction.bind(this))}},{key:"showDataFunction",value:function(e){var t=e.detail,n=(event.target.tagName,{labels:t.labels,series:t.series});this.shadowRoot.querySelector("#barChart").data=n}},{key:"disconnectedCallback",value:function(){c(o(l.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("show-data",this.showDataFunction.bind(this))}},{key:"hideDataViz",value:function(e){}},{key:"showDataViz",value:function(e){}}])&&n(s.prototype,f),p&&n(s,p),l}();window.customElements.define(l.tag,l),e.DataViz=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=data-viz.umd.js.map
