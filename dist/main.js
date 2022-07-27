/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popup {\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  top: 0;\r\n  padding: 30px 10px;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.171);\r\n  backdrop-filter: blur(2px);\r\n  overflow-y: auto;\r\n  display: none;\r\n}\r\n\r\n.popup-window {\r\n  z-index: 10;\r\n  max-width: 600px;\r\n  margin: auto;\r\n  margin-bottom: 20px;\r\n  background-color: white;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.popup-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.popup-header-text {\r\n  color: orangered;\r\n  text-transform: capitalize;\r\n  font-size: 2rem;\r\n}\r\n\r\n.x-btn {\r\n  font-size: 1.5rem;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup-image {\r\n  width: 100%;\r\n  border-bottom: 1px solid orangered;\r\n}\r\n\r\n.d-grid-2col {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-image-detail {\r\n  text-align: center;\r\n}\r\n\r\n.popup-detail-item {\r\n  font-size: medium;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\n.popup-comment-review {\r\n  height: 220px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n/* scrollbar customization */\r\n.popup-comment-review::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n.popup-comment-review::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\r\n  border-radius: 10px;\r\n}\r\n\r\n.popup-comment-review::-webkit-scrollbar-thumb {\r\n  background: orangered;\r\n  border-radius: 15px;\r\n}\r\n\r\n.popup-comment-review::-webkit-scrollbar-thumb:hover {\r\n  background: #b30000;\r\n}\r\n\r\n/* *********** */\r\n.popup-comment-header {\r\n  color: orangered;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.popup-comment-list {\r\n  list-style-type: none;\r\n  padding: 0 5px;\r\n}\r\n\r\n.popup-comment-item {\r\n  background-color: rgba(255, 68, 0, 0.144);\r\n  margin: 5px 0;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.popup-comment-author {\r\n  font-weight: 600;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\n.popup-comment-text {\r\n  margin: 5px 0;\r\n  color: rgb(80, 80, 80);\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.popup-comment-date {\r\n  margin: 5px 0;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  color: orangered;\r\n  text-align: right;\r\n}\r\n\r\n.popup-new-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-comment-input {\r\n  padding: 10px;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 18px;\r\n  border: 0;\r\n  outline: 0;\r\n  border-bottom: 1px solid gainsboro;\r\n}\r\n\r\n.popup-comment-input::placeholder {\r\n  color: rgb(170, 170, 170);\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.popup-comment-input:focus {\r\n  border-bottom: 1px solid orangered;\r\n}\r\n\r\n.popup-new-comment-text {\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  resize: none;\r\n}\r\n\r\n.popup-comment-btn {\r\n  padding: 10px 15px;\r\n  background-color: orangered;\r\n  color: white;\r\n  cursor: pointer;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  border-radius: 5px;\r\n  width: fit-content;\r\n  align-self: flex-end;\r\n}\r\n\r\n.display {\r\n  display: block;\r\n}\r\n\r\n@media screen and (min-width: 400px) {\r\n  .d-grid-2col {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,MAAM;EACN,kBAAkB;EAClB,eAAe;EACf,sCAAsC;EACtC,0BAA0B;EAC1B,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,wEAAwE;EACxE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,wEAAwE;AAC1E;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA,4BAA4B;AAC5B;EACE,UAAU;AACZ;;AAEA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,gBAAgB;AAChB;EACE,gBAAgB;EAChB,wEAAwE;EACxE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,yCAAyC;EACzC,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,wEAAwE;AAC1E;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6EAA6E;AAC/E;;AAEA;EACE,aAAa;EACb,6EAA6E;EAC7E,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,wEAAwE;EACxE,eAAe;EACf,SAAS;EACT,UAAU;EACV,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,6EAA6E;AAC/E;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,6EAA6E;EAC7E,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,2BAA2B;EAC3B,YAAY;EACZ,eAAe;EACf,wEAAwE;EACxE,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,8BAA8B;EAChC;AACF","sourcesContent":[".popup {\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  top: 0;\r\n  padding: 30px 10px;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.171);\r\n  backdrop-filter: blur(2px);\r\n  overflow-y: auto;\r\n  display: none;\r\n}\r\n\r\n.popup-window {\r\n  z-index: 10;\r\n  max-width: 600px;\r\n  margin: auto;\r\n  margin-bottom: 20px;\r\n  background-color: white;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.popup-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.popup-header-text {\r\n  color: orangered;\r\n  text-transform: capitalize;\r\n  font-size: 2rem;\r\n}\r\n\r\n.x-btn {\r\n  font-size: 1.5rem;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup-image {\r\n  width: 100%;\r\n  border-bottom: 1px solid orangered;\r\n}\r\n\r\n.d-grid-2col {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-image-detail {\r\n  text-align: center;\r\n}\r\n\r\n.popup-detail-item {\r\n  font-size: medium;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\n.popup-comment-review {\r\n  height: 220px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n/* scrollbar customization */\r\n.popup-comment-review::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n.popup-comment-review::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\r\n  border-radius: 10px;\r\n}\r\n\r\n.popup-comment-review::-webkit-scrollbar-thumb {\r\n  background: orangered;\r\n  border-radius: 15px;\r\n}\r\n\r\n.popup-comment-review::-webkit-scrollbar-thumb:hover {\r\n  background: #b30000;\r\n}\r\n\r\n/* *********** */\r\n.popup-comment-header {\r\n  color: orangered;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.popup-comment-list {\r\n  list-style-type: none;\r\n  padding: 0 5px;\r\n}\r\n\r\n.popup-comment-item {\r\n  background-color: rgba(255, 68, 0, 0.144);\r\n  margin: 5px 0;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.popup-comment-author {\r\n  font-weight: 600;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\n.popup-comment-text {\r\n  margin: 5px 0;\r\n  color: rgb(80, 80, 80);\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.popup-comment-date {\r\n  margin: 5px 0;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  color: orangered;\r\n  text-align: right;\r\n}\r\n\r\n.popup-new-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-comment-input {\r\n  padding: 10px;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 18px;\r\n  border: 0;\r\n  outline: 0;\r\n  border-bottom: 1px solid gainsboro;\r\n}\r\n\r\n.popup-comment-input::placeholder {\r\n  color: rgb(170, 170, 170);\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.popup-comment-input:focus {\r\n  border-bottom: 1px solid orangered;\r\n}\r\n\r\n.popup-new-comment-text {\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  resize: none;\r\n}\r\n\r\n.popup-comment-btn {\r\n  padding: 10px 15px;\r\n  background-color: orangered;\r\n  color: white;\r\n  cursor: pointer;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  border-radius: 5px;\r\n  width: fit-content;\r\n  align-self: flex-end;\r\n}\r\n\r\n.display {\r\n  display: block;\r\n}\r\n\r\n@media screen and (min-width: 400px) {\r\n  .d-grid-2col {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nheader {\r\n  overflow: hidden;\r\n  background-color: #eee;\r\n  padding: 10px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nheader a {\r\n  float: left;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 0 12px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  border-radius: 4px;\r\n}\r\n\r\nheader a.logo {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n}\r\n\r\nheader img {\r\n  width: 100px;\r\n}\r\n\r\n.right {\r\n  width: 100px;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  padding: 3px;\r\n  background-color: #efefbb;\r\n  color: black;\r\n}\r\n\r\nmain {\r\n  padding: 20px 0;\r\n  background-color: #efefbb;\r\n  background-image: linear-gradient(to right, #d4d3dd, #efefbb);\r\n  width: 100%;\r\n}\r\n\r\n.poke_container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  max-width: 1200px;\r\n}\r\n\r\n.pokemon {\r\n  background-color: #eee;\r\n  border-radius: 20px;\r\n  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);\r\n  padding: 20px;\r\n  margin: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.pokemon .img-container {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  border-radius: 50%;\r\n  width: 220px;\r\n  height: 220px;\r\n}\r\n\r\n.pokemon .img-container img {\r\n  margin-top: 20px;\r\n  max-width: 90%;\r\n  height: 200px;\r\n}\r\n\r\n.title,\r\n.info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.pokemon .info {\r\n  margin-top: 20px;\r\n}\r\n\r\n.pokemon .number {\r\n  background-color: #fff;\r\n  padding: 5px 10px;\r\n  border-radius: 0 0 0 40px;\r\n  font-size: 0.8em;\r\n  font-weight: 600;\r\n}\r\n\r\n.pokemon .name {\r\n  margin: 15px 0 7px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.red-heart {\r\n  background-color: red;\r\n  display: inline-block;\r\n  height: 15px;\r\n  margin: 10px 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 15px;\r\n}\r\n\r\n.red-heart::before,\r\n.red-heart::after {\r\n  content: \"\";\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  height: 15px;\r\n  position: absolute;\r\n  width: 15px;\r\n}\r\n\r\n.red-heart::before {\r\n  top: -7px;\r\n  left: 0;\r\n}\r\n\r\n.red-heart::after {\r\n  left: 7px;\r\n  top: 0;\r\n}\r\n\r\n.title button {\r\n  border: none;\r\n  cursor: pointer;\r\n  border-left: 1px solid;\r\n  padding: 0 20px;\r\n}\r\n\r\n.title .name {\r\n  padding: 10px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.likesbox {\r\n  background-color: yellow;\r\n  border-radius: 0 0 40px 0;\r\n  padding: 1px 15px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.title {\r\n  background-color: #d4d3dd;\r\n}\r\n\r\n.like-btn {\r\n  background-color: #d4d3dd;\r\n}\r\n\r\n.Comments-button {\r\n  margin-top: 20px;\r\n  width: inherit;\r\n  background-color: orangered;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: block;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,6DAA6D;EAC7D,WAAW;AACb;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,+CAA+C;EAC/C,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,MAAM;EACN,yBAAyB;EACzB,WAAW;AACb;;AAEA;;EAEE,WAAW;EACX,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,SAAS;EACT,OAAO;AACT;;AAEA;EACE,SAAS;EACT,MAAM;AACR;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,2BAA2B;EAC3B,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB","sourcesContent":["body {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nheader {\r\n  overflow: hidden;\r\n  background-color: #eee;\r\n  padding: 10px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nheader a {\r\n  float: left;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 0 12px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  border-radius: 4px;\r\n}\r\n\r\nheader a.logo {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n}\r\n\r\nheader img {\r\n  width: 100px;\r\n}\r\n\r\n.right {\r\n  width: 100px;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  padding: 3px;\r\n  background-color: #efefbb;\r\n  color: black;\r\n}\r\n\r\nmain {\r\n  padding: 20px 0;\r\n  background-color: #efefbb;\r\n  background-image: linear-gradient(to right, #d4d3dd, #efefbb);\r\n  width: 100%;\r\n}\r\n\r\n.poke_container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  max-width: 1200px;\r\n}\r\n\r\n.pokemon {\r\n  background-color: #eee;\r\n  border-radius: 20px;\r\n  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);\r\n  padding: 20px;\r\n  margin: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.pokemon .img-container {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  border-radius: 50%;\r\n  width: 220px;\r\n  height: 220px;\r\n}\r\n\r\n.pokemon .img-container img {\r\n  margin-top: 20px;\r\n  max-width: 90%;\r\n  height: 200px;\r\n}\r\n\r\n.title,\r\n.info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.pokemon .info {\r\n  margin-top: 20px;\r\n}\r\n\r\n.pokemon .number {\r\n  background-color: #fff;\r\n  padding: 5px 10px;\r\n  border-radius: 0 0 0 40px;\r\n  font-size: 0.8em;\r\n  font-weight: 600;\r\n}\r\n\r\n.pokemon .name {\r\n  margin: 15px 0 7px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.red-heart {\r\n  background-color: red;\r\n  display: inline-block;\r\n  height: 15px;\r\n  margin: 10px 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 15px;\r\n}\r\n\r\n.red-heart::before,\r\n.red-heart::after {\r\n  content: \"\";\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  height: 15px;\r\n  position: absolute;\r\n  width: 15px;\r\n}\r\n\r\n.red-heart::before {\r\n  top: -7px;\r\n  left: 0;\r\n}\r\n\r\n.red-heart::after {\r\n  left: 7px;\r\n  top: 0;\r\n}\r\n\r\n.title button {\r\n  border: none;\r\n  cursor: pointer;\r\n  border-left: 1px solid;\r\n  padding: 0 20px;\r\n}\r\n\r\n.title .name {\r\n  padding: 10px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.likesbox {\r\n  background-color: yellow;\r\n  border-radius: 0 0 40px 0;\r\n  padding: 1px 15px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.title {\r\n  background-color: #d4d3dd;\r\n}\r\n\r\n.like-btn {\r\n  background-color: #d4d3dd;\r\n}\r\n\r\n.Comments-button {\r\n  margin-top: 20px;\r\n  width: inherit;\r\n  background-color: orangered;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: block;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/popup.css":
/*!***********************!*\
  !*** ./src/popup.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displaypokemonitems.js":
/*!************************************!*\
  !*** ./src/displaypokemonitems.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getPokemonList": () => (/* binding */ getPokemonList)
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/popup.js");


const Pokecontainer = document.querySelector('#poke_container');
const pokemonCounter = document.getElementById('pokemonCount');
// const Pokemonsnumber = 12;

const createpokemoncard = (Pokemons) => {
  pokemonCounter.innerHTML = `( ${Pokemons.length} )`;
  Pokemons.forEach(async (element) => {
    await fetch(element.url).then((response) => response.json()).then((json) => {
      const pokemon = json;
      // console.log(p);
      const PokemonEl = document.createElement('div');
      PokemonEl.classList.add('pokemon');
      const pokeinnerHTML = `
        <div class="img-container">
        <img id="avatar${pokemon.id}" src="">
        </div>
        <div class="title">
        <h3 class="name">${pokemon.name}</h3>
        <button type="button" class="like-btn" >
          <span id="colorHeart" class="border-5 red-heart" ></span>
        </button>
        </div>
        <div class="info">
            <span class="number"># ${pokemon.id}</span>
            <div class="likesbox"><span id="like${pokemon.id}" class="pe-2" id="${pokemon.id}_pokemonLikes">0</span> Likes</div>
        </div>
        <a  class="Comments-button" id="comment${pokemon.id}" >Comments</a>
        `;

      PokemonEl.innerHTML = pokeinnerHTML;
      Pokecontainer.appendChild(PokemonEl);
      const avatar = document.getElementById(`avatar${pokemon.id}`);
      avatar.src = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

      const commentBtn = document.getElementById(`comment${pokemon.id}`);
      commentBtn.addEventListener('click', () => {
        const popup = document.getElementById('popup');
        popup.classList.add('display');

        const { name } = pokemon;
        const image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;
        const info = `
                <p class="popup-detail-item">Size : ${pokemon.size}</p>
                <p class="popup-detail-item">Max-harvest : ${pokemon.max_harvest}</p>
                <p class="popup-detail-item">Growth-time : ${pokemon.growth_time}</p>
                <p class="popup-detail-item">Smoothness : ${pokemon.smoothness}</p> `;

        (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.showPopup)(name, image, info);
        (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(50);

        _popup_js__WEBPACK_IMPORTED_MODULE_0__.popupCommentBtn.addEventListener('click', () => {
          (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(50);
        });
      });
    });
  });
};

const pokemonAPI = 'https://pokeapi.co/api/v2/berry/';

const getPokemonList = async () => {
  await fetch(pokemonAPI).then((response) => response.json()).then((json) => {
    const pokemons = json.results;
    // console.log(pokemons);
    createpokemoncard(pokemons);
  });
};

// const involvementLikeAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/v1QM9q7o5iYcOME1s2k2/likes';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ createpokemoncard, getPokemonList });

// const getpokemon = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   const res = await fetch(url);
//   const Pokemon = await res.json();
//   createpokemoncard(Pokemon);
// };

// const fetchpokemons = async () => {
//   for (let i = 1; i <= Pokemonsnumber; i += 1) {
//     getpokemon(i);
//   }
// };

// fetchpokemons();

// export default {
//   fetchpokemons, createpokemoncard, getpokemon,
// };

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "popupCommentBtn": () => (/* binding */ popupCommentBtn),
/* harmony export */   "showPopup": () => (/* binding */ showPopup)
/* harmony export */ });
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.css */ "./src/popup.css");
/* harmony import */ var _assets_images_pokemon3_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/pokemon3.png */ "./src/assets/images/pokemon3.png");


//  popup
const popup = document.createElement('div');
popup.id = 'popup';
popup.classList = 'popup';
document.body.appendChild(popup);

// popup-window
const popupWindow = document.createElement('div');
popupWindow.classList = 'popup-window';
popup.appendChild(popupWindow);

// popup-header
const popupHeader = document.createElement('div');
popupHeader.classList = 'popup-header';
popupWindow.appendChild(popupHeader);

// popup-header text
const popupHeaderText = document.createElement('h2');
popupHeaderText.id = 'popupHeaderText';
popupHeaderText.classList = 'popup-header-text';
popupHeaderText.innerHTML = 'Test'; /// /// for test
popupHeader.appendChild(popupHeaderText);

// popup-header X-btn
const xBtn = document.createElement('p');
xBtn.id = 'xBtn';
xBtn.classList = 'x-btn';
xBtn.innerHTML = 'X';
popupHeader.appendChild(xBtn);

// popup-image
const popupImage = document.createElement('img');
popupImage.id = 'popupImage';
popupImage.classList = 'popup-image';
popupImage.src = _assets_images_pokemon3_png__WEBPACK_IMPORTED_MODULE_1__; /// ////////// for test
popupImage.alt = 'pokemon';
popupWindow.appendChild(popupImage);

// popup-image-details
const popupDetail = document.createElement('div');
popupDetail.id = 'popupDetail';
popupDetail.classList = 'popup-image-detail d-grid-2col';
/// /////////////// for test
popupDetail.innerHTML = `
                <p class="popup-detail-item">Color : Green</p>
                <p class="popup-detail-item">Age : 6 years</p>
                <p class="popup-detail-item">Power : 132</p>
                <p class="popup-detail-item">Speed : 42 KM/h</p>
`;
popupWindow.appendChild(popupDetail);

// popup-comment-header
const popupCommentHeader = document.createElement('h3');
popupCommentHeader.classList = 'popup-comment-header';
popupCommentHeader.innerHTML = 'Comments (4)'; /// /////// for test
popupWindow.appendChild(popupCommentHeader);

// popup-engage section
const engage = document.createElement('div');
engage.classList = 'd-grid-2col';
popupWindow.appendChild(engage);

// popup-comment-review
const popupCommentReview = document.createElement('div');
popupCommentReview.classList = 'popup-comment-review';
engage.appendChild(popupCommentReview);

// popup-comment-list
const popupCommentList = document.createElement('ul');
popupCommentList.id = 'popupCommentList';
popupCommentList.classList = 'popup-comment-list';
popupCommentReview.appendChild(popupCommentList);

// popup-comment-item
/// ///////////// for test
popupCommentList.innerHTML = `
                        <li class="popup-comment-item">
                            <label class="popup-comment-author">alan</label>
                            <p class="popup-comment-text">this pokemon is too cute</p>
                            <p class="popup-comment-date">27/7/2022</p>
                        </li>
                        `;

// popup-new-comment
const popupNewComment = document.createElement('div');
popupNewComment.classList = 'popup-new-comment';
engage.appendChild(popupNewComment);

// popup-comment-input name
const popupCommentInputName = document.createElement('input');
popupCommentInputName.id = 'popupCommentInputName';
popupCommentInputName.classList = 'popup-comment-input';
popupCommentInputName.type = 'text';
popupCommentInputName.placeholder = 'Your name';
popupNewComment.appendChild(popupCommentInputName);

// popup-comment-input comment
const popupCommentInputComment = document.createElement('textarea');
popupCommentInputComment.id = 'popupCommentInputComment';
popupCommentInputComment.classList = 'popup-comment-input popup-new-comment-text';
popupCommentInputComment.cols = '15';
popupCommentInputComment.rows = '4';
popupCommentInputComment.placeholder = 'Comment...';
popupNewComment.appendChild(popupCommentInputComment);

// popup-comment-btn
const popupCommentBtn = document.createElement('a');
popupCommentBtn.id = 'popupCommentBtn';
popupCommentBtn.classList = 'popup-comment-btn';
popupCommentBtn.innerHTML = 'Comment';
popupNewComment.appendChild(popupCommentBtn);

xBtn.addEventListener('click', () => {
  popup.classList.remove('display');
});

function showPopup(nama, image, info) {
  popupHeaderText.innerHTML = nama;
  popupImage.src = image;
  popupDetail.innerHTML = info;
}

const addComment = async (itemId) => {
  const involvementCommentAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/v1QM9q7o5iYcOME1s2k2/comments';
  const id = itemId;
  const name = document.getElementById('popupCommentInputName').value;
  const comment = document.getElementById('popupCommentInputComment').value;

  await fetch(involvementCommentAPI, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Accept': 'application/json'
    },
  }).then((response) => response.json());

document.getElementById('popupCommentInputName').value = '';
document.getElementById('popupCommentInputComment').value = '';
};


const getComments = async (itemId) => {
const involvementCommentAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/v1QM9q7o5iYcOME1s2k2/comments?item_id=${itemId}`;
 await fetch(involvementCommentAPI).then((response) => response.json()).then((json) => {
    if (json.length === undefined){
        popupCommentHeader.innerHTML = `Comments (0)`;
    }
    else popupCommentHeader.innerHTML = `Comments (${json.length})`;

     popupCommentList.innerHTML = '';
     for (let i =0 ; i < json.length ; i =+ 1){
        const newComment = document.createElement('li');
        newComment.classList = 'popup-comment-item';
        newComment.innerHTML =    ` 
                                    <label class="popup-comment-author">${json[i].username}</label>
                                    <p class="popup-comment-text">${json[i].comment}</p>
                                    <p class="popup-comment-date">${json[i].creation_date}</p>`;
        console.log(newComment);
        popupCommentList.appendChild(newComment);
     }
        
     
 });
};

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e0f6e8860405ee6d9c15.png";

/***/ }),

/***/ "./src/assets/images/pokemon3.png":
/*!****************************************!*\
  !*** ./src/assets/images/pokemon3.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3349d1c0dbda5babf47e.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _displaypokemonitems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displaypokemonitems.js */ "./src/displaypokemonitems.js");
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.js */ "./src/popup.js");





const myLogo = document.getElementById('myLogo');

// Add Logo Image //
let imageHtml = '';
imageHtml += `
<img src="${_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__}" alt="logo">`;
myLogo.innerHTML = imageHtml;

// fetchpokemons();

(0,_displaypokemonitems_js__WEBPACK_IMPORTED_MODULE_2__.getPokemonList)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFLQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3VCO0FBQ2M7QUFDdEM7O0FBRXBCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQUksQ0FBQztBQUNqQjs7QUFFQTs7QUFFQSx1RUFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL3NyYy9wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9zcmMvcG9wdXAuY3NzPzU5ZjkiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9zcmMvZGlzcGxheXBva2Vtb25pdGVtcy5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vc3JjL3BvcHVwLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucG9wdXAge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcGFkZGluZzogMzBweCAxMHB4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3MSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtd2luZG93IHtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXItdGV4dCB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi54LWJ0biB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZ3JpZC0yY29sIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltYWdlLWRldGFpbCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXRhaWwtaXRlbSB7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtcmV2aWV3IHtcXHJcXG4gIGhlaWdodDogMjIwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi8qIHNjcm9sbGJhciBjdXN0b21pemF0aW9uICovXFxyXFxuLnBvcHVwLWNvbW1lbnQtcmV2aWV3Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1yZXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDE1MSwgMTUxLCAxNTEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtcmV2aWV3Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1yZXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNiMzAwMDA7XFxyXFxufVxcclxcblxcclxcbi8qICoqKioqKioqKioqICovXFxyXFxuLnBvcHVwLWNvbW1lbnQtaGVhZGVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgcGFkZGluZzogMCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWl0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDY4LCAwLCAwLjE0NCk7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1hdXRob3Ige1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtdGV4dCB7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1kYXRlIHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLW5ldy1jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnYWluc2Jvcm87XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogcmdiKDE3MCwgMTcwLCAxNzApO1xcclxcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWlucHV0OmZvY3VzIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1uZXctY29tbWVudC10ZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1idG4ge1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xcclxcbiAgLmQtZ3JpZC0yY29sIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcG9wdXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsTUFBTTtFQUNOLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0VBQXdFO0VBQ3hFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxnQkFBZ0I7RUFDaEIsd0VBQXdFO0VBQ3hFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkVBQTZFO0FBQy9FOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZFQUE2RTtFQUM3RSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0VBQXdFO0VBQ3hFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2RUFBNkU7QUFDL0U7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSw2RUFBNkU7RUFDN0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osZUFBZTtFQUNmLHdFQUF3RTtFQUN4RSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3B1cCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTcxKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC13aW5kb3cge1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlci10ZXh0IHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLngtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1ncmlkLTJjb2wge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1hZ2UtZGV0YWlsIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRldGFpbC1pdGVtIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1yZXZpZXcge1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2Nyb2xsYmFyIGN1c3RvbWl6YXRpb24gKi9cXHJcXG4ucG9wdXAtY29tbWVudC1yZXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LXJldmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2IoMTUxLCAxNTEsIDE1MSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1yZXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LXJldmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2IzMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogKioqKioqKioqKiogKi9cXHJcXG4ucG9wdXAtY29tbWVudC1oZWFkZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwIDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtaXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNjgsIDAsIDAuMTQ0KTtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWF1dGhvciB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC10ZXh0IHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBjb2xvcjogcmdiKDgwLCA4MCwgODApO1xcclxcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWRhdGUge1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbmV3LWNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdhaW5zYm9ybztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTcwLCAxNzAsIDE3MCk7XFxyXFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtaW5wdXQ6Zm9jdXMge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLW5ldy1jb21tZW50LXRleHQge1xcclxcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWJ0biB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XFxyXFxuICAuZC1ncmlkLTJjb2wge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGEge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDEycHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBhLmxvZ28ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBpbWcge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZiYjtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmJiO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZDRkM2RkLCAjZWZlZmJiKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZV9jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMTVweCByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNSk7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbiAuaW1nLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB3aWR0aDogMjIwcHg7XFxyXFxuICBoZWlnaHQ6IDIyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbiAuaW1nLWNvbnRhaW5lciBpbWcge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIG1heC13aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLFxcclxcbi5pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uIC5pbmZvIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uIC5udW1iZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbiAubmFtZSB7XFxyXFxuICBtYXJnaW46IDE1cHggMCA3cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIG1hcmdpbjogMTBweCA2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWQtaGVhcnQ6OmJlZm9yZSxcXHJcXG4ucmVkLWhlYXJ0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogMTVweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0OjpiZWZvcmUge1xcclxcbiAgdG9wOiAtN3B4O1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydDo6YWZ0ZXIge1xcclxcbiAgbGVmdDogN3B4O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSAubmFtZSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcblxcclxcbi5saWtlc2JveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgNDBweCAwO1xcclxcbiAgcGFkZGluZzogMXB4IDE1cHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDNkZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQzZGQ7XFxyXFxufVxcclxcblxcclxcbi5Db21tZW50cy1idXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIHdpZHRoOiBpbmhlcml0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTVweCAzMnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsNkRBQTZEO0VBQzdELFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwrQ0FBK0M7RUFDL0MsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBOztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztFQUNULE9BQU87QUFDVDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxNQUFNO0FBQ1I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgYSB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMTJweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGEubG9nbyB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGltZyB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodCB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmJiO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmYmI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkNGQzZGQsICNlZmVmYmIpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wb2tlX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCAxNXB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC41KTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uIC5pbWctY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiAyMjBweDtcXHJcXG4gIGhlaWdodDogMjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uIC5pbWctY29udGFpbmVyIGltZyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUsXFxyXFxuLmluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24gLmluZm8ge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24gLm51bWJlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0MHB4O1xcclxcbiAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uIC5uYW1lIHtcXHJcXG4gIG1hcmdpbjogMTVweCAwIDdweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWQtaGVhcnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDZweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydDo6YmVmb3JlLFxcclxcbi5yZWQtaGVhcnQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWQtaGVhcnQ6OmJlZm9yZSB7XFxyXFxuICB0b3A6IC03cHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0OjphZnRlciB7XFxyXFxuICBsZWZ0OiA3cHg7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSBidXR0b24ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIC5uYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzYm94IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0MHB4IDA7XFxyXFxuICBwYWRkaW5nOiAxcHggMTVweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkM2RkO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDNkZDtcXHJcXG59XFxyXFxuXFxyXFxuLkNvbW1lbnRzLWJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6IGluaGVyaXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDMycHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG4gIHNob3dQb3B1cCwgcG9wdXBDb21tZW50QnRuLCBhZGRDb21tZW50LCBnZXRDb21tZW50cyxcbn0gZnJvbSAnLi9wb3B1cC5qcyc7XG5cbmNvbnN0IFBva2Vjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9rZV9jb250YWluZXInKTtcbmNvbnN0IHBva2Vtb25Db3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2Vtb25Db3VudCcpO1xuLy8gY29uc3QgUG9rZW1vbnNudW1iZXIgPSAxMjtcblxuY29uc3QgY3JlYXRlcG9rZW1vbmNhcmQgPSAoUG9rZW1vbnMpID0+IHtcbiAgcG9rZW1vbkNvdW50ZXIuaW5uZXJIVE1MID0gYCggJHtQb2tlbW9ucy5sZW5ndGh9IClgO1xuICBQb2tlbW9ucy5mb3JFYWNoKGFzeW5jIChlbGVtZW50KSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goZWxlbWVudC51cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIGNvbnN0IHBva2Vtb24gPSBqc29uO1xuICAgICAgLy8gY29uc29sZS5sb2cocCk7XG4gICAgICBjb25zdCBQb2tlbW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIFBva2Vtb25FbC5jbGFzc0xpc3QuYWRkKCdwb2tlbW9uJyk7XG4gICAgICBjb25zdCBwb2tlaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nIGlkPVwiYXZhdGFyJHtwb2tlbW9uLmlkfVwiIHNyYz1cIlwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cIm5hbWVcIj4ke3Bva2Vtb24ubmFtZX08L2gzPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImxpa2UtYnRuXCIgPlxuICAgICAgICAgIDxzcGFuIGlkPVwiY29sb3JIZWFydFwiIGNsYXNzPVwiYm9yZGVyLTUgcmVkLWhlYXJ0XCIgPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJudW1iZXJcIj4jICR7cG9rZW1vbi5pZH08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZXNib3hcIj48c3BhbiBpZD1cImxpa2Uke3Bva2Vtb24uaWR9XCIgY2xhc3M9XCJwZS0yXCIgaWQ9XCIke3Bva2Vtb24uaWR9X3Bva2Vtb25MaWtlc1wiPjA8L3NwYW4+IExpa2VzPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSAgY2xhc3M9XCJDb21tZW50cy1idXR0b25cIiBpZD1cImNvbW1lbnQke3Bva2Vtb24uaWR9XCIgPkNvbW1lbnRzPC9hPlxuICAgICAgICBgO1xuXG4gICAgICBQb2tlbW9uRWwuaW5uZXJIVE1MID0gcG9rZWlubmVySFRNTDtcbiAgICAgIFBva2Vjb250YWluZXIuYXBwZW5kQ2hpbGQoUG9rZW1vbkVsKTtcbiAgICAgIGNvbnN0IGF2YXRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBhdmF0YXIke3Bva2Vtb24uaWR9YCk7XG4gICAgICBhdmF0YXIuc3JjID0gYGh0dHBzOi8vdW5wa2cuY29tL3Bva2VhcGktc3ByaXRlc0AyLjAuMi9zcHJpdGVzL3Bva2Vtb24vb3RoZXIvZHJlYW0td29ybGQvJHtwb2tlbW9uLmlkfS5zdmdgO1xuXG4gICAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbW1lbnQke3Bva2Vtb24uaWR9YCk7XG4gICAgICBjb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG5cbiAgICAgICAgY29uc3QgeyBuYW1lIH0gPSBwb2tlbW9uO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGBodHRwczovL3VucGtnLmNvbS9wb2tlYXBpLXNwcml0ZXNAMi4wLjIvc3ByaXRlcy9wb2tlbW9uL290aGVyL2RyZWFtLXdvcmxkLyR7cG9rZW1vbi5pZH0uc3ZnYDtcbiAgICAgICAgY29uc3QgaW5mbyA9IGBcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBvcHVwLWRldGFpbC1pdGVtXCI+U2l6ZSA6ICR7cG9rZW1vbi5zaXplfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBvcHVwLWRldGFpbC1pdGVtXCI+TWF4LWhhcnZlc3QgOiAke3Bva2Vtb24ubWF4X2hhcnZlc3R9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtZGV0YWlsLWl0ZW1cIj5Hcm93dGgtdGltZSA6ICR7cG9rZW1vbi5ncm93dGhfdGltZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1kZXRhaWwtaXRlbVwiPlNtb290aG5lc3MgOiAke3Bva2Vtb24uc21vb3RobmVzc308L3A+IGA7XG5cbiAgICAgICAgc2hvd1BvcHVwKG5hbWUsIGltYWdlLCBpbmZvKTtcbiAgICAgICAgZ2V0Q29tbWVudHMoNTApO1xuXG4gICAgICAgIHBvcHVwQ29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBhZGRDb21tZW50KDUwKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBwb2tlbW9uQVBJID0gJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvYmVycnkvJztcblxuZXhwb3J0IGNvbnN0IGdldFBva2Vtb25MaXN0ID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBmZXRjaChwb2tlbW9uQVBJKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKChqc29uKSA9PiB7XG4gICAgY29uc3QgcG9rZW1vbnMgPSBqc29uLnJlc3VsdHM7XG4gICAgLy8gY29uc29sZS5sb2cocG9rZW1vbnMpO1xuICAgIGNyZWF0ZXBva2Vtb25jYXJkKHBva2Vtb25zKTtcbiAgfSk7XG59O1xuXG4vLyBjb25zdCBpbnZvbHZlbWVudExpa2VBUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvdjFRTTlxN281aVljT01FMXMyazIvbGlrZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7IGNyZWF0ZXBva2Vtb25jYXJkLCBnZXRQb2tlbW9uTGlzdCB9O1xuXG4vLyBjb25zdCBnZXRwb2tlbW9uID0gYXN5bmMgKGlkKSA9PiB7XG4vLyAgIGNvbnN0IHVybCA9IGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtpZH1gO1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuLy8gICBjb25zdCBQb2tlbW9uID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgY3JlYXRlcG9rZW1vbmNhcmQoUG9rZW1vbik7XG4vLyB9O1xuXG4vLyBjb25zdCBmZXRjaHBva2Vtb25zID0gYXN5bmMgKCkgPT4ge1xuLy8gICBmb3IgKGxldCBpID0gMTsgaSA8PSBQb2tlbW9uc251bWJlcjsgaSArPSAxKSB7XG4vLyAgICAgZ2V0cG9rZW1vbihpKTtcbi8vICAgfVxuLy8gfTtcblxuLy8gZmV0Y2hwb2tlbW9ucygpO1xuXG4vLyBleHBvcnQgZGVmYXVsdCB7XG4vLyAgIGZldGNocG9rZW1vbnMsIGNyZWF0ZXBva2Vtb25jYXJkLCBnZXRwb2tlbW9uLFxuLy8gfTsiLCJpbXBvcnQgJy4vcG9wdXAuY3NzJztcbmltcG9ydCBwb2tlbW9uMyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvcG9rZW1vbjMucG5nJztcbi8vICBwb3B1cFxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBvcHVwLmlkID0gJ3BvcHVwJztcbnBvcHVwLmNsYXNzTGlzdCA9ICdwb3B1cCc7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcblxuLy8gcG9wdXAtd2luZG93XG5jb25zdCBwb3B1cFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucG9wdXBXaW5kb3cuY2xhc3NMaXN0ID0gJ3BvcHVwLXdpbmRvdyc7XG5wb3B1cC5hcHBlbmRDaGlsZChwb3B1cFdpbmRvdyk7XG5cbi8vIHBvcHVwLWhlYWRlclxuY29uc3QgcG9wdXBIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBvcHVwSGVhZGVyLmNsYXNzTGlzdCA9ICdwb3B1cC1oZWFkZXInO1xucG9wdXBXaW5kb3cuYXBwZW5kQ2hpbGQocG9wdXBIZWFkZXIpO1xuXG4vLyBwb3B1cC1oZWFkZXIgdGV4dFxuY29uc3QgcG9wdXBIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbnBvcHVwSGVhZGVyVGV4dC5pZCA9ICdwb3B1cEhlYWRlclRleHQnO1xucG9wdXBIZWFkZXJUZXh0LmNsYXNzTGlzdCA9ICdwb3B1cC1oZWFkZXItdGV4dCc7XG5wb3B1cEhlYWRlclRleHQuaW5uZXJIVE1MID0gJ1Rlc3QnOyAvLy8gLy8vIGZvciB0ZXN0XG5wb3B1cEhlYWRlci5hcHBlbmRDaGlsZChwb3B1cEhlYWRlclRleHQpO1xuXG4vLyBwb3B1cC1oZWFkZXIgWC1idG5cbmNvbnN0IHhCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG54QnRuLmlkID0gJ3hCdG4nO1xueEJ0bi5jbGFzc0xpc3QgPSAneC1idG4nO1xueEJ0bi5pbm5lckhUTUwgPSAnWCc7XG5wb3B1cEhlYWRlci5hcHBlbmRDaGlsZCh4QnRuKTtcblxuLy8gcG9wdXAtaW1hZ2VcbmNvbnN0IHBvcHVwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbnBvcHVwSW1hZ2UuaWQgPSAncG9wdXBJbWFnZSc7XG5wb3B1cEltYWdlLmNsYXNzTGlzdCA9ICdwb3B1cC1pbWFnZSc7XG5wb3B1cEltYWdlLnNyYyA9IHBva2Vtb24zOyAvLy8gLy8vLy8vLy8vLyBmb3IgdGVzdFxucG9wdXBJbWFnZS5hbHQgPSAncG9rZW1vbic7XG5wb3B1cFdpbmRvdy5hcHBlbmRDaGlsZChwb3B1cEltYWdlKTtcblxuLy8gcG9wdXAtaW1hZ2UtZGV0YWlsc1xuY29uc3QgcG9wdXBEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBvcHVwRGV0YWlsLmlkID0gJ3BvcHVwRGV0YWlsJztcbnBvcHVwRGV0YWlsLmNsYXNzTGlzdCA9ICdwb3B1cC1pbWFnZS1kZXRhaWwgZC1ncmlkLTJjb2wnO1xuLy8vIC8vLy8vLy8vLy8vLy8vLyBmb3IgdGVzdFxucG9wdXBEZXRhaWwuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtZGV0YWlsLWl0ZW1cIj5Db2xvciA6IEdyZWVuPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtZGV0YWlsLWl0ZW1cIj5BZ2UgOiA2IHllYXJzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtZGV0YWlsLWl0ZW1cIj5Qb3dlciA6IDEzMjwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBvcHVwLWRldGFpbC1pdGVtXCI+U3BlZWQgOiA0MiBLTS9oPC9wPlxuYDtcbnBvcHVwV2luZG93LmFwcGVuZENoaWxkKHBvcHVwRGV0YWlsKTtcblxuLy8gcG9wdXAtY29tbWVudC1oZWFkZXJcbmNvbnN0IHBvcHVwQ29tbWVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5wb3B1cENvbW1lbnRIZWFkZXIuY2xhc3NMaXN0ID0gJ3BvcHVwLWNvbW1lbnQtaGVhZGVyJztcbnBvcHVwQ29tbWVudEhlYWRlci5pbm5lckhUTUwgPSAnQ29tbWVudHMgKDQpJzsgLy8vIC8vLy8vLy8gZm9yIHRlc3RcbnBvcHVwV2luZG93LmFwcGVuZENoaWxkKHBvcHVwQ29tbWVudEhlYWRlcik7XG5cbi8vIHBvcHVwLWVuZ2FnZSBzZWN0aW9uXG5jb25zdCBlbmdhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVuZ2FnZS5jbGFzc0xpc3QgPSAnZC1ncmlkLTJjb2wnO1xucG9wdXBXaW5kb3cuYXBwZW5kQ2hpbGQoZW5nYWdlKTtcblxuLy8gcG9wdXAtY29tbWVudC1yZXZpZXdcbmNvbnN0IHBvcHVwQ29tbWVudFJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucG9wdXBDb21tZW50UmV2aWV3LmNsYXNzTGlzdCA9ICdwb3B1cC1jb21tZW50LXJldmlldyc7XG5lbmdhZ2UuYXBwZW5kQ2hpbGQocG9wdXBDb21tZW50UmV2aWV3KTtcblxuLy8gcG9wdXAtY29tbWVudC1saXN0XG5jb25zdCBwb3B1cENvbW1lbnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbnBvcHVwQ29tbWVudExpc3QuaWQgPSAncG9wdXBDb21tZW50TGlzdCc7XG5wb3B1cENvbW1lbnRMaXN0LmNsYXNzTGlzdCA9ICdwb3B1cC1jb21tZW50LWxpc3QnO1xucG9wdXBDb21tZW50UmV2aWV3LmFwcGVuZENoaWxkKHBvcHVwQ29tbWVudExpc3QpO1xuXG4vLyBwb3B1cC1jb21tZW50LWl0ZW1cbi8vLyAvLy8vLy8vLy8vLy8vIGZvciB0ZXN0XG5wb3B1cENvbW1lbnRMaXN0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBvcHVwLWNvbW1lbnQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcHVwLWNvbW1lbnQtYXV0aG9yXCI+YWxhbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1jb21tZW50LXRleHRcIj50aGlzIHBva2Vtb24gaXMgdG9vIGN1dGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1jb21tZW50LWRhdGVcIj4yNy83LzIwMjI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcblxuLy8gcG9wdXAtbmV3LWNvbW1lbnRcbmNvbnN0IHBvcHVwTmV3Q29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucG9wdXBOZXdDb21tZW50LmNsYXNzTGlzdCA9ICdwb3B1cC1uZXctY29tbWVudCc7XG5lbmdhZ2UuYXBwZW5kQ2hpbGQocG9wdXBOZXdDb21tZW50KTtcblxuLy8gcG9wdXAtY29tbWVudC1pbnB1dCBuYW1lXG5jb25zdCBwb3B1cENvbW1lbnRJbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xucG9wdXBDb21tZW50SW5wdXROYW1lLmlkID0gJ3BvcHVwQ29tbWVudElucHV0TmFtZSc7XG5wb3B1cENvbW1lbnRJbnB1dE5hbWUuY2xhc3NMaXN0ID0gJ3BvcHVwLWNvbW1lbnQtaW5wdXQnO1xucG9wdXBDb21tZW50SW5wdXROYW1lLnR5cGUgPSAndGV4dCc7XG5wb3B1cENvbW1lbnRJbnB1dE5hbWUucGxhY2Vob2xkZXIgPSAnWW91ciBuYW1lJztcbnBvcHVwTmV3Q29tbWVudC5hcHBlbmRDaGlsZChwb3B1cENvbW1lbnRJbnB1dE5hbWUpO1xuXG4vLyBwb3B1cC1jb21tZW50LWlucHV0IGNvbW1lbnRcbmNvbnN0IHBvcHVwQ29tbWVudElucHV0Q29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5wb3B1cENvbW1lbnRJbnB1dENvbW1lbnQuaWQgPSAncG9wdXBDb21tZW50SW5wdXRDb21tZW50JztcbnBvcHVwQ29tbWVudElucHV0Q29tbWVudC5jbGFzc0xpc3QgPSAncG9wdXAtY29tbWVudC1pbnB1dCBwb3B1cC1uZXctY29tbWVudC10ZXh0JztcbnBvcHVwQ29tbWVudElucHV0Q29tbWVudC5jb2xzID0gJzE1JztcbnBvcHVwQ29tbWVudElucHV0Q29tbWVudC5yb3dzID0gJzQnO1xucG9wdXBDb21tZW50SW5wdXRDb21tZW50LnBsYWNlaG9sZGVyID0gJ0NvbW1lbnQuLi4nO1xucG9wdXBOZXdDb21tZW50LmFwcGVuZENoaWxkKHBvcHVwQ29tbWVudElucHV0Q29tbWVudCk7XG5cbi8vIHBvcHVwLWNvbW1lbnQtYnRuXG5leHBvcnQgY29uc3QgcG9wdXBDb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xucG9wdXBDb21tZW50QnRuLmlkID0gJ3BvcHVwQ29tbWVudEJ0bic7XG5wb3B1cENvbW1lbnRCdG4uY2xhc3NMaXN0ID0gJ3BvcHVwLWNvbW1lbnQtYnRuJztcbnBvcHVwQ29tbWVudEJ0bi5pbm5lckhUTUwgPSAnQ29tbWVudCc7XG5wb3B1cE5ld0NvbW1lbnQuYXBwZW5kQ2hpbGQocG9wdXBDb21tZW50QnRuKTtcblxueEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheScpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93UG9wdXAobmFtYSwgaW1hZ2UsIGluZm8pIHtcbiAgcG9wdXBIZWFkZXJUZXh0LmlubmVySFRNTCA9IG5hbWE7XG4gIHBvcHVwSW1hZ2Uuc3JjID0gaW1hZ2U7XG4gIHBvcHVwRGV0YWlsLmlubmVySFRNTCA9IGluZm87XG59XG5cbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xuICBjb25zdCBpbnZvbHZlbWVudENvbW1lbnRBUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvdjFRTTlxN281aVljT01FMXMyazIvY29tbWVudHMnO1xuICBjb25zdCBpZCA9IGl0ZW1JZDtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbW1lbnRJbnB1dE5hbWUnKS52YWx1ZTtcbiAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbW1lbnRJbnB1dENvbW1lbnQnKS52YWx1ZTtcblxuICBhd2FpdCBmZXRjaChpbnZvbHZlbWVudENvbW1lbnRBUEksIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgICAgY29tbWVudCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb21tZW50SW5wdXROYW1lJykudmFsdWUgPSAnJztcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbW1lbnRJbnB1dENvbW1lbnQnKS52YWx1ZSA9ICcnO1xufTtcblxuXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG5jb25zdCBpbnZvbHZlbWVudENvbW1lbnRBUEkgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvdjFRTTlxN281aVljT01FMXMyazIvY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gO1xuIGF3YWl0IGZldGNoKGludm9sdmVtZW50Q29tbWVudEFQSSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbigoanNvbikgPT4ge1xuICAgIGlmIChqc29uLmxlbmd0aCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcG9wdXBDb21tZW50SGVhZGVyLmlubmVySFRNTCA9IGBDb21tZW50cyAoMClgO1xuICAgIH1cbiAgICBlbHNlIHBvcHVwQ29tbWVudEhlYWRlci5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7anNvbi5sZW5ndGh9KWA7XG5cbiAgICAgcG9wdXBDb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCBqc29uLmxlbmd0aCA7IGkgPSsgMSl7XG4gICAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBuZXdDb21tZW50LmNsYXNzTGlzdCA9ICdwb3B1cC1jb21tZW50LWl0ZW0nO1xuICAgICAgICBuZXdDb21tZW50LmlubmVySFRNTCA9ICAgIGAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJwb3B1cC1jb21tZW50LWF1dGhvclwiPiR7anNvbltpXS51c2VybmFtZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1jb21tZW50LXRleHRcIj4ke2pzb25baV0uY29tbWVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBvcHVwLWNvbW1lbnQtZGF0ZVwiPiR7anNvbltpXS5jcmVhdGlvbl9kYXRlfTwvcD5gO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdDb21tZW50KTtcbiAgICAgICAgcG9wdXBDb21tZW50TGlzdC5hcHBlbmRDaGlsZChuZXdDb21tZW50KTtcbiAgICAgfVxuICAgICAgICBcbiAgICAgXG4gfSk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgeyBnZXRQb2tlbW9uTGlzdCB9IGZyb20gJy4vZGlzcGxheXBva2Vtb25pdGVtcy5qcyc7XG5pbXBvcnQgJy4vcG9wdXAuanMnO1xuXG5jb25zdCBteUxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlMb2dvJyk7XG5cbi8vIEFkZCBMb2dvIEltYWdlIC8vXG5sZXQgaW1hZ2VIdG1sID0gJyc7XG5pbWFnZUh0bWwgKz0gYFxuPGltZyBzcmM9XCIke2xvZ299XCIgYWx0PVwibG9nb1wiPmA7XG5teUxvZ28uaW5uZXJIVE1MID0gaW1hZ2VIdG1sO1xuXG4vLyBmZXRjaHBva2Vtb25zKCk7XG5cbmdldFBva2Vtb25MaXN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9