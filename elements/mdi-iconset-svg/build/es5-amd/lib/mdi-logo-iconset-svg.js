define([
  "../node_modules/@polymer/iron-icon/iron-icon.js",
  "../node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js",
  "../node_modules/@polymer/polymer/lib/utils/html-tag.js"
], function(_ironIcon, _ironIconsetSvg, _htmlTag) {
  "use strict";
  function _templateObject_458547b0e70711e896fed57cf37dfab7() {
    var data = babelHelpers.taggedTemplateLiteral([
      '<iron-iconset-svg name="mdi-logo" size="24">\n  <svg>\n\n    <g id="amazon">\n      <path d="M15.93,17.09C15.75,17.25 15.5,17.26 15.3,17.15C14.41,16.41 14.25,16.07 13.76,15.36C12.29,16.86 11.25,17.31 9.34,17.31C7.09,17.31 5.33,15.92 5.33,13.14C5.33,10.96 6.5,9.5 8.19,8.76C9.65,8.12 11.68,8 13.23,7.83V7.5C13.23,6.84 13.28,6.09 12.9,5.54C12.58,5.05 11.95,4.84 11.4,4.84C10.38,4.84 9.47,5.37 9.25,6.45C9.2,6.69 9,6.93 8.78,6.94L6.18,6.66C5.96,6.61 5.72,6.44 5.78,6.1C6.38,2.95 9.23,2 11.78,2C13.08,2 14.78,2.35 15.81,3.33C17.11,4.55 17,6.18 17,7.95V12.12C17,13.37 17.5,13.93 18,14.6C18.17,14.85 18.21,15.14 18,15.31L15.94,17.09H15.93M13.23,10.56V10C11.29,10 9.24,10.39 9.24,12.67C9.24,13.83 9.85,14.62 10.87,14.62C11.63,14.62 12.3,14.15 12.73,13.4C13.25,12.47 13.23,11.6 13.23,10.56M20.16,19.54C18,21.14 14.82,22 12.1,22C8.29,22 4.85,20.59 2.25,18.24C2.05,18.06 2.23,17.81 2.5,17.95C5.28,19.58 8.75,20.56 12.33,20.56C14.74,20.56 17.4,20.06 19.84,19.03C20.21,18.87 20.5,19.27 20.16,19.54M21.07,18.5C20.79,18.14 19.22,18.33 18.5,18.42C18.31,18.44 18.28,18.26 18.47,18.12C19.71,17.24 21.76,17.5 22,17.79C22.24,18.09 21.93,20.14 20.76,21.11C20.58,21.27 20.41,21.18 20.5,21C20.76,20.33 21.35,18.86 21.07,18.5Z"></path>\n    </g>\n\n    <g id="amazon-clouddrive">\n      <path d="M4.94,11.12C5.23,11.12 5.5,11.16 5.76,11.23C5.77,9.09 7.5,7.35 9.65,7.35C11.27,7.35 12.67,8.35 13.24,9.77C13.83,9 14.74,8.53 15.76,8.53C17.5,8.53 18.94,9.95 18.94,11.71C18.94,11.95 18.91,12.2 18.86,12.43C19.1,12.34 19.37,12.29 19.65,12.29C20.95,12.29 22,13.35 22,14.65C22,15.95 20.95,17 19.65,17C18.35,17 6.36,17 4.94,17C3.32,17 2,15.68 2,14.06C2,12.43 3.32,11.12 4.94,11.12Z"></path>\n    </g>\n\n    <g id="android">\n      <path d="M15,5H14V4H15M10,5H9V4H10M15.53,2.16L16.84,0.85C17.03,0.66 17.03,0.34 16.84,0.14C16.64,-0.05 16.32,-0.05 16.13,0.14L14.65,1.62C13.85,1.23 12.95,1 12,1C11.04,1 10.14,1.23 9.34,1.63L7.85,0.14C7.66,-0.05 7.34,-0.05 7.15,0.14C6.95,0.34 6.95,0.66 7.15,0.85L8.46,2.16C6.97,3.26 6,5 6,7H18C18,5 17,3.25 15.53,2.16M20.5,8A1.5,1.5 0 0,0 19,9.5V16.5A1.5,1.5 0 0,0 20.5,18A1.5,1.5 0 0,0 22,16.5V9.5A1.5,1.5 0 0,0 20.5,8M3.5,8A1.5,1.5 0 0,0 2,9.5V16.5A1.5,1.5 0 0,0 3.5,18A1.5,1.5 0 0,0 5,16.5V9.5A1.5,1.5 0 0,0 3.5,8M6,18A1,1 0 0,0 7,19H8V22.5A1.5,1.5 0 0,0 9.5,24A1.5,1.5 0 0,0 11,22.5V19H13V22.5A1.5,1.5 0 0,0 14.5,24A1.5,1.5 0 0,0 16,22.5V19H17A1,1 0 0,0 18,18V8H6V18Z"></path>\n    </g>\n\n    <g id="basecamp">\n      <path d="M3.39,15.64C3.4,15.55 3.42,15.45 3.45,15.36C3.5,15.18 3.54,15 3.6,14.84C3.82,14.19 4.16,13.58 4.5,13C4.7,12.7 4.89,12.41 5.07,12.12C5.26,11.83 5.45,11.54 5.67,11.26C6,10.81 6.45,10.33 7,10.15C7.79,9.9 8.37,10.71 8.82,11.22C9.08,11.5 9.36,11.8 9.71,11.97C9.88,12.04 10.06,12.08 10.24,12.07C10.5,12.05 10.73,11.87 10.93,11.71C11.46,11.27 11.9,10.7 12.31,10.15C12.77,9.55 13.21,8.93 13.73,8.38C13.95,8.15 14.18,7.85 14.5,7.75C14.62,7.71 14.77,7.72 14.91,7.78C15,7.82 15.05,7.87 15.1,7.92C15.17,8 15.25,8.04 15.32,8.09C15.88,8.5 16.4,9 16.89,9.5C17.31,9.93 17.72,10.39 18.1,10.86C18.5,11.32 18.84,11.79 19.15,12.3C19.53,12.93 19.85,13.58 20.21,14.21C20.53,14.79 20.86,15.46 20.53,16.12C20.5,16.15 20.5,16.19 20.5,16.22C19.91,17.19 18.88,17.79 17.86,18.18C16.63,18.65 15.32,18.88 14,18.97C12.66,19.07 11.3,19.06 9.95,18.94C8.73,18.82 7.5,18.6 6.36,18.16C5.4,17.79 4.5,17.25 3.84,16.43C3.69,16.23 3.56,16.03 3.45,15.81C3.43,15.79 3.42,15.76 3.41,15.74C3.39,15.7 3.38,15.68 3.39,15.64M2.08,16.5C2.22,16.73 2.38,16.93 2.54,17.12C2.86,17.5 3.23,17.85 3.62,18.16C4.46,18.81 5.43,19.28 6.44,19.61C7.6,20 8.82,20.19 10.04,20.29C11.45,20.41 12.89,20.41 14.3,20.26C15.6,20.12 16.91,19.85 18.13,19.37C19.21,18.94 20.21,18.32 21.08,17.54C21.31,17.34 21.53,17.13 21.7,16.88C21.86,16.67 22,16.44 22,16.18C22,15.88 22,15.57 21.92,15.27C21.85,14.94 21.76,14.62 21.68,14.3C21.65,14.18 21.62,14.06 21.59,13.94C21.27,12.53 20.78,11.16 20.12,9.87C19.56,8.79 18.87,7.76 18.06,6.84C17.31,6 16.43,5.22 15.43,4.68C14.9,4.38 14.33,4.15 13.75,4C13.44,3.88 13.12,3.81 12.8,3.74C12.71,3.73 12.63,3.71 12.55,3.71C12.44,3.71 12.33,3.71 12.23,3.71C12,3.71 11.82,3.71 11.61,3.71C11.5,3.71 11.43,3.7 11.33,3.71C11.25,3.72 11.16,3.74 11.08,3.75C10.91,3.78 10.75,3.81 10.59,3.85C10.27,3.92 9.96,4 9.65,4.14C9.04,4.38 8.47,4.7 7.93,5.08C6.87,5.8 5.95,6.73 5.18,7.75C4.37,8.83 3.71,10.04 3.21,11.3C2.67,12.64 2.3,14.04 2.07,15.47C2.04,15.65 2,15.84 2,16C2,16.12 2,16.22 2,16.32C2,16.37 2,16.4 2.03,16.44C2.04,16.46 2.06,16.5 2.08,16.5Z"></path>\n    </g>\n\n    <g id="behance">\n      <path d="M19.58,12.27C19.54,11.65 19.33,11.18 18.96,10.86C18.59,10.54 18.13,10.38 17.58,10.38C17,10.38 16.5,10.55 16.19,10.89C15.86,11.23 15.65,11.69 15.57,12.27M21.92,12.04C22,12.45 22,13.04 22,13.81H15.5C15.55,14.71 15.85,15.33 16.44,15.69C16.79,15.92 17.22,16.03 17.73,16.03C18.26,16.03 18.69,15.89 19,15.62C19.2,15.47 19.36,15.27 19.5,15H21.88C21.82,15.54 21.53,16.07 21,16.62C20.22,17.5 19.1,17.92 17.66,17.92C16.47,17.92 15.43,17.55 14.5,16.82C13.62,16.09 13.16,14.9 13.16,13.25C13.16,11.7 13.57,10.5 14.39,9.7C15.21,8.87 16.27,8.46 17.58,8.46C18.35,8.46 19.05,8.6 19.67,8.88C20.29,9.16 20.81,9.59 21.21,10.2C21.58,10.73 21.81,11.34 21.92,12.04M9.58,14.07C9.58,13.42 9.31,12.97 8.79,12.73C8.5,12.6 8.08,12.53 7.54,12.5H4.87V15.84H7.5C8.04,15.84 8.46,15.77 8.76,15.62C9.31,15.35 9.58,14.83 9.58,14.07M4.87,10.46H7.5C8.04,10.46 8.5,10.36 8.82,10.15C9.16,9.95 9.32,9.58 9.32,9.06C9.32,8.5 9.1,8.1 8.66,7.91C8.27,7.78 7.78,7.72 7.19,7.72H4.87M11.72,12.42C12.04,12.92 12.2,13.53 12.2,14.24C12.2,15 12,15.64 11.65,16.23C11.41,16.62 11.12,16.94 10.77,17.21C10.37,17.5 9.9,17.72 9.36,17.83C8.82,17.94 8.24,18 7.61,18H2V5.55H8C9.53,5.58 10.6,6 11.23,6.88C11.61,7.41 11.8,8.04 11.8,8.78C11.8,9.54 11.61,10.15 11.23,10.61C11,10.87 10.7,11.11 10.28,11.32C10.91,11.55 11.39,11.92 11.72,12.42M20.06,7.32H15.05V6.07H20.06V7.32Z"></path>\n    </g>\n\n    <g id="blogger">\n      <path d="M14,13H9.95A1,1 0 0,0 8.95,14A1,1 0 0,0 9.95,15H14A1,1 0 0,0 15,14A1,1 0 0,0 14,13M9.95,10H12.55A1,1 0 0,0 13.55,9A1,1 0 0,0 12.55,8H9.95A1,1 0 0,0 8.95,9A1,1 0 0,0 9.95,10M16,9V10A1,1 0 0,0 17,11A1,1 0 0,1 18,12V15A3,3 0 0,1 15,18H9A3,3 0 0,1 6,15V8A3,3 0 0,1 9,5H13A3,3 0 0,1 16,8M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z"></path>\n    </g>\n\n    <g id="box">\n      <path d="M15.39,14.04V14.04C15.39,12.62 14.24,11.47 12.82,11.47C11.41,11.47 10.26,12.62 10.26,14.04V14.04C10.26,15.45 11.41,16.6 12.82,16.6C14.24,16.6 15.39,15.45 15.39,14.04M17.1,14.04C17.1,16.4 15.18,18.31 12.82,18.31C11.19,18.31 9.77,17.39 9.05,16.04C8.33,17.39 6.91,18.31 5.28,18.31C2.94,18.31 1.04,16.43 1,14.11V14.11H1V7H1V7C1,6.56 1.39,6.18 1.86,6.18C2.33,6.18 2.7,6.56 2.71,7V7H2.71V10.62C3.43,10.08 4.32,9.76 5.28,9.76C6.91,9.76 8.33,10.68 9.05,12.03C9.77,10.68 11.19,9.76 12.82,9.76C15.18,9.76 17.1,11.68 17.1,14.04V14.04M7.84,14.04V14.04C7.84,12.62 6.69,11.47 5.28,11.47C3.86,11.47 2.71,12.62 2.71,14.04V14.04C2.71,15.45 3.86,16.6 5.28,16.6C6.69,16.6 7.84,15.45 7.84,14.04M22.84,16.96V16.96C22.95,17.12 23,17.3 23,17.47C23,17.73 22.88,18 22.66,18.15C22.5,18.26 22.33,18.32 22.15,18.32C21.9,18.32 21.65,18.21 21.5,18L19.59,15.47L17.7,18V18C17.53,18.21 17.28,18.32 17.03,18.32C16.85,18.32 16.67,18.26 16.5,18.15C16.29,18 16.17,17.72 16.17,17.46C16.17,17.29 16.23,17.11 16.33,16.96V16.96H16.33V16.96L18.5,14.04L16.33,11.11V11.11H16.33V11.11C16.22,10.96 16.17,10.79 16.17,10.61C16.17,10.35 16.29,10.1 16.5,9.93C16.89,9.65 17.41,9.72 17.7,10.09V10.09L19.59,12.61L21.5,10.09C21.76,9.72 22.29,9.65 22.66,9.93C22.89,10.1 23,10.36 23,10.63C23,10.8 22.95,10.97 22.84,11.11V11.11H22.84V11.11L20.66,14.04L22.84,16.96V16.96H22.84Z"></path>\n    </g>\n\n    <g id="deviantart">\n      <path d="M6,6H12L14,2H18V6L14.5,13H18V18H12L10,22H6V18L9.5,11H6V6Z"></path>\n    </g>\n\n    <g id="disqus">\n      <path d="M12.08,22C9.63,22 7.39,21.11 5.66,19.63L1.41,20.21L3.05,16.15C2.5,14.88 2.16,13.5 2.16,12C2.16,6.5 6.6,2 12.08,2C17.56,2 22,6.5 22,12C22,17.5 17.56,22 12.08,22M17.5,11.97V11.94C17.5,9.06 15.46,7 11.95,7H8.16V17H11.9C15.43,17 17.5,14.86 17.5,11.97M12,14.54H10.89V9.46H12C13.62,9.46 14.7,10.39 14.7,12V12C14.7,13.63 13.62,14.54 12,14.54Z"></path>\n    </g>\n\n    <g id="dribble">\n      <path d="M16.42,18.42C16,16.5 15.5,14.73 15,13.17C15.5,13.1 16,13.06 16.58,13.06H16.6V13.06H16.6C17.53,13.06 18.55,13.18 19.66,13.43C19.28,15.5 18.08,17.27 16.42,18.42M12,19.8C10.26,19.8 8.66,19.23 7.36,18.26C7.64,17.81 8.23,16.94 9.18,16.04C10.14,15.11 11.5,14.15 13.23,13.58C13.82,15.25 14.36,17.15 14.77,19.29C13.91,19.62 13,19.8 12,19.8M4.2,12C4.2,11.96 4.2,11.93 4.2,11.89C4.42,11.9 4.71,11.9 5.05,11.9H5.06C6.62,11.89 9.36,11.76 12.14,10.89C12.29,11.22 12.44,11.56 12.59,11.92C10.73,12.54 9.27,13.53 8.19,14.5C7.16,15.46 6.45,16.39 6.04,17C4.9,15.66 4.2,13.91 4.2,12M8.55,5C9.1,5.65 10.18,7.06 11.34,9.25C9,9.96 6.61,10.12 5.18,10.12C5.14,10.12 5.1,10.12 5.06,10.12H5.05C4.81,10.12 4.6,10.12 4.43,10.11C5,7.87 6.5,6 8.55,5M12,4.2C13.84,4.2 15.53,4.84 16.86,5.91C15.84,7.14 14.5,8 13.03,8.65C12,6.67 11,5.25 10.34,4.38C10.88,4.27 11.43,4.2 12,4.2M18.13,7.18C19.1,8.42 19.71,9.96 19.79,11.63C18.66,11.39 17.6,11.28 16.6,11.28V11.28H16.59C15.79,11.28 15.04,11.35 14.33,11.47C14.16,11.05 14,10.65 13.81,10.26C15.39,9.57 16.9,8.58 18.13,7.18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>\n    </g>\n\n    <g id="etsy">\n      <path d="M6.72,20.78C8.23,20.71 10.07,20.78 11.87,20.78C13.72,20.78 15.62,20.66 17.12,20.78C17.72,20.83 18.28,21.19 18.77,20.87C19.16,20.38 18.87,19.71 18.96,19.05C19.12,17.78 20.28,16.27 18.59,15.95C17.87,16.61 18.35,17.23 17.95,18.05C17.45,19.03 15.68,19.37 14,19.5C12.54,19.62 10,19.76 9.5,18.77C9.04,17.94 9.29,16.65 9.29,15.58C9.29,14.38 9.16,13.22 9.5,12.3C11.32,12.43 13.7,11.69 15,12.5C15.87,13 15.37,14.06 16.38,14.4C17.07,14.21 16.7,13.32 16.66,12.5C16.63,11.94 16.63,11.19 16.66,10.57C16.69,9.73 17,8.76 16.1,8.74C15.39,9.3 15.93,10.23 15.18,10.75C14.95,10.92 14.43,11 14.08,11C12.7,11.17 10.54,11.05 9.38,10.84C9.23,9.16 9.24,6.87 9.38,5.19C10,4.57 11.45,4.54 12.42,4.55C14.13,4.55 16.79,4.7 17.3,5.55C17.58,6 17.36,7 17.85,7.1C18.85,7.33 18.36,5.55 18.41,4.73C18.44,4.11 18.71,3.72 18.59,3.27C18.27,2.83 17.79,3.05 17.5,3.09C14.35,3.5 9.6,3.27 6.26,3.27C5.86,3.27 5.16,3.07 4.88,3.54C4.68,4.6 6.12,4.16 6.62,4.73C6.79,4.91 7.03,5.73 7.08,6.28C7.23,7.74 7.08,9.97 7.08,12.12C7.08,14.38 7.26,16.67 7.08,18.05C7,18.53 6.73,19.3 6.62,19.41C6,20.04 4.34,19.35 4.5,20.69C5.09,21.08 5.93,20.82 6.72,20.78Z"></path>\n    </g>\n\n    <g id="evernote">\n      <path d="M15.09,11.63C15.09,11.63 15.28,10.35 16,10.35C16.76,10.35 17.78,12.06 17.78,12.06C17.78,12.06 15.46,11.63 15.09,11.63M19,4.69C18.64,4.09 16.83,3.41 15.89,3.41C14.96,3.41 13.5,3.41 13.5,3.41C13.5,3.41 12.7,2 10.88,2C9.05,2 9.17,2.81 9.17,3.5V6.32L8.34,7.19H4.5C4.5,7.19 3.44,7.91 3.44,9.44C3.44,11 3.92,16.35 7.13,16.85C10.93,17.43 11.58,15.67 11.58,15.46C11.58,14.56 11.6,13.21 11.6,13.21C11.6,13.21 12.71,15.33 14.39,15.33C16.07,15.33 17.04,16.3 17.04,17.29C17.04,18.28 17.04,19.13 17.04,19.13C17.04,19.13 17,20.28 16,20.28C15,20.28 13.89,20.28 13.89,20.28C13.89,20.28 13.2,19.74 13.2,19C13.2,18.25 13.53,18.05 13.93,18.05C14.32,18.05 14.65,18.09 14.65,18.09V16.53C14.65,16.53 11.47,16.5 11.47,18.94C11.47,21.37 13.13,22 14.46,22C15.8,22 16.63,22 16.63,22C16.63,22 20.56,21.5 20.56,13.75C20.56,6 19.33,5.28 19,4.69M7.5,6.31H4.26L8.32,2.22V5.5L7.5,6.31Z"></path>\n    </g>\n\n    <g id="facebook">\n      <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>\n    </g>\n\n    <g id="facebook-box">\n      <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"></path>\n    </g>\n\n    <g id="firefox">\n      <path d="M21,11.7C21,11.3 20.9,10.7 20.8,10.3C20.5,8.6 19.6,7.1 18.5,5.9C18.3,5.6 17.9,5.3 17.5,5C16.4,4.1 15.1,3.5 13.6,3.2C10.6,2.7 7.6,3.7 5.6,5.8C5.6,5.8 5.6,5.7 5.6,5.7C5.5,5.5 5.5,5.5 5.4,5.5C5.4,5.5 5.4,5.5 5.4,5.5C5.3,5.3 5.3,5.2 5.2,5.1C5.2,5.1 5.2,5.1 5.2,5.1C5.2,4.9 5.1,4.7 5.1,4.5C4.8,4.6 4.8,4.9 4.7,5.1C4.7,5.1 4.7,5.1 4.7,5.1C4.5,5.3 4.3,5.6 4.3,5.9C4.3,5.9 4.3,5.9 4.3,5.9C4.2,6.1 4,7 4.2,7.1C4.2,7.1 4.2,7.1 4.3,7.1C4.3,7.2 4.3,7.3 4.3,7.4C4.1,7.6 4,7.7 4,7.8C3.7,8.4 3.4,8.9 3.3,9.5C3.3,9.7 3.3,9.8 3.3,9.9C3.3,9.9 3.3,9.9 3.3,9.9C3.3,9.9 3.3,9.8 3.3,9.8C3.1,10 3.1,10.3 3,10.5C3.1,10.5 3.1,10.4 3.2,10.4C2.7,13 3.4,15.7 5,17.7C7.4,20.6 11.5,21.8 15.1,20.5C18.6,19.2 21,15.8 21,12C21,11.9 21,11.8 21,11.7M13.5,4.1C15,4.4 16.4,5.1 17.5,6.1C17.6,6.2 17.7,6.4 17.7,6.4C17.4,6.1 16.7,5.6 16.3,5.8C16.4,6.1 17.6,7.6 17.7,7.7C17.7,7.7 18,9 18.1,9.1C18.1,9.1 18.1,9.1 18.1,9.1C18.1,9.1 18.1,9.1 18.1,9.1C18.1,9.3 17.4,11.9 17.4,12.3C17.4,12.4 16.5,14.2 16.6,14.2C16.3,14.9 16,14.9 15.9,15C15.8,15 15.2,15.2 14.5,15.4C13.9,15.5 13.2,15.7 12.7,15.6C12.4,15.6 12,15.6 11.7,15.4C11.6,15.3 10.8,14.9 10.6,14.8C10.3,14.7 10.1,14.5 9.9,14.3C10.2,14.3 10.8,14.3 11,14.3C11.6,14.2 14.2,13.3 14.1,12.9C14.1,12.6 13.6,12.4 13.4,12.2C13.1,12.1 11.9,12.3 11.4,12.5C11.4,12.5 9.5,12 9,11.6C9,11.5 8.9,10.9 8.9,10.8C8.8,10.7 9.2,10.4 9.2,10.4C9.2,10.4 10.2,9.4 10.2,9.3C10.4,9.3 10.6,9.1 10.7,9C10.6,9 10.8,8.9 11.1,8.7C11.1,8.7 11.1,8.7 11.1,8.7C11.4,8.5 11.6,8.5 11.6,8.2C11.6,8.2 12.1,7.3 11.5,7.4C11.5,7.4 10.6,7.3 10.3,7.3C10,7.5 9.9,7.4 9.6,7.3C9.6,7.3 9.4,7.1 9.4,7C9.5,6.8 10.2,5.3 10.5,5.2C10.3,4.8 9.3,5.1 9.1,5.4C9.1,5.4 8.3,6 7.9,6.1C7.9,6.1 7.9,6.1 7.9,6.1C7.9,6 7.4,5.9 6.9,5.9C8.7,4.4 11.1,3.7 13.5,4.1Z"></path>\n    </g>\n\n    <g id="github">\n      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>\n    </g>\n\n    <g id="github-box">\n      <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H14.56C14.24,20.93 14.23,20.32 14.23,20.11L14.24,17.64C14.24,16.8 13.95,16.25 13.63,15.97C15.64,15.75 17.74,15 17.74,11.53C17.74,10.55 17.39,9.74 16.82,9.11C16.91,8.89 17.22,7.97 16.73,6.73C16.73,6.73 15.97,6.5 14.25,7.66C13.53,7.46 12.77,7.36 12,7.35C11.24,7.36 10.46,7.46 9.75,7.66C8.03,6.5 7.27,6.73 7.27,6.73C6.78,7.97 7.09,8.89 7.18,9.11C6.61,9.74 6.26,10.55 6.26,11.53C6.26,15 8.36,15.75 10.36,16C10.1,16.2 9.87,16.6 9.79,17.18C9.27,17.41 7.97,17.81 7.17,16.43C7.17,16.43 6.69,15.57 5.79,15.5C5.79,15.5 4.91,15.5 5.73,16.05C5.73,16.05 6.32,16.33 6.73,17.37C6.73,17.37 7.25,19.12 9.76,18.58L9.77,20.11C9.77,20.32 9.75,20.93 9.43,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z"></path>\n    </g>\n\n    <g id="gmail">\n      <path d="M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"></path>\n    </g>\n\n    <g id="google">\n      <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"></path>\n    </g>\n\n    <g id="google-plus">\n      <path d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z"></path>\n    </g>\n\n    <g id="google-plus-box">\n      <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M19.5,12H18V10.5H17V12H15.5V13H17V14.5H18V13H19.5V12M9.65,11.36V12.9H12.22C12.09,13.54 11.45,14.83 9.65,14.83C8.11,14.83 6.89,13.54 6.89,12C6.89,10.46 8.11,9.17 9.65,9.17C10.55,9.17 11.13,9.56 11.45,9.88L12.67,8.72C11.9,7.95 10.87,7.5 9.65,7.5C7.14,7.5 5.15,9.5 5.15,12C5.15,14.5 7.14,16.5 9.65,16.5C12.22,16.5 13.96,14.7 13.96,12.13C13.96,11.81 13.96,11.61 13.89,11.36H9.65Z"></path>\n    </g>\n\n    <g id="google-wallet">\n      <path d="M15.44,2.56H20.24C20.24,2.56 23.12,11.36 20.24,21.5H15.5C15.5,21.5 15.12,16.8 13.28,12.8C13.28,12.8 12.5,16.08 11.6,18H6.72C6.72,18 5.76,13.44 2.5,9.5H7.28C7.28,9.5 8.16,10.4 8.88,11.6C8.88,11.6 9.5,9.12 9.5,6H14.32C14.32,6 15.92,8.32 16.64,9.76C16.64,9.76 16.4,6.24 15.44,2.56Z"></path>\n    </g>\n\n    <g id="hangouts">\n      <path d="M15,11L14,13H12.5L13.5,11H12V8H15M11,11L10,13H8.5L9.5,11H8V8H11M11.5,2A8.5,8.5 0 0,0 3,10.5A8.5,8.5 0 0,0 11.5,19H12V22.5C16.86,20.15 20,15 20,10.5C20,5.8 16.19,2 11.5,2Z"></path>\n    </g>\n\n    <g id="houzz">\n      <path d="M12,24V16L5.1,20V12H5.1V4L12,0V8L5.1,12L12,16V8L18.9,4V12H18.9V20L12,24Z"></path>\n    </g>\n\n    <g id="instagram">\n      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>\n    </g>\n\n    <g id="instapaper">\n      <path d="M10,5A1,1 0 0,0 9,4H8V2H16V4H15A1,1 0 0,0 14,5V19A1,1 0 0,0 15,20H16V22H8V20H9A1,1 0 0,0 10,19V5Z"></path>\n    </g>\n\n    <g id="jira">\n      <path d="M12,2A1.58,1.58 0 0,1 13.58,3.58A1.58,1.58 0 0,1 12,5.16A1.58,1.58 0 0,1 10.42,3.58A1.58,1.58 0 0,1 12,2M7.79,3.05C8.66,3.05 9.37,3.76 9.37,4.63C9.37,5.5 8.66,6.21 7.79,6.21A1.58,1.58 0 0,1 6.21,4.63A1.58,1.58 0 0,1 7.79,3.05M16.21,3.05C17.08,3.05 17.79,3.76 17.79,4.63C17.79,5.5 17.08,6.21 16.21,6.21A1.58,1.58 0 0,1 14.63,4.63A1.58,1.58 0 0,1 16.21,3.05M11.8,10.95C9.7,8.84 10.22,7.79 10.22,7.79H13.91C13.91,9.37 11.8,10.95 11.8,10.95M13.91,21.47C13.91,21.47 13.91,19.37 9.7,15.16C5.5,10.95 4.96,9.89 4.43,6.74C4.43,6.74 4.83,6.21 5.36,6.74C5.88,7.26 7.07,7.66 8.12,7.66C8.12,7.66 9.17,10.95 12.07,13.05C12.07,13.05 15.88,9.11 15.88,7.53C15.88,7.53 17.07,7.79 18.5,6.74C18.5,6.74 19.5,6.21 19.57,6.74C19.7,7.79 18.64,11.47 14.3,15.16C14.3,15.16 17.07,18.32 16.8,21.47H13.91M9.17,16.21L11.41,18.71C10.36,19.76 10.22,22 10.22,22H7.07C7.59,17.79 9.17,16.21 9.17,16.21Z"></path>\n    </g>\n\n    <g id="jsfiddle">\n      <path d="M20.33,10.79C21.9,11.44 23,12.96 23,14.73C23,17.09 21.06,19 18.67,19H5.4C3,18.96 1,17 1,14.62C1,13.03 1.87,11.63 3.17,10.87C3.08,10.59 3.04,10.29 3.04,10C3.04,8.34 4.39,7 6.06,7C6.75,7 7.39,7.25 7.9,7.64C8.96,5.47 11.2,3.96 13.81,3.96C17.42,3.96 20.35,6.85 20.35,10.41C20.35,10.54 20.34,10.67 20.33,10.79M9.22,10.85C7.45,10.85 6,12.12 6,13.67C6,15.23 7.45,16.5 9.22,16.5C10.25,16.5 11.17,16.06 11.76,15.39L10.75,14.25C10.42,14.68 9.77,15 9.22,15C8.43,15 7.79,14.4 7.79,13.67C7.79,12.95 8.43,12.36 9.22,12.36C9.69,12.36 10.12,12.59 10.56,12.88C11,13.16 11.73,14.17 12.31,14.82C13.77,16.29 14.53,16.42 15.4,16.42C17.17,16.42 18.6,15.15 18.6,13.6C18.6,12.04 17.17,10.78 15.4,10.78C14.36,10.78 13.44,11.21 12.85,11.88L13.86,13C14.19,12.59 14.84,12.28 15.4,12.28C16.19,12.28 16.83,12.87 16.83,13.6C16.83,14.32 16.19,14.91 15.4,14.91C14.93,14.91 14.5,14.68 14.05,14.39C13.61,14.11 12.88,13.1 12.31,12.45C10.84,11 10.08,10.85 9.22,10.85Z"></path>\n    </g>\n\n    <g id="linkedin">\n      <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"></path>\n    </g>\n\n    <g id="lumx">\n      <path d="M12.35,1.75L20.13,9.53L13.77,15.89L12.35,14.47L17.3,9.53L10.94,3.16L12.35,1.75M15.89,9.53L14.47,10.94L10.23,6.7L5.28,11.65L3.87,10.23L10.23,3.87L15.89,9.53M10.23,8.11L11.65,9.53L6.7,14.47L13.06,20.84L11.65,22.25L3.87,14.47L10.23,8.11M8.11,14.47L9.53,13.06L13.77,17.3L18.72,12.35L20.13,13.77L13.77,20.13L8.11,14.47Z"></path>\n    </g>\n\n    <g id="nfc">\n      <path d="M10.59,7.66C10.59,7.66 11.19,7.39 11.57,7.82C11.95,8.26 12.92,9.94 12.92,11.62C12.92,13.3 12.5,15.09 12.05,15.68C11.62,16.28 11.19,16.28 10.86,16.06C10.54,15.85 5.5,12 5.23,11.89C4.95,11.78 4.85,12.05 5.12,13.5C5.39,15 4.95,15.41 4.57,15.47C4.2,15.5 3.06,15.2 3,12.16C2.95,9.13 3.76,8.64 4.14,8.64C4.85,8.64 10.27,13.5 10.64,13.46C10.97,13.41 11.13,11.35 10.5,9.72C9.78,7.96 10.59,7.66 10.59,7.66M19.3,4.63C21.12,8.24 21,11.66 21,12C21,12.34 21.12,15.76 19.3,19.37C19.3,19.37 18.83,19.92 18.12,19.59C17.42,19.26 17.66,18.4 17.66,18.4C17.66,18.4 19.14,15.55 19.1,12.05V12C19.14,8.5 17.66,5.6 17.66,5.6C17.66,5.6 17.42,4.74 18.12,4.41C18.83,4.08 19.3,4.63 19.3,4.63M15.77,6.25C17.26,8.96 17.16,11.66 17.14,12C17.16,12.34 17.26,14.92 15.77,17.85C15.77,17.85 15.3,18.4 14.59,18.07C13.89,17.74 14.13,16.88 14.13,16.88C14.13,16.88 15.09,15.5 15.24,12.05V12C15.14,8.53 14.13,7.23 14.13,7.23C14.13,7.23 13.89,6.36 14.59,6.04C15.3,5.71 15.77,6.25 15.77,6.25Z"></path>\n    </g>\n\n    <g id="onedrive">\n      <path d="M20.08,13.64C21.17,13.81 22,14.75 22,15.89C22,16.78 21.5,17.55 20.75,17.92L20.58,18H9.18L9.16,18V18C7.71,18 6.54,16.81 6.54,15.36C6.54,13.9 7.72,12.72 9.18,12.72L9.4,12.73L9.39,12.53A3.3,3.3 0 0,1 12.69,9.23C13.97,9.23 15.08,9.96 15.63,11C16.08,10.73 16.62,10.55 17.21,10.55A2.88,2.88 0 0,1 20.09,13.43L20.08,13.64M8.82,12.16C7.21,12.34 5.96,13.7 5.96,15.36C5.96,16.04 6.17,16.66 6.5,17.18H4.73A2.73,2.73 0 0,1 2,14.45C2,13 3.12,11.83 4.53,11.73L4.46,11.06C4.46,9.36 5.84,8 7.54,8C8.17,8 8.77,8.18 9.26,8.5C9.95,7.11 11.4,6.15 13.07,6.15C15.27,6.15 17.08,7.83 17.3,9.97H17.21C16.73,9.97 16.27,10.07 15.84,10.25C15.12,9.25 13.96,8.64 12.69,8.64C10.67,8.64 9,10.19 8.82,12.16Z"></path>\n    </g>\n\n    <g id="pinterest">\n      <path d="M13,16.2C12.2,16.2 11.43,15.86 10.88,15.28L9.93,18.5L9.86,18.69L9.83,18.67C9.64,19 9.29,19.2 8.9,19.2C8.29,19.2 7.8,18.71 7.8,18.1C7.8,18.05 7.81,18 7.81,17.95H7.8L7.85,17.77L9.7,12.21C9.7,12.21 9.5,11.59 9.5,10.73C9.5,9 10.42,8.5 11.16,8.5C11.91,8.5 12.58,8.76 12.58,9.81C12.58,11.15 11.69,11.84 11.69,12.81C11.69,13.55 12.29,14.16 13.03,14.16C15.37,14.16 16.2,12.4 16.2,10.75C16.2,8.57 14.32,6.8 12,6.8C9.68,6.8 7.8,8.57 7.8,10.75C7.8,11.42 8,12.09 8.34,12.68C8.43,12.84 8.5,13 8.5,13.2A1,1 0 0,1 7.5,14.2C7.13,14.2 6.79,14 6.62,13.7C6.08,12.81 5.8,11.79 5.8,10.75C5.8,7.47 8.58,4.8 12,4.8C15.42,4.8 18.2,7.47 18.2,10.75C18.2,13.37 16.57,16.2 13,16.2M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z"></path>\n    </g>\n\n    <g id="pocket">\n      <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12V4.5A2.5,2.5 0 0,1 4.5,2H19.5A2.5,2.5 0 0,1 22,4.5V12M15.88,8.25L12,12.13L8.12,8.24C7.53,7.65 6.58,7.65 6,8.24C5.41,8.82 5.41,9.77 6,10.36L10.93,15.32C11.5,15.9 12.47,15.9 13.06,15.32L18,10.37C18.59,9.78 18.59,8.83 18,8.25C17.42,7.66 16.47,7.66 15.88,8.25Z"></path>\n    </g>\n\n    <g id="polymer">\n      <path d="M19,4H15L7.1,16.63L4.5,12L9,4H5L0.5,12L5,20H9L16.89,7.37L19.5,12L15,20H19L23.5,12L19,4Z"></path>\n    </g>\n\n    <g id="readability">\n      <path d="M12,4C15.15,4 17.81,6.38 18.69,9.65C18,10.15 17.58,10.93 17.5,11.81L17.32,13.91C15.55,13 13.78,12.17 12,12.17C10.23,12.17 8.45,13 6.68,13.91L6.5,11.77C6.42,10.89 6,10.12 5.32,9.61C6.21,6.36 8.86,4 12,4M17.05,17H6.95L6.73,14.47C8.5,13.59 10.24,12.75 12,12.75C13.76,12.75 15.5,13.59 17.28,14.47L17.05,17M5,19V18L3.72,14.5H3.5A2.5,2.5 0 0,1 1,12A2.5,2.5 0 0,1 3.5,9.5C4.82,9.5 5.89,10.5 6,11.81L6.5,18V19H5M19,19H17.5V18L18,11.81C18.11,10.5 19.18,9.5 20.5,9.5A2.5,2.5 0 0,1 23,12A2.5,2.5 0 0,1 20.5,14.5H20.28L19,18V19Z"></path>\n    </g>\n\n    <g id="reddit">\n      <path d="M22,11.5C22,10.1 20.9,9 19.5,9C18.9,9 18.3,9.2 17.9,9.6C16.4,8.7 14.6,8.1 12.5,8L13.6,4L17,5A2,2 0 0,0 19,7A2,2 0 0,0 21,5A2,2 0 0,0 19,3C18.3,3 17.6,3.4 17.3,4L13.3,3C13,2.9 12.8,3.1 12.7,3.4L11.5,8C9.5,8.1 7.6,8.7 6.1,9.6C5.7,9.2 5.1,9 4.5,9C3.1,9 2,10.1 2,11.5C2,12.4 2.4,13.1 3.1,13.6L3,14.5C3,18.1 7,21 12,21C17,21 21,18.1 21,14.5L20.9,13.6C21.6,13.1 22,12.4 22,11.5M9,11.8C9.7,11.8 10.2,12.4 10.2,13C10.2,13.6 9.7,14.2 9,14.2C8.3,14.2 7.8,13.7 7.8,13C7.8,12.3 8.3,11.8 9,11.8M15.8,17.2C14,18.3 10,18.3 8.2,17.2C8,17 7.9,16.7 8.1,16.5C8.3,16.3 8.6,16.2 8.8,16.4C10,17.3 14,17.3 15.2,16.4C15.4,16.2 15.7,16.3 15.9,16.5C16.1,16.7 16,17 15.8,17.2M15,14.2C14.3,14.2 13.8,13.6 13.8,13C13.8,12.3 14.4,11.8 15,11.8C15.7,11.8 16.2,12.4 16.2,13C16.2,13.7 15.7,14.2 15,14.2Z"></path>\n    </g>\n\n    <g id="rss">\n      <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M7.5,15A1.5,1.5 0 0,0 6,16.5A1.5,1.5 0 0,0 7.5,18A1.5,1.5 0 0,0 9,16.5A1.5,1.5 0 0,0 7.5,15M6,10V12A6,6 0 0,1 12,18H14A8,8 0 0,0 6,10M6,6V8A10,10 0 0,1 16,18H18A12,12 0 0,0 6,6Z"></path>\n    </g>\n\n    <g id="trello">\n      <path d="M4,3H20A1,1 0 0,1 21,4V20A1,1 0 0,1 20,21H4A1,1 0 0,1 3,20V4A1,1 0 0,1 4,3M5.5,5A0.5,0.5 0 0,0 5,5.5V17.5A0.5,0.5 0 0,0 5.5,18H10.5A0.5,0.5 0 0,0 11,17.5V5.5A0.5,0.5 0 0,0 10.5,5H5.5M13.5,5A0.5,0.5 0 0,0 13,5.5V11.5A0.5,0.5 0 0,0 13.5,12H18.5A0.5,0.5 0 0,0 19,11.5V5.5A0.5,0.5 0 0,0 18.5,5H13.5Z"></path>\n    </g>\n\n    <g id="tumblr">\n      <path d="M16,11H13V14.9C13,15.63 13.14,16 14.1,16H16V19C16,19 14.97,19.1 13.9,19.1C11.25,19.1 10,17.5 10,15.7V11H8V8.2C10.41,8 10.62,6.16 10.8,5H13V8H16M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z"></path>\n    </g>\n\n    <g id="twitch">\n      <path d="M4,2H22V14L17,19H13L10,22H7V19H2V6L4,2M20,13V4H6V16H9V19L12,16H17L20,13M15,7H17V12H15V7M12,7V12H10V7H12Z"></path>\n    </g>\n\n    <g id="twitter">\n      <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>\n    </g>\n\n    <g id="whatsapp">\n      <path d="M16.75,13.96C17,14.09 17.16,14.16 17.21,14.26C17.27,14.37 17.25,14.87 17,15.44C16.8,16 15.76,16.54 15.3,16.56C14.84,16.58 14.83,16.92 12.34,15.83C9.85,14.74 8.35,12.08 8.23,11.91C8.11,11.74 7.27,10.53 7.31,9.3C7.36,8.08 8,7.5 8.26,7.26C8.5,7 8.77,6.97 8.94,7H9.41C9.56,7 9.77,6.94 9.96,7.45L10.65,9.32C10.71,9.45 10.75,9.6 10.66,9.76L10.39,10.17L10,10.59C9.88,10.71 9.74,10.84 9.88,11.09C10,11.35 10.5,12.18 11.2,12.87C12.11,13.75 12.91,14.04 13.15,14.17C13.39,14.31 13.54,14.29 13.69,14.13L14.5,13.19C14.69,12.94 14.85,13 15.08,13.08L16.75,13.96M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C10.03,22 8.2,21.43 6.65,20.45L2,22L3.55,17.35C2.57,15.8 2,13.97 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.72 4.54,15.31 5.46,16.61L4.5,19.5L7.39,18.54C8.69,19.46 10.28,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"></path>\n    </g>\n\n    <g id="windows">\n      <path d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z"></path>\n    </g>\n\n  </svg>\n</iron-iconset-svg>'
    ]);
    _templateObject_458547b0e70711e896fed57cf37dfab7 = function() {
      return data;
    };
    return data;
  }
  var template = (0, _htmlTag.html)(
    _templateObject_458547b0e70711e896fed57cf37dfab7()
  );
  document.head.appendChild(template.content);
});