!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/polymer/lib/utils/flattened-nodes-observer.js"),require("@polymer/paper-button/paper-button.js"),require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"),require("@polymer/iron-collapse/iron-collapse.js"),require("@polymer/iron-behaviors/iron-button-state.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icon/iron-icon.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/polymer/lib/utils/flattened-nodes-observer.js","@polymer/paper-button/paper-button.js","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js","@polymer/iron-collapse/iron-collapse.js","@polymer/iron-behaviors/iron-button-state.js"],e):e((n=n||self).LrndesignMapmenu={},n.polymerLegacy_js,null,null,null,n.flattenedNodesObserver_js,null,null,null,n.ironButtonState_js)}(this,function(n,e,r,t,i,o,l,a,s,p){"use strict";function d(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function u(){var n=d(['\n    <style>\n      :host {\n        display: block;\n        --lrndesign-mapmenu-item-height: 16px;\n      }\n      iron-icon {\n        --iron-icon-height: var(--lrndesign-mapmenu-item-height);\n        display: inline-flex;\n      }\n    </style>\n    <template is="dom-if" if="[[icon]]">\n      <iron-icon icon="[[icon]]"></iron-icon>\n    </template>\n    <span id="title">[[title]]</span>\n  ']);return u=function(){return n},n}var m,c,y;function b(){var n=d(['\n    <style>\n      :host {\n        display: block;\n      }\n      #container {\n        display: flex;\n        align-items: center;\n      }\n      #icon {\n        margin-right: 10px;\n      }\n      #center {\n        flex: 1 1 auto;\n      }\n      lrndesign-avatar {\n        display: inline-block;\n        background: #fff;\n        border-radius: 50%;\n        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);\n        padding: 2px;\n        position: relative;\n        margin-top: -2px;\n      }\n      lrndesign-avatar ::slotted(*) {\n        transform: translateY(2px);\n      }\n      #title {\n        font-size: 19.2px;\n      }\n      #right iron-icon {\n        color: gray;\n        display: inline-flex;\n      }\n    </style>\n    <div id="container">\n      <template is="dom-if" if="[[avatarLabel]]">\n        <div id="icon">\n          <lrndesign-avatar label="[[avatarLabel]]"></lrndesign-avatar>\n        </div>\n      </template>\n      <div id="center">\n        <div id="label">[[label]]</div>\n        <div id="title">[[title]]</div>\n      </div>\n      <div id="right">\n        <template is="dom-if" if="[[!opened]]">\n          <iron-icon icon="arrow-drop-down"></iron-icon>\n        </template>\n        <template is="dom-if" if="[[opened]]">\n          <iron-icon icon="arrow-drop-up"></iron-icon>\n        </template>\n      </div>\n    </div>\n  ']);return b=function(){return n},n}function v(){var n=d(['\n    <style>\n      :host {\n        display: block;\n      }\n      :host([collapsable]) > lrndesign-mapmenu-header {\n        cursor: pointer;\n        display: block;\n      }\n      #container {\n        padding: 16px;\n      }\n      #container ::slotted(lrndesign-mapmenu-item) {\n        margin-top: 6.4px;\n      }\n    </style>\n    <lrndesign-mapmenu-header\n      on-tap="_headerClickHandler"\n      avatar-label="[[avatarLabel]]"\n      title="[[title]]"\n      label="[[label]]"\n      opened="[[opened]]"\n    ></lrndesign-mapmenu-header>\n    <iron-collapse id="container"> <slot id="slot"></slot> </iron-collapse>\n  ']);return v=function(){return n},n}function f(){var n=d(["\n    <style>\n      :host {\n        display: block;\n      }\n      #container {\n        padding: 16px 32px;\n      }\n      :host > ::slotted(lrndesign-mapmenu-submenu + lrndesign-mapmenu-submenu) {\n        margin-top: 16px;\n      }\n    </style>\n    <slot></slot>\n  "]);return f=function(){return n},n}e.Polymer({_template:e.html(u()),is:"lrndesign-mapmenu-item",properties:(m={icon:{type:String,value:""},title:{type:String,value:""},url:{type:String,value:""}},c="icon",y={type:String,value:""},c in m?Object.defineProperty(m,c,{value:y,enumerable:!0,configurable:!0,writable:!0}):m[c]=y,m)}),e.Polymer({_template:e.html(b()),is:"lrndesign-mapmenu-header",behaviors:[p.IronButtonState],properties:{title:{type:String},label:{type:String},avatarLabel:{type:String,value:""},opened:{type:Boolean}},hostAttributes:{role:"button",tabindex:0}}),e.Polymer({_template:e.html(v()),is:"lrndesign-mapmenu-submenu",properties:{title:{type:String},avatarLabel:{type:String},label:{type:String},opened:{type:Boolean,value:!1},collapsable:{type:Boolean,value:!0},expandChildren:{type:Boolean,value:!1}},observers:["_openChanged(opened)"],_openChanged:function(n){var e=this.$.container;n&&e.show(),n||e.hide()},_headerClickHandler:function(n){this.collapsable&&(this.opened=!this.opened)},ready:function(){var n=this;this._observer=new o.FlattenedNodesObserver(this.$.slot,function(e){var r=e.addedNodes.filter(function(n){return"LRNDESIGN-MAPMENU-SUBMENU"===n.nodeName});if(n.expandChildren){var t=!0,i=!1,o=void 0;try{for(var l,a=r[Symbol.iterator]();!(t=(l=a.next()).done);t=!0){l.value.setAttribute("opened",!0)}}catch(n){i=!0,o=n}finally{try{t||null==a.return||a.return()}finally{if(i)throw o}}}})}});var g=e.Polymer({_template:e.html(f()),is:"lrndesign-mapmenu",properties:{}});n.LrndesignMapmenu=g,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-mapmenu.umd.js.map
