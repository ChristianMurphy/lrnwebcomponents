!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/materializecss-styles/materializecss-styles.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/paper-tooltip/paper-tooltip.js"),require("@polymer/iron-icons/iron-icons.js"),require("@lrnwebcomponents/lrn-icons/lrn-icons.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/materializecss-styles/materializecss-styles.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js","@polymer/paper-button/paper-button.js","@polymer/paper-tooltip/paper-tooltip.js","@polymer/iron-icons/iron-icons.js","@lrnwebcomponents/lrn-icons/lrn-icons.js"],e):e((n=n||self).SimpleConceptNetwork={},n.polymerLegacy_js)}(this,function(n,e){"use strict";function o(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function t(){var n=o(['\n    <style include="materializecss-styles">\n      :host {\n        display: inline-flex;\n        --simple-concept-network-color: #220066;\n        --simple-concept-network-bg: #ffffff;\n      }\n      paper-button {\n        -webkit-transition: 0.6s transform ease-in-out;\n        transition: 0.6s transform ease-in-out;\n        -webkit-clip-path: polygon(\n          50% 0%,\n          100% 25%,\n          100% 75%,\n          50% 100%,\n          0% 75%,\n          0% 25%\n        );\n        clip-path: polygon(\n          50% 0%,\n          100% 25%,\n          100% 75%,\n          50% 100%,\n          0% 75%,\n          0% 25%\n        );\n        color: var(--simple-concept-network-color);\n      }\n      :host([visualization="network"]) paper-button:hover,\n      :host([visualization="network"]) paper-button:focus {\n        opacity: 0.8;\n      }\n      :host([visualization="3d"]) paper-button {\n        -webkit-transform: perspective(600px) rotateX(60deg);\n        -moz-transform: perspective(600px) rotateX(60deg);\n        -ms-transform: perspective(600px) rotateX(60deg);\n        -o-transform: perspective(600px) rotateX(60deg);\n        transform: perspective(600px) rotateX(60deg);\n      }\n      :host([visualization="3d"]) paper-button:hover,\n      :host([visualization="3d"]) paper-button:focus {\n        transform: perspective(0px) rotateX(0deg);\n      }\n      iron-icon {\n        width: 50px;\n        height: 50px;\n        margin: 1px 19px;\n        z-index: 3;\n        color: var(--simple-concept-network-color);\n      }\n      .hexagon {\n        position: relative;\n        width: 88px;\n        height: 50.81px;\n        margin: 25.4px 0;\n        background-size: auto 101.6136px;\n        background-position: center;\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);\n        background-color: var(--simple-concept-network-bg);\n      }\n\n      .hexTop,\n      .hexBottom {\n        position: absolute;\n        z-index: 1;\n        width: 62.23px;\n        height: 62.23px;\n        overflow: hidden;\n        -webkit-transform: scaleY(0.5774) rotate(-45deg);\n        -ms-transform: scaleY(0.5774) rotate(-45deg);\n        transform: scaleY(0.5774) rotate(-45deg);\n        background: inherit;\n        left: 12.89px;\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);\n      }\n\n      /*counter transform the bg image on the caps*/\n      .hexTop:after,\n      .hexBottom:after {\n        content: "";\n        position: absolute;\n        width: 88px;\n        height: 50.80682368868707px;\n        -webkit-transform: rotate(45deg) scaleY(1.7321) translateY(-25.4034px);\n        -ms-transform: rotate(45deg) scaleY(1.7321) translateY(-25.4034px);\n        transform: rotate(45deg) scaleY(1.7321) translateY(-25.4034px);\n        -webkit-transform-origin: 0 0;\n        -ms-transform-origin: 0 0;\n        transform-origin: 0 0;\n        background: inherit;\n      }\n\n      .hexTop {\n        top: -31.1127px;\n      }\n\n      .hexTop:after {\n        background-position: center top;\n      }\n\n      .hexBottom {\n        bottom: -31.1127px;\n      }\n\n      .hexBottom:after {\n        background-position: center bottom;\n      }\n\n      .hexagon:after {\n        content: "";\n        position: absolute;\n        top: 0px;\n        left: 0;\n        width: 88px;\n        height: 50.8068px;\n        z-index: 2;\n        background: inherit;\n      }\n    </style>\n    <a tabindex="-1" href="[[src]]" disabled$="[[disabled]]">\n      <paper-button disabled$="[[disabled]]" id="button">\n        <div\n          class="hexagon"\n          style$="background-image: url([[image]]); background-color:[[color]];"\n        >\n          <div class="hexTop"></div>\n          <div class="hexBottom"></div>\n          <iron-icon icon="[[icon]]" style$="color:[[iconColor]];"\n            >&gt;</iron-icon\n          >\n        </div>\n      </paper-button>\n    </a>\n    <paper-tooltip for="button" position="bottom" offset="45">\n      [[label]]\n    </paper-tooltip>\n  '],['\n    <style include="materializecss-styles">\n      :host {\n        display: inline-flex;\n        --simple-concept-network-color: #220066;\n        --simple-concept-network-bg: #ffffff;\n      }\n      paper-button {\n        -webkit-transition: 0.6s transform ease-in-out;\n        transition: 0.6s transform ease-in-out;\n        -webkit-clip-path: polygon(\n          50% 0%,\n          100% 25%,\n          100% 75%,\n          50% 100%,\n          0% 75%,\n          0% 25%\n        );\n        clip-path: polygon(\n          50% 0%,\n          100% 25%,\n          100% 75%,\n          50% 100%,\n          0% 75%,\n          0% 25%\n        );\n        color: var(--simple-concept-network-color);\n      }\n      :host([visualization="network"]) paper-button:hover,\n      :host([visualization="network"]) paper-button:focus {\n        opacity: 0.8;\n      }\n      :host([visualization="3d"]) paper-button {\n        -webkit-transform: perspective(600px) rotateX(60deg);\n        -moz-transform: perspective(600px) rotateX(60deg);\n        -ms-transform: perspective(600px) rotateX(60deg);\n        -o-transform: perspective(600px) rotateX(60deg);\n        transform: perspective(600px) rotateX(60deg);\n      }\n      :host([visualization="3d"]) paper-button:hover,\n      :host([visualization="3d"]) paper-button:focus {\n        transform: perspective(0px) rotateX(0deg);\n      }\n      iron-icon {\n        width: 50px;\n        height: 50px;\n        margin: 1px 19px;\n        z-index: 3;\n        color: var(--simple-concept-network-color);\n      }\n      .hexagon {\n        position: relative;\n        width: 88px;\n        height: 50.81px;\n        margin: 25.4px 0;\n        background-size: auto 101.6136px;\n        background-position: center;\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);\n        background-color: var(--simple-concept-network-bg);\n      }\n\n      .hexTop,\n      .hexBottom {\n        position: absolute;\n        z-index: 1;\n        width: 62.23px;\n        height: 62.23px;\n        overflow: hidden;\n        -webkit-transform: scaleY(0.5774) rotate(-45deg);\n        -ms-transform: scaleY(0.5774) rotate(-45deg);\n        transform: scaleY(0.5774) rotate(-45deg);\n        background: inherit;\n        left: 12.89px;\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);\n      }\n\n      /*counter transform the bg image on the caps*/\n      .hexTop:after,\n      .hexBottom:after {\n        content: "";\n        position: absolute;\n        width: 88px;\n        height: 50.80682368868707px;\n        -webkit-transform: rotate(45deg) scaleY(1.7321) translateY(-25.4034px);\n        -ms-transform: rotate(45deg) scaleY(1.7321) translateY(-25.4034px);\n        transform: rotate(45deg) scaleY(1.7321) translateY(-25.4034px);\n        -webkit-transform-origin: 0 0;\n        -ms-transform-origin: 0 0;\n        transform-origin: 0 0;\n        background: inherit;\n      }\n\n      .hexTop {\n        top: -31.1127px;\n      }\n\n      .hexTop:after {\n        background-position: center top;\n      }\n\n      .hexBottom {\n        bottom: -31.1127px;\n      }\n\n      .hexBottom:after {\n        background-position: center bottom;\n      }\n\n      .hexagon:after {\n        content: "";\n        position: absolute;\n        top: 0px;\n        left: 0;\n        width: 88px;\n        height: 50.8068px;\n        z-index: 2;\n        background: inherit;\n      }\n    </style>\n    <a tabindex="-1" href="[[src]]" disabled\\$="[[disabled]]">\n      <paper-button disabled\\$="[[disabled]]" id="button">\n        <div\n          class="hexagon"\n          style\\$="background-image: url([[image]]); background-color:[[color]];"\n        >\n          <div class="hexTop"></div>\n          <div class="hexBottom"></div>\n          <iron-icon icon="[[icon]]" style\\$="color:[[iconColor]];"\n            >&gt;</iron-icon\n          >\n        </div>\n      </paper-button>\n    </a>\n    <paper-tooltip for="button" position="bottom" offset="45">\n      [[label]]\n    </paper-tooltip>\n  ']);return t=function(){return n},n}function i(){var n=o(['\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n      }\n      :host([visualization="network"]) simple-concept-network-node {\n        position: relative;\n      }\n      :host([visualization="network"])\n        simple-concept-network-node:nth-child(1) {\n        top: 150px;\n        left: 176px;\n      }\n      :host([visualization="network"])\n        simple-concept-network-node:nth-child(2) {\n        top: 0px;\n        left: 60px;\n      }\n      :host([visualization="network"])\n        simple-concept-network-node:nth-child(3) {\n        top: 75px;\n        left: 60px;\n      }\n      :host([visualization="network"])\n        simple-concept-network-node:nth-child(4) {\n        top: 230px;\n        left: -56px;\n      }\n      :host([visualization="network"])\n        simple-concept-network-node:nth-child(5) {\n        top: 300px;\n        left: -282px;\n      }\n      :host([visualization="network"])\n        simple-concept-network-node:nth-child(6) {\n        top: 230px;\n        left: -515px;\n      }\n      :host([visualization="network"])\n        simple-concept-network-node:nth-child(7) {\n        top: 75px;\n        left: -630px;\n      }\n      :host([visualization="network"]) {\n        display: block;\n        min-height: 450px;\n      }\n    </style>\n    <template is="dom-repeat" items="[[nodes]]" as="node">\n      <simple-concept-network-node\n        visualization="[[visualization]]"\n        src="[[node.src]]"\n        icon="[[node.icon]]"\n        icon-color="[[node.iconColor]]"\n        image="[[node.image]]"\n        label="[[node.label]]"\n        color="[[node.color]]"\n        disabled="[[node.disabled]]"\n      ></simple-concept-network-node>\n    </template>\n  ']);return i=function(){return n},n}e.Polymer({_template:e.html(t()),is:"simple-concept-network-node",behaviors:[HAXBehaviors.PropertiesBehaviors,MaterializeCSSBehaviors.ColorBehaviors,A11yBehaviors.A11y],properties:{color:{type:String},iconColor:{type:String},visualization:{type:String,reflectToAttribute:!0,value:"3d"},icon:{type:String},image:{type:String},disabled:{type:Boolean},label:{type:String},description:{type:String},src:{type:String}}});var r=e.Polymer({_template:e.html(i()),is:"simple-concept-network",behaviors:[HAXBehaviors.PropertiesBehaviors,MaterializeCSSBehaviors.ColorBehaviors,A11yBehaviors.A11y],observers:["_valueChanged(nodes.*)"],properties:{color:{type:String},visualization:{type:String,reflectToAttribute:!0,value:"3d"},nodes:{type:Array,value:[],notify:!0}},_valueChanged:function(n){for(var e in n.base)for(var o in n.base[e])this.notifyPath("nodes."+e+"."+o)},attached:function(){this.setHaxProperties({canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Concept Network",description:"A simple way of visualizing data in a small network style configuration.",icon:"lrn:network",color:"blue",groups:["Image","Visualization"],handles:[{type:"image",source:"nodes.source",title:"nodes.label",link:"nodes.src",description:"nodes.description"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"color",title:"Color",description:"Primary / background color",inputMethod:"colorpicker",icon:"editor:format-color-fill"}],configure:[{property:"color",title:"Color",description:"Default background color",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"visualization",title:"Visualization",description:"How to visualize the concept",inputMethod:"select",options:{"3d":"3d plain",network:"network",flat:"flat"}},{property:"nodes",title:"Node list",description:"List of the items to present in the visual",inputMethod:"array",properties:[{property:"icon",title:"Icon",description:"icon to display in the middle",inputMethod:"iconpicker",options:[]},{property:"iconColor",title:"Icon Color",description:"Color for this icon",inputMethod:"colorpicker"},{property:"label",title:"Label",description:"Label",inputMethod:"textfield"},{property:"image",title:"Image",description:"Image for the background",inputMethod:"textfield",validationType:"url"},{property:"description",title:"Description",description:"A longer description that can be used as part of a modal presentation",inputMethod:"textfield"},{property:"color",title:"Color",description:"Color for this node",inputMethod:"colorpicker"},{property:"src",title:"Link",description:"Label",inputMethod:"textfield",validationType:"url"}]}],advanced:[]}})}});n.SimpleConceptNetwork=r,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=simple-concept-network.umd.js.map
