!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@polymer/iron-resizable-behavior/iron-resizable-behavior.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/legacy/polymer.dom.js","@polymer/iron-resizable-behavior/iron-resizable-behavior.js"],i):i(t.polymerLegacy_js,t.polymer_dom_js,t.ironResizableBehavior_js)}(this,function(t,i,e){"use strict";function n(){var t,i,e=(t=['\n    <style>\n      :host {\n        display: block;\n        position: relative;\n      }\n\n      :host([is-swiping]) {\n        z-index: 1001;\n      }\n\n      :host > ::content > * {\n        position: absolute;\n        box-sizing: border-box;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        height: 100%;\n      }\n\n      ::content > [swipe-left-action] {visibility: hidden;}\n      ::content > [swipe-right-action] {visibility: hidden;}\n      ::content > [swipe-up-action] {visibility: hidden;}\n      ::content > [swipe-down-action] {visibility: hidden;}\n\n      ::content > .visible-action {\n        visibility: visible;\n      }\n\n      #swipeTarget {\n        @apply --swipe-action-swipe-target;\n      }\n\n      #swipeTarget.fade {\n        opacity: 0 !important;\n      }\n\n      #swipeTarget.snap-back {\n        -webkit-transform: none !important;\n        transform: none !important;\n        opacity: 1 !important;\n      }\n\n      #swipeTarget.snap-back.animated {\n        transition: all 200ms ease-in-out;\n      }\n    </style>\n\n    <slot id="actions" name="[swipe-left-action],[swipe-right-action],[swipe-up-action],[swipe-down-action]"></slot>\n    \n    <div id="swipeTarget">\n      <slot id="content"></slot>\n    </div>\n'],i||(i=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(i)}})));return n=function(){return e},e}var s=function(t,i,e,n,s,r,a,o,c){this.id=t,this.node=i,this.size=e,this.requestedSize=n,this.rubberBand=s,this.fade=r,this.maxRubberBandReached=a,this.axis=o,this.direction=c};s.prototype={constructor:s,id:"right",node:void 0,size:void 0,requestedSize:void 0,rubberBand:!1,fade:!1,maxRubberBandReached:!1,axis:"x",direction:1},t.Polymer({_template:t.html(n()),is:"swipe-action",properties:{gestureDisabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_refreshActions"},isSwiping:{type:Boolean,value:!1,readOnly:!0,notify:!0,reflectToAttribute:!0},isSwipedAway:{type:Boolean,value:!1,readOnly:!0,notify:!0,reflectToAttribute:!0},activatedAction:{type:s,value:void 0,readOnly:!0,notify:!0},activatedActionId:{type:String,value:void 0,notify:!0,observer:"_onActivatedActionIdChange"},_SWIPE_SPEED_THREASHOLD:{type:Number,value:10,readOnly:!0},_OPPOSITE_AXIS_MAX_SCROLLING_THREASHOLD:{type:Number,value:10,readOnly:!0},_SWIPE_TRANSITION:{type:String,value:"all 200ms ease-in-out",readOnly:!0},_ACTIONS_CONFIG:{type:Array,value:function(){return[{attr:"swipe-left-action",id:window.SwipeAction.ACTION_LEFT},{attr:"swipe-right-action",id:window.SwipeAction.ACTION_RIGHT},{attr:"swipe-up-action",id:window.SwipeAction.ACTION_UP},{attr:"swipe-down-action",id:window.SwipeAction.ACTION_DOWN}]},readOnly:!0},_gesture:{type:Object,value:null}},behaviors:[e.IronResizableBehavior,MutationObserverBehavior],listeners:{"iron-resize":"_onResize","dom-mutation":"_refreshActions"},ready:function(){this._mutationOptions={childList:!0,subtree:!0,attributes:!0,characterData:!1,attributeFilter:this._ACTIONS_CONFIG.map(function(t){return t.attr})},this._mutationFilter=function(t){return this._mutationIsChildList(t,this.$.actions)||this._mutationIsChildAttributes(t,this.$.actions)},this.target=this.$.swipeTarget,this.listen(this.target,"track","_onTrack"),this.listen(this.target,"transitionend","_onTransitionEnd"),this._refreshActions()},detached:function(){this.unlisten(this.target,"track","_onTrack"),this.unlisten(this.target,"transitionend","_onTransitionEnd")},reset:function(t){this._snapBack(t)},activateAction:function(t,i){this._animateActivation=i;var e=this._actionsMap[t],n=this.activatedAction?this.activatedAction.id:void 0,s=e?e.id:void 0;n!==s&&(!s&&n?this.reset(i):(this._currentAction=e,this.activatedAction?(this.listen(this,"swipe-canceled","_activateCurrentAction"),this.reset(i)):this._activateCurrentAction()))},_activateCurrentAction:function(){this.unlisten(this,"swipe-canceled","_activateCurrentAction"),this._currentAction&&(this._updateActions(this._currentAction.axis,this._currentAction.direction),this._swipeAway(this._currentAction,this._animateActivation?this._SWIPE_TRANSITION:""))},_onActivatedActionIdChange:function(t,i){this._activatedActionIdAlreadyChanged||(this._mutationObserverPaused=!0,this._mute=1,t?this.activateAction(t,!1):(this._mute++,this.reset(!1))),this._activatedActionIdAlreadyChanged=!1},_onResize:function(){this.debounce("_refreshActions",this._refreshActions,100)},_refreshActions:function(){if(this.target&&this._ACTIONS_CONFIG){this._targetHeight=this.target.offsetHeight,this._targetWidth=this.target.offsetWidth;var t,i={},e=!1,n=!1;this.getContentChildren("#actions").forEach(function(s){this._ACTIONS_CONFIG.forEach(function(r){s.hasAttribute(r.attr)&&(t=this._actionFactory(r.id,s),i[r.id]=t,e=e||"x"===t.axis,n=n||"y"===t.axis)},this)},this),this._actionsMap=i,this.setScrollDirection(this.gestureDisabled||!e&&!n?"all":e?n?"none":"y":"x",this.target)}},_actionFactory:function(t,i){if(!i)return null;var e=Number(i.getAttribute("swipe-size"))||null,n=i.getAttribute("swipe-fade"),r=Number(i.getAttribute("swipe-rubber-band"));return new s(t,i,e||(t===window.SwipeAction.ACTION_UP||t===window.SwipeAction.ACTION_DOWN?this._targetHeight:this._targetWidth),e,isNaN(r)?60:r,n||""===n,!1,t===window.SwipeAction.ACTION_UP||t===window.SwipeAction.ACTION_DOWN?"y":"x",t===window.SwipeAction.ACTION_LEFT||t===window.SwipeAction.ACTION_UP?-1:1)},_getActionId:function(t,i){return i>0?"x"===t?window.SwipeAction.ACTION_RIGHT:window.SwipeAction.ACTION_DOWN:"x"===t?window.SwipeAction.ACTION_LEFT:window.SwipeAction.ACTION_UP},_getSwipingDirection:function(t,i){return t.detail["d"+i]>0?1:-1},_onTrack:function(t){if(!this.isSwipedAway&&!this.gestureDisabled)switch(t.detail.state){case"start":this._swipeStart(t);break;case"track":this.isSwiping&&this._swipeUpdate(t);break;case"end":this.isSwiping&&this._swipeEnd(t)}},_swipeStart:function(t){this._mutationObserverPaused=!0,this._gesture={axis:Math.abs(t.detail.dx)>Math.abs(t.detail.dy)?"x":"y"};var i="x"===this._gesture.axis?"y":"x";this._gesture.direction=this._getSwipingDirection(t,this._gesture.axis),this._gesture.lastTimestamp=Date.now(),this._updateActions(this._gesture.axis,this._gesture.direction);var e=this._currentAction&&Math.abs(t.detail["d"+i])<=this._OPPOSITE_AXIS_MAX_SCROLLING_THREASHOLD;this._setIsSwiping(e),e&&(this.target.style.willChange="transform",this._applyGestureTranslation(t.detail["d"+this._gesture.axis],this._gesture.axis))},_swipeUpdate:function(t){var i=this._getSwipingDirection(t,this._gesture.axis),e=t.detail["d"+this._gesture.axis];i!=this._gesture.direction&&(this._gesture.direction=i,this._updateActions(this._gesture.axis,this._gesture.direction),this.target.style.opacity=1);var n=Date.now();this._gesture.lastDelta=t.detail["dd"+this._gesture.axis],this._gesture.lastDeltaDuration=n-this._gesture.lastTimestamp,this._gesture.lastTimestamp=n,this._applyGestureTranslation(e,this._gesture.axis),this._currentAction.fade&&(this.target.style.opacity=1-Math.abs(e)/this._currentAction.size)},_swipeEnd:function(t){var i,e=Math.abs(t.detail["d"+this._gesture.axis]);if(e>=this._currentAction.size&&!this._currentAction.rubberBand)i="";else if(e<this._currentAction.size&&this._gesture.lastDelta*this._gesture.direction>this._SWIPE_SPEED_THREASHOLD)i="all ",i+=Math.floor(Math.min(200,(this._currentAction.size-e)/(this._gesture.lastDelta*this._gesture.direction)*this._gesture.lastDeltaDuration)),i+="ms linear";else{if(!(e>=this._currentAction.size/2))return void this._snapBack(!0);i=this._SWIPE_TRANSITION}this._swipeAway(this._currentAction,i)},_updateActions:function(t,e){var n=this._getActionId(t,e);for(n in this._currentAction=this._actionsMap[n],this._actionsMap)i.dom(this._actionsMap[n].node).classList.remove("visible-action");this._currentAction&&i.dom(this._currentAction.node).classList.add("visible-action")},_swipeAway:function(e,n){this.target.style.transition=n,this._willBeSwipedAway=!0,e.fade&&i.dom(this.target).classList.add("fade"),t.Polymer.Base.transform(this._getTranslate3d(e.direction*e.size,e.axis),this.target),n||this._cleanupAfterTransition()},_snapBack:function(t){(this.isSwiping||this.isSwipedAway)&&i.dom(this.target).classList.add("snap-back"),t?i.dom(this.target).classList.add("animated"):(this.target.style.transition="",this._cleanupAfterTransition())},_onTransitionEnd:function(t){i.dom(t).rootTarget===this.target&&(t.stopPropagation(),"transform"===t.propertyName&&this._cleanupAfterTransition())},_cleanupAfterTransition:function(){if(this._willBeSwipedAway)return this._willBeSwipedAway=!1,this._changeActivatedAction(this._currentAction),void this._fireEvent("swiped-away");i.dom(this.target).classList.contains("snap-back")&&(this._changeActivatedAction(void 0),this._fireEvent("swipe-canceled")),this._mute--},_fireEvent:function(t){this._mute||this.fire(t,{action:this._currentAction,gesture:this._gesture})},_changeActivatedAction:function(e){var n=e?e.id:void 0;if(this.activatedActionId!==n&&(this._activatedActionIdAlreadyChanged=!0,this.activatedActionId=n),!e){t.Polymer.Base.transform("",this.target),this.target.style.opacity="";var s=i.dom(this.target).classList;s.remove("snap-back"),s.remove("animated"),s.remove("fade")}this._setActivatedAction(e),this.target.style.transition="",this.target.style.willChange="",this._gesture=void 0,this._mutationObserverPaused=!1,this._setIsSwipedAway(!!e),this._setIsSwiping(!1)},_getTranslate3d:function(t,i){return"translate3d("+("x"===i?t+"px, 0":"0, "+t+"px")+", 0)"},_applyGestureTranslation:function(i,e){var n=i;n=!this._currentAction.rubberBand||this._currentAction.fade?this._currentAction.direction*Math.min(Math.abs(n),this._currentAction.size):this._applyRubberBand(n),t.Polymer.Base.transform(this._getTranslate3d(n,e),this.target)},_applyRubberBand:function(t){var i=Math.abs(t),e=Math.max(this._gesture.direction*(this._currentAction.size+this._currentAction.rubberBand),3.5*this._currentAction.rubberBand),n=e+this._currentAction.size;return i>this._currentAction.size&&i<n?this._gesture.direction*this._rubberBand(i,this._currentAction.size,e,this._currentAction.rubberBand):i>=n?(this._currentAction.maxRubberBandReached||(this._currentAction.maxRubberBandReached=!0,this._fireEvent("swipe-rubber-band-limit")),this._gesture.direction*(this._currentAction.size+this._currentAction.rubberBand)):t},_rubberBand:function(t,i,e,n){var s=(t-i)/e;return Math.min(-n*s*(s-2)+i,t)}}),Object.defineProperty(window.SwipeAction,"ACTION_LEFT",{get:function(){return"left"}}),Object.defineProperty(window.SwipeAction,"ACTION_RIGHT",{get:function(){return"right"}}),Object.defineProperty(window.SwipeAction,"ACTION_UP",{get:function(){return"up"}}),Object.defineProperty(window.SwipeAction,"ACTION_DOWN",{get:function(){return"down"}})});
//# sourceMappingURL=swipe-action.umd.js.map