define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./lib/lrndesign-animationctrl-button.js"],function(_exports,_polymerLegacy,_lrndesignAnimationctrlButton){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignAnimationctrl=void 0;function _templateObject_61cf09f00ec711e9af3189f9cae53f0e(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        background: var(--animationctrl-bg-color);\n        --animationctrl-bg-color: #f5f5f5;\n      }\n      .buttons {\n        padding: 16px;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        align-items: stretch;\n        @apply --animationctrl-buttons;\n      }\n      :host .buttons ::slotted(*) {\n        display: flex;\n      }\n    </style>\n    <div class=\"buttons\"><slot></slot></div>\n  "]);_templateObject_61cf09f00ec711e9af3189f9cae53f0e=function _templateObject_61cf09f00ec711e9af3189f9cae53f0e(){return data};return data}var LrndesignAnimationctrl=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_61cf09f00ec711e9af3189f9cae53f0e()),is:"lrndesign-animationctrl",properties:{},listeners:{"lrndesign-animationctrl-button-click":"_buttonClicked"},_buttonClicked:function _buttonClicked(e){},ready:function ready(){}});_exports.LrndesignAnimationctrl=LrndesignAnimationctrl});