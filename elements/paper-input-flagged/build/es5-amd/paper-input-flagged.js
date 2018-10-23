define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.PaperInputFlagged = void 0;
  function _templateObject_90070b40d70111e8ac6661f2e728b93e() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_90070b40d70111e8ac6661f2e728b93e = function() {
      return data;
    };
    return data;
  }
  var PaperInputFlagged = (function(_PolymerElement) {
    babelHelpers.inherits(PaperInputFlagged, _PolymerElement);
    function PaperInputFlagged() {
      babelHelpers.classCallCheck(this, PaperInputFlagged);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          PaperInputFlagged.__proto__ ||
          Object.getPrototypeOf(PaperInputFlagged)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      PaperInputFlagged,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                PaperInputFlagged.prototype.__proto__ ||
                  Object.getPrototypeOf(PaperInputFlagged.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              PaperInputFlagged.haxProperties,
              PaperInputFlagged.tag,
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
              _templateObject_90070b40d70111e8ac6661f2e728b93e()
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
                title: "Paper input-flagged",
                description: "Automated conversion of paper-input-flagged/",
                icon: "icons:android",
                color: "green",
                groups: ["Input"],
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
            return "paper-input-flagged";
          }
        }
      ]
    );
    return PaperInputFlagged;
  })(_polymerElement.PolymerElement);
  _exports.PaperInputFlagged = PaperInputFlagged;
  window.customElements.define(PaperInputFlagged.tag, PaperInputFlagged);
});
