/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/iron-image/iron-image.js";
import "@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js";
import "@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";
/**
`hero-banner`
That thing no one wants to make over and over again yet always does...

* @demo demo/index.html

@microcopy - the mental model for this element
 -
 -

*/
let HeroBanner = Polymer({
  _template: html`
    <style include="simple-colors">
      :host {
        display: block;
        width: 100%;
        min-height: 600px;
        height: 100%;
        max-height: 600px;
        overflow: hidden;
        position: relative;
      }
      .image {
        position: absolute;
        left: 0;
        right: 0;
      }
      .itemwrapper {
        position: absolute;
        bottom: 10%;
        left: 10%;
        width: 50%;
      }
      .title {
        background-color: rgba(255, 255, 255, 0.5);
        padding: 10px 16px;
        font-size: 32px;
        color: var(--simple-colors-default-theme-grey-12);
        margin: 4px 0;
        font-family: var(--hero-banner-font-family,"Roboto");
        font-weight: 500;
      }
      .details {
        background-color: rgba(255, 255, 255, 0.5);
        padding: 10px 16px;
        font-size: 16px;
        color: var(--simple-colors-default-theme-grey-12);
        margin: 4px 0;
        font-family: var(--hero-banner-font-family,"Roboto");
      }
      :host([dark]) .title,
      :host([dark]) .details {
        background-color: rgba(0, 0, 0, 0.5);
      }
      .linkbutton {
        padding: 0;
        margin: 8px 0;
        text-decoration: none;
        font-family: "var(--hero-banner-font-family,"Roboto");
      }
      .linkbutton paper-button {
        text-transform: none;
        font-weight: bold;
        color: var(--simple-colors-default-theme-grey-12);
        background-color: var(--simple-colors-default-theme-accent-5);
        margin: 0;
      }
      .linkbutton:focus paper-button,
      .linkbutton:hover paper-button {
        background-color: var(--simple-colors-default-theme-accent-4);
      }
      @media screen and (max-width: 720px) {
        .title {
          font-size: 20px;
        }
        .details {
          font-size: 12px;
        }
        .itemwrapper {
          left: 5%;
          width: 50%;
        }
      }
      @media screen and (max-width: 500px) {
        .title {
          font-size: 16px;
        }
        .details {
          display: none;
        }
        .itemwrapper {
          left: 0;
          width: 300px;
        }
      }
    </style>
    <iron-image
      class="image"
      src\$="[[image]]"
      fade=""
      preload=""
      sizing="cover"
      style="background-color:grey;width: 100%;height: 100%;"
    ></iron-image>
    <div class="itemwrapper">
      <div class="title">[[title]]</div>
      <div class="details">[[details]]</div>
      <a class="linkbutton" href\$="[[buttonLink]]"
        ><paper-button raised="">[[buttonText]]</paper-button></a
      >
    </div>
  `,

  is: "hero-banner",

  behaviors: [
    HAXBehaviors.PropertiesBehaviors,
    A11yBehaviors.A11y,
    SimpleColors
  ],

  properties: {
    /**
     * Title
     */
    title: {
      type: String,
      value: "Title"
    },
    /**
     * Image
     */
    image: {
      type: String
    },
    /**
     * Details / teaser text
     */
    details: {
      type: String,
      value: "Details"
    },
    /**
     * button label
     */
    buttonText: {
      type: String,
      value: "Find out more"
    },
    /**
     * Color of the button
     */
    buttonColor: {
      type: String,
      value: "red darken-4",
      observer: "_buttonColorChanged"
    },
    /**
     * Button color class.
     */
    buttonColorClass: {
      type: String,
      reflectToAttribute: true,
      computed: "_computeColorClass(buttonColor)"
    },
    /**
     * url for the button
     */
    buttonLink: {
      type: String
    },
    /**
     * Text color.
     */
    textColor: {
      type: String,
      value: "#FFFFFF",
      reflectToAttribute: true
    },
    /**
     * Text color class.
     */
    textColorClass: {
      type: String,
      value: null,
      reflectToAttribute: true,
      computed: "_computeColorClass(textColor)"
    }
  },

  /**
   * Notice secondary color changed
   */
  _buttonColorChanged: function(newValue, oldValue) {
    if (typeof newValue !== typeof undefined && newValue != null) {
      // sees if there's enough contrast and adjusts them accordingly
      this.computeTextPropContrast("textColor", "buttonColor");
    }
  },

  /**
   * Attached to the DOM, now fire.
   */
  attached: function() {
    // Establish hax property binding
    let props = {
      canScale: false,
      canPosition: false,
      canEditSource: false,
      gizmo: {
        title: "Hero image",
        description:
          "Typically fancy banner image calling your attention to something.",
        icon: "image:panorama",
        color: "red",
        groups: ["Image", "Media"],
        handles: [
          {
            type: "image",
            source: "image",
            title: "title",
            description: "details",
            link: "buttonLink"
          }
        ],
        meta: {
          author: "LRNWebComponents"
        }
      },
      settings: {
        quick: [
          {
            property: "title",
            title: "Title",
            description: "The title of the element",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "image",
            title: "Image",
            description: "URL of the image",
            inputMethod: "textfield",
            icon: "image:panorama"
          },
          {
            property: "details",
            title: "Details",
            description: "Additional text detail / teaser data",
            inputMethod: "textfield",
            icon: "editor:text-fields"
          },
          {
            property: "buttonText",
            title: "Button",
            description: "Label of the button",
            inputMethod: "textfield",
            icon: "icons:radio-button-unchecked"
          },
          {
            property: "buttonColor",
            title: "Button - Color",
            description: "Color of the button",
            inputMethod: "colorpicker",
            icon: "editor:format-color-fill"
          },
          {
            property: "buttonLink",
            title: "Button - Link",
            description: "Label of the button",
            inputMethod: "textfield",
            validationType: "url",
            icon: "icons:link"
          }
        ],
        configure: [
          {
            property: "title",
            title: "Title",
            description: "The title of the element",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "image",
            title: "Image",
            description: "URL of the image",
            inputMethod: "textfield",
            icon: "image:panorama"
          },
          {
            property: "details",
            title: "Details",
            description: "Additional text detail / teaser data",
            inputMethod: "textfield",
            icon: "editor:text-fields"
          },
          {
            property: "buttonText",
            title: "Button",
            description: "Label of the button",
            inputMethod: "textfield",
            icon: "icons:radio-button-unchecked"
          },
          {
            property: "buttonColor",
            title: "Button - Color",
            description: "Color of the button",
            inputMethod: "colorpicker",
            icon: "editor:format-color-fill"
          },
          {
            property: "buttonLink",
            title: "Button - Link",
            description: "Label of the button",
            inputMethod: "textfield",
            validationType: "url",
            icon: "icons:link"
          }
        ],
        advanced: []
      }
    };
    this.setHaxProperties(props);
  }
});
export { HeroBanner };
