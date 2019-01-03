!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@polymer/paper-card/paper-card.js"),require("@polymer/paper-icon-button/paper-icon-button.js"),require("@polymer/iron-icons/editor-icons.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/paper-tooltip/paper-tooltip.js"),require("@lrnwebcomponents/materializecss-styles/materializecss-styles.js"),require("@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@polymer/paper-card/paper-card.js","@polymer/paper-icon-button/paper-icon-button.js","@polymer/iron-icons/editor-icons.js","@polymer/iron-icons/iron-icons.js","@polymer/paper-tooltip/paper-tooltip.js","@lrnwebcomponents/materializecss-styles/materializecss-styles.js","@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js"],e):e((n=n||self).SelfCheck={},n.polymerLegacy_js)}(this,function(n,e){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(){var n,e,t=(n=['\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n      }\n\n      paper-card {\n        overflow: hidden;\n      }\n\n      paper-icon-button#checkBtn {\n        width: 50px;\n        height: 50px;\n        position: relative;\n        left: 16px;\n        bottom: -10px;\n      }\n\n      .check_button {\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      paper-icon-button#closeBtn {\n        width: 50px;\n        height: 50px;\n        position: relative;\n        left: 16px;\n        bottom: -16px;\n      }\n\n      .close_button {\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      iron-icon#questionmark {\n        width: 35px;\n        height: 35px;\n        padding: 5px;\n      }\n\n      .heading {\n        text-transform: uppercase;\n        font-size: 22px;\n        margin: 10px;\n      }\n\n      #header_wrap {\n        display: inline-flex;\n        width: 100%;\n        margin: -20px 0 0;\n      }\n\n      #question_wrap {\n        position: relative;\n      }\n\n      .question {\n        font-size: 16px;\n        padding: 15px 15px;\n      }\n\n      :host([correct]) .question {\n        display: none;\n      }\n\n      #answer_wrap {\n        visibility: hidden;\n        opacity: 0;\n        background-color: #66bb6a;\n        border-top: 2px solid #fff;\n        width: 100%;\n        top: 0;\n        transition: all 0.2s ease;\n        left: calc(100%);\n        position: absolute;\n      }\n\n      :host([correct]) #answer_wrap {\n        visibility: visible;\n        opacity: 1;\n        position: relative;\n        left: 0;\n      }\n\n      .answer {\n        color: #fff;\n        font-size: 16px;\n        padding: 15px;\n        line-height: 19.2px;\n      }\n\n      #quote_start {\n        display: inline-flex;\n        transform: rotateY(180deg);\n      }\n\n      #quote_end {\n        display: inline-flex;\n      }\n\n      .triangle {\n        width: 0;\n        height: 0;\n        border-left: 20px solid transparent;\n        border-right: 20px solid transparent;\n        border-bottom: 20px solid;\n        position: relative;\n        top: -20px;\n        left: -1px;\n      }\n\n      .more_info {\n        display: inline;\n      }\n\n      .more_info a {\n        text-decoration: none;\n        color: #fff;\n      }\n\n      .more_info a:hover {\n        color: #1976d2;\n      }\n    </style>\n\n    <paper-card image="[[image]]" alt="[[alt]]">\n      <div\n        class="triangle"\n        style$="border-bottom-color:[[backgroundColor]];"\n      ></div>\n      <div\n        id="header_wrap"\n        class$="[[backgroundColorClass]] [[textColorClass]]"\n      >\n        <iron-icon id="questionmark" icon="icons:help"></iron-icon>\n        <div class="heading">[[title]]</div>\n      </div>\n      <div id="question_wrap">\n        <div class="question">\n          <slot name="question"></slot>\n          <div class="check_button">\n            <paper-icon-button\n              id="checkBtn"\n              icon="icons:check-circle"\n              on-click="openAnswer"\n              noink=""\n            ></paper-icon-button>\n            <paper-tooltip for="checkBtn" position="left"\n              >Reveal Answer</paper-tooltip\n            >\n          </div>\n        </div>\n\n        <div id="answer_wrap">\n          <div class="answer">\n            <slot></slot>\n            <div class="more_info">\n              <a href="[[link]]" target="_blank">More info...</a>\n            </div>\n            <div class="close_button">\n              <paper-icon-button\n                id="closeBtn"\n                icon="icons:close"\n                on-click="openAnswer"\n                noink=""\n              ></paper-icon-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </paper-card>\n  '],(e=['\n    <style include="materializecss-styles">\n      :host {\n        display: block;\n      }\n\n      paper-card {\n        overflow: hidden;\n      }\n\n      paper-icon-button#checkBtn {\n        width: 50px;\n        height: 50px;\n        position: relative;\n        left: 16px;\n        bottom: -10px;\n      }\n\n      .check_button {\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      paper-icon-button#closeBtn {\n        width: 50px;\n        height: 50px;\n        position: relative;\n        left: 16px;\n        bottom: -16px;\n      }\n\n      .close_button {\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      iron-icon#questionmark {\n        width: 35px;\n        height: 35px;\n        padding: 5px;\n      }\n\n      .heading {\n        text-transform: uppercase;\n        font-size: 22px;\n        margin: 10px;\n      }\n\n      #header_wrap {\n        display: inline-flex;\n        width: 100%;\n        margin: -20px 0 0;\n      }\n\n      #question_wrap {\n        position: relative;\n      }\n\n      .question {\n        font-size: 16px;\n        padding: 15px 15px;\n      }\n\n      :host([correct]) .question {\n        display: none;\n      }\n\n      #answer_wrap {\n        visibility: hidden;\n        opacity: 0;\n        background-color: #66bb6a;\n        border-top: 2px solid #fff;\n        width: 100%;\n        top: 0;\n        transition: all 0.2s ease;\n        left: calc(100%);\n        position: absolute;\n      }\n\n      :host([correct]) #answer_wrap {\n        visibility: visible;\n        opacity: 1;\n        position: relative;\n        left: 0;\n      }\n\n      .answer {\n        color: #fff;\n        font-size: 16px;\n        padding: 15px;\n        line-height: 19.2px;\n      }\n\n      #quote_start {\n        display: inline-flex;\n        transform: rotateY(180deg);\n      }\n\n      #quote_end {\n        display: inline-flex;\n      }\n\n      .triangle {\n        width: 0;\n        height: 0;\n        border-left: 20px solid transparent;\n        border-right: 20px solid transparent;\n        border-bottom: 20px solid;\n        position: relative;\n        top: -20px;\n        left: -1px;\n      }\n\n      .more_info {\n        display: inline;\n      }\n\n      .more_info a {\n        text-decoration: none;\n        color: #fff;\n      }\n\n      .more_info a:hover {\n        color: #1976d2;\n      }\n    </style>\n\n    <paper-card image="[[image]]" alt="[[alt]]">\n      <div\n        class="triangle"\n        style\\$="border-bottom-color:[[backgroundColor]];"\n      ></div>\n      <div\n        id="header_wrap"\n        class\\$="[[backgroundColorClass]] [[textColorClass]]"\n      >\n        <iron-icon id="questionmark" icon="icons:help"></iron-icon>\n        <div class="heading">[[title]]</div>\n      </div>\n      <div id="question_wrap">\n        <div class="question">\n          <slot name="question"></slot>\n          <div class="check_button">\n            <paper-icon-button\n              id="checkBtn"\n              icon="icons:check-circle"\n              on-click="openAnswer"\n              noink=""\n            ></paper-icon-button>\n            <paper-tooltip for="checkBtn" position="left"\n              >Reveal Answer</paper-tooltip\n            >\n          </div>\n        </div>\n\n        <div id="answer_wrap">\n          <div class="answer">\n            <slot></slot>\n            <div class="more_info">\n              <a href="[[link]]" target="_blank">More info...</a>\n            </div>\n            <div class="close_button">\n              <paper-icon-button\n                id="closeBtn"\n                icon="icons:close"\n                on-click="openAnswer"\n                noink=""\n              ></paper-icon-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </paper-card>\n  '])||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return o=function(){return t},t}var i=e.Polymer({_template:e.html(o()),is:"self-check",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema,A11yBehaviors.A11y,MaterializeCSSBehaviors.ColorBehaviors],properties:{title:{type:String,value:"Self-Check"},question:{type:String,value:""},image:{type:String,value:"",reflectToAttribute:!0},alt:{type:String,value:"",reflectToAttribute:!0},link:{type:String,value:"",reflectToAttribute:!0},correct:{type:Boolean,value:!1,reflectToAttribute:!0},textColor:{type:String,value:"#ffffff",reflectToAttribute:!0},textColorClass:{type:String,value:null,reflectToAttribute:!0,computed:"_computeColorClass(textColor)"},backgroundColor:{type:String,value:"#1976d2",reflectToAttribute:!0,observer:"_backgroundColorChanged"},backgroundColorClass:{type:String,reflectToAttribute:!0,computed:"_computeColorClass(backgroundColor)"}},openAnswer:function(){this.correct=!this.correct},attached:function(){this.setHaxProperties({canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Self-Check",description:"The user will be able to complete a self-check.",icon:"icons:check-circle",color:"orange",groups:["Image","Assessment"],handles:[{type:"image",source:"image",title:"question",description:"answer"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"The image of the element",inputMethod:"textfield",icon:"editor:insert-photo"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield"},{property:"image",title:"Image",description:"The image of the element",inputMethod:"textfield"},{property:"alt",title:"Alt Text",description:"Add alt text to the image",inputMethod:"alt"},{slot:"question",title:"Question to ask",description:"This is where you enter a question for the self-check.",inputMethod:"code-editor",required:!0},{slot:"",title:"Answer",description:"This is where you enter a question for the self-check.",inputMethod:"code-editor",required:!0},{property:"backgroundColor",title:"Background color",description:"Select the background color used",inputMethod:"colorpicker"}],advanced:[]}})},_backgroundColorChanged:function(n,e){"undefined"!==t(n)&&null!=n&&this.computeTextPropContrast("textColor","backgroundColor")},_primaryColorChanged:function(n,e){if(null!=n&&"undefined"!==t(this.source)){this.videoColor=n.substring(1);var o=this.source;this.set("source",""),this.set("source",o)}},_computeColorClass:function(n){return null!=n&&"#ffffff"==n.toLowerCase()?"white-text":null!=n&&"#000000"==n?"black-text":null!=n&&"#"==n.substring(0,1)?this._colorTransform(n.toLowerCase(),"",""):void 0}});n.SelfCheck=i,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=self-check.umd.js.map
