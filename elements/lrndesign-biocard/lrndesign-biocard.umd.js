!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/paper-card/paper-card.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/iron-icons/iron-icons.js"),require("@lrnwebcomponents/paper-contact/paper-contact.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/paper-card/paper-card.js","@polymer/paper-button/paper-button.js","@polymer/iron-icons/iron-icons.js","@lrnwebcomponents/paper-contact/paper-contact.js"],n):n((e=e||self).LrndesignBiocard={},e.polymerLegacy_js)}(this,function(e,n){"use strict";function t(){var e,n,r=(e=['\n    <style>\n      :host {\n        display: block;\n      }\n      iron-icon {\n        display: inline-block;\n      }\n    </style>\n    <paper-card image="[[image]]">\n      <div class="card-content">\n        <div class="cafe-header">[[instructorName]]</div>\n        <p>\n          Contact Me:<br />\n          <paper-contact-list>\n            <paper-contact-address latitude="51.5287718" longitude="-0.2416798"\n              >[[address]]</paper-contact-address\n            >\n            <paper-contact-email>[[email]]</paper-contact-email>\n            <paper-contact-phone>[[phone]]</paper-contact-phone>\n            <paper-contact-mobile>[[phone]]</paper-contact-mobile>\n          </paper-contact-list>\n        </p>\n        <p><slot></slot></p>\n        <p><iron-icon icon="icons:query-builder"></iron-icon> Office Hours:</p>\n        [[officeHours]]\n        <p>\n          <a href="mailto:[[email]]">\n            <paper-button raised\n              ><iron-icon icon="icons:today"></iron-icon> Schedule\n              Appointment</paper-button\n            >\n          </a>\n        </p>\n        <p>\n          Social\n          <paper-contact-list style="width: 300px;">\n            <paper-contact-linkedin>[[linkedin]]</paper-contact-linkedin>\n            <paper-contact-twitter>[[twitter]]</paper-contact-twitter>\n            <paper-contact-skype>[[videoConf]]</paper-contact-skype>\n          </paper-contact-list>\n        </p>\n      </div>\n    </paper-card>\n  '],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return t=function(){return r},r}var r=n.Polymer({_template:n.html(t()),is:"lrndesign-biocard",properties:{title:{type:String,value:"lrndesign-biocard"},image:{type:String,value:""},instructorName:{type:String,value:""},address:{type:String,value:""},phone:{type:String,value:""},email:{type:String,value:""},officeHours:{type:String,value:""},linkedin:{type:String,value:""},twitter:{type:String,value:""},videoConf:{type:String,value:""}}});e.LrndesignBiocard=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-biocard.umd.js.map
