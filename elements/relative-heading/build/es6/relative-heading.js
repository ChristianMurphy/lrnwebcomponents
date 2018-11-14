import {
  html,
  Polymer
} from "./node_modules/@polymer/polymer/polymer-legacy.js";
import "./lib/relative-heading-manager.js";
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
    </style>
    <div id="html"></div>
`,
  is: "relative-heading",
  properties: {
    subtopicOf: { type: String, value: null, reflectToAttribute: !0 },
    text: { type: String, value: null, reflectToAttribute: !0 },
    parentHeading: { type: Object, value: {} },
    tag: { type: String, value: null, reflectToAttribute: !0 }
  },
  created: function() {
    window.RelativeHeadingManager.requestAvailability();
  },
  attached: function() {
    this.fire("heading-created", this);
  },
  attributeChanged: function(name) {
    if ("subtopic-of" === name) {
      this.fire("heading-created", this);
    } else if ("tag" === name) {
      this.fire("heading-changed", this);
      this.$.html.innerHTML =
        "<" + this.tag + ">" + this.text + "</" + this.tag + ">";
    }
  },
  _setParent: function(el) {
    let root = this;
    if (root.__parentListener !== void 0)
      root.parentHeading.removeEventListener("heading-changed");
    root.parentHeading = el;
    if (null !== el) {
      root.__parentListener = root.parentHeading.addEventListener(
        "heading-changed",
        function() {
          root._setTag();
        }
      );
    }
    this._setTag();
  },
  _setTag: function() {
    let tag = "h1",
      level = 1,
      h = function(level) {
        return "h" + Math.max(Math.min(level, 6), 1);
      };
    if (null !== this.parentHeading) {
      if (
        this.parentHeading.tag !== void 0 &&
        null !== this.parentHeading.tag
      ) {
        level =
          parseInt(this.parentHeading.tag.toLowerCase().replace("h", "")) + 1;
      } else if (
        this.parentHeading.tagName !== void 0 &&
        this.parentHeading.tagName.match(/^H[0-6]$/)
      ) {
        level =
          parseInt(this.parentHeading.tagName.toLowerCase().replace("h", "")) +
          1;
      }
    } else if (this.tag !== void 0 && null !== this.tag) {
      level = parseInt(this.tag.toLowerCase().replace("h", ""));
    }
    tag = h(level);
    this.tag = tag;
  }
});