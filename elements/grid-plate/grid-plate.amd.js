define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/polymer/lib/utils/async.js","./node_modules/@polymer/iron-a11y-keys/iron-a11y-keys.js","./node_modules/@polymer/paper-icon-button/paper-icon-button.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./node_modules/@lrnwebcomponents/responsive-grid/lib/responsive-grid-row.js","./node_modules/@lrnwebcomponents/responsive-grid/lib/responsive-grid-col.js"],function(_exports,_polymerLegacy,_polymerDom,async,_ironA11yKeys,_paperIconButton,_ironIcons,_HAXWiring,_simpleColors,_responsiveGridRow,_responsiveGridCol){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.GridPlate=void 0;async=babelHelpers.interopRequireWildcard(async);function _templateObject_9440bef00ec811e99eacc737fe11bc0f(){var data=babelHelpers.taggedTemplateLiteral(["\n    <custom-style>\n      <style is=\"custom-style\" include=\"simple-colors\">\n        :host {\n          display: block;\n        }\n\n        responsive-grid-col {\n          --responsive-grid-col-inner: {\n            padding-left: 0;\n            padding-right: 0;\n          }\n        }\n\n        responsive-grid-row {\n          --responsive-grid-row-inner: {\n            margin-left: 0;\n            margin-right: 0;\n          }\n        }\n\n        :host([edit-mode]) responsive-grid-col.mover {\n          min-height: 150px;\n          background-color: #d1d1d1;\n        }\n\n        :host responsive-grid-row ::slotted(*) .mover,\n        :host responsive-grid-col[data-draggable].mover {\n          outline: 2px dotted #d1d1d1;\n          outline-offset: 2px;\n          background-color: rgba(240, 240, 240, 0.2);\n        }\n\n        :host responsive-grid-row ::slotted(*) .active-item {\n          outline: 2px dashed #aaaaaa !important;\n          outline-offset: 2px;\n          background-color: rgba(220, 220, 220, 0.6) !important;\n        }\n\n        :host responsive-grid-row ::slotted(*) [data-draggable]:focus,\n        :host responsive-grid-row ::slotted(*) [data-draggable]:hover,\n        :host responsive-grid-row ::slotted(*) [data-draggable]:active {\n          outline: 2px dotted #d1d1d1;\n          outline-offset: 2px;\n          background-color: rgba(240, 240, 240, 0.2);\n          cursor: move !important;\n        }\n\n        paper-icon-button {\n          display: none;\n          position: absolute;\n          margin: 0;\n          padding: 0;\n          outline: none;\n          width: 20px;\n          height: 20px;\n          color: black;\n          background-color: #eeeeee;\n          border-radius: 50%;\n          box-sizing: content-box !important;\n          z-index: 1;\n          min-width: unset;\n        }\n\n        paper-icon-button.active {\n          display: block;\n        }\n\n        .button-holding-pen {\n          position: relative;\n        }\n      </style>\n    </custom-style>\n    <div class=\"button-holding-pen\">\n      <paper-icon-button\n        icon=\"icons:arrow-upward\"\n        title=\"move item up\"\n        id=\"up\"\n        on-tap=\"moveActiveElement\"\n      >\n      </paper-icon-button>\n      <paper-icon-button\n        icon=\"icons:arrow-forward\"\n        title=\"move item right\"\n        id=\"right\"\n        on-tap=\"moveActiveElement\"\n      ></paper-icon-button>\n      <paper-icon-button\n        icon=\"icons:arrow-downward\"\n        title=\"move item down\"\n        id=\"down\"\n        on-tap=\"moveActiveElement\"\n      >\n      </paper-icon-button>\n      <paper-icon-button\n        icon=\"icons:arrow-back\"\n        title=\"move item left\"\n        id=\"left\"\n        on-tap=\"moveActiveElement\"\n      >\n      </paper-icon-button>\n    </div>\n    <responsive-grid-row gutter=\"0\">\n      <template is=\"dom-if\" if=\"[[!hideCol1]]\" strip-whitespace>\n        <responsive-grid-col\n          id=\"col1\"\n          style$=\"background-color:[[__col1Color]];\"\n          xl$=\"[[col1_xl]]\"\n          lg$=\"[[col1_lg]]\"\n          md$=\"[[col1_md]]\"\n          sm$=\"[[col1_sm]]\"\n          xs$=\"[[col1_xs]]\"\n        >\n          <slot name=\"col-1\"></slot>\n        </responsive-grid-col>\n      </template>\n      <template is=\"dom-if\" if=\"[[!hideCol2]]\" strip-whitespace>\n        <responsive-grid-col\n          id=\"col2\"\n          style$=\"background-color:[[__col2Color]];\"\n          xl$=\"[[col2_xl]]\"\n          lg$=\"[[col2_lg]]\"\n          md$=\"[[col2_md]]\"\n          sm$=\"[[col2_sm]]\"\n          xs$=\"[[col2_xs]]\"\n        >\n          <slot name=\"col-2\"></slot>\n        </responsive-grid-col>\n      </template>\n      <template is=\"dom-if\" if=\"[[!hideCol3]]\" strip-whitespace>\n        <responsive-grid-col\n          id=\"col3\"\n          style$=\"background-color:[[__col3Color]];\"\n          xl$=\"[[col3_xl]]\"\n          lg$=\"[[col3_lg]]\"\n          md$=\"[[col3_md]]\"\n          sm$=\"[[col3_sm]]\"\n          xs$=\"[[col3_xs]]\"\n        >\n          <slot name=\"col-3\"></slot>\n        </responsive-grid-col>\n      </template>\n      <template is=\"dom-if\" if=\"[[!hideCol4]]\" strip-whitespace>\n        <responsive-grid-col\n          id=\"col4\"\n          style$=\"background-color:[[__col4Color]];\"\n          xl$=\"[[col4_xl]]\"\n          lg$=\"[[col4_lg]]\"\n          md$=\"[[col4_md]]\"\n          sm$=\"[[col4_sm]]\"\n          xs$=\"[[col4_xs]]\"\n        >\n          <slot name=\"col-4\"></slot>\n        </responsive-grid-col>\n      </template>\n      <responsive-grid-col xl=\"12\" lg=\"12\" md=\"12\" sm=\"12\" xs=\"12\">\n        <slot></slot>\n      </responsive-grid-col>\n    </responsive-grid-row>\n    <iron-a11y-keys\n      stop-keyboard-event-propagation\n      target=\"[[__activeItem]]\"\n      keys=\"enter\"\n      on-keys-pressed=\"setActiveElement\"\n    ></iron-a11y-keys>\n    <iron-a11y-keys\n      target=\"[[__activeItem]]\"\n      keys=\"esc\"\n      on-keys-pressed=\"cancelActive\"\n    ></iron-a11y-keys>\n  "],["\n    <custom-style>\n      <style is=\"custom-style\" include=\"simple-colors\">\n        :host {\n          display: block;\n        }\n\n        responsive-grid-col {\n          --responsive-grid-col-inner: {\n            padding-left: 0;\n            padding-right: 0;\n          }\n        }\n\n        responsive-grid-row {\n          --responsive-grid-row-inner: {\n            margin-left: 0;\n            margin-right: 0;\n          }\n        }\n\n        :host([edit-mode]) responsive-grid-col.mover {\n          min-height: 150px;\n          background-color: #d1d1d1;\n        }\n\n        :host responsive-grid-row ::slotted(*) .mover,\n        :host responsive-grid-col[data-draggable].mover {\n          outline: 2px dotted #d1d1d1;\n          outline-offset: 2px;\n          background-color: rgba(240, 240, 240, 0.2);\n        }\n\n        :host responsive-grid-row ::slotted(*) .active-item {\n          outline: 2px dashed #aaaaaa !important;\n          outline-offset: 2px;\n          background-color: rgba(220, 220, 220, 0.6) !important;\n        }\n\n        :host responsive-grid-row ::slotted(*) [data-draggable]:focus,\n        :host responsive-grid-row ::slotted(*) [data-draggable]:hover,\n        :host responsive-grid-row ::slotted(*) [data-draggable]:active {\n          outline: 2px dotted #d1d1d1;\n          outline-offset: 2px;\n          background-color: rgba(240, 240, 240, 0.2);\n          cursor: move !important;\n        }\n\n        paper-icon-button {\n          display: none;\n          position: absolute;\n          margin: 0;\n          padding: 0;\n          outline: none;\n          width: 20px;\n          height: 20px;\n          color: black;\n          background-color: #eeeeee;\n          border-radius: 50%;\n          box-sizing: content-box !important;\n          z-index: 1;\n          min-width: unset;\n        }\n\n        paper-icon-button.active {\n          display: block;\n        }\n\n        .button-holding-pen {\n          position: relative;\n        }\n      </style>\n    </custom-style>\n    <div class=\"button-holding-pen\">\n      <paper-icon-button\n        icon=\"icons:arrow-upward\"\n        title=\"move item up\"\n        id=\"up\"\n        on-tap=\"moveActiveElement\"\n      >\n      </paper-icon-button>\n      <paper-icon-button\n        icon=\"icons:arrow-forward\"\n        title=\"move item right\"\n        id=\"right\"\n        on-tap=\"moveActiveElement\"\n      ></paper-icon-button>\n      <paper-icon-button\n        icon=\"icons:arrow-downward\"\n        title=\"move item down\"\n        id=\"down\"\n        on-tap=\"moveActiveElement\"\n      >\n      </paper-icon-button>\n      <paper-icon-button\n        icon=\"icons:arrow-back\"\n        title=\"move item left\"\n        id=\"left\"\n        on-tap=\"moveActiveElement\"\n      >\n      </paper-icon-button>\n    </div>\n    <responsive-grid-row gutter=\"0\">\n      <template is=\"dom-if\" if=\"[[!hideCol1]]\" strip-whitespace>\n        <responsive-grid-col\n          id=\"col1\"\n          style\\$=\"background-color:[[__col1Color]];\"\n          xl\\$=\"[[col1_xl]]\"\n          lg\\$=\"[[col1_lg]]\"\n          md\\$=\"[[col1_md]]\"\n          sm\\$=\"[[col1_sm]]\"\n          xs\\$=\"[[col1_xs]]\"\n        >\n          <slot name=\"col-1\"></slot>\n        </responsive-grid-col>\n      </template>\n      <template is=\"dom-if\" if=\"[[!hideCol2]]\" strip-whitespace>\n        <responsive-grid-col\n          id=\"col2\"\n          style\\$=\"background-color:[[__col2Color]];\"\n          xl\\$=\"[[col2_xl]]\"\n          lg\\$=\"[[col2_lg]]\"\n          md\\$=\"[[col2_md]]\"\n          sm\\$=\"[[col2_sm]]\"\n          xs\\$=\"[[col2_xs]]\"\n        >\n          <slot name=\"col-2\"></slot>\n        </responsive-grid-col>\n      </template>\n      <template is=\"dom-if\" if=\"[[!hideCol3]]\" strip-whitespace>\n        <responsive-grid-col\n          id=\"col3\"\n          style\\$=\"background-color:[[__col3Color]];\"\n          xl\\$=\"[[col3_xl]]\"\n          lg\\$=\"[[col3_lg]]\"\n          md\\$=\"[[col3_md]]\"\n          sm\\$=\"[[col3_sm]]\"\n          xs\\$=\"[[col3_xs]]\"\n        >\n          <slot name=\"col-3\"></slot>\n        </responsive-grid-col>\n      </template>\n      <template is=\"dom-if\" if=\"[[!hideCol4]]\" strip-whitespace>\n        <responsive-grid-col\n          id=\"col4\"\n          style\\$=\"background-color:[[__col4Color]];\"\n          xl\\$=\"[[col4_xl]]\"\n          lg\\$=\"[[col4_lg]]\"\n          md\\$=\"[[col4_md]]\"\n          sm\\$=\"[[col4_sm]]\"\n          xs\\$=\"[[col4_xs]]\"\n        >\n          <slot name=\"col-4\"></slot>\n        </responsive-grid-col>\n      </template>\n      <responsive-grid-col xl=\"12\" lg=\"12\" md=\"12\" sm=\"12\" xs=\"12\">\n        <slot></slot>\n      </responsive-grid-col>\n    </responsive-grid-row>\n    <iron-a11y-keys\n      stop-keyboard-event-propagation\n      target=\"[[__activeItem]]\"\n      keys=\"enter\"\n      on-keys-pressed=\"setActiveElement\"\n    ></iron-a11y-keys>\n    <iron-a11y-keys\n      target=\"[[__activeItem]]\"\n      keys=\"esc\"\n      on-keys-pressed=\"cancelActive\"\n    ></iron-a11y-keys>\n  "]);_templateObject_9440bef00ec811e99eacc737fe11bc0f=function _templateObject_9440bef00ec811e99eacc737fe11bc0f(){return data};return data}var GridPlate=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_9440bef00ec811e99eacc737fe11bc0f()),is:"grid-plate",listeners:{focusin:"_focusIn",focusout:"_focusOut"},behaviors:[HAXBehaviors.PropertiesBehaviors],properties:{layout:{type:String,value:"12",observer:"_layoutChanged"},editMode:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_editModeChanged"},colors:{type:String,value:""},col1Color:{type:String,value:""},col2Color:{type:String,value:""},col3Color:{type:String,value:""},col4Color:{type:String,value:""},_colors:{type:String,computed:"_colorCreation(colors, col1Color, col2Color, col3Color, col4Color)",observer:"_colColors"},__activeItem:{type:Object,observer:"_activeItemChanged"}},cancelActive:function cancelActive(e){this.__activeItem=null},moveActiveElement:function moveActiveElement(e){var _this=this,normalizedEvent=(0,_polymerDom.dom)(e),local=normalizedEvent.localTarget,col=this.__activeItem.getAttribute("slot").split("-"),max=1,cols=[1,2,3,4];for(var j in cols){if(!this["hideCol"+cols[j]]){max=cols[j]}}switch(local.id){case"up":if(null!==this.__activeItem.previousElementSibling){(0,_polymerDom.dom)(this).insertBefore(this.__activeItem,this.__activeItem.previousElementSibling)}break;case"down":if(null!==this.__activeItem.nextElementSibling){(0,_polymerDom.dom)(this).insertBefore(this.__activeItem.nextElementSibling,this.__activeItem)}break;case"left":if(1<parseInt(col[1])){this.__activeItem.setAttribute("slot","col-"+(parseInt(col[1])-1));(0,_polymerDom.dom)(this).appendChild(this.__activeItem)}break;case"right":if(parseInt(col[1])<max){this.__activeItem.setAttribute("slot","col-"+(parseInt(col[1])+1));(0,_polymerDom.dom)(this).appendChild(this.__activeItem)}break;}setTimeout(function(){_this.positionArrows(_this.__activeItem);_this.__activeItem.focus()},100)},_activeItemChanged:function _activeItemChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&null!=newValue){newValue.classList.add("active-item");this.positionArrows(newValue)}else if(null==newValue){this.positionArrows(newValue)}if(babelHelpers.typeof(oldValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&null!=oldValue){oldValue.classList.remove("active-item");oldValue.blur()}},setActiveElement:function setActiveElement(e){var normalizedEvent=(0,_polymerDom.dom)(e),local=normalizedEvent.localTarget;this.$.up.focus();e.preventDefault();e.stopPropagation()},_focusIn:function _focusIn(e){if(this.editMode){var normalizedEvent=(0,_polymerDom.dom)(e),local=normalizedEvent.localTarget;if((0,_polymerDom.dom)(local).parentNode===this){this.__activeItem=local}}},_focusOut:function _focusOut(e){if(this.editMode){var normalizedEvent=(0,_polymerDom.dom)(e),local=normalizedEvent.localTarget;if(local.parentNode===this||document.activeElement.parentNode===this||document.activeElement===this){}else{}}},positionArrows:function positionArrows(item){if(null==item){this.$.up.classList.remove("active");this.$.down.classList.remove("active");this.$.left.classList.remove("active");this.$.right.classList.remove("active")}else{this.$.up.classList.add("active");this.$.down.classList.add("active");this.$.left.classList.add("active");this.$.right.classList.add("active");this.$.up.disabled=!1;this.$.down.disabled=!1;this.$.left.disabled=!1;this.$.right.disabled=!1;var bodyRect=this.getBoundingClientRect(),elemRect=item.getBoundingClientRect(),topOffset=elemRect.top-bodyRect.top,leftOffset=elemRect.left-bodyRect.left;this.$.up.style.top=topOffset-20+"px";this.$.down.style.top=topOffset+elemRect.height+"px";this.$.left.style.top=topOffset+elemRect.height/2+"px";this.$.right.style.top=topOffset+elemRect.height/2+"px";this.$.up.style.left=leftOffset+elemRect.width/2-10+"px";this.$.down.style.left=leftOffset+elemRect.width/2-10+"px";this.$.left.style.left=leftOffset-20+"px";this.$.right.style.left=leftOffset+elemRect.width+"px";var col=item.getAttribute("slot").split("-"),max=1,cols=[1,2,3,4];for(var j in cols){if(!this["hideCol"+cols[j]]){max=cols[j]}}if(null===item.previousElementSibling){this.$.up.disabled=!0}if(null===item.nextElementSibling){this.$.down.disabled=!0}if(1===parseInt(col[1])){this.$.left.disabled=!0}if(parseInt(col[1])===max){this.$.right.disabled=!0}}},_editModeChanged:function _editModeChanged(newValue,oldValue){var _this2=this,children=(0,_polymerDom.dom)(this).getEffectiveChildNodes();if("object"===babelHelpers.typeof(children)){if(newValue&&!oldValue){for(var i in children){if(babelHelpers.typeof(children[i].tagName)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){children[i].addEventListener("drop",this.dropEvent.bind(this));children[i].addEventListener("dragstart",this.dragStart.bind(this));children[i].addEventListener("dragend",this.dragEnd.bind(this));children[i].addEventListener("dragover",function(e){e.preventDefault()});children[i].setAttribute("draggable",!0);children[i].setAttribute("data-draggable",!0);children[i].setAttribute("tabindex",0)}}async.microTask.run(function(){var cols=[1,2,3,4];for(var j in cols){if(!_this2["hideCol"+cols[j]]){_this2.shadowRoot.querySelector("#col"+cols[j]).addEventListener("drop",_this2.dropEvent.bind(_this2));_this2.shadowRoot.querySelector("#col"+cols[j]).addEventListener("dragstart",_this2.dragStart.bind(_this2));_this2.shadowRoot.querySelector("#col"+cols[j]).addEventListener("dragend",_this2.dragEnd.bind(_this2));_this2.shadowRoot.querySelector("#col"+cols[j]).addEventListener("dragover",function(e){e.preventDefault()});_this2.shadowRoot.querySelector("#col"+cols[j]).setAttribute("data-draggable",!0)}}})}else if(!newValue&&oldValue){for(var i in children){if(babelHelpers.typeof(children[i].tagName)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){children[i].removeEventListener("drop",this.dropEvent.bind(this));children[i].removeEventListener("dragstart",this.dragStart.bind(this));children[i].removeEventListener("dragend",this.dragEnd.bind(this));children[i].removeEventListener("dragover",function(e){e.preventDefault()});children[i].removeAttribute("draggable");children[i].removeAttribute("data-draggable");children[i].removeAttribute("tabindex")}}async.microTask.run(function(){var cols=[1,2,3,4];for(var j in cols){if(!_this2["hideCol"+cols[j]]){_this2.shadowRoot.querySelector("#col"+cols[j]).removeEventListener("drop",_this2.dropEvent.bind(_this2));_this2.shadowRoot.querySelector("#col"+cols[j]).removeEventListener("dragstart",_this2.dragStart.bind(_this2));_this2.shadowRoot.querySelector("#col"+cols[j]).removeEventListener("dragend",_this2.dragEnd.bind(_this2));_this2.shadowRoot.querySelector("#col"+cols[j]).removeEventListener("dragover",function(e){e.preventDefault()});_this2.shadowRoot.querySelector("#col"+cols[j]).removeAttribute("data-draggable")}}})}}},dropEvent:function dropEvent(e){var _this3=this,normalizedEvent=(0,_polymerDom.dom)(e),local=normalizedEvent.localTarget;if(babelHelpers.typeof(this.__activeItem)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&babelHelpers.typeof(local)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&null!=local.getAttribute("slot")&&this.__activeItem!==local){this.__activeItem.setAttribute("slot",local.getAttribute("slot"));(0,_polymerDom.dom)(this).insertBefore(this.__activeItem,local);e.preventDefault();e.stopPropagation()}else if("RESPONSIVE-GRID-COL"===local.tagName){var col=local.id.replace("col","");this.__activeItem.setAttribute("slot","col-"+col);(0,_polymerDom.dom)(this).appendChild(this.__activeItem);e.preventDefault();e.stopPropagation()}var children=(0,_polymerDom.dom)(this).children;for(var i in children){if(babelHelpers.typeof(children[i].classList)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){children[i].classList.remove("mover")}}var cols=[1,2,3,4];for(var j in cols){if(!this["hideCol"+cols[j]]){this.shadowRoot.querySelector("#col"+cols[j]).classList.remove("mover")}}setTimeout(function(){_this3.positionArrows(_this3.__activeItem);_this3.__activeItem.focus()},100)},_colorCreation:function _colorCreation(colors,col1,col2,col3,col4){var items=colors.split("/"),cols=[col1,col2,col3,col4];for(var i in cols){if(""!=cols[i]){items[i]=cols[i]}}return items},dragStart:function dragStart(e){var children=(0,_polymerDom.dom)(this).children;for(var i in children){if(babelHelpers.typeof(children[i].classList)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){children[i].classList.add("mover")}}var cols=[1,2,3,4];for(var j in cols){if(!this["hideCol"+cols[j]]){this.shadowRoot.querySelector("#col"+cols[j]).classList.add("mover")}}},dragEnd:function dragEnd(e){var children=(0,_polymerDom.dom)(this).children;for(var i in children){if(babelHelpers.typeof(children[i].classList)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){children[i].classList.remove("mover")}}var cols=[1,2,3,4];for(var j in cols){if(!this["hideCol"+cols[j]]){this.shadowRoot.querySelector("#col"+cols[j]).classList.remove("mover")}}},splitColor:function splitColor(value){if(""!=value&&babelHelpers.typeof(_simpleColors.SimpleColors.colors[value])!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){return _simpleColors.SimpleColors.colors[value][0]}return value},_colColors:function _colColors(newValue,oldValue){if(""!=newValue){for(var i in newValue){this["__col"+(parseInt(i)+1)+"Color"]=this.splitColor(newValue[i])}}},_layoutChanged:function _layoutChanged(layout){var items=layout.split("/");this.__colCount=items.length;switch(items.length){case 1:this.hideCol1=!1;this.hideCol2=!0;this.hideCol3=!0;this.hideCol4=!0;break;case 2:this.hideCol1=!1;this.hideCol2=!1;this.hideCol3=!0;this.hideCol4=!0;break;case 3:this.hideCol1=!1;this.hideCol2=!1;this.hideCol3=!1;this.hideCol4=!0;break;case 4:this.hideCol1=!1;this.hideCol2=!1;this.hideCol3=!1;this.hideCol4=!1;break;}for(var i in items){var col=+i+1;this["col"+col+"_xl"]=items[i];this["col"+col+"_lg"]=items[i];this["col"+col+"_md"]=items[i];this["col"+col+"_sm"]=items[i];this["col"+col+"_xs"]=items[i]}},attached:function attached(){document.body.addEventListener("hax-store-property-updated",this._haxStorePropertyUpdated.bind(this));document.body.addEventListener("hax-insert-content",this.haxInsertContent.bind(this));var colorOptions=[];for(var i in _simpleColors.SimpleColors.colors){colorOptions[i]=i}var props={canScale:!0,canPosition:!0,canEditSource:!1,settings:{quick:[],configure:[{property:"layout",title:"Layout",description:"Style to present these items",inputMethod:"select",options:{12:"1 col, full width","8/4":"2 cols, 66% / 33% split","6/6":"2 cols, 50% split","4/8":"2 cols, 33% / 66% split","4/4/4":"3 cols, 33% each","3/3/3/3":"4 cols, 25% each"}},{property:"col1Color",title:"Col 1 color",description:"Color for the 1st column",inputMethod:"select",options:colorOptions},{property:"col2Color",title:"Col 2 color",description:"Color for the 1st column",inputMethod:"select",options:colorOptions},{property:"col3Color",title:"Col 3 color",description:"Color for the 1st column",inputMethod:"select",options:colorOptions},{property:"col4Color",title:"Col 4 color",description:"Color for the 1st column",inputMethod:"select",options:colorOptions}],advanced:[]},saveOptions:{unsetAttributes:["__active-item","_colors","edit-mode"]}};this.setHaxProperties(props)},haxInsertContent:function haxInsertContent(e){var _this4=this;if(this===window.HaxStore.instance.activeContainerNode){this.editMode=!1;setTimeout(function(){_this4.editMode=!0;_this4.positionArrows(_this4.__activeItem);_this4.__activeItem.focus()},250)}},_haxStorePropertyUpdated:function _haxStorePropertyUpdated(e){if(e.detail&&babelHelpers.typeof(e.detail.value)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&e.detail.property){if("object"===babelHelpers.typeof(e.detail.value)){this.set(e.detail.property,null)}this.set(e.detail.property,e.detail.value)}}});_exports.GridPlate=GridPlate});