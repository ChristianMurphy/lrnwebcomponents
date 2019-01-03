define(["exports","./node_modules/@polymer/polymer/polymer-legacy.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@polymer/iron-icons/editor-icons.js","./node_modules/@polymer/iron-icons/notification-icons.js","./node_modules/@polymer/iron-icons/av-icons.js","./node_modules/@polymer/iron-icons/device-icons.js","./node_modules/@polymer/iron-icons/image-icons.js","./node_modules/@lrnwebcomponents/materializecss-styles/materializecss-styles.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_polymerLegacy,_ironIcons,_editorIcons,_notificationIcons,_avIcons,_deviceIcons,_imageIcons,_materializecssStyles,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PlaceHolder=void 0;function _templateObject_0e8d9a800ec811e9b499e335a4391ef1(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"materializecss-styles-colors\">\n      :host {\n        display: block;\n        border: none;\n        transition: 0.6s border ease-in-out;\n      }\n      :host([drag-over]) {\n        border: 4px dashed #2196f3;\n      }\n      .placeholder-inner {\n        text-align: center;\n        padding: 16px;\n      }\n      iron-icon.placeholder-icon {\n        margin: 0 auto;\n        width: 50%;\n        height: 50%;\n        display: block;\n      }\n      .placeholder-text {\n        line-height: 16px;\n        font-size: 12px;\n        font-style: italic;\n      }\n    </style>\n    <div class=\"placeholder-inner grey lighten-3 grey-text text-darken-3\">\n      <iron-icon icon=\"[[iconFromType]]\" class=\"placeholder-icon\"></iron-icon>\n      <span class=\"placeholder-text\">[[calcText]]</span>\n    </div>\n  "]);_templateObject_0e8d9a800ec811e9b499e335a4391ef1=function _templateObject_0e8d9a800ec811e9b499e335a4391ef1(){return data};return data}var PlaceHolder=(0,_polymerLegacy.Polymer)({_template:(0,_polymerLegacy.html)(_templateObject_0e8d9a800ec811e9b499e335a4391ef1()),is:"place-holder",behaviors:[HAXBehaviors.PropertiesBehaviors],listeners:{dblclick:"fireReplaceEvent"},properties:{iconFromType:{type:String,computed:"_getIconFromType(type, dragOver)"},text:{type:String,value:""},calcText:{type:String,computed:"_getCalcText(text, type, dragOver)"},type:{type:String,value:"text"},dragOver:{type:Boolean,value:!1,reflectToAttribute:!0}},fireReplaceEvent:function fireReplaceEvent(e){this.fire("place-holder-replace",this.type)},_getCalcText:function _getCalcText(text,type,dragOver){if(dragOver){return"Upload file"}else if(""===text){return"Place holder for future "+type+"."}else{return text}},_getIconFromType:function _getIconFromType(type,dragOver){if(!dragOver){switch(type){case"document":return"editor:insert-drive-file";break;case"audio":return"av:music-video";break;case"video":return"notification:ondemand-video";break;case"image":return"image:crop-original";break;case"math":return"editor:functions";break;case"text":default:return"editor:format-align-left";break;}}else{return"icons:file-upload"}},ready:function ready(){if(babelHelpers.typeof(this.__dropAdded)===("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))){this.__dropAdded=!0;this.addEventListener("dragover",function(e){this.dragOver=!0;e.preventDefault();e.stopPropagation();this.classList.add("dragover")});this.addEventListener("dragleave",function(e){this.dragOver=!1;e.preventDefault();e.stopPropagation();this.classList.remove("dragover")});this.addEventListener("drop",function(e){this.dragOver=!1;e.preventDefault();e.stopPropagation();this.classList.remove("dragover");try{if("file"===e.dataTransfer.items[0].kind){e.placeHolderElement=this;this.fire("place-holder-file-drop",e)}}catch(e){}})}},attached:function attached(){var props={canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Placeholder content",description:"A place holder that can be converted into the media type that's been selected",icon:"image:transform",color:"grey",groups:["Placeholder"],handles:[],meta:{author:"LRNWebComponents"}},settings:{quick:[],configure:[{property:"type",title:"Type",description:"Type of gizmo that this accepts for replacement.",inputMethod:"select",options:{text:"Text / content",document:"Document / file",audio:"Audio",video:"Video",image:"Image",math:"Math"}}],advanced:[]},saveOptions:{wipeSlot:!0}};this.setHaxProperties(props)}});_exports.PlaceHolder=PlaceHolder});