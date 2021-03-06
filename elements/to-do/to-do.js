import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { SchemaBehaviors } from "@lrnwebcomponents/schema-behaviors/schema-behaviors.js";
import "@lrnwebcomponents/simple-fields/lib/simple-fields-field.js";
/**
 * `to-do`
 * @element to-do
 * @demo demo/index.html
 */
class ToDo extends SchemaBehaviors(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        :host([hide-form]) ul {
          border: 1px solid black;
        }
        div.card {
          width: 100%;
          padding: 8px;
        }
        .task-list-wrapper {
          width: 100%;
          height: 100%;
          border: 2px solid black;
          list-style: none;
          padding: 0;
        }
        .task-list-wrapper li {
          padding: 8px;
        }
        .task-list-wrapper li:nth-child(even) {
          background-color: #f5f5f5;
        }
        .task-list-wrapper li:nth-child(odd) {
          background-color: #e5e5e5;
        }
        .task-list-wrapper li:hover {
          background-color: #ffffff;
        }
        .task-list-wrapper li:active {
          background-color: #ffffff;
        }
        .task-list-wrapper li:focus {
          background-color: #ffffff;
        }
        h3 {
          margin: 4px;
          padding: 0;
          font-size: 20px;
        }
      </style>
      <div class="card">
        <h3>[[name]]</h3>
        <div class="card-content">
          <div hidden$="[[hideForm]]">
            <simple-fields-field
              label="Task to accomplish"
              id="itemtext"
            ></simple-fields-field>
            <button raised="" id="itembutton" on-click="_addItemToList">
              Add item
            </button>
          </div>
          <ul class="task-list-wrapper">
            <template is="dom-repeat" items="[[items]]" as="item">
              <li data-item-id$="[[item.id]]">
                <simple-fields-field
                  type="checkbox"
                  value="{{item.value}}"
                  disabled="[[item.disabled]]"
                  label="[[item.label]]"
                ></simple-fields-field>
              </li>
            </template>
          </ul>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "to-do";
  }
  static get observers() {
    return ["_valueChanged(items.*)"];
  }
  static get properties() {
    return {
      ...super.properties,

      /**
       * Allow for hiding the input form for new data.
       */
      hideForm: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },
      /**
       * Whether or not the list of items is disabled
       * checkboxes.
       */
      disabledList: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
      },
      /**
       * Name of this to do list
       */
      name: {
        type: String,
        value: "To do list",
      },
      /**
       * Items
       */
      items: {
        type: Array,
        value: [],
        notify: true,
      },
    };
  }
  /**
   * Ensure the values change.
   */
  _valueChanged(e) {
    for (var i in e.base) {
      for (var j in e.base[i]) {
        this.notifyPath("items." + i + "." + j);
      }
    }
  }
  /**
   * Add a new item to the list.
   */
  _addItemToList(e) {
    if (
      this.shadowRoot.querySelector("#itemtext").value != "" &&
      typeof this.shadowRoot.querySelector("#itemtext").value !==
        typeof undefined
    ) {
      this.push("items", {
        label: this.shadowRoot.querySelector("#itemtext").value,
        value: false,
        disabled: this.disabledList,
        id: "item-id-" + this.items.length,
      });
      this.shadowRoot.querySelector("#itemtext").value = "";
    }
  }
  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "To do list",
        description: "A list of things to do so people can keep calm.",
        icon: "icons:list",
        color: "grey",
        groups: ["List"],
        handles: [],
        meta: {
          author: "ELMS:LN",
        },
      },
      settings: {
        configure: [
          {
            property: "name",
            title: "Name",
            description: "The name of this to do list",
            inputMethod: "textfield",
            icon: "editor:title",
          },
          {
            property: "items",
            title: "List of items",
            description: "List of items to display in our list.",
            inputMethod: "array",
            itemLabel: "label",
            properties: [
              {
                property: "label",
                title: "Task",
                description: "Name of the task",
                inputMethod: "textfield",
                required: true,
              },
              {
                property: "value",
                title: "Done",
                description: "Completion state",
                inputMethod: "boolean",
              },
            ],
          },
        ],
        advanced: [],
      },
    };
  }
}
window.customElements.define(ToDo.tag, ToDo);
export { ToDo };
