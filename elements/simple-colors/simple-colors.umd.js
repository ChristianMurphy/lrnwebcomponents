!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js"],t):t((e=e||self).SimpleColors={},e.polymerElement_js)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e,t,n){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(){var e=f(["\n    ","\n  "]);return s=function(){return e},e}function c(){var e=f(['\n      <style is="custom-style" include="simple-colors"></style> <slot></slot>\n    ']);return c=function(){return e},e}var i=function(e){function f(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),a(this,l(f).apply(this,arguments))}var s,i,v;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(f,t.PolymerElement),s=f,v=[{key:"is",get:function(){return"simple-colors"}},{key:"properties",get:function(){return{accentColor:{name:"accentColor",type:"String",value:"grey",reflectToAttribute:!0,observer:!1},dark:{name:"dark",type:"Boolean",value:!1,reflectToAttribute:!0,observer:!1},colors:{name:"colors",type:"Object",value:null,reflectToAttribute:!1,observer:!1},__wcagContrast:{name:"__wcagContrast",type:"Object",value:null,reflectToAttribute:!1,observer:!1}}}},{key:"template",get:function(){return t.html(c())}}],(i=[{key:"connectedCallback",value:function(){f.requestAvailability(),this.set("colors",f.colors),this.set("__wcagContrast",f.wcagContrast),this.getContrasts("--simple-colors-default-theme-accent-5"),this.getContrasts("--simple-colors-dark-theme-grey-2",!1),this.getContrasts("--simple-colors-dark-theme-red-11",!0),this.getContrasts("--simple-colors-dark-theme-grey-1",!0),o(l(f.prototype),"connectedCallback",this).call(this)}},{key:"getContrasts",value:function(e,t){t=null!=t&&t;var n=[],l=e.replace("--","").split("-"),r=l[2],a="grey"===l[4];for(var o in this.colors)for(var f="grey"===this.colors[o]||a?this.__wcagContrast.colorOnColor:this.__wcagContrast.greyOnColor,s=(t?f.large:f.small)[l[5]-1],c=s.minLevelContrast-1,i=s.maxLevelContrast-1,v=c;v<=i;v++)n.push({color:"--simple-colors-"+[r,"theme",o,v+1].join("-"),hex:this.colors[o][v]});return n}}])&&n(s.prototype,i),v&&n(s,v),f}();customElements.define(i.is,i);var v={grey:["#ffffff","#eeeeee","#dddddd","#cccccc","#bbbbbb","#999999","#666666","#444444","#333333","#222222","#111111","#000000"],red:["#ffdddd","#ffaeae","#ff8f8f","#ff7474","#fd5151","#ff2222","#ee0000","#ac0000","#850000","#670000","#520000","#3f0000"],pink:["#ffe6f1","#ffa5cf","#ff87c0","#ff73b5","#fd60aa","#ff3996","#da004e","#b80042","#980036","#78002b","#5a0020","#440019"],purple:["#fce6ff","#f4affd","#f394ff","#f07cff","#ed61ff","#e200ff","#a500ba","#8a009b","#6c0079","#490052","#33003a","#200025"],"deep-purple":["#f3e4ff","#ddacff","#c97eff","#bb63f9","#b44aff","#a931ff","#7e00d8","#5d009f","#4c0081","#3a0063","#2a0049","#1d0033"],indigo:["#e5ddff","#c3b2ff","#af97ff","#9e82ff","#9373ff","#835fff","#3a00ff","#2801b0","#20008c","#160063","#100049","#0a0030"],blue:["#e2ecff","#acc9ff","#95baff","#74a5ff","#5892fd","#4083ff","#0059ff","#0041bb","#003494","#002569","#001947","#001333"],"light-blue":["#ddefff","#a1d1ff","#92c9ff","#65b3ff","#58adff","#41a1ff","#007ffc","#0066ca","#0055a8","#003f7d","#002850","#001b36"],cyan:["#ddf8ff","#9beaff","#77e2ff","#33d4ff","#1ccfff","#00c9ff","#009dc7","#007999","#005970","#003f50","#002c38","#001a20"],teal:["#d9fff0","#98ffd7","#79ffcb","#56ffbd","#29ffac","#00ff9c","#009d75","#007658","#004e3a","#003829","#002a20","#001b14"],green:["#e1ffeb","#acffc9","#79ffa7","#49ff88","#24ff70","#00f961","#008c37","#00762e","#005a23","#003d18","#002a11","#001d0c"],"light-green":["#ebffdb","#c7ff9b","#b1ff75","#a1fd5a","#8efd38","#6fff00","#429d00","#357f00","#296100","#1b3f00","#143000","#0d2000"],lime:["#f1ffd2","#dfff9b","#d4ff77","#caff58","#bdff2d","#aeff00","#649900","#4d7600","#3b5a00","#293f00","#223400","#182400"],yellow:["#ffffd5","#ffffac","#ffff90","#ffff7c","#ffff3a","#f6f600","#929100","#787700","#585700","#454400","#303000","#242400"],amber:["#fff2d4","#ffdf92","#ffd677","#ffcf5e","#ffc235","#ffc500","#b28900","#876800","#614b00","#413200","#302500","#221a00"],orange:["#ffebd7","#ffca92","#ffbd75","#ffb05c","#ff9e36","#ff9625","#e56a00","#ae5100","#833d00","#612d00","#3d1c00","#2c1400"],"deep-orange":["#ffe7e0","#ffb299","#ffa588","#ff8a64","#ff7649","#ff6c3c","#f53100","#b92500","#8a1c00","#561100","#3a0c00","#240700"],brown:["#f0e2de","#e5b8aa","#c59485","#b68373","#ac7868","#a47060","#85574a","#724539","#5b3328","#3b1e15","#2c140e","#200e09"],"blue-grey":["#e7eff1","#b1c5ce","#9badb6","#8d9fa7","#7a8f98","#718892","#56707c","#40535b","#2f3e45","#1e282c","#182023","#0f1518"]};i.instance=null,i.colors=v,i.wcagContrast={greyOnColor:{large:[{level:1,minLevelContrast:7,maxLevelContrast:12},{level:2,minLevelContrast:7,maxLevelContrast:12},{level:3,minLevelContrast:7,maxLevelContrast:12},{level:4,minLevelContrast:7,maxLevelContrast:12},{level:5,minLevelContrast:8,maxLevelContrast:12},{level:6,minLevelContrast:10,maxLevelContrast:12},{level:7,minLevelContrast:1,maxLevelContrast:3},{level:8,minLevelContrast:1,maxLevelContrast:5},{level:9,minLevelContrast:1,maxLevelContrast:6},{level:10,minLevelContrast:1,maxLevelContrast:6},{level:11,minLevelContrast:1,maxLevelContrast:6},{level:12,minLevelContrast:1,maxLevelContrast:6}],small:[{level:1,minLevelContrast:7,maxLevelContrast:12},{level:2,minLevelContrast:7,maxLevelContrast:12},{level:3,minLevelContrast:7,maxLevelContrast:12},{level:4,minLevelContrast:8,maxLevelContrast:12},{level:5,minLevelContrast:8,maxLevelContrast:12},{level:6,minLevelContrast:11,maxLevelContrast:12},{level:7,minLevelContrast:1,maxLevelContrast:2},{level:8,minLevelContrast:1,maxLevelContrast:7},{level:9,minLevelContrast:1,maxLevelContrast:7},{level:10,minLevelContrast:1,maxLevelContrast:6},{level:11,minLevelContrast:1,maxLevelContrast:6},{level:12,minLevelContrast:1,maxLevelContrast:6}]},colorOnColor:{large:[{level:1,minLevelContrast:7,maxLevelContrast:12},{level:2,minLevelContrast:7,maxLevelContrast:12},{level:3,minLevelContrast:8,maxLevelContrast:12},{level:4,minLevelContrast:9,maxLevelContrast:12},{level:5,minLevelContrast:10,maxLevelContrast:12},{level:6,minLevelContrast:11,maxLevelContrast:12},{level:7,minLevelContrast:1,maxLevelContrast:2},{level:8,minLevelContrast:1,maxLevelContrast:3},{level:9,minLevelContrast:1,maxLevelContrast:4},{level:10,minLevelContrast:1,maxLevelContrast:5},{level:11,minLevelContrast:1,maxLevelContrast:6},{level:12,minLevelContrast:1,maxLevelContrast:6}],small:[{level:1,minLevelContrast:8,maxLevelContrast:12},{level:2,minLevelContrast:8,maxLevelContrast:12},{level:3,minLevelContrast:9,maxLevelContrast:12},{level:4,minLevelContrast:9,maxLevelContrast:12},{level:5,minLevelContrast:11,maxLevelContrast:12},{level:6,minLevelContrast:12,maxLevelContrast:12},{level:7,minLevelContrast:1,maxLevelContrast:1},{level:8,minLevelContrast:1,maxLevelContrast:2},{level:9,minLevelContrast:1,maxLevelContrast:4},{level:10,minLevelContrast:1,maxLevelContrast:4},{level:11,minLevelContrast:1,maxLevelContrast:5},{level:12,minLevelContrast:1,maxLevelContrast:5}]}},i.requestAvailability=function(e){i.instance||(i.instance=document.createElement("simple-colors"),document.body.appendChild(i.instance))};var m,u,d=function(e,t,n){return n?e[e.length-t-1]:e[t]},C=function(e,t){var n=[];for(var l in v)n.push(L(e,l,v[l],t));return n.join("")},L=function(e,t,n,l){for(var r=[],a=0;a<n.length;a++)r.push("  --simple-colors-"+e+"-theme-"+t+"-"+(a+1)+": "+d(n,a,l)+";\n");return r.join("")},b=function(e,t){return["."+e+", ::slotted(."+e+") { background-color: var(--"+e+"); }\n","."+e+"-text, ::slotted(."+e+"-text) { color: var(--"+e+"); }\n","."+e+"-border, ::slotted(."+e+"-border) { border: 1px solid var(--"+e+"); }\n"].join("")},p=function(e,t){return"<style>\n"+e+" {\n"+t+"\n}\n</style>\n"},h=document.createElement("dom-module"),y=document.createElement("template");y.innerHTML=((u=[]).push(p(":host, :host * ::slotted(*)",L("default","accent",m=v.grey,!1)+C("default",!1))),u.push(p(":host, :host * ::slotted(*)",L("light","accent",m,!1)+C("light",!1))),u.push(p(":host, :host * ::slotted(*)",L("dark","accent",m,!0)+C("dark",!0))),u.push(p(":host([dark]), :host([dark]) * ::slotted(*)",L("default","accent",m,!0)+C("default",!0))),u.join("")+function(){var e=[];for(var t in v)e.push(p(':host([accent-color="'+t+'"]), :host([accent-color="'+t+'"]) ::slotted(*)',[L("default","accent",v[t],!1),L("light","accent",v[t],!1),L("dark","accent",v[t],!0)].join(""))),e.push(p(':host([dark][accent-color="'+t+'"]), :host([dark][accent-color="'+t+'"]) ::slotted(*)',[L("default","accent",v[t],!0)].join("")));return e.join("")}()+function(){for(var e=["default","light","dark"],t=[],n=0;n<e.length;n++){for(var l=[],r=0;r<v.grey.length;r++){var a="simple-colors-"+e[n]+"-theme";for(var o in l.push(b(a+"-accent-"+(r+1))),v)l.push(b(a+"-"+o+"-"+(r+1),v[o][r]))}t.push("<style>\n"+l.join("")+"\n</style>\n")}return t.join("")}()),h.appendChild(t.html(s(),y)),h.register("simple-colors"),e.SimpleColors=i,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=simple-colors.umd.js.map
