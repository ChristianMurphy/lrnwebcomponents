define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrndesignBiocard = void 0;
  function _templateObject_f90ba930d6f611e8a6703b570f1d3410() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_f90ba930d6f611e8a6703b570f1d3410 = function() {
      return data;
    };
    return data;
  }
  var LrndesignBiocard = (function(_PolymerElement) {
    babelHelpers.inherits(LrndesignBiocard, _PolymerElement);
    function LrndesignBiocard() {
      babelHelpers.classCallCheck(this, LrndesignBiocard);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          LrndesignBiocard.__proto__ || Object.getPrototypeOf(LrndesignBiocard)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      LrndesignBiocard,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrndesignBiocard.prototype.__proto__ ||
                  Object.getPrototypeOf(LrndesignBiocard.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrndesignBiocard.haxProperties,
              LrndesignBiocard.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_f90ba930d6f611e8a6703b570f1d3410()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Lrndesign biocard",
                description: "Automated conversion of lrndesign-biocard/",
                icon: "icons:android",
                color: "green",
                groups: ["Biocard"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "lrndesign-biocard";
          }
        }
      ]
    );
    return LrndesignBiocard;
  })(_polymerElement.PolymerElement);
  _exports.LrndesignBiocard = LrndesignBiocard;
  window.customElements.define(LrndesignBiocard.tag, LrndesignBiocard);
});
