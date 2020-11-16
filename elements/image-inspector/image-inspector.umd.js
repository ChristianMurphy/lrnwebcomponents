!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/exif-data/exif-data.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"),require("@lrnwebcomponents/img-pan-zoom/img-pan-zoom.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/exif-data/exif-data.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js","@lrnwebcomponents/img-pan-zoom/img-pan-zoom.js"],e):e((t=t||self).ImageInspector={},t.litElement_js)}(this,function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=i(t);if(e){var r=i(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function a(t,e,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function l(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function u(){var t=l(['\n      <div class="wrap">\n        <simple-icon-button\n          title="Zoom in"\n          icon="zoom-in"\n          @click="','"\n        ></simple-icon-button>\n        <simple-icon-button\n          title="Zoom out"\n          icon="zoom-out"\n          @click="','"\n        ></simple-icon-button>\n        <simple-icon-button\n          title="Rotate right"\n          icon="image:rotate-right"\n          @click="','"\n        ></simple-icon-button>\n        <simple-icon-button\n          title="Rotate left"\n          icon="image:rotate-left"\n          @click="','"\n        ></simple-icon-button>\n        <simple-icon-button\n          title="Mirror image"\n          icon="image:flip"\n          @click="','"\n        ></simple-icon-button>\n        <simple-icon-button\n          title="Open in new window"\n          icon="launch"\n          href="','"\n          target="_blank"\n        ></simple-icon-button>\n        <simple-icon-button\n          title="EXIF Data"\n          icon="image:camera-roll"\n          @click="','"\n        ></simple-icon-button>\n        <slot name="toolbar"></slot>\n      </div>\n      <exif-data\n        id="exif"\n        @click=','\n        no-events\n        ?no-left="','"\n        ><img src="','" />\n      </exif-data>\n      <img-pan-zoom id="img" src="','"></img-pan-zoom>\n      <slot></slot>\n    ']);return u=function(){return t},t}function f(){var t=l(["\n        :host {\n          display: block;\n          overflow: hidden;\n          background-color: var(--image-inspector-background-color, #fdfdfd);\n        }\n\n        simple-icon-button {\n          display: inline-flex;\n          --simple-icon-width: 36px;\n          --simple-icon-height: 36px;\n          margin: 0 8px;\n          background-color: var(--image-inspector-background-color, #fdfdfd);\n          transition: 0.2s all ease-in-out;\n        }\n        simple-icon-button:hover,\n        simple-icon-button:focus,\n        simple-icon-button:active {\n          background-color: var(\n            --image-inspector-background-color-active,\n            #eeeeee\n          );\n        }\n\n        .top-rotated {\n          top: 150px;\n          pointer-events: none; /** disable pointer events when rotated bc of HTML canvas issue */\n        }\n        .showData {\n          display: block;\n          z-index: 2;\n        }\n        exif-data {\n          margin: 0 auto;\n          justify-content: space-evenly;\n          position: absolute;\n          display: none;\n          margin: 0;\n          padding: 0;\n        }\n        exif-data img {\n          margin: 0;\n          opacity: 0;\n          padding: 0;\n          height: 500px;\n          pointer-events: none;\n        }\n        .wrap {\n          border-bottom: 1px solid black;\n          justify-content: center;\n          display: flex;\n        }\n      "]);return f=function(){return t},t}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(s,e.LitElement);var n=c(s);function s(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(t=n.call(this)).noLeft=!1,t.degrees=0,t.src="",t}return o(s,null,[{key:"styles",get:function(){return[e.css(f())]}}]),o(s,[{key:"render",value:function(){return e.html(u(),this.zoomIn,this.zoomOut,this.rotateRight,this.rotateLeft,this.mirrorImage,this.src,this.exifDataEvent,this.hideData,this.noLeft,this.src,this.src)}},{key:"exifDataEvent",value:function(t){this.shadowRoot.querySelector("#exif").classList.contains("showData")?this.shadowRoot.querySelector("#exif").classList.remove("showData"):(this.shadowRoot.querySelector("#exif").classList.add("showData"),this.shadowRoot.querySelector("#exif").updateExif(!0))}},{key:"hideData",value:function(t){this.shadowRoot.querySelector("#exif").classList.remove("showData")}},{key:"firstUpdated",value:function(t){a(i(s.prototype),"firstUpdated",this)&&a(i(s.prototype),"firstUpdated",this).call(this,t),this.__img=this.shadowRoot.querySelector("#img"),this.shadowRoot.querySelector("#exif").alignTarget=this.__img,this.shadowRoot.querySelector("#exif").alignTargetTop="0px",this.shadowRoot.querySelector("#exif").updateExif()}},{key:"rotateRight",value:function(){this.degrees+=90,this.__img.style.transform="rotate("+this.degrees+"deg)",this.__img.classList.contains("top-rotated")?this.__img.classList.remove("top-rotated"):this.__img.classList.add("top-rotated")}},{key:"rotateLeft",value:function(){this.degrees+=-90,this.__img.style.transform="rotate("+this.degrees+"deg)",this.__img.classList.contains("top-rotated")?this.__img.classList.remove("top-rotated"):this.__img.classList.add("top-rotated")}},{key:"mirrorImage",value:function(){"scaleX(1)"===this.__img.style.transform?this.__img.style.transform="scaleX(-1)":this.__img.style.transform="scaleX(1)"}},{key:"zoomIn",value:function(){this.__img.zoomIn()}},{key:"zoomOut",value:function(){this.__img.zoomOut()}}],[{key:"tag",get:function(){return"image-inspector"}},{key:"properties",get:function(){return{noLeft:{type:Boolean,attribute:"no-left"},degrees:{type:Number,reflect:!0},src:{type:String},hoverClass:{type:String,attribute:"hover-class"}}}}]),s}();window.customElements.define(p.tag,p),t.ImageInspector=p,Object.defineProperty(t,"__esModule",{value:!0})});
