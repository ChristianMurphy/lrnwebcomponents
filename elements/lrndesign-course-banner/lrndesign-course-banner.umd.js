!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/materializecss-styles/materializecss-styles.js"),require("@polymer/iron-image/iron-image.js"),require("@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/materializecss-styles/materializecss-styles.js","@polymer/iron-image/iron-image.js","@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"],e):e((n=n||self).LrndesignCourseBanner={},n.polymerLegacy_js)}(this,function(n,e){"use strict";function i(){var n,e,r=(n=['\n    <style include="materializecss-styles-colors">\n      :host {\n        display: block;\n      }\n      /**\n       * Dialog\n       */\n      .course-image {\n      }\n      .course-heading {\n        position: relative;\n        background-color: rgba(30, 30, 30, 0.8);\n        text-align: left;\n        margin: -5em 0 0 0;\n        padding: 16px;\n        color: #ffffff;\n        height: 64px;\n      }\n      .course-avatar {\n        float: left;\n        display: inline-flex;\n        padding: 0 16px 0 0;\n      }\n      .course-name {\n        font-size: 16px;\n        line-height: 16px;\n        min-width: 96px;\n      }\n      .course-title {\n        font-size: 16px;\n        line-height: 16px;\n        display: none;\n      }\n      .name-wrapper {\n        display: flow-root;\n        overflow: hidden;\n        text-overflow: clip;\n      }\n      @media screen and (min-width: 420px) {\n        .course-name {\n          font-size: 24px;\n        }\n        .course-title {\n          display: block;\n        }\n      }\n    </style>\n    <iron-image\n      class="course-image"\n      style="width:100%; height:200px; background-color: lightgray;"\n      sizing="cover"\n      preload=""\n      fade=""\n      src$="[[image]]"\n    ></iron-image>\n    <div class="course-heading">\n      <lrndesign-avatar\n        class="course-avatar"\n        label="[[name]]"\n        jdenticon=""\n        color="[[color]]"\n      >\n      </lrndesign-avatar>\n      <div class="name-wrapper">\n        <div class="course-name">[[name]]</div>\n        <div class="course-title">[[title]]</div>\n      </div>\n    </div>\n  '],(e=['\n    <style include="materializecss-styles-colors">\n      :host {\n        display: block;\n      }\n      /**\n       * Dialog\n       */\n      .course-image {\n      }\n      .course-heading {\n        position: relative;\n        background-color: rgba(30, 30, 30, 0.8);\n        text-align: left;\n        margin: -5em 0 0 0;\n        padding: 16px;\n        color: #ffffff;\n        height: 64px;\n      }\n      .course-avatar {\n        float: left;\n        display: inline-flex;\n        padding: 0 16px 0 0;\n      }\n      .course-name {\n        font-size: 16px;\n        line-height: 16px;\n        min-width: 96px;\n      }\n      .course-title {\n        font-size: 16px;\n        line-height: 16px;\n        display: none;\n      }\n      .name-wrapper {\n        display: flow-root;\n        overflow: hidden;\n        text-overflow: clip;\n      }\n      @media screen and (min-width: 420px) {\n        .course-name {\n          font-size: 24px;\n        }\n        .course-title {\n          display: block;\n        }\n      }\n    </style>\n    <iron-image\n      class="course-image"\n      style="width:100%; height:200px; background-color: lightgray;"\n      sizing="cover"\n      preload=""\n      fade=""\n      src\\$="[[image]]"\n    ></iron-image>\n    <div class="course-heading">\n      <lrndesign-avatar\n        class="course-avatar"\n        label="[[name]]"\n        jdenticon=""\n        color="[[color]]"\n      >\n      </lrndesign-avatar>\n      <div class="name-wrapper">\n        <div class="course-name">[[name]]</div>\n        <div class="course-title">[[title]]</div>\n      </div>\n    </div>\n  '])||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return i=function(){return r},r}var r=e.Polymer({_template:e.html(i()),is:"lrndesign-course-banner",properties:{color:{type:String},image:{type:String},name:{type:String},title:{type:String}}});n.LrndesignCourseBanner=r,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-course-banner.umd.js.map
