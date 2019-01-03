!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/utils/resolve-url.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/utils/resolve-url.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],i):i((e=e||self).ImgPanZoom={},e.polymerLegacy_js,e.resolveUrl_js)}(this,function(e,i,o){"use strict";function n(e,i){return i||(i=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(i)}}))}function t(){var e=n(['\n    <img id="img" hidden="" src="[[src]]" />\n  ']);return t=function(){return e},e}function r(){var e=n(['\n    <style>\n      :host {\n        display: block;\n        position: relative;\n        height: 500px;\n      }\n      #viewer {\n        position: relative;\n        height: 100%;\n        width: 100%;\n      }\n\n      paper-spinner-lite {\n        opacity: 0;\n        display: block;\n        transition: opacity 700ms;\n        position: absolute;\n        margin: auto;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        z-index: 1;\n        height: 70px;\n        width: 70px;\n        --paper-spinner-color: var(--img-pan-zoom-spinner-color, #2196f3);\n        --paper-spinner-stroke-width: var(--img-pan-zoom-spinner-width, 5px);\n        @apply --img-pan-zoom-spinner;\n      }\n      paper-spinner-lite[active] {\n        opacity: 1;\n      }\n    </style>\n\n    \x3c!-- Only preload regular images --\x3e\n    <template is="dom-if" if="[[!dzi]]">\n      <paper-spinner-lite\n        hidden$="[[hideSpinner]]"\n        active="[[loading]]"\n      ></paper-spinner-lite>\n      <img-loader\n        loaded="{{loaded}}"\n        loading="{{loading}}"\n        src="[[src]]"\n      ></img-loader>\n    </template>\n\n    \x3c!-- Openseadragon --\x3e\n    <div id="viewer"></div>\n  ']);return r=function(){return e},e}i.Polymer({_template:i.html(t()),is:"img-loader",properties:{src:{observer:"_srcChanged",type:String},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1}},ready:function(){var e=this.$.img;e.onload=function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))}.bind(this),e.onerror=function(){this.$.img.src===this._resolveSrc(this.src)&&(this._reset(),this._setLoading(!1),this._setLoaded(!1),this._setError(!0))}.bind(this),this._resolvedSrc=""},_srcChanged:function(e,i){var o=this._resolveSrc(e);o!==this._resolvedSrc&&(this._resolvedSrc=o,this._reset(),this._load(e))},_load:function(e){e?this.$.img.src=e:this.$.img.removeAttribute("src"),this._setLoading(!!e),this._setLoaded(!1),this._setError(!1)},_reset:function(){this.$.img.removeAttribute("src"),this._setLoading(!1),this._setLoaded(!1),this._setError(!1)},_resolveSrc:function(e){var i=this.ownerDocument.baseURI;return new URL(this.resolveUrl(e,i),i).href}});var a=i.Polymer({_template:i.html(r()),is:"img-pan-zoom",properties:{src:{type:String},dzi:{type:Boolean,value:!1},fadeIn:{type:Boolean,value:!0},loading:{type:Boolean,readonly:!0,notify:!0},hideSpinner:{type:Boolean,value:!1},loaded:{type:Boolean,readonly:!0,notify:!0,observer:"_loadedChanged"},showNavigationControl:{type:Boolean,value:!1},showNavigator:{type:Boolean,value:!1},zoomPerClick:{type:Number,value:2},zoomPerScroll:{type:Number,value:1.2},animationTime:{type:Number,value:1.2},navPrevNextWrap:{type:Boolean,value:!1},showRotationControl:{type:Boolean,value:!1},minZoomImageRatio:{type:Number,value:1},maxZoomPixelRatio:{type:Number,value:1.1},constrainDuringPan:{type:Boolean,value:!1},visibilityRatio:{type:Number,value:1}},observers:["_srcChanged(src)"],created:function(){var e="openseadragon",i=o.pathFromUrl("undefined"!=typeof document?document.currentScript&&document.currentScript.src||document.baseURI:new("undefined"!=typeof URL?URL:require("url").URL)("file:"+__filename).href),n="".concat(i,"lib/openseadragon/build/openseadragon/openseadragon.js");window.addEventListener("es-bridge-".concat(e,"-loaded"),this._openseadragonLoaded.bind(this)),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load(e,n)},_openseadragonLoaded:function(){this.__openseadragonLoaded=!0,this.dzi&&this._initOpenSeadragon()},ready:function(){this.animationConfig={fade:{name:"fade-in-animation",node:this.$.viewer}},this.dzi&&this.__openseadragonLoaded&&this._initOpenSeadragon()},_initOpenSeadragon:function(){var e=this;setTimeout(function(){var i=e.src;e.dzi||(i={type:"image",url:e.src,buildPyramid:!1}),e.viewer=new OpenSeadragon({element:e.$.viewer,visibilityRatio:e.visibilityRatio,constrainDuringPan:e.constrainDuringPan,showNavigationControl:e.showNavigationControl,showNavigator:e.showNavigator,zoomPerClick:e.zoomPerClick,zoomPerScroll:e.zoomPerScroll,animationTime:e.animationTime,navPrevNextWrap:e.navPrevNextWrap,showRotationControl:e.showRotationControl,minZoomImageRatio:e.minZoomImageRatio,maxZoomPixelRatio:e.maxZoomPixelRatio,tileSources:i}),e.init=!0},100)},destroy:function(){this.viewer.destroy()},zoomIn:function(){var e=this.viewer.viewport.getZoom()+.7;e<this.viewer.viewport.getMaxZoom()&&this.viewer.viewport.zoomTo(e)},zoomOut:function(){var e=this.viewer.viewport.getZoom(),i=this.viewer.viewport.getMinZoom(),o=e-.7;o>i?this.viewer.viewport.zoomTo(o):i!=e&&this.resetZoom()},resetZoom:function(){this.viewer.viewport.goHome()},_srcChanged:function(){this.dzi&&this.init&&this._addTiledImage()},_loadedChanged:function(){this.loaded&&(this.init?this._addImage():this._initOpenSeadragon())},_addImage:function(){this.viewer.addSimpleImage({url:this.src,index:0,replace:!0})},_addTiledImage:function(){this.viewer.addTiledImage({tileSource:this.src,index:0,replace:!0})}});e.ImgPanZoom=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=img-pan-zoom.umd.js.map
