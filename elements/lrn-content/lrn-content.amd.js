define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js"],function(_exports,_polymerLegacy){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrnContent=void 0;function _templateObject_f2d237800ec511e98723b3faebcd744a(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div typeof=\"oer:SupportingMaterial\">\n      <h2 property=\"oer:name\" hidden$=\"[[!title]]\">[[title]]</h2>\n      <div property=\"oer:description\"><slot></slot></div>\n    </div>\n  "]);_templateObject_f2d237800ec511e98723b3faebcd744a=function _templateObject_f2d237800ec511e98723b3faebcd744a(){return data};return data}var LrnContent=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_f2d237800ec511e98723b3faebcd744a()),is:"lrn-content",properties:{title:{type:String,value:!1}}});_exports.LrnContent=LrnContent});