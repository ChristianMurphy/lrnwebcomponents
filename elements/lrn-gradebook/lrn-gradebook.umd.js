!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/iron-data-table/iron-data-table.js"),require("@polymer/iron-ajax/iron-ajax.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/iron-data-table/iron-data-table.js","@polymer/iron-ajax/iron-ajax.js"],t):t((e=e||self).LrnGradebook={},e.polymerLegacy_js)}(this,function(e,t){"use strict";var a=document.createElement("div");a.setAttribute("style","display: none;"),a.innerHTML='<dom-module id="lrn-gradebook">\n<style>\n  data-table-row {\n    border: 10px solid black;\n  }\n</style>\n  <template>\n    <iron-ajax url="demo/data.json" last-response="{{data}}" auto=""></iron-ajax>\n\t\t  <iron-data-table items="[[data]]">\n\t\t    <data-table-column name="First Name">\n\t\t      <template>[[item.name.first]]</template>\n\t\t    </data-table-column>\n\t\t    <data-table-column name="Last Name">\n\t\t      <template>[[item.name.last]]</template>\n\t\t    </data-table-column>\n\t\t  </iron-data-table>\n  </template>\n\n  \n</dom-module>',document.head.appendChild(a);var n=t.Polymer({is:"lrn-gradebook",properties:{data:{type:Object}}});e.LrnGradebook=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrn-gradebook.umd.js.map
