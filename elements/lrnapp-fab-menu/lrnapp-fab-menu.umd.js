!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?a(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/paper-fab/paper-fab.js"),require("@lrnwebcomponents/paper-fab-speed-dial/paper-fab-speed-dial.js"),require("@lrnwebcomponents/paper-fab-speed-dial/lib/paper-fab-speed-dial-overlay.js"),require("@lrnwebcomponents/materializecss-styles/materializecss-styles.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/paper-fab/paper-fab.js","@lrnwebcomponents/paper-fab-speed-dial/paper-fab-speed-dial.js","@lrnwebcomponents/paper-fab-speed-dial/lib/paper-fab-speed-dial-overlay.js","@lrnwebcomponents/materializecss-styles/materializecss-styles.js"],a):a((e=e||self).LrnappFabMenu={},e.polymerLegacy_js)}(this,function(e,a){"use strict";function p(){var e,a,n=(e=['\n    <custom-style>\n      <style include="materializecss-styles-colors"></style>\n      <style>\n        .open,\n        .overlay {\n          position: fixed;\n          bottom: var(--paper-fab-speed-dial-bottom, 16px);\n          right: var(--paper-fab-speed-dial-right, 16px);\n        }\n        .open {\n          --paper-fab-background: var(--paper-fab-speed-dial-background);\n          --paper-fab-keyboard-focus-background: var(\n            --paper-fab-speed-dial-keyboard-focus-background\n          );\n        }\n        .close {\n          --paper-fab-background: var(--paper-grey-500);\n          --paper-fab-keyboard-focus-background: var(--paper-grey-500);\n          margin-top: 20px;\n          display: inline-block;\n        }\n        .overlay {\n          text-align: right;\n        }\n      </style>\n    </custom-style>\n    <paper-fab\n      icon="[[icon]]"\n      class="open blue"\n      on-tap="open"\n      hidden$="[[opened]]"\n      disabled$="[[disabled]]"\n    ></paper-fab>\n\n    <paper-fab-speed-dial-overlay\n      class="overlay"\n      opened="{{opened}}"\n      with-backdrop\n    >\n      <slot></slot>\n      <paper-fab icon="close" class="close" on-tap="close"></paper-fab>\n    </paper-fab-speed-dial-overlay>\n  '],a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}})));return p=function(){return n},n}var n=a.Polymer({_template:a.html(p()),is:"lrnapp-fab-menu",properties:{icon:{type:String,value:"add"},opened:{type:Boolean,notify:!0},disabled:{type:Boolean,value:!1}},open:function(e){e&&e.preventDefault(),this.opened=!0},close:function(e){e&&e.preventDefault(),this.opened=!1}});e.LrnappFabMenu=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrnapp-fab-menu.umd.js.map
