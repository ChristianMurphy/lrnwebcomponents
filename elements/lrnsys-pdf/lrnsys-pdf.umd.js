!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/pdf-browser-viewer/pdf-browser-viewer.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/pdf-browser-viewer/pdf-browser-viewer.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],r):r((e=e||self).LrnsysPdf={},e.polymerLegacy_js)}(this,function(e,r){"use strict";function o(){var e,r,n=(e=['\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <h2>[[title]]</h2>\n    <pdf-browser-viewer\n      id="pdfViewer"\n      file="[[file]]#page=[[page]]"\n      width="100%"\n      card="[[card]]"\n      elevation="2"\n      download-label="[[downloadLabel]]"\n    ></pdf-browser-viewer>\n  '],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return o=function(){return n},n}var n=r.Polymer({_template:r.html(o()),is:"lrnsys-pdf",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema],properties:{title:{type:String,value:"lrnsys-pdf"},card:{type:Boolean,value:!1},downloadLabel:{type:String,computed:"_computeDownloadLabel(download)"},page:{type:String},file:{type:String}},_computeDownloadLabel:function(e){return e?"Download":null}});e.LrnsysPdf=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrnsys-pdf.umd.js.map
