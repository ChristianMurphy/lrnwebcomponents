define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/paper-card/paper-card.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@lrnwebcomponents/paper-contact/paper-contact.js"],function(_exports,_polymerLegacy,_paperCard,_paperButton,_ironIcons,_paperContact){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.LrndesignBiocard=void 0;function _templateObject_6a6957000ec711e9b6dfc9889fc6de6e(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n      iron-icon {\n        display: inline-block;\n      }\n    </style>\n    <paper-card image=\"[[image]]\">\n      <div class=\"card-content\">\n        <div class=\"cafe-header\">[[instructorName]]</div>\n        <p>\n          Contact Me:<br />\n          <paper-contact-list>\n            <paper-contact-address latitude=\"51.5287718\" longitude=\"-0.2416798\"\n              >[[address]]</paper-contact-address\n            >\n            <paper-contact-email>[[email]]</paper-contact-email>\n            <paper-contact-phone>[[phone]]</paper-contact-phone>\n            <paper-contact-mobile>[[phone]]</paper-contact-mobile>\n          </paper-contact-list>\n        </p>\n        <p><slot></slot></p>\n        <p><iron-icon icon=\"icons:query-builder\"></iron-icon> Office Hours:</p>\n        [[officeHours]]\n        <p>\n          <a href=\"mailto:[[email]]\">\n            <paper-button raised\n              ><iron-icon icon=\"icons:today\"></iron-icon> Schedule\n              Appointment</paper-button\n            >\n          </a>\n        </p>\n        <p>\n          Social\n          <paper-contact-list style=\"width: 300px;\">\n            <paper-contact-linkedin>[[linkedin]]</paper-contact-linkedin>\n            <paper-contact-twitter>[[twitter]]</paper-contact-twitter>\n            <paper-contact-skype>[[videoConf]]</paper-contact-skype>\n          </paper-contact-list>\n        </p>\n      </div>\n    </paper-card>\n  "]);_templateObject_6a6957000ec711e9b6dfc9889fc6de6e=function _templateObject_6a6957000ec711e9b6dfc9889fc6de6e(){return data};return data}var LrndesignBiocard=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_6a6957000ec711e9b6dfc9889fc6de6e()),is:"lrndesign-biocard",properties:{title:{type:String,value:"lrndesign-biocard"},image:{type:String,value:""},instructorName:{type:String,value:""},address:{type:String,value:""},phone:{type:String,value:""},email:{type:String,value:""},officeHours:{type:String,value:""},linkedin:{type:String,value:""},twitter:{type:String,value:""},videoConf:{type:String,value:""}}});_exports.LrndesignBiocard=LrndesignBiocard});