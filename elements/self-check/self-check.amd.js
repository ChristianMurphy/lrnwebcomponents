define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js","./node_modules/@polymer/paper-card/paper-card.js","./node_modules/@polymer/paper-icon-button/paper-icon-button.js","./node_modules/@polymer/iron-icons/editor-icons.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@polymer/paper-tooltip/paper-tooltip.js","./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js","./node_modules/@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js"],function(_exports,_polymerLegacy,_HAXWiring,_schemaBehaviors,_paperCard,_paperIconButton,_editorIcons,_ironIcons,_paperTooltip,_materializecssStyles,_a11yBehaviors){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SelfCheck=void 0;function _templateObject_19ddea600ec911e9ba023f0d9479a0d9(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"materializecss-styles\">\n      :host {\n        display: block;\n      }\n\n      paper-card {\n        overflow: hidden;\n      }\n\n      paper-icon-button#checkBtn {\n        width: 50px;\n        height: 50px;\n        position: relative;\n        left: 16px;\n        bottom: -10px;\n      }\n\n      .check_button {\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      paper-icon-button#closeBtn {\n        width: 50px;\n        height: 50px;\n        position: relative;\n        left: 16px;\n        bottom: -16px;\n      }\n\n      .close_button {\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      iron-icon#questionmark {\n        width: 35px;\n        height: 35px;\n        padding: 5px;\n      }\n\n      .heading {\n        text-transform: uppercase;\n        font-size: 22px;\n        margin: 10px;\n      }\n\n      #header_wrap {\n        display: inline-flex;\n        width: 100%;\n        margin: -20px 0 0;\n      }\n\n      #question_wrap {\n        position: relative;\n      }\n\n      .question {\n        font-size: 16px;\n        padding: 15px 15px;\n      }\n\n      :host([correct]) .question {\n        display: none;\n      }\n\n      #answer_wrap {\n        visibility: hidden;\n        opacity: 0;\n        background-color: #66bb6a;\n        border-top: 2px solid #fff;\n        width: 100%;\n        top: 0;\n        transition: all 0.2s ease;\n        left: calc(100%);\n        position: absolute;\n      }\n\n      :host([correct]) #answer_wrap {\n        visibility: visible;\n        opacity: 1;\n        position: relative;\n        left: 0;\n      }\n\n      .answer {\n        color: #fff;\n        font-size: 16px;\n        padding: 15px;\n        line-height: 19.2px;\n      }\n\n      #quote_start {\n        display: inline-flex;\n        transform: rotateY(180deg);\n      }\n\n      #quote_end {\n        display: inline-flex;\n      }\n\n      .triangle {\n        width: 0;\n        height: 0;\n        border-left: 20px solid transparent;\n        border-right: 20px solid transparent;\n        border-bottom: 20px solid;\n        position: relative;\n        top: -20px;\n        left: -1px;\n      }\n\n      .more_info {\n        display: inline;\n      }\n\n      .more_info a {\n        text-decoration: none;\n        color: #fff;\n      }\n\n      .more_info a:hover {\n        color: #1976d2;\n      }\n    </style>\n\n    <paper-card image=\"[[image]]\" alt=\"[[alt]]\">\n      <div\n        class=\"triangle\"\n        style$=\"border-bottom-color:[[backgroundColor]];\"\n      ></div>\n      <div\n        id=\"header_wrap\"\n        class$=\"[[backgroundColorClass]] [[textColorClass]]\"\n      >\n        <iron-icon id=\"questionmark\" icon=\"icons:help\"></iron-icon>\n        <div class=\"heading\">[[title]]</div>\n      </div>\n      <div id=\"question_wrap\">\n        <div class=\"question\">\n          <slot name=\"question\"></slot>\n          <div class=\"check_button\">\n            <paper-icon-button\n              id=\"checkBtn\"\n              icon=\"icons:check-circle\"\n              on-click=\"openAnswer\"\n              noink=\"\"\n            ></paper-icon-button>\n            <paper-tooltip for=\"checkBtn\" position=\"left\"\n              >Reveal Answer</paper-tooltip\n            >\n          </div>\n        </div>\n\n        <div id=\"answer_wrap\">\n          <div class=\"answer\">\n            <slot></slot>\n            <div class=\"more_info\">\n              <a href=\"[[link]]\" target=\"_blank\">More info...</a>\n            </div>\n            <div class=\"close_button\">\n              <paper-icon-button\n                id=\"closeBtn\"\n                icon=\"icons:close\"\n                on-click=\"openAnswer\"\n                noink=\"\"\n              ></paper-icon-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </paper-card>\n  "],["\n    <style include=\"materializecss-styles\">\n      :host {\n        display: block;\n      }\n\n      paper-card {\n        overflow: hidden;\n      }\n\n      paper-icon-button#checkBtn {\n        width: 50px;\n        height: 50px;\n        position: relative;\n        left: 16px;\n        bottom: -10px;\n      }\n\n      .check_button {\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      paper-icon-button#closeBtn {\n        width: 50px;\n        height: 50px;\n        position: relative;\n        left: 16px;\n        bottom: -16px;\n      }\n\n      .close_button {\n        display: flex;\n        justify-content: flex-end;\n      }\n\n      iron-icon#questionmark {\n        width: 35px;\n        height: 35px;\n        padding: 5px;\n      }\n\n      .heading {\n        text-transform: uppercase;\n        font-size: 22px;\n        margin: 10px;\n      }\n\n      #header_wrap {\n        display: inline-flex;\n        width: 100%;\n        margin: -20px 0 0;\n      }\n\n      #question_wrap {\n        position: relative;\n      }\n\n      .question {\n        font-size: 16px;\n        padding: 15px 15px;\n      }\n\n      :host([correct]) .question {\n        display: none;\n      }\n\n      #answer_wrap {\n        visibility: hidden;\n        opacity: 0;\n        background-color: #66bb6a;\n        border-top: 2px solid #fff;\n        width: 100%;\n        top: 0;\n        transition: all 0.2s ease;\n        left: calc(100%);\n        position: absolute;\n      }\n\n      :host([correct]) #answer_wrap {\n        visibility: visible;\n        opacity: 1;\n        position: relative;\n        left: 0;\n      }\n\n      .answer {\n        color: #fff;\n        font-size: 16px;\n        padding: 15px;\n        line-height: 19.2px;\n      }\n\n      #quote_start {\n        display: inline-flex;\n        transform: rotateY(180deg);\n      }\n\n      #quote_end {\n        display: inline-flex;\n      }\n\n      .triangle {\n        width: 0;\n        height: 0;\n        border-left: 20px solid transparent;\n        border-right: 20px solid transparent;\n        border-bottom: 20px solid;\n        position: relative;\n        top: -20px;\n        left: -1px;\n      }\n\n      .more_info {\n        display: inline;\n      }\n\n      .more_info a {\n        text-decoration: none;\n        color: #fff;\n      }\n\n      .more_info a:hover {\n        color: #1976d2;\n      }\n    </style>\n\n    <paper-card image=\"[[image]]\" alt=\"[[alt]]\">\n      <div\n        class=\"triangle\"\n        style\\$=\"border-bottom-color:[[backgroundColor]];\"\n      ></div>\n      <div\n        id=\"header_wrap\"\n        class\\$=\"[[backgroundColorClass]] [[textColorClass]]\"\n      >\n        <iron-icon id=\"questionmark\" icon=\"icons:help\"></iron-icon>\n        <div class=\"heading\">[[title]]</div>\n      </div>\n      <div id=\"question_wrap\">\n        <div class=\"question\">\n          <slot name=\"question\"></slot>\n          <div class=\"check_button\">\n            <paper-icon-button\n              id=\"checkBtn\"\n              icon=\"icons:check-circle\"\n              on-click=\"openAnswer\"\n              noink=\"\"\n            ></paper-icon-button>\n            <paper-tooltip for=\"checkBtn\" position=\"left\"\n              >Reveal Answer</paper-tooltip\n            >\n          </div>\n        </div>\n\n        <div id=\"answer_wrap\">\n          <div class=\"answer\">\n            <slot></slot>\n            <div class=\"more_info\">\n              <a href=\"[[link]]\" target=\"_blank\">More info...</a>\n            </div>\n            <div class=\"close_button\">\n              <paper-icon-button\n                id=\"closeBtn\"\n                icon=\"icons:close\"\n                on-click=\"openAnswer\"\n                noink=\"\"\n              ></paper-icon-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </paper-card>\n  "]);_templateObject_19ddea600ec911e9ba023f0d9479a0d9=function _templateObject_19ddea600ec911e9ba023f0d9479a0d9(){return data};return data}var SelfCheck=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_19ddea600ec911e9ba023f0d9479a0d9()),is:"self-check",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema,A11yBehaviors.A11y,MaterializeCSSBehaviors.ColorBehaviors],properties:{title:{type:String,value:"Self-Check"},question:{type:String,value:""},image:{type:String,value:"",reflectToAttribute:!0},alt:{type:String,value:"",reflectToAttribute:!0},link:{type:String,value:"",reflectToAttribute:!0},correct:{type:Boolean,value:!1,reflectToAttribute:!0},textColor:{type:String,value:"#ffffff",reflectToAttribute:!0},textColorClass:{type:String,value:null,reflectToAttribute:!0,computed:"_computeColorClass(textColor)"},backgroundColor:{type:String,value:"#1976d2",reflectToAttribute:!0,observer:"_backgroundColorChanged"},backgroundColorClass:{type:String,reflectToAttribute:!0,computed:"_computeColorClass(backgroundColor)"}},openAnswer:function openAnswer(){this.correct=!this.correct},attached:function attached(){var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Self-Check",description:"The user will be able to complete a self-check.",icon:"icons:check-circle",color:"orange",groups:["Image","Assessment"],handles:[{type:"image",source:"image",title:"question",description:"answer"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"The image of the element",inputMethod:"textfield",icon:"editor:insert-photo"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield"},{property:"image",title:"Image",description:"The image of the element",inputMethod:"textfield"},{property:"alt",title:"Alt Text",description:"Add alt text to the image",inputMethod:"alt"},{slot:"question",title:"Question to ask",description:"This is where you enter a question for the self-check.",inputMethod:"code-editor",required:!0},{slot:"",title:"Answer",description:"This is where you enter a question for the self-check.",inputMethod:"code-editor",required:!0},{property:"backgroundColor",title:"Background color",description:"Select the background color used",inputMethod:"colorpicker"}],advanced:[]}};this.setHaxProperties(props)},_backgroundColorChanged:function _backgroundColorChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&null!=newValue){this.computeTextPropContrast("textColor","backgroundColor")}},_primaryColorChanged:function _primaryColorChanged(newValue,oldValue){if(null!=newValue&&babelHelpers.typeof(this.source)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){this.videoColor=newValue.substring(1);var source=this.source;this.set("source","");this.set("source",source)}},_computeColorClass:function _computeColorClass(color){if(null!=color&&"#ffffff"==color.toLowerCase()){return"white-text"}else if(null!=color&&"#000000"==color){return"black-text"}else if(null!=color&&"#"==color.substring(0,1)){return this._colorTransform(color.toLowerCase(),"","")}}});_exports.SelfCheck=SelfCheck});