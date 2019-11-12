!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js"],t):t((e=e||self).FilteredImage={},e.polymerElement_js,e.simpleColorsPolymer_js)}(this,function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,r){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function l(){var e,t,r=(e=['\n<style>\n:host {\n  display: block;\n}\n:host([hidden]) {\n  display: none;\n}\n        </style>\n<style>\n</style>\n<svg id="svg" viewBox$="[[viewBox]]"> \n  <rect id="rect" x="0" y="0"></rect>\n  <filter id$="[[__id]]">\n    <feColorMatrix\n      id="matrix"\n      type="matrix"\n      values=" 1   0   0   0   0\n               0   1   0   0   0\n               0   0   1   0   0\n               0   0   0   1   0 "/>\n\n  </filter>      \n  <image id="image" filter$="url(#[[__id]])" x="0" y="0"></image>\n</svg>'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return r},r}var u=function(e){function u(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),a(this,o(u).apply(this,arguments))}var p,f,g;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,r.SimpleColorsPolymer),p=u,g=[{key:"template",get:function(){return t.html(l())}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Filtered image",description:"An image using an SVG filter. Can be used to make background images have more contrast with text.",icon:"icons:android",color:"green",groups:["Image"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"nikkimk",owner:"The Pennsylvania State University"}},settings:{quick:[{property:"src",description:"",inputMethod:"textfield",required:!0,icon:"icons:link",validationType:"url"},{property:"alt",description:"",inputMethod:"alt",required:!0,icon:"icons:accessibility"}],configure:[{property:"src",description:"",inputMethod:"textfield",required:!0,icon:"icons:link",validationType:"url"},{property:"alt",description:"",inputMethod:"alt",required:!0,icon:"icons:accessibility"}],advanced:[]}}}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){i(e,t,r[t])})}return e}({},c(o(u),"properties",this),{src:{name:"src",type:String,value:"",observer:"_srcChanged"},__id:{name:"__id",type:String,computed:"_getID(src,matrix)"},alt:{name:"alt",type:String,value:""},height:{name:"width",type:String,value:"",observer:"_heightChanged"},width:{name:"unset",type:String,value:"",observer:"_widthChanged"},viewBox:{name:"viewBox",type:String,computed:"_getViewBox(height,width)"},color:{name:"color",type:String,value:"#ffffff"},strength:{name:"strength",type:Number,value:1},contrast:{name:"contrast",type:Number,value:0},__matrix:{name:"matrix",type:Array,computed:"_getMatrix(color,contrast,strength)"}})}},{key:"tag",get:function(){return"filtered-image"}}],(f=[{key:"connectedCallback",value:function(){c(o(u.prototype),"connectedCallback",this).call(this),this._srcChanged()}},{key:"_heightChanged",value:function(){var e=this.shadowRoot.querySelector("#svg"),t=e.querySelector("#image"),r=e.querySelector("#rect");e.setAttribute("height",this.height),t.setAttribute("height",this.height),r.setAttribute("height",this.height)}},{key:"_widthChanged",value:function(){var e=this.shadowRoot.querySelector("#svg"),t=e.querySelector("#image"),r=e.querySelector("#rect");e.setAttribute("width",this.width),t.setAttribute("width",this.width),r.setAttribute("width",this.width)}},{key:"_getViewBox",value:function(e,t){return"0 0 ".concat(t," ").concat(e)}},{key:"_srcChanged",value:function(){var e=this.shadowRoot.querySelector("#svg").querySelector("#image");e.setAttribute("href",this.src),e.setAttribute("xlink:href",this.src)}},{key:"_getMatrix",value:function(e,t,r){var n=[[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0]],i=this.shadowRoot.querySelector("#svg").querySelector("#matrix"),o=null;if(e.startsWith("#")&&e.length>6)7===e.length&&(e+="ff"),n[0][0]=parseInt(e.substring(1,3),16)/255,n[1][1]=parseInt(e.substring(3,5),16)/255,n[2][2]=parseInt(e.substring(5,7),16)/255,n[3][3]=parseInt(e.substring(7,9),16)/255;else if(e.startsWith("#"))4===e.length&&(e+="f"),n[0][0]=parseInt(e.substring(1,2)+e.substring(1,2),16)/255,n[1][1]=parseInt(e.substring(2,3)+e.substring(2,3),16)/255,n[2][2]=parseInt(e.substring(3,4)+e.substring(3,4),16)/255,n[3][3]=parseInt(e.substring(4,5)+e.substring(4,5),16)/255;else if(e.startsWith("rgb")){o=e.replace(/rgba?\(/g,"").replace(/\)/g,"").split(","),n[0][0]=parseInt(o[0]/255),n[1][1]=parseInt(o[1]/255),n[2][2]=parseInt(o[2]/255),n[3][3]=n[3][3]||"1"}return 0!==t&&(n[0][3]=n[0][0]*t/100,n[1][3]=n[1][1]*t/100,n[2][3]=n[2][2]*t/100),1!==r&&(n[0][0]=n[0][0]+(1-r)*(1-n[0][0]),n[1][1]=n[1][1]+(1-r)*(1-n[1][1]),n[2][2]=n[2][2]+(1-r)*(1-n[2][2])),console.log(n),i.setAttribute("values",JSON.stringify(n).replace(/[,\[\]]/g," ")),n}},{key:"_getID",value:function(e,t){return("svg"+Math.random()).replace(/0./g,"-")}}])&&n(p.prototype,f),g&&n(p,g),u}();window.customElements.define(u.tag,u),e.FilteredImage=u,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=filtered-image.umd.js.map
