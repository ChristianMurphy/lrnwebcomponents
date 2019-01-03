!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/utils/resolve-url.js"),require("@polymer/paper-material/paper-material.js"),require("@polymer/paper-fab/paper-fab.js"),require("@polymer/paper-icon-button/paper-icon-button.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icons/av-icons.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/utils/resolve-url.js","@polymer/paper-material/paper-material.js","@polymer/paper-fab/paper-fab.js","@polymer/paper-icon-button/paper-icon-button.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icons/av-icons.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],t):t((e=e||self).WavePlayer={},e.polymerLegacy_js,e.resolveUrl_js)}(this,function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){var e,t,n=(e=['\n    <style>\n      :host {\n        height: 150px;\n        background-color: var(--dark-primary-color);\n        display: block;\n      }\n\n      paper-icon-button {\n        position: absolute;\n      }\n\n      .title,\n      .subtitle {\n        transition: all 0.5s ease;\n        padding: 10px 10px 10px 0;\n        left: 160px;\n        position: absolute;\n      }\n\n      .subtitle {\n        bottom: 0;\n      }\n\n      .controls {\n        height: 50px;\n        width: 100%;\n        top: 0;\n        background: var(--accent-color);\n        z-index: 20;\n      }\n\n      paper-fab {\n        transition: all 0.5s ease;\n        top: -25px;\n        z-index: 25;\n        border-radius: 0;\n      }\n\n      .albuminfo {\n        position: relative;\n        transition: all 0.5s ease;\n        top: -156px;\n        margin-bottom: -150px;\n        z-index: 20;\n        height: 150px;\n        background-color: rgba(0, 0, 0, 0.4);\n        color: #fff;\n        font-family: Roboto, sans-serif;\n      }\n\n      .albuminfoActive {\n        top: -25;\n        height: 25px;\n        width: 100%;\n        margin-bottom: -19px;\n      }\n\n      .waveContainer {\n        top: -31px;\n        transition: all 0.5s ease;\n        background-color: var(--dark-primary-color);\n        transform: scaleY(1.5);\n      }\n\n      .circleAnimation {\n        border-radius: 50%;\n        overflow: auto;\n        -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);\n      }\n\n      .circleAnimation:active {\n        -moz-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);\n        box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);\n      }\n\n      .playActive {\n        top: 0;\n        width: 100%;\n        height: 50px;\n      }\n\n      .waveActive {\n        top: 0px;\n        transform: scaleY(1);\n      }\n\n      .centred,\n      .titleActive {\n        transform: scaleY(0);\n      }\n\n      .titleActive {\n        opacity: 0;\n      }\n\n      #playbutton {\n        transition: all 0.5s ease;\n      }\n\n      .coverart {\n        transition: all 0.5s ease;\n        width: 150px;\n        height: 150px;\n      }\n\n      .title {\n        font-size: 24px;\n      }\n\n      .coverartActive {\n        width: 25px;\n        height: 25px;\n      }\n\n      .nameActive {\n        font-size: 19px;\n        padding: 3px 3px 3px 0;\n        left: 30px;\n      }\n\n      .centred {\n        top: calc(50% - 20px);\n        left: calc(50% - 20px);\n        transition: all 0.3s ease;\n      }\n\n      .left,\n      .middle,\n      .right {\n        transform: scale(1);\n      }\n\n      .left {\n        left: calc(25% - 20px);\n      }\n\n      .right {\n        left: calc(75% - 20px);\n      }\n\n      .hidden {\n        display: none;\n      }\n\n      @media only screen and (max-width: 500px) {\n        .albuminfo {\n          width: 100%;\n        }\n      }\n    </style>\n    <paper-fab\n      id="playbutton"\n      class="circleAnimation"\n      disabled=""\n      icon="av:play-arrow"\n      on-click="togglePlay"\n    ></paper-fab>\n    <paper-material id="controls" class="controls hidden" elevation="2">\n      <paper-icon-button\n        class="centred middle"\n        style="color: white;"\n        icon="av:pause"\n        on-click="togglePlay"\n      ></paper-icon-button>\n      <paper-icon-button\n        id="replay"\n        class="centred"\n        style="color: white;"\n        icon="av:replay-30"\n        on-click="throwBack"\n      ></paper-icon-button>\n      <paper-icon-button\n        id="mute"\n        class="centred"\n        style="color: white;"\n        icon="av:volume-up"\n        on-click="toggleMute"\n      ></paper-icon-button>\n    </paper-material>\n    <div id="container" class="waveContainer" elevation="0"></div>\n    <div id="albuminfo" class="albuminfo">\n      <img class="coverart" src="[[coverart]]" />\n      <span class="title">[[title]]</span>\n      <span class="subtitle">[[subtitle]]</span>\n    </div>\n  '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return o=function(){return n},n}var r=t.Polymer({_template:t.html(o()),is:"wave-player",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema],properties:{src:{type:String,notify:!0,observer:"_srcChanged"},title:{type:String,value:"",notify:!0},subtitle:{type:String,value:"",notify:!0},coverart:{type:String,value:"",notify:!0},wavesurfer:{type:Object},lean:{type:String,value:"left",notify:!0},wavecolor:{type:String,value:"#ffffff",notify:!0},progresscolor:{type:String,value:"#CFD8DC",notify:!0}},_srcChanged:function(e,t){"undefined"!==i(e)&&this.__wavesurfer&&window.wavesurferobject.load(e)},created:function(){var e=n.pathFromUrl("undefined"!=typeof document?document.currentScript&&document.currentScript.src||document.baseURI:new("undefined"!=typeof URL?URL:require("url").URL)("file:"+__filename).href),t="".concat(e,"lib/wavesurfer.js/dist/wavesurfer.js");window.addEventListener("es-bridge-".concat("wavesurfer","-loaded"),this._wavesurferLoaded.bind(this)),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("wavesurfer",t)},attached:function(){this.setHaxProperties({canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Audio player",description:"Audio that is just like spotify.",icon:"av:play-circle-filled",color:"purple",groups:["Video","Media"],handles:[{type:"audio",source:"src",title:"title",caption:"subtitle"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"src",title:"Source",description:"The URL for this video.",inputMethod:"textfield",icon:"link",required:!0,validationType:"url"}],configure:[{property:"src",title:"Source",description:"The URL for this video.",inputMethod:"textfield",icon:"link",required:!0,validationType:"url"},{property:"title",title:"Title",description:"A simple title",inputMethod:"textfield",icon:"av:video-label",required:!1,validationType:"text"}],advanced:[]}})},ready:function(){if("right"===this.lean?(this.$.playbutton.style.right="25",this.$.controls.style.right="0"):(this.$.playbutton.style.left="25",this.$.controls.style.left="0"),""===this.name&&this.$.albuminfo.classList.add("hidden"),""===this.coverart){var e=n.pathFromUrl("undefined"!=typeof document?document.currentScript&&document.currentScript.src||document.baseURI:new("undefined"!=typeof URL?URL:require("url").URL)("file:"+__filename).href);this.coverart="".concat(e,"lib/art.jpg")}},_wavesurferLoaded:function(){this.__wavesurfer=!0,this.initWaveSurfer()},activateAnimation:function(){var e=this.$.container,t=this.$.playbutton,n=this.$.controls,i=this.$.mute,o=this.$.replay,r=this.$.albuminfo,a=r.querySelector(".coverart"),s=r.querySelector(".title"),l=r.querySelector(".subtitle");t.setAttribute("icon","av:pause"),t.classList.remove("circleAnimation"),t.classList.add("playActive"),r.classList.add("albuminfoActive"),a.classList.add("coverartActive"),s.classList.add("nameActive"),l.classList.add("titleActive"),"right"===this.lean?this.$.playbutton.style.right="0":this.$.playbutton.style.left="0",e.classList.add("waveActive"),setTimeout(function(){n.classList.remove("hidden"),t.classList.add("hidden")},500),setTimeout(function(){i.classList.add("right"),o.classList.add("left")},600)},deactivateAnimation:function(){var e=this,t=this.$.container,n=this.$.playbutton,i=this.$.controls,o=this.$.mute,r=this.$.replay,a=this.$.albuminfo,s=a.querySelector(".coverart"),l=a.querySelector(".title"),c=a.querySelector(".subtitle");o.classList.remove("right"),r.classList.remove("left"),setTimeout(function(){i.classList.add("hidden"),n.classList.remove("hidden")},100),setTimeout(function(){n.setAttribute("icon","av:play-arrow"),n.classList.add("circleAnimation"),n.classList.remove("playActive"),a.classList.remove("albuminfoActive"),s.classList.remove("coverartActive"),l.classList.remove("nameActive"),c.classList.remove("titleActive"),"right"===e.lean?n.style.right="25":n.style.left="25",t.classList.remove("waveActive")},200)},initWaveSurfer:function(){var e=this;window.wavesurferobject=new WaveSurfer({container:this.$.container,waveColor:this.wavecolor,progressColor:this.progresscolor,fillParent:!0,height:100}),window.wavesurferobject.init(),"undefined"!==i(this.src)&&window.wavesurferobject.load(this.src),window.wavesurferobject.on("ready",function(){e.$.playbutton.removeAttribute("disabled")}),window.wavesurferobject.on("finish",function(){e.deactivateAnimation()})},togglePlay:function(e){window.wavesurferobject.playPause(),"av:play-arrow"===this.$.playbutton.getAttribute("icon")?this.activateAnimation():this.deactivateAnimation()},toggleMute:function(e){var t=this.$.mute,n=t.getAttribute("icon");window.wavesurferobject.toggleMute(),"av:volume-up"===n?t.setAttribute("icon","av:volume-off"):t.setAttribute("icon","av:volume-up")},throwBack:function(e){window.wavesurferobject.skipBackward(30)}});e.WavePlayer=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=wave-player.umd.js.map
