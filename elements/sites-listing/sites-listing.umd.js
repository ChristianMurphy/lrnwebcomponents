!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/iron-ajax/iron-ajax.js"),require("@polymer/iron-list/iron-list.js"),require("@polymer/paper-button/paper-button.js"),require("@lrnwebcomponents/elmsln-loading/elmsln-loading.js"),require("@polymer/paper-card/paper-card.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/iron-image/iron-image.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/iron-ajax/iron-ajax.js","@polymer/iron-list/iron-list.js","@polymer/paper-button/paper-button.js","@lrnwebcomponents/elmsln-loading/elmsln-loading.js","@polymer/paper-card/paper-card.js","@polymer/iron-icon/iron-icon.js","@polymer/iron-image/iron-image.js"],e):e((n=n||self).SitesListing={},n.polymerLegacy_js,n.polymer_dom_js)}(this,function(n,e,i){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function a(){var n=o(['\n    <style>\n      :host {\n        display: inline-flex;\n        min-width: 250px;\n      }\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host([size="micro"]) {\n        transform: scale(0.5);\n      }\n\n      :host([size="small"]) {\n        transform: scale(0.8);\n      }\n\n      paper-card {\n        border-radius: 4px;\n        margin: 0;\n        width: 100%;\n      }\n\n      .card-actions {\n        background-color: #f5f5f5;\n        border-radius: 0 0 4px 4px;\n        padding: 0 8px;\n      }\n\n      .card-actions .card-action-details {\n        display: inline-block;\n        vertical-align: middle;\n        vertical-align: -webkit-baseline-middle;\n        width: 80%;\n      }\n\n      .card-control-height {\n        height: 240px;\n      }\n\n      [elevation="0"] {\n        border: solid 1px #eeeeee;\n      }\n\n      .text-right {\n        text-align: right;\n      }\n\n      .text-left {\n        text-align: left;\n      }\n\n      .name,\n      .title {\n        color: #222;\n        font-size: 12.8px;\n        font-weight: 600;\n        line-height: 20px;\n        padding: 0 12px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: 8px;\n      }\n\n      .title {\n        font-size: 11.2px;\n        font-weight: 400;\n      }\n\n      .divider {\n        height: 1px;\n        width: 100%;\n        background: #efefef;\n      }\n\n      .site-icon {\n        display: inline-block;\n        vertical-align: text-top;\n        transform: scale(0.8);\n        --iron-icon-height: 100%;\n        --iron-icon-width: 100%;\n        overflow: hidden;\n        color: grey;\n        margin: -16px 8px 0 0;\n        position: absolute;\n        right: 0;\n        font-size: 16px;\n        padding: 4px;\n        height: 40px;\n        width: 40px;\n        border-radius: 50%;\n        background-color: white;\n      }\n\n      .site-icon:hover,\n      .site-icon:focus {\n        color: black;\n      }\n\n      .center {\n        margin: auto;\n        width: 80%;\n        padding: 16px;\n      }\n\n      .site-info {\n        width: 100%;\n      }\n\n      .site-preview {\n        height: 160px;\n      }\n      .card-content {\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n      }\n\n      .inline {\n        display: inline;\n      }\n    </style>\n    <paper-card elevation="[[elevation]]">\n      <div class="card-content card-control-height card-control-center">\n        <div class="site-preview">\n          <iron-image\n            style="width:100%; height:100%; background-color: lightgray;"\n            sizing="cover"\n            preload=""\n            fade=""\n            src="[[image]]"\n            hidden$="[[!image]]"\n          ></iron-image>\n        </div>\n        <iron-icon\n          class="site-icon"\n          icon="[[icon]]"\n          hidden$="[[!icon]]"\n        ></iron-icon>\n        <div class="site-info">\n          <div class="divider"></div>\n          <div class="name">[[name]]</div>\n          <div class="title">[[title]]</div>\n        </div>\n      </div>\n      <div class="card-actions" hidden="">\n        <div class="card-action-details"></div>\n      </div>\n    </paper-card>\n  '],['\n    <style>\n      :host {\n        display: inline-flex;\n        min-width: 250px;\n      }\n      :host(:focus) {\n        outline: none;\n      }\n\n      :host([size="micro"]) {\n        transform: scale(0.5);\n      }\n\n      :host([size="small"]) {\n        transform: scale(0.8);\n      }\n\n      paper-card {\n        border-radius: 4px;\n        margin: 0;\n        width: 100%;\n      }\n\n      .card-actions {\n        background-color: #f5f5f5;\n        border-radius: 0 0 4px 4px;\n        padding: 0 8px;\n      }\n\n      .card-actions .card-action-details {\n        display: inline-block;\n        vertical-align: middle;\n        vertical-align: -webkit-baseline-middle;\n        width: 80%;\n      }\n\n      .card-control-height {\n        height: 240px;\n      }\n\n      [elevation="0"] {\n        border: solid 1px #eeeeee;\n      }\n\n      .text-right {\n        text-align: right;\n      }\n\n      .text-left {\n        text-align: left;\n      }\n\n      .name,\n      .title {\n        color: #222;\n        font-size: 12.8px;\n        font-weight: 600;\n        line-height: 20px;\n        padding: 0 12px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-top: 8px;\n      }\n\n      .title {\n        font-size: 11.2px;\n        font-weight: 400;\n      }\n\n      .divider {\n        height: 1px;\n        width: 100%;\n        background: #efefef;\n      }\n\n      .site-icon {\n        display: inline-block;\n        vertical-align: text-top;\n        transform: scale(0.8);\n        --iron-icon-height: 100%;\n        --iron-icon-width: 100%;\n        overflow: hidden;\n        color: grey;\n        margin: -16px 8px 0 0;\n        position: absolute;\n        right: 0;\n        font-size: 16px;\n        padding: 4px;\n        height: 40px;\n        width: 40px;\n        border-radius: 50%;\n        background-color: white;\n      }\n\n      .site-icon:hover,\n      .site-icon:focus {\n        color: black;\n      }\n\n      .center {\n        margin: auto;\n        width: 80%;\n        padding: 16px;\n      }\n\n      .site-info {\n        width: 100%;\n      }\n\n      .site-preview {\n        height: 160px;\n      }\n      .card-content {\n        padding: 0;\n        margin: 0;\n        overflow: hidden;\n      }\n\n      .inline {\n        display: inline;\n      }\n    </style>\n    <paper-card elevation="[[elevation]]">\n      <div class="card-content card-control-height card-control-center">\n        <div class="site-preview">\n          <iron-image\n            style="width:100%; height:100%; background-color: lightgray;"\n            sizing="cover"\n            preload=""\n            fade=""\n            src="[[image]]"\n            hidden\\$="[[!image]]"\n          ></iron-image>\n        </div>\n        <iron-icon\n          class="site-icon"\n          icon="[[icon]]"\n          hidden\\$="[[!icon]]"\n        ></iron-icon>\n        <div class="site-info">\n          <div class="divider"></div>\n          <div class="name">[[name]]</div>\n          <div class="title">[[title]]</div>\n        </div>\n      </div>\n      <div class="card-actions" hidden="">\n        <div class="card-action-details"></div>\n      </div>\n    </paper-card>\n  ']);return a=function(){return n},n}function r(){var n=o(['\n    <style>\n      :host {\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n      }\n      iron-list {\n        flex: 1 1 auto;\n      }\n      #loading {\n        width: 100%;\n        z-index: 1000;\n        opacity: 0.8;\n        padding: 16px;\n        text-align: center;\n        align-content: center;\n        justify-content: center;\n        height: 100vh;\n        position: absolute;\n        background-color: rgba(250, 250, 250, 0.8);\n        transition: all linear 0.8s;\n        visibility: visible;\n      }\n      #loading div {\n        font-size: 32px;\n        font-weight: bold;\n        padding: 16px;\n      }\n      #loading[data-loading] {\n        background-color: rgba(0, 0, 0, 0);\n        opacity: 0;\n        visibility: hidden;\n      }\n      site-card {\n        padding: 16px;\n        font-size: 16px;\n      }\n      paper-button.site-card-wrapper {\n        margin: 0;\n        padding: 0;\n      }\n    </style>\n    <iron-ajax\n      auto=""\n      loading="{{__loading}}"\n      url="[[dataSource]]"\n      handle-as="json"\n      debounce-duration="250"\n      last-response="{{sitesResponse}}"\n    ></iron-ajax>\n    <div id="loading" data-loading$="[[!__loading]]">\n      <elmsln-loading size="large"></elmsln-loading>\n      <div>Loading..</div>\n    </div>\n    <iron-list id="list" items="[[sites]]" as="site" grid="">\n      <template>\n        <paper-button\n          on-focusin="_mouseEnter"\n          on-focusout="_mouseLeave"\n          data-site-id$="[[site.id]]"\n          class="site-card-wrapper"\n          on-tap="_siteClicked"\n        >\n          <site-card\n            data-site-id$="[[site.id]]"\n            size="[[size]]"\n            image="[[site.metadata.image]]"\n            icon="[[site.metadata.icon]]"\n            name="[[site.title]]"\n            title="[[site.description]]"\n            elevation="2"\n          ></site-card>\n        </paper-button>\n      </template>\n    </iron-list>\n  '],['\n    <style>\n      :host {\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n      }\n      iron-list {\n        flex: 1 1 auto;\n      }\n      #loading {\n        width: 100%;\n        z-index: 1000;\n        opacity: 0.8;\n        padding: 16px;\n        text-align: center;\n        align-content: center;\n        justify-content: center;\n        height: 100vh;\n        position: absolute;\n        background-color: rgba(250, 250, 250, 0.8);\n        transition: all linear 0.8s;\n        visibility: visible;\n      }\n      #loading div {\n        font-size: 32px;\n        font-weight: bold;\n        padding: 16px;\n      }\n      #loading[data-loading] {\n        background-color: rgba(0, 0, 0, 0);\n        opacity: 0;\n        visibility: hidden;\n      }\n      site-card {\n        padding: 16px;\n        font-size: 16px;\n      }\n      paper-button.site-card-wrapper {\n        margin: 0;\n        padding: 0;\n      }\n    </style>\n    <iron-ajax\n      auto=""\n      loading="{{__loading}}"\n      url="[[dataSource]]"\n      handle-as="json"\n      debounce-duration="250"\n      last-response="{{sitesResponse}}"\n    ></iron-ajax>\n    <div id="loading" data-loading\\$="[[!__loading]]">\n      <elmsln-loading size="large"></elmsln-loading>\n      <div>Loading..</div>\n    </div>\n    <iron-list id="list" items="[[sites]]" as="site" grid="">\n      <template>\n        <paper-button\n          on-focusin="_mouseEnter"\n          on-focusout="_mouseLeave"\n          data-site-id\\$="[[site.id]]"\n          class="site-card-wrapper"\n          on-tap="_siteClicked"\n        >\n          <site-card\n            data-site-id\\$="[[site.id]]"\n            size="[[size]]"\n            image="[[site.metadata.image]]"\n            icon="[[site.metadata.icon]]"\n            name="[[site.title]]"\n            title="[[site.description]]"\n            elevation="2"\n          ></site-card>\n        </paper-button>\n      </template>\n    </iron-list>\n  ']);return r=function(){return n},n}e.Polymer({_template:e.html(a()),is:"site-card",listeners:{mouseover:"_mouseEnter",mousedown:"_mouseEnter",mouseleave:"_mouseLeave",mouseout:"_mouseLeave",focusin:"_mouseEnter",focusout:"_mouseLeave"},properties:{size:{type:String,reflectToAttribute:!0},image:{type:String},icon:{type:String,value:!1},name:{type:String,value:""},title:{type:String,value:""},elevation:{type:Number,value:1,reflectToAttribute:!0}},_mouseEnter:function(n){this.__oldElevation=this.elevation,this.elevation+2>5?this.elevation=5:this.elevation+=2},_mouseLeave:function(n){this.elevation=this.__oldElevation}});var s=e.Polymer({_template:e.html(r()),is:"sites-listing",properties:{sitesResponse:{type:Object,notify:!0,observer:"_sitesResponseChanged"},sites:{type:Array,notify:!0},size:{type:String,value:"large"},dataSource:{type:String},loadLocation:{type:Boolean,value:!1}},_sitesResponseChanged:function(n,e){n&&"undefined"!==t(n.items)&&(this.set("sites",[]),this.set("sites",n.items),this.notifyPath("sites.*"))},_siteClicked:function(n){var e=i.dom(n).localTarget.getAttribute("data-site-id"),o=this.sites.filter(function(n){return n.id===e});o.length>0&&(o=o.pop()),this.loadLocation&&"undefined"!==t(o.location)&&(window.location.href=o.location),this.fire("sites-listing-item-selected",o)},_mouseEnter:function(n){var e=i.dom(n.target).querySelectorAll("site-card")[0];e.__oldElevation=e.elevation,e.elevation+2>5?e.elevation=5:e.elevation+=2},_mouseLeave:function(n){var e=i.dom(n.target).querySelectorAll("site-card")[0];e.elevation=e.__oldElevation}});n.SitesListing=s,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=sites-listing.umd.js.map
