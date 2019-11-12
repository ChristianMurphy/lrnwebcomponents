!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],n):n((e=e||self).GitCorner={},e.litElement_js)}(this,function(e,n){"use strict";function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function c(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function a(e,n,t){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=o(e)););return e}(e,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(t):i.value}})(e,n,t||e)}function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function f(){var e=u(['\n        :host {\n          display: block;\n        }\n        :host([corner]) svg {\n          z-index: var(--github-corner-z-index, 1);\n          position: absolute;\n          top: 0;\n          border: 0;\n          right: 0;\n        }\n        :host([circle]) svg {\n          border-radius: 100px;\n          transform: rotate(-45deg);\n        }\n        :host([size="micro"]) {\n          --github-corner-size: 28px;\n        }\n        :host([size="small"]) {\n          --github-corner-size: 50px;\n        }\n        :host([size="large"]) {\n          --github-corner-size: 100px;\n        }\n        svg {\n          fill: var(--github-corner-background, #24292e);\n          color: var(--github-corner-color, #ffffff);\n          width: var(--github-corner-size, 80px);\n          height: var(--github-corner-size, 80px);\n        }\n        a {\n          display: table;\n          outline-color: var(--github-corner-background, #24292e);\n          outline-width: 2px;\n        }\n\n        .github-corner:focus .octo-arm,\n        .github-corner:hover .octo-arm {\n          animation: octocat-wave 560ms ease-in-out;\n        }\n\n        @keyframes octocat-wave {\n          0%,\n          100% {\n            transform: rotate(0);\n          }\n          20%,\n          60% {\n            transform: rotate(-25deg);\n          }\n          40%,\n          80% {\n            transform: rotate(10deg);\n          }\n        }\n        @media (max-width: 500px) {\n          .github-corner:hover .octo-arm {\n            animation: none;\n          }\n          .github-corner .octo-arm {\n            animation: octocat-wave 560ms ease-in-out;\n          }\n        }\n      ']);return f=function(){return e},e}function l(){var e=u(['\n\n<a .title="','" .href="','" target="_blank" rel="noopener noreferrer" class="github-corner">\n    <svg viewBox="0 0 250 250">\n        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n        <path\n            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"\n            fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>\n        <path\n            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"\n            fill="currentColor" class="octo-body"></path>\n    </svg>\n</a>']);return l=function(){return e},e}var s=function(e){function u(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u),c(this,o(u).apply(this,arguments))}var s,p,b;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(u,n.LitElement),s=u,b=[{key:"styles",get:function(){return[n.css(f())]}},{key:"properties",get:function(){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){r(e,n,t[n])})}return e}({},a(o(u),"properties",this),{source:{name:"source",type:String},alt:{name:"alt",type:String},corner:{name:"corner",type:Boolean,reflect:!0},size:{name:"size",type:String,reflect:!0}})}},{key:"tag",get:function(){return"git-corner"}}],(p=[{key:"render",value:function(){return n.html(l(),this.alt,this.source)}},{key:"firstUpdated",value:function(e){e.forEach(function(e,n){})}},{key:"updated",value:function(e){e.forEach(function(e,n){})}}])&&t(s.prototype,p),b&&t(s,b),u}();customElements.define(s.tag,s),e.GitCorner=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=git-corner.umd.js.map
