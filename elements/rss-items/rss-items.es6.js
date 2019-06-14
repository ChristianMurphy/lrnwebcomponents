/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */import{html,PolymerElement}from"./node_modules/@polymer/polymer/polymer-element.js";import{afterNextRender}from"./node_modules/@polymer/polymer/lib/utils/render-status.js";import{HAXWiring}from"./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";/**
 * `rss-items`
 * `visualize RSS items`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */class RssItems extends PolymerElement{// render function
static get template(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
</style>
<slot></slot>`}// haxProperty definition
static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Rss items",description:"visualize RSS items",icon:"icons:android",color:"green",groups:["Items"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[],advanced:[]}}}// properties available to the custom element for data binding
static get properties(){let props={};if(super.properties){props=Object.assign(props,super.properties)}return props}/**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */static get tag(){return"rss-items"}/**
   * constructor
   */constructor(){super()}/**
   * life cycle, element is afixed to the DOM
   */connectedCallback(){super.connectedCallback();this.HAXWiring=new HAXWiring;this.HAXWiring.setup(RssItems.haxProperties,RssItems.tag,this)}/**
   * life cycle, element is removed from the DOM
   */disconnectedCallback(){super.disconnectedCallback()}}window.customElements.define(RssItems.tag,RssItems);export{RssItems};