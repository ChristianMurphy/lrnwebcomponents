import { LitElement, html, css } from "lit-element/lit-element.js";
import { SchemaBehaviors } from "@lrnwebcomponents/schema-behaviors/schema-behaviors.js";
import { remoteLinkBehavior } from "@lrnwebcomponents/utils/lib/remoteLinkBehavior.js";
import {
  pathResolver,
  SimpleIconsetStore,
} from "@lrnwebcomponents/simple-icon/lib/simple-iconset.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
// register the iconset
SimpleIconsetStore.registerIconset(
  "stopnoteicons",
  `${pathResolver(import.meta.url)}lib/svgs/stopnoteicons/`
);

/**
 * `stop-note`
 * `A note that directs people to an action item of different warning levels`
 * @demo demo/index.html
 * @element stop-note
 */
class StopNote extends remoteLinkBehavior(SchemaBehaviors(LitElement)) {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
          width: auto;
          --background-color: #f7f7f7;
          --accent-color: #d32f2f;
          margin-bottom: 20px;
        }

        simple-icon {
          --simple-icon-height: 100px;
          --simple-icon-width: 100px;
        }

        :host([icon="stopnoteicons:stop-icon"]) {
          --accent-color: #d8261c;
        }

        :host([icon="stopnoteicons:warning-icon"]) {
          --accent-color: #ffeb3b;
        }

        :host([icon="stopnoteicons:confirm-icon"]) {
          --accent-color: #81c784;
        }

        :host([icon="stopnoteicons:book-icon"]) {
          --accent-color: #21a3db;
        }

        .container {
          display: flex;
          width: auto;
        }

        .message_wrap {
          border-right: 7px solid var(--accent-color);
          padding: 10px 25px;
          flex: 1 1 auto;
          background-color: var(--background-color);
        }

        .main_message {
          font-size: 32px;
          margin-top: 10px;
        }

        .secondary_message {
          margin-top: 5px;
          font-size: 19.2px;
          float: left;
        }

        .link a {
          margin-top: 5px;
          font-size: 19.2px;
          float: left;
          clear: left;
          text-decoration: none;
          color: #2196f3;
        }

        .link a:hover {
          color: #1976d2;
        }

        .svg {
          display: flex;
          justify-content: center;
        }

        .svg_wrap {
          background-color: var(--accent-color);
          padding: 5px;
          width: auto;
        }
      `,
    ];
  }
  render() {
    return html`
      <div class="container">
        <div class="svg_wrap">
          <div class="svg">
            <simple-icon icon="${this.icon}" no-colorize></simple-icon>
          </div>
        </div>
        <div class="message_wrap">
          <div class="main_message">${this.title}</div>
          <div class="secondary_message"><slot name="message"></slot></div>
          ${this.url
            ? html`
                <div class="link">
                  <a href="${this.url}" id="link"> More Information &gt; </a>
                </div>
              `
            : ``}
        </div>
      </div>
    `;
  }
  static get tag() {
    return "stop-note";
  }
  constructor() {
    super();
    this.url = null;
    this.icon = "stopnoteicons:stop-icon";
  }
  static get properties() {
    return {
      /**
       * Title Message
       */
      title: {
        type: String,
      },
      /**
       * url to additional resources
       */
      url: {
        type: String,
      },
      /**
       * Icon selected
       */
      icon: {
        type: String,
      },
    };
  }
  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "url") {
        this.remoteLinkURL = this[propName];
      }
    });
  }
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.remoteLinkTarget = this.shadowRoot.querySelector("#link");
  }
  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Stop Note",
        description: "A message to alert readers to specific directions.",
        icon: "icons:report",
        color: "orange",
        groups: ["Education", "Content"],
        handles: [
          {
            type: "text",
            title: "label",
          },
        ],
        meta: {
          author: "ELMS:LN",
        },
      },
      settings: {
        configure: [
          {
            property: "title",
            title: "Title",
            description: "Enter title for stop-note.",
            inputMethod: "textfield",
            required: true,
          },
          {
            property: "url",
            title: "URL",
            description: "Enter an external url.",
            inputMethod: "haxupload",
            required: true,
          },
          {
            slot: "message",
            title: "Message",
            description: "Enter a message for stop-note.",
            inputMethod: "code-editor",
            required: true,
          },
          {
            property: "icon",
            title: "Action Icon",
            description: "Icon used for stop-note",
            inputMethod: "select",
            options: {
              "stopnoteicons:stop-icon": "Stop",
              "stopnoteicons:warning-icon": "Warning",
              "stopnoteicons:confirm-icon": "Confirmation",
              "stopnoteicons:book-icon": "Notice",
            },
          },
        ],
        advanced: [],
      },
      saveOptions: {
        unsetAttributes: ["colors"],
      },
      demoSchema: [
        {
          tag: "stop-note",
          properties: {
            title: "Hold up there",
          },
          content:
            '<span slot="message"><strong>Read these important things!</strong>\n</span>\n',
        },
        {
          tag: "stop-note",
          properties: {
            title: "Warning",
            icon: "stopnoteicons:warning-icon",
          },
          content:
            '<span slot="message">You can write any warning message you want here.</span>\n',
        },
      ],
    };
  }
}
window.customElements.define(StopNote.tag, StopNote);
export { StopNote };
