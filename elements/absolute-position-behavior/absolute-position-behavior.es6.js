import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";class AbsolutePositionBehavior extends PolymerElement{static get template(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
</style>
<slot></slot>`}static get properties(){return{}}static get tag(){return"absolute-position-behavior"}connectedCallback(){super.connectedCallback()}}window.customElements.define(AbsolutePositionBehavior.tag,AbsolutePositionBehavior);export{AbsolutePositionBehavior};