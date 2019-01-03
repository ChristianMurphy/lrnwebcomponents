!function(n,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/paper-card/paper-card.js"),require("@polymer/paper-button/paper-button.js"),require("@lrnwebcomponents/lrn-icons/lrn-icons.js"),require("@polymer/iron-icons/iron-icons.js"),require("@polymer/iron-icons/maps-icons.js"),require("@polymer/iron-icons/hardware-icons.js"),require("@polymer/paper-tooltip/paper-tooltip.js"),require("@lrnwebcomponents/social-media-icons/social-media-icons.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/paper-card/paper-card.js","@polymer/paper-button/paper-button.js","@lrnwebcomponents/lrn-icons/lrn-icons.js","@polymer/iron-icons/iron-icons.js","@polymer/iron-icons/maps-icons.js","@polymer/iron-icons/hardware-icons.js","@polymer/paper-tooltip/paper-tooltip.js","@lrnwebcomponents/social-media-icons/social-media-icons.js"],o):o((n=n||self).LrndesignContactcard={},n.polymerLegacy_js)}(this,function(n,o){"use strict";function i(){var n,o,t=(n=['\n    <style>\n      :host {\n        display: block;\n        --contactcard-icons-hover-color: gray;\n        --contactcard-icons-fill-color: #aeaeae;\n      }\n\n      .name {\n        text-align: center;\n        min-height: 16px;\n      }\n      .name div {\n        font-size: 24px;\n        margin-bottom: 12px;\n      }\n\n      #img_wrap {\n        display: flex;\n        justify-content: center;\n        align-items: flex-start;\n      }\n\n      .profile-image {\n        background-color: #aeaeae;\n        padding: 4px;\n        border-radius: 50%;\n        width: 50%;\n        min-height: 160px;\n        margin-top: 25px;\n      }\n\n      .position {\n        text-align: center;\n        font-style: italic;\n        font-size: 16px;\n        margin: -10px 0 10px;\n      }\n\n      .organization {\n        text-align: center;\n        font-size: 14px;\n        margin: -8px 0 10px;\n      }\n\n      #mail {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      #mail:hover,\n      #mail:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #phone {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      #phone:hover,\n      #phone:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #twitter {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n      #twitter:hover,\n      #twitter:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #website {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n      #website:hover,\n      #website:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #group_icons {\n        width: 70%;\n        margin-left: auto;\n        margin-right: auto;\n        margin-bottom: 10px;\n        border-top: 2px #aeaeae solid;\n        padding-top: 5px;\n      }\n\n      social-media-icons {\n        --social-media-icons-hover-color: var(--contactcard-icons-hover-color);\n        margin-left: 8px;\n      }\n\n      .icons {\n        display: flex;\n        justify-content: center;\n        align-items: flext-start;\n        padding-top: 5px;\n      }\n\n      paper-button {\n        padding: 0;\n        margin: 0 8px;\n        display: block;\n        min-width: 16px;\n      }\n    </style>\n    <paper-card>\n      <div id="img_wrap"><img class="profile-image" src="[[image]]" /></div>\n      <div class="name">\n        <template is="dom-if" if="[[name]]">\n          <div>[[name]]</div>\n        </template>\n      </div>\n      <div class="position">[[position]]</div>\n      <div class="organization">[[organization]]</div>\n      <div id="group_icons">\n        <div class="icons">\n          <template is="dom-if" if="[[email]]">\n            <a tabindex="-1" href$="mailto:[[email]]">\n              <paper-button id="mail" title$="Email address [[email]]">\n                <iron-icon icon="mail" class="mail_icon"></iron-icon>\n              </paper-button>\n            </a>\n            <paper-tooltip for="mail" position="bottom">Email</paper-tooltip>\n          </template>\n          <template is="dom-if" if="[[phone]]">\n            <a tabindex="-1" href$="tel:[[phone]]">\n              <paper-button id="phone" title$="Phone number [[phone]]">\n                <iron-icon\n                  icon="maps:local-phone"\n                  class="phone_icon"\n                ></iron-icon>\n              </paper-button>\n            </a>\n            <paper-tooltip for="phone" position="bottom">Call</paper-tooltip>\n          </template>\n          <template is="dom-if" if="[[website]]">\n            <a tabindex="-1" href$="[[website]]">\n              <paper-button id="website" title$="Website address [[website]]">\n                <iron-icon\n                  icon="hardware:desktop-windows"\n                  class="computer_icon"\n                ></iron-icon>\n              </paper-button>\n            </a>\n            <paper-tooltip for="website" position="bottom">Visit</paper-tooltip>\n          </template>\n          <template is="dom-if" if="[[twitter]]">\n            <a tabindex="-1" href$="[[twitter]]">\n              <paper-button id="twitter" title$="Twitter name [[twitter]]">\n                <social-media-icons\n                  icon="twitter"\n                  color="#aeaeae"\n                  size="35"\n                  class="twitter_icon"\n                ></social-media-icons>\n              </paper-button>\n            </a>\n            <paper-tooltip for="twitter" position="bottom"\n              >Connect</paper-tooltip\n            >\n          </template>\n        </div>\n      </div>\n    </paper-card>\n  '],(o=['\n    <style>\n      :host {\n        display: block;\n        --contactcard-icons-hover-color: gray;\n        --contactcard-icons-fill-color: #aeaeae;\n      }\n\n      .name {\n        text-align: center;\n        min-height: 16px;\n      }\n      .name div {\n        font-size: 24px;\n        margin-bottom: 12px;\n      }\n\n      #img_wrap {\n        display: flex;\n        justify-content: center;\n        align-items: flex-start;\n      }\n\n      .profile-image {\n        background-color: #aeaeae;\n        padding: 4px;\n        border-radius: 50%;\n        width: 50%;\n        min-height: 160px;\n        margin-top: 25px;\n      }\n\n      .position {\n        text-align: center;\n        font-style: italic;\n        font-size: 16px;\n        margin: -10px 0 10px;\n      }\n\n      .organization {\n        text-align: center;\n        font-size: 14px;\n        margin: -8px 0 10px;\n      }\n\n      #mail {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      #mail:hover,\n      #mail:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #phone {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      #phone:hover,\n      #phone:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #twitter {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n      #twitter:hover,\n      #twitter:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #website {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n      #website:hover,\n      #website:focus {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #group_icons {\n        width: 70%;\n        margin-left: auto;\n        margin-right: auto;\n        margin-bottom: 10px;\n        border-top: 2px #aeaeae solid;\n        padding-top: 5px;\n      }\n\n      social-media-icons {\n        --social-media-icons-hover-color: var(--contactcard-icons-hover-color);\n        margin-left: 8px;\n      }\n\n      .icons {\n        display: flex;\n        justify-content: center;\n        align-items: flext-start;\n        padding-top: 5px;\n      }\n\n      paper-button {\n        padding: 0;\n        margin: 0 8px;\n        display: block;\n        min-width: 16px;\n      }\n    </style>\n    <paper-card>\n      <div id="img_wrap"><img class="profile-image" src="[[image]]" /></div>\n      <div class="name">\n        <template is="dom-if" if="[[name]]">\n          <div>[[name]]</div>\n        </template>\n      </div>\n      <div class="position">[[position]]</div>\n      <div class="organization">[[organization]]</div>\n      <div id="group_icons">\n        <div class="icons">\n          <template is="dom-if" if="[[email]]">\n            <a tabindex="-1" href\\$="mailto:[[email]]">\n              <paper-button id="mail" title$="Email address [[email]]">\n                <iron-icon icon="mail" class="mail_icon"></iron-icon>\n              </paper-button>\n            </a>\n            <paper-tooltip for="mail" position="bottom">Email</paper-tooltip>\n          </template>\n          <template is="dom-if" if="[[phone]]">\n            <a tabindex="-1" href\\$="tel:[[phone]]">\n              <paper-button id="phone" title$="Phone number [[phone]]">\n                <iron-icon\n                  icon="maps:local-phone"\n                  class="phone_icon"\n                ></iron-icon>\n              </paper-button>\n            </a>\n            <paper-tooltip for="phone" position="bottom">Call</paper-tooltip>\n          </template>\n          <template is="dom-if" if="[[website]]">\n            <a tabindex="-1" href\\$="[[website]]">\n              <paper-button id="website" title$="Website address [[website]]">\n                <iron-icon\n                  icon="hardware:desktop-windows"\n                  class="computer_icon"\n                ></iron-icon>\n              </paper-button>\n            </a>\n            <paper-tooltip for="website" position="bottom">Visit</paper-tooltip>\n          </template>\n          <template is="dom-if" if="[[twitter]]">\n            <a tabindex="-1" href$="[[twitter]]">\n              <paper-button id="twitter" title$="Twitter name [[twitter]]">\n                <social-media-icons\n                  icon="twitter"\n                  color="#aeaeae"\n                  size="35"\n                  class="twitter_icon"\n                ></social-media-icons>\n              </paper-button>\n            </a>\n            <paper-tooltip for="twitter" position="bottom"\n              >Connect</paper-tooltip\n            >\n          </template>\n        </div>\n      </div>\n    </paper-card>\n  '])||(o=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(o)}})));return i=function(){return t},t}var t=o.Polymer({_template:o.html(i()),is:"lrndesign-contactcard",properties:{image:{type:String},email:{type:String},name:{type:String},position:{type:String},organization:{type:String},phone:{type:String},website:{type:String},twitter:{type:String}}});n.LrndesignContactcard=t,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-contactcard.umd.js.map
