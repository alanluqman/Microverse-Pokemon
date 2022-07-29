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
___CSS_LOADER_EXPORT___.push([module.id, ".popup {\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  top: 0;\r\n  padding: 30px 10px;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.349);\r\n  backdrop-filter: blur(3px);\r\n  overflow-y: auto;\r\n  display: none;\r\n}\r\n\r\n/* scrollbar customization */\r\n.popup::-webkit-scrollbar {\r\n  width: 7px;\r\n}\r\n\r\n.popup::-webkit-scrollbar-track {\r\n  background-color: antiquewhite;\r\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\r\n}\r\n\r\n.popup::-webkit-scrollbar-thumb {\r\n  background: orangered;\r\n  border-radius: 15px;\r\n}\r\n\r\n.popup::-webkit-scrollbar-thumb:hover {\r\n  background: #b30000;\r\n}\r\n\r\n/* *********** */\r\n\r\n.popup-window {\r\n  z-index: 10;\r\n  max-width: 600px;\r\n  margin: auto;\r\n  margin-bottom: 20px;\r\n  background-color: white;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.popup-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.popup-header-text {\r\n  color: orangered;\r\n  text-transform: capitalize;\r\n  font-size: 2rem;\r\n}\r\n\r\n.x-btn {\r\n  font-size: 1.5rem;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup-image {\r\n  width: 100%;\r\n  border-bottom: 1px solid orangered;\r\n}\r\n\r\n.d-grid-2col {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-image-detail {\r\n  text-align: center;\r\n}\r\n\r\n.popup-detail-item {\r\n  font-size: medium;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\n.popup-comment-review {\r\n  max-height: 220px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n/* scrollbar customization */\r\n.popup-comment-review::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n.popup-comment-review::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\r\n  border-radius: 10px;\r\n}\r\n\r\n.popup-comment-review::-webkit-scrollbar-thumb {\r\n  background: orangered;\r\n  border-radius: 15px;\r\n}\r\n\r\n.popup-comment-review::-webkit-scrollbar-thumb:hover {\r\n  background: #b30000;\r\n}\r\n\r\n/* *********** */\r\n.popup-comment-header {\r\n  color: orangered;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.popup-comment-list {\r\n  list-style-type: none;\r\n  padding: 0 5px;\r\n}\r\n\r\n.popup-comment-item {\r\n  background-color: rgba(255, 68, 0, 0.144);\r\n  margin: 5px 0;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.popup-comment-author {\r\n  font-weight: 600;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\n.popup-comment-text {\r\n  margin: 5px 0;\r\n  color: rgb(80, 80, 80);\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.popup-comment-date {\r\n  margin: 5px 0;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  color: orangered;\r\n  text-align: right;\r\n}\r\n\r\n.popup-new-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-comment-input {\r\n  padding: 10px;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 18px;\r\n  border: 0;\r\n  outline: 0;\r\n  border-bottom: 1px solid gainsboro;\r\n}\r\n\r\n.popup-comment-input::placeholder {\r\n  color: rgb(170, 170, 170);\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.popup-comment-input:focus {\r\n  border-bottom: 1px solid orangered;\r\n}\r\n\r\n.popup-new-comment-text {\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  resize: none;\r\n}\r\n\r\n.popup-comment-btn {\r\n  padding: 10px 15px;\r\n  background-color: orangered;\r\n  color: white;\r\n  cursor: pointer;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  border-radius: 5px;\r\n  width: fit-content;\r\n  align-self: flex-end;\r\n}\r\n\r\n.display {\r\n  display: block;\r\n}\r\n\r\n@media screen and (min-width: 400px) {\r\n  .d-grid-2col {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/popup.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,MAAM;EACN,kBAAkB;EAClB,eAAe;EACf,sCAAsC;EACtC,0BAA0B;EAC1B,gBAAgB;EAChB,aAAa;AACf;;AAEA,4BAA4B;AAC5B;EACE,UAAU;AACZ;;AAEA;EACE,8BAA8B;EAC9B,4CAA4C;AAC9C;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,gBAAgB;;AAEhB;EACE,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,wEAAwE;EACxE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,wEAAwE;AAC1E;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA,4BAA4B;AAC5B;EACE,UAAU;AACZ;;AAEA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,gBAAgB;AAChB;EACE,gBAAgB;EAChB,wEAAwE;EACxE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,yCAAyC;EACzC,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,wEAAwE;AAC1E;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6EAA6E;AAC/E;;AAEA;EACE,aAAa;EACb,6EAA6E;EAC7E,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,wEAAwE;EACxE,eAAe;EACf,SAAS;EACT,UAAU;EACV,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,6EAA6E;AAC/E;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,6EAA6E;EAC7E,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,2BAA2B;EAC3B,YAAY;EACZ,eAAe;EACf,wEAAwE;EACxE,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,8BAA8B;EAChC;AACF","sourcesContent":[".popup {\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n  top: 0;\r\n  padding: 30px 10px;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.349);\r\n  backdrop-filter: blur(3px);\r\n  overflow-y: auto;\r\n  display: none;\r\n}\r\n\r\n/* scrollbar customization */\r\n.popup::-webkit-scrollbar {\r\n  width: 7px;\r\n}\r\n\r\n.popup::-webkit-scrollbar-track {\r\n  background-color: antiquewhite;\r\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\r\n}\r\n\r\n.popup::-webkit-scrollbar-thumb {\r\n  background: orangered;\r\n  border-radius: 15px;\r\n}\r\n\r\n.popup::-webkit-scrollbar-thumb:hover {\r\n  background: #b30000;\r\n}\r\n\r\n/* *********** */\r\n\r\n.popup-window {\r\n  z-index: 10;\r\n  max-width: 600px;\r\n  margin: auto;\r\n  margin-bottom: 20px;\r\n  background-color: white;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.popup-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.popup-header-text {\r\n  color: orangered;\r\n  text-transform: capitalize;\r\n  font-size: 2rem;\r\n}\r\n\r\n.x-btn {\r\n  font-size: 1.5rem;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup-image {\r\n  width: 100%;\r\n  border-bottom: 1px solid orangered;\r\n}\r\n\r\n.d-grid-2col {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-image-detail {\r\n  text-align: center;\r\n}\r\n\r\n.popup-detail-item {\r\n  font-size: medium;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\n.popup-comment-review {\r\n  max-height: 220px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n/* scrollbar customization */\r\n.popup-comment-review::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n.popup-comment-review::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\r\n  border-radius: 10px;\r\n}\r\n\r\n.popup-comment-review::-webkit-scrollbar-thumb {\r\n  background: orangered;\r\n  border-radius: 15px;\r\n}\r\n\r\n.popup-comment-review::-webkit-scrollbar-thumb:hover {\r\n  background: #b30000;\r\n}\r\n\r\n/* *********** */\r\n.popup-comment-header {\r\n  color: orangered;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.popup-comment-list {\r\n  list-style-type: none;\r\n  padding: 0 5px;\r\n}\r\n\r\n.popup-comment-item {\r\n  background-color: rgba(255, 68, 0, 0.144);\r\n  margin: 5px 0;\r\n  padding: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.popup-comment-author {\r\n  font-weight: 600;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\n.popup-comment-text {\r\n  margin: 5px 0;\r\n  color: rgb(80, 80, 80);\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.popup-comment-date {\r\n  margin: 5px 0;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  color: orangered;\r\n  text-align: right;\r\n}\r\n\r\n.popup-new-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.popup-comment-input {\r\n  padding: 10px;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-size: 18px;\r\n  border: 0;\r\n  outline: 0;\r\n  border-bottom: 1px solid gainsboro;\r\n}\r\n\r\n.popup-comment-input::placeholder {\r\n  color: rgb(170, 170, 170);\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n.popup-comment-input:focus {\r\n  border-bottom: 1px solid orangered;\r\n}\r\n\r\n.popup-new-comment-text {\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  resize: none;\r\n}\r\n\r\n.popup-comment-btn {\r\n  padding: 10px 15px;\r\n  background-color: orangered;\r\n  color: white;\r\n  cursor: pointer;\r\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  border-radius: 5px;\r\n  width: fit-content;\r\n  align-self: flex-end;\r\n}\r\n\r\n.display {\r\n  display: block;\r\n}\r\n\r\n@media screen and (min-width: 400px) {\r\n  .d-grid-2col {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* scrollbar customization */\r\nbody::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\nbody::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb {\r\n  background: orangered;\r\n  border-radius: 15px;\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb:hover {\r\n  background: #b30000;\r\n}\r\n\r\n/* *********** */\r\n\r\nheader {\r\n  background-color: #eee;\r\n}\r\n\r\nsection {\r\n  overflow: hidden;\r\n  padding: 10px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  max-width: 1280px;\r\n  margin: auto;\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.navigation {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nsection a {\r\n  float: left;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 0 12px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\nsection a.logo {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n}\r\n\r\nsection img {\r\n  width: 100px;\r\n}\r\n\r\n.right {\r\n  width: 100px;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  padding: 3px;\r\n  background-color: #efefbb;\r\n  color: black;\r\n}\r\n\r\nmain {\r\n  padding: 20px 0;\r\n  width: 100%;\r\n}\r\n\r\n.poke_container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  max-width: 1200px;\r\n}\r\n\r\n.pokemon {\r\n  background-color: #eee;\r\n  border-radius: 20px;\r\n  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);\r\n  padding: 20px;\r\n  margin: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.pokemon .img-container {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  border-radius: 50%;\r\n  width: 220px;\r\n  height: 220px;\r\n}\r\n\r\n.pokemon .img-container img {\r\n  margin-top: 20px;\r\n  max-width: 90%;\r\n  height: 200px;\r\n}\r\n\r\n.title,\r\n.info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.pokemon .info {\r\n  margin-top: 20px;\r\n}\r\n\r\n.pokemon .number {\r\n  background-color: #fff;\r\n  padding: 5px 10px;\r\n  border-radius: 0 0 0 40px;\r\n  font-size: 0.8em;\r\n  font-weight: 600;\r\n}\r\n\r\n.pokemon .name {\r\n  margin: 15px 0 7px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.title .name {\r\n  padding: 10px;\r\n  text-transform: capitalize;\r\n  margin: 0;\r\n}\r\n\r\n.likesbox {\r\n  background-color: yellow;\r\n  border-radius: 0 0 40px 0;\r\n  padding: 1px 15px;\r\n  border: 2px solid orangered;\r\n}\r\n\r\n.title {\r\n  background-color: #d4d3dd;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px;\r\n}\r\n\r\n.like-btn {\r\n  padding: 5px;\r\n  color: red;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.like-btn:hover {\r\n  transform: scale(1.3);\r\n  color: rgb(255, 55, 55);\r\n}\r\n\r\n.like-btn:active {\r\n  color: rgb(133, 1, 1);\r\n}\r\n\r\n.Comments-button {\r\n  margin-top: 20px;\r\n  width: inherit;\r\n  background-color: orangered;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: block;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.hide-tab {\r\n  display: none;\r\n}\r\n\r\n.page-active {\r\n  font-weight: bold;\r\n  color: orangered;\r\n}\r\n\r\n.about-container {\r\n  height: 505px;\r\n  margin: auto;\r\n  padding: 15px;\r\n  max-width: 700px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.head-paragraph {\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  font-size: large;\r\n  color: rgb(102, 101, 101);\r\n  text-align: center;\r\n}\r\n\r\n.contact-heading {\r\n  color: orangered;\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.links {\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  text-decoration: none;\r\n  color: gray;\r\n  margin: 15px 10px;\r\n  width: fit-content;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.links:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.github:hover {\r\n  color: black;\r\n}\r\n\r\n.linkedin:hover {\r\n  color: rgb(24, 117, 255);\r\n}\r\n\r\n.email:hover {\r\n  color: orangered;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA,4BAA4B;AAC5B;EACE,WAAW;AACb;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,gBAAgB;;AAEhB;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,YAAY;EACZ,sHAAsH;AACxH;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,+CAA+C;EAC/C,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,iBAAiB;EACjB,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,2BAA2B;EAC3B,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,sHAAsH;EACtH,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,sHAAsH;AACxH;;AAEA;EACE,sHAAsH;EACtH,qBAAqB;EACrB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["body {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* scrollbar customization */\r\nbody::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\nbody::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb {\r\n  background: orangered;\r\n  border-radius: 15px;\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb:hover {\r\n  background: #b30000;\r\n}\r\n\r\n/* *********** */\r\n\r\nheader {\r\n  background-color: #eee;\r\n}\r\n\r\nsection {\r\n  overflow: hidden;\r\n  padding: 10px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  max-width: 1280px;\r\n  margin: auto;\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.navigation {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nsection a {\r\n  float: left;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 0 12px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\nsection a.logo {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n}\r\n\r\nsection img {\r\n  width: 100px;\r\n}\r\n\r\n.right {\r\n  width: 100px;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  padding: 3px;\r\n  background-color: #efefbb;\r\n  color: black;\r\n}\r\n\r\nmain {\r\n  padding: 20px 0;\r\n  width: 100%;\r\n}\r\n\r\n.poke_container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  max-width: 1200px;\r\n}\r\n\r\n.pokemon {\r\n  background-color: #eee;\r\n  border-radius: 20px;\r\n  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);\r\n  padding: 20px;\r\n  margin: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.pokemon .img-container {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  border-radius: 50%;\r\n  width: 220px;\r\n  height: 220px;\r\n}\r\n\r\n.pokemon .img-container img {\r\n  margin-top: 20px;\r\n  max-width: 90%;\r\n  height: 200px;\r\n}\r\n\r\n.title,\r\n.info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.pokemon .info {\r\n  margin-top: 20px;\r\n}\r\n\r\n.pokemon .number {\r\n  background-color: #fff;\r\n  padding: 5px 10px;\r\n  border-radius: 0 0 0 40px;\r\n  font-size: 0.8em;\r\n  font-weight: 600;\r\n}\r\n\r\n.pokemon .name {\r\n  margin: 15px 0 7px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.title .name {\r\n  padding: 10px;\r\n  text-transform: capitalize;\r\n  margin: 0;\r\n}\r\n\r\n.likesbox {\r\n  background-color: yellow;\r\n  border-radius: 0 0 40px 0;\r\n  padding: 1px 15px;\r\n  border: 2px solid orangered;\r\n}\r\n\r\n.title {\r\n  background-color: #d4d3dd;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px;\r\n}\r\n\r\n.like-btn {\r\n  padding: 5px;\r\n  color: red;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.like-btn:hover {\r\n  transform: scale(1.3);\r\n  color: rgb(255, 55, 55);\r\n}\r\n\r\n.like-btn:active {\r\n  color: rgb(133, 1, 1);\r\n}\r\n\r\n.Comments-button {\r\n  margin-top: 20px;\r\n  width: inherit;\r\n  background-color: orangered;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: block;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.hide-tab {\r\n  display: none;\r\n}\r\n\r\n.page-active {\r\n  font-weight: bold;\r\n  color: orangered;\r\n}\r\n\r\n.about-container {\r\n  height: 505px;\r\n  margin: auto;\r\n  padding: 15px;\r\n  max-width: 700px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.head-paragraph {\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  font-size: large;\r\n  color: rgb(102, 101, 101);\r\n  text-align: center;\r\n}\r\n\r\n.contact-heading {\r\n  color: orangered;\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.links {\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  text-decoration: none;\r\n  color: gray;\r\n  margin: 15px 10px;\r\n  width: fit-content;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.links:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.github:hover {\r\n  color: black;\r\n}\r\n\r\n.linkedin:hover {\r\n  color: rgb(24, 117, 255);\r\n}\r\n\r\n.email:hover {\r\n  color: orangered;\r\n}\r\n"],"sourceRoot":""}]);
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

/// / Create pokemon Cards
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
        <img id="avatar${pokemon.id}" src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg">
        </div>
        <div class="title">
        <h3 class="name">${pokemon.name}</h3>
        <a class="like-btn" id="likeBtn${pokemon.id}"><i class="fa fa-heart"></i></a>
        </div>
        <div class="info">
            <span class="number"># ${pokemon.id}</span>
            <div class="likesbox"><span  id="${pokemon.id}" class="pe-2">0</span> Likes</div>
        </div>
        <a  class="Comments-button" id="comment${pokemon.id}" >Comments</a>
        `;

      PokemonEl.innerHTML = pokeinnerHTML;
      Pokecontainer.appendChild(PokemonEl);

      /// // Like button
      const likeBtns = document.getElementById(`likeBtn${pokemon.id}`);
      likeBtns.addEventListener('click', () => {
        (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.addLike)('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oheYik9wd8sLSwZdAJ1P/likes', pokemon.id);
      });
      /// / Comment button
      const commentBtn = document.getElementById(`comment${pokemon.id}`);
      commentBtn.addEventListener('click', () => {
        _popup_js__WEBPACK_IMPORTED_MODULE_0__.popup.classList.toggle('display');
        const itemName = pokemon.name;
        const image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;
        const info = `
                    <p class="popup-detail-item">Size : ${pokemon.size}</p>
                    <p class="popup-detail-item">Max-harvest : ${pokemon.max_harvest}</p>
                    <p class="popup-detail-item">Growth-time : ${pokemon.growth_time}</p>
                    <p class="popup-detail-item">Smoothness : ${pokemon.smoothness}</p> `;
        (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.showPopup)(itemName, image, info);
        (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(pokemon.id);
        (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.getCommentID)(pokemon.id);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ createpokemoncard, getPokemonList });

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "getCommentID": () => (/* binding */ getCommentID),
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "getLike": () => (/* binding */ getLike),
/* harmony export */   "popup": () => (/* binding */ popup),
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
  popupCommentList.innerHTML = '';
});

function showPopup(nama, image, info) {
  popupHeaderText.innerHTML = nama;
  popupImage.src = image;
  popupDetail.innerHTML = info;
}

/// get comments
const getComments = async (itemId) => {
  const involvementCommentAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/v1QM9q7o5iYcOME1s2k2/comments?item_id=${itemId}`;
  await fetch(involvementCommentAPI).then((response) => response.json()).then((json) => {
    if (json.length === undefined) {
      popupCommentHeader.innerHTML = 'Comments (0)';
      popupCommentList.innerHTML = '';
    } else {
      popupCommentHeader.innerHTML = `Comments (${json.length})`;
      popupCommentList.innerHTML = '';
      json.forEach((element) => {
        const newComment = document.createElement('li');
        newComment.classList = 'popup-comment-item';
        newComment.innerHTML = ` 
                                        <label class="popup-comment-author">${element.username}</label>
                                        <p class="popup-comment-text">${element.comment}</p>
                                        <p class="popup-comment-date">${element.creation_date}</p>`;
        popupCommentList.appendChild(newComment);
      });
    }
  }).catch((e) => e);
};

/// / add new comment
const addComment = async (itemId) => {
  const involvementCommentAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/v1QM9q7o5iYcOME1s2k2/comments';
  const id = itemId;
  const name = document.getElementById('popupCommentInputName').value;
  const comment = document.getElementById('popupCommentInputComment').value;
  if (name === '' || comment === '') return;

  await fetch(involvementCommentAPI, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => {
    getComments(itemId);
    document.getElementById('popupCommentInputName').value = '';
    document.getElementById('popupCommentInputComment').value = '';
    return response.json();
  }).catch((e) => e);
};
//----------

/// / get likes
const getLike = async (likeAPI) => {
  await fetch(likeAPI).then((response) => response.json()).then((json) => {
    const likeHolderList = document.querySelectorAll('.pe-2');
    likeHolderList.forEach((element) => {
      const id = parseInt(element.id, 10);
      const itemLike = json.find((item) => item.item_id === id);
      // const itemLike = json.forEach((item) => {
      //   const itemID =  parseInt(item.item_id);
      //     if (itemID == parseInt(id)) return item;
      // });
      if (itemLike !== undefined) {
        document.getElementById(id).innerHTML = itemLike.likes;
      }
    });
  });
};

/// / add Like
const addLike = async (likeAPI, id) => {
  await fetch(likeAPI, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => {
    getLike(likeAPI);
    return response.json();
  }).catch((e) => e);
};

let commentID = 0;
function getCommentID(id) {
  commentID = id;
}

// -- comment button eventlistener
popupCommentBtn.addEventListener('click', () => {
  addComment(commentID);
});
//----------

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
const likeAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oheYik9wd8sLSwZdAJ1P/likes';

// Add Logo Image //
let imageHtml = '';
imageHtml += `
<img src="${_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__}" alt="logo">`;
myLogo.innerHTML = imageHtml;

// fetchpokemons();

(0,_displaypokemonitems_js__WEBPACK_IMPORTED_MODULE_2__.getPokemonList)();
(0,_popup_js__WEBPACK_IMPORTED_MODULE_3__.getLike)(likeAPI);

const home = document.getElementById('home');
const about = document.getElementById('about');
document.getElementById('aboutContainer').classList.add('hide-tab');

home.addEventListener('click', () => {
    if (!home.classList.contains('page-active')){
        home.classList.add('page-active');
        about.classList.remove('page-active');
        document.getElementById('aboutContainer').classList.add('hide-tab');
        document.getElementById('poke_container').classList.remove('hide-tab');
    }
});

about.addEventListener('click', () => {
if (!about.classList.contains('page-active')){
        home.classList.remove('page-active');
        about.classList.add('page-active');
        document.getElementById('aboutContainer').classList.remove('hide-tab');
        document.getElementById('poke_container').classList.add('hide-tab');
    }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksZ0NBQWdD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QUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQUksQ0FBQztBQUNqQjs7QUFFQTs7QUFFQSx1RUFBYztBQUNkLGtEQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vc3JjL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL3NyYy9wb3B1cC5jc3M/NTlmOSIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL3NyYy9kaXNwbGF5cG9rZW1vbml0ZW1zLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9zcmMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wb3B1cCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQ5KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIHNjcm9sbGJhciBjdXN0b21pemF0aW9uICovXFxyXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDE1MSwgMTUxLCAxNTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2IzMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogKioqKioqKioqKiogKi9cXHJcXG5cXHJcXG4ucG9wdXAtd2luZG93IHtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXItdGV4dCB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi54LWJ0biB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZ3JpZC0yY29sIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltYWdlLWRldGFpbCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXRhaWwtaXRlbSB7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtcmV2aWV3IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDIyMHB4O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzY3JvbGxiYXIgY3VzdG9taXphdGlvbiAqL1xcclxcbi5wb3B1cC1jb21tZW50LXJldmlldzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtcmV2aWV3Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYigxNTEsIDE1MSwgMTUxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LXJldmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtcmV2aWV3Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYjMwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAqKioqKioqKioqKiAqL1xcclxcbi5wb3B1cC1jb21tZW50LWhlYWRlciB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAgNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1pdGVtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA2OCwgMCwgMC4xNDQpO1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtYXV0aG9yIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LXRleHQge1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIGNvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxyXFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtZGF0ZSB7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1uZXctY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtaW5wdXQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ2FpbnNib3JvO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHJnYigxNzAsIDE3MCwgMTcwKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1pbnB1dDpmb2N1cyB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbmV3LWNvbW1lbnQtdGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcXHJcXG4gIC5kLWdyaWQtMmNvbCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLE1BQU07RUFDTixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNDQUFzQztFQUN0QywwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0VBQXdFO0VBQ3hFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxnQkFBZ0I7RUFDaEIsd0VBQXdFO0VBQ3hFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkVBQTZFO0FBQy9FOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZFQUE2RTtFQUM3RSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0VBQXdFO0VBQ3hFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2RUFBNkU7QUFDL0U7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSw2RUFBNkU7RUFDN0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osZUFBZTtFQUNmLHdFQUF3RTtFQUN4RSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3B1cCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDEwcHg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQ5KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIHNjcm9sbGJhciBjdXN0b21pemF0aW9uICovXFxyXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDE1MSwgMTUxLCAxNTEpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2IzMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogKioqKioqKioqKiogKi9cXHJcXG5cXHJcXG4ucG9wdXAtd2luZG93IHtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1oZWFkZXItdGV4dCB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi54LWJ0biB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZ3JpZC0yY29sIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWltYWdlLWRldGFpbCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1kZXRhaWwtaXRlbSB7XFxyXFxuICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtcmV2aWV3IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDIyMHB4O1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzY3JvbGxiYXIgY3VzdG9taXphdGlvbiAqL1xcclxcbi5wb3B1cC1jb21tZW50LXJldmlldzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtcmV2aWV3Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYigxNTEsIDE1MSwgMTUxKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LXJldmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtcmV2aWV3Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYjMwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAqKioqKioqKioqKiAqL1xcclxcbi5wb3B1cC1jb21tZW50LWhlYWRlciB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAgNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1pdGVtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA2OCwgMCwgMC4xNDQpO1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtYXV0aG9yIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LXRleHQge1xcclxcbiAgbWFyZ2luOiA1cHggMDtcXHJcXG4gIGNvbG9yOiByZ2IoODAsIDgwLCA4MCk7XFxyXFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtZGF0ZSB7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1uZXctY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtaW5wdXQge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ2FpbnNib3JvO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHJnYigxNzAsIDE3MCwgMTcwKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1pbnB1dDpmb2N1cyB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtbmV3LWNvbW1lbnQtdGV4dCB7XFxyXFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcXHJcXG4gIC5kLWdyaWQtMmNvbCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzY3JvbGxiYXIgY3VzdG9taXphdGlvbiAqL1xcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYigxNTEsIDE1MSwgMTUxKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2IzMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogKioqKioqKioqKiogKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1heC13aWR0aDogMTI4MHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24gYSB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMTJweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiBhLmxvZ28ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0IHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmYmI7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wb2tlX2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCAxNXB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC41KTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uIC5pbWctY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiAyMjBweDtcXHJcXG4gIGhlaWdodDogMjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uIC5pbWctY29udGFpbmVyIGltZyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWF4LXdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUsXFxyXFxuLmluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24gLmluZm8ge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24gLm51bWJlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0MHB4O1xcclxcbiAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uIC5uYW1lIHtcXHJcXG4gIG1hcmdpbjogMTVweCAwIDdweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSAubmFtZSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5saWtlc2JveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgNDBweCAwO1xcclxcbiAgcGFkZGluZzogMXB4IDE1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkM2RkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0biB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCA1NSwgNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG46YWN0aXZlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTMzLCAxLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLkNvbW1lbnRzLWJ1dHRvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6IGluaGVyaXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDMycHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZS10YWIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtYWN0aXZlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDUwNXB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWQtcGFyYWdyYXBoIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgY29sb3I6IHJnYigxMDIsIDEwMSwgMTAxKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaGVhZGluZyB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG4gIG1hcmdpbjogMTVweCAxMHB4O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdpdGh1Yjpob3ZlciB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5saW5rZWRpbjpob3ZlciB7XFxyXFxuICBjb2xvcjogcmdiKDI0LCAxMTcsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5lbWFpbDpob3ZlciB7XFxyXFxuICBjb2xvcjogb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzSEFBc0g7QUFDeEg7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwrQ0FBK0M7RUFDL0MsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0hBQXNIO0VBQ3RILGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNIQUFzSDtBQUN4SDs7QUFFQTtFQUNFLHNIQUFzSDtFQUN0SCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2Nyb2xsYmFyIGN1c3RvbWl6YXRpb24gKi9cXHJcXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2IoMTUxLCAxNTEsIDE1MSk7XFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNiMzAwMDA7XFxyXFxufVxcclxcblxcclxcbi8qICoqKioqKioqKioqICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXgtd2lkdGg6IDEyODBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uIGEge1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDEycHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24gYS5sb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uIGltZyB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodCB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmJiO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZV9jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggMTVweCByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNSk7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbiAuaW1nLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB3aWR0aDogMjIwcHg7XFxyXFxuICBoZWlnaHQ6IDIyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbiAuaW1nLWNvbnRhaW5lciBpbWcge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIG1heC13aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLFxcclxcbi5pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uIC5pbmZvIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uIC5udW1iZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbiAubmFtZSB7XFxyXFxuICBtYXJnaW46IDE1cHggMCA3cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgLm5hbWUge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXNib3gge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDQwcHggMDtcXHJcXG4gIHBhZGRpbmc6IDFweCAxNXB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDNkZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG4ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0bjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgNTUsIDU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogcmdiKDEzMywgMSwgMSk7XFxyXFxufVxcclxcblxcclxcbi5Db21tZW50cy1idXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIHdpZHRoOiBpbmhlcml0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMTVweCAzMnB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUtdGFiIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWFjdGl2ZSB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiA1MDVweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5oZWFkLXBhcmFncmFwaCB7XFxyXFxuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gIGNvbG9yOiByZ2IoMTAyLCAxMDEsIDEwMSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWhlYWRpbmcge1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5saW5rcyB7XFxyXFxuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxuICBtYXJnaW46IDE1cHggMTBweDtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5saW5rczpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5naXRodWI6aG92ZXIge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua2VkaW46aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYigyNCwgMTE3LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1haWw6aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBzaG93UG9wdXAsIGdldENvbW1lbnRzLCBhZGRMaWtlLCBwb3B1cCwgZ2V0Q29tbWVudElELFxufSBmcm9tICcuL3BvcHVwLmpzJztcblxuY29uc3QgUG9rZWNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb2tlX2NvbnRhaW5lcicpO1xuY29uc3QgcG9rZW1vbkNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbkNvdW50Jyk7XG5cbi8vLyAvIENyZWF0ZSBwb2tlbW9uIENhcmRzXG5jb25zdCBjcmVhdGVwb2tlbW9uY2FyZCA9IChQb2tlbW9ucykgPT4ge1xuICBwb2tlbW9uQ291bnRlci5pbm5lckhUTUwgPSBgKCAke1Bva2Vtb25zLmxlbmd0aH0gKWA7XG4gIFBva2Vtb25zLmZvckVhY2goYXN5bmMgKGVsZW1lbnQpID0+IHtcbiAgICBhd2FpdCBmZXRjaChlbGVtZW50LnVybCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbigoanNvbikgPT4ge1xuICAgICAgY29uc3QgcG9rZW1vbiA9IGpzb247XG4gICAgICAvLyBjb25zb2xlLmxvZyhwKTtcbiAgICAgIGNvbnN0IFBva2Vtb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgUG9rZW1vbkVsLmNsYXNzTGlzdC5hZGQoJ3Bva2Vtb24nKTtcbiAgICAgIGNvbnN0IHBva2Vpbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICAgIDxpbWcgaWQ9XCJhdmF0YXIke3Bva2Vtb24uaWR9XCIgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vcG9rZWFwaS1zcHJpdGVzQDIuMC4yL3Nwcml0ZXMvcG9rZW1vbi9vdGhlci9kcmVhbS13b3JsZC8ke3Bva2Vtb24uaWR9LnN2Z1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cIm5hbWVcIj4ke3Bva2Vtb24ubmFtZX08L2gzPlxuICAgICAgICA8YSBjbGFzcz1cImxpa2UtYnRuXCIgaWQ9XCJsaWtlQnRuJHtwb2tlbW9uLmlkfVwiPjxpIGNsYXNzPVwiZmEgZmEtaGVhcnRcIj48L2k+PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtYmVyXCI+IyAke3Bva2Vtb24uaWR9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzYm94XCI+PHNwYW4gIGlkPVwiJHtwb2tlbW9uLmlkfVwiIGNsYXNzPVwicGUtMlwiPjA8L3NwYW4+IExpa2VzPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YSAgY2xhc3M9XCJDb21tZW50cy1idXR0b25cIiBpZD1cImNvbW1lbnQke3Bva2Vtb24uaWR9XCIgPkNvbW1lbnRzPC9hPlxuICAgICAgICBgO1xuXG4gICAgICBQb2tlbW9uRWwuaW5uZXJIVE1MID0gcG9rZWlubmVySFRNTDtcbiAgICAgIFBva2Vjb250YWluZXIuYXBwZW5kQ2hpbGQoUG9rZW1vbkVsKTtcblxuICAgICAgLy8vIC8vIExpa2UgYnV0dG9uXG4gICAgICBjb25zdCBsaWtlQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaWtlQnRuJHtwb2tlbW9uLmlkfWApO1xuICAgICAgbGlrZUJ0bnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZExpa2UoJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL29oZVlpazl3ZDhzTFN3WmRBSjFQL2xpa2VzJywgcG9rZW1vbi5pZCk7XG4gICAgICB9KTtcbiAgICAgIC8vLyAvIENvbW1lbnQgYnV0dG9uXG4gICAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvbW1lbnQke3Bva2Vtb24uaWR9YCk7XG4gICAgICBjb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5Jyk7XG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gcG9rZW1vbi5uYW1lO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGBodHRwczovL3VucGtnLmNvbS9wb2tlYXBpLXNwcml0ZXNAMi4wLjIvc3ByaXRlcy9wb2tlbW9uL290aGVyL2RyZWFtLXdvcmxkLyR7cG9rZW1vbi5pZH0uc3ZnYDtcbiAgICAgICAgY29uc3QgaW5mbyA9IGBcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1kZXRhaWwtaXRlbVwiPlNpemUgOiAke3Bva2Vtb24uc2l6ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtZGV0YWlsLWl0ZW1cIj5NYXgtaGFydmVzdCA6ICR7cG9rZW1vbi5tYXhfaGFydmVzdH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtZGV0YWlsLWl0ZW1cIj5Hcm93dGgtdGltZSA6ICR7cG9rZW1vbi5ncm93dGhfdGltZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtZGV0YWlsLWl0ZW1cIj5TbW9vdGhuZXNzIDogJHtwb2tlbW9uLnNtb290aG5lc3N9PC9wPiBgO1xuICAgICAgICBzaG93UG9wdXAoaXRlbU5hbWUsIGltYWdlLCBpbmZvKTtcbiAgICAgICAgZ2V0Q29tbWVudHMocG9rZW1vbi5pZCk7XG4gICAgICAgIGdldENvbW1lbnRJRChwb2tlbW9uLmlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHBva2Vtb25BUEkgPSAnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9iZXJyeS8nO1xuXG5leHBvcnQgY29uc3QgZ2V0UG9rZW1vbkxpc3QgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGZldGNoKHBva2Vtb25BUEkpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKGpzb24pID0+IHtcbiAgICBjb25zdCBwb2tlbW9ucyA9IGpzb24ucmVzdWx0cztcbiAgICAvLyBjb25zb2xlLmxvZyhwb2tlbW9ucyk7XG4gICAgY3JlYXRlcG9rZW1vbmNhcmQocG9rZW1vbnMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgY3JlYXRlcG9rZW1vbmNhcmQsIGdldFBva2Vtb25MaXN0IH07IiwiaW1wb3J0ICcuL3BvcHVwLmNzcyc7XG5pbXBvcnQgcG9rZW1vbjMgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3Bva2Vtb24zLnBuZyc7XG4vLyAgcG9wdXBcbmV4cG9ydCBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucG9wdXAuaWQgPSAncG9wdXAnO1xucG9wdXAuY2xhc3NMaXN0ID0gJ3BvcHVwJztcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXApO1xuXG4vLyBwb3B1cC13aW5kb3dcbmNvbnN0IHBvcHVwV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wb3B1cFdpbmRvdy5jbGFzc0xpc3QgPSAncG9wdXAtd2luZG93JztcbnBvcHVwLmFwcGVuZENoaWxkKHBvcHVwV2luZG93KTtcblxuLy8gcG9wdXAtaGVhZGVyXG5jb25zdCBwb3B1cEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucG9wdXBIZWFkZXIuY2xhc3NMaXN0ID0gJ3BvcHVwLWhlYWRlcic7XG5wb3B1cFdpbmRvdy5hcHBlbmRDaGlsZChwb3B1cEhlYWRlcik7XG5cbi8vIHBvcHVwLWhlYWRlciB0ZXh0XG5jb25zdCBwb3B1cEhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xucG9wdXBIZWFkZXJUZXh0LmlkID0gJ3BvcHVwSGVhZGVyVGV4dCc7XG5wb3B1cEhlYWRlclRleHQuY2xhc3NMaXN0ID0gJ3BvcHVwLWhlYWRlci10ZXh0JztcbnBvcHVwSGVhZGVyVGV4dC5pbm5lckhUTUwgPSAnVGVzdCc7IC8vLyAvLy8gZm9yIHRlc3RcbnBvcHVwSGVhZGVyLmFwcGVuZENoaWxkKHBvcHVwSGVhZGVyVGV4dCk7XG5cbi8vIHBvcHVwLWhlYWRlciBYLWJ0blxuY29uc3QgeEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbnhCdG4uaWQgPSAneEJ0bic7XG54QnRuLmNsYXNzTGlzdCA9ICd4LWJ0bic7XG54QnRuLmlubmVySFRNTCA9ICdYJztcbnBvcHVwSGVhZGVyLmFwcGVuZENoaWxkKHhCdG4pO1xuXG4vLyBwb3B1cC1pbWFnZVxuY29uc3QgcG9wdXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xucG9wdXBJbWFnZS5pZCA9ICdwb3B1cEltYWdlJztcbnBvcHVwSW1hZ2UuY2xhc3NMaXN0ID0gJ3BvcHVwLWltYWdlJztcbnBvcHVwSW1hZ2Uuc3JjID0gcG9rZW1vbjM7IC8vLyAvLy8vLy8vLy8vIGZvciB0ZXN0XG5wb3B1cEltYWdlLmFsdCA9ICdwb2tlbW9uJztcbnBvcHVwV2luZG93LmFwcGVuZENoaWxkKHBvcHVwSW1hZ2UpO1xuXG4vLyBwb3B1cC1pbWFnZS1kZXRhaWxzXG5jb25zdCBwb3B1cERldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucG9wdXBEZXRhaWwuaWQgPSAncG9wdXBEZXRhaWwnO1xucG9wdXBEZXRhaWwuY2xhc3NMaXN0ID0gJ3BvcHVwLWltYWdlLWRldGFpbCBkLWdyaWQtMmNvbCc7XG4vLy8gLy8vLy8vLy8vLy8vLy8vIGZvciB0ZXN0XG5wb3B1cERldGFpbC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1kZXRhaWwtaXRlbVwiPkNvbG9yIDogR3JlZW48L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1kZXRhaWwtaXRlbVwiPkFnZSA6IDYgeWVhcnM8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1kZXRhaWwtaXRlbVwiPlBvd2VyIDogMTMyPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtZGV0YWlsLWl0ZW1cIj5TcGVlZCA6IDQyIEtNL2g8L3A+XG5gO1xucG9wdXBXaW5kb3cuYXBwZW5kQ2hpbGQocG9wdXBEZXRhaWwpO1xuXG4vLyBwb3B1cC1jb21tZW50LWhlYWRlclxuY29uc3QgcG9wdXBDb21tZW50SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbnBvcHVwQ29tbWVudEhlYWRlci5jbGFzc0xpc3QgPSAncG9wdXAtY29tbWVudC1oZWFkZXInO1xucG9wdXBDb21tZW50SGVhZGVyLmlubmVySFRNTCA9ICdDb21tZW50cyAoNCknOyAvLy8gLy8vLy8vLyBmb3IgdGVzdFxucG9wdXBXaW5kb3cuYXBwZW5kQ2hpbGQocG9wdXBDb21tZW50SGVhZGVyKTtcblxuLy8gcG9wdXAtZW5nYWdlIHNlY3Rpb25cbmNvbnN0IGVuZ2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZW5nYWdlLmNsYXNzTGlzdCA9ICdkLWdyaWQtMmNvbCc7XG5wb3B1cFdpbmRvdy5hcHBlbmRDaGlsZChlbmdhZ2UpO1xuXG4vLyBwb3B1cC1jb21tZW50LXJldmlld1xuY29uc3QgcG9wdXBDb21tZW50UmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wb3B1cENvbW1lbnRSZXZpZXcuY2xhc3NMaXN0ID0gJ3BvcHVwLWNvbW1lbnQtcmV2aWV3JztcbmVuZ2FnZS5hcHBlbmRDaGlsZChwb3B1cENvbW1lbnRSZXZpZXcpO1xuXG4vLyBwb3B1cC1jb21tZW50LWxpc3RcbmNvbnN0IHBvcHVwQ29tbWVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xucG9wdXBDb21tZW50TGlzdC5pZCA9ICdwb3B1cENvbW1lbnRMaXN0JztcbnBvcHVwQ29tbWVudExpc3QuY2xhc3NMaXN0ID0gJ3BvcHVwLWNvbW1lbnQtbGlzdCc7XG5wb3B1cENvbW1lbnRSZXZpZXcuYXBwZW5kQ2hpbGQocG9wdXBDb21tZW50TGlzdCk7XG5cbi8vIHBvcHVwLW5ldy1jb21tZW50XG5jb25zdCBwb3B1cE5ld0NvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBvcHVwTmV3Q29tbWVudC5jbGFzc0xpc3QgPSAncG9wdXAtbmV3LWNvbW1lbnQnO1xuZW5nYWdlLmFwcGVuZENoaWxkKHBvcHVwTmV3Q29tbWVudCk7XG5cbi8vIHBvcHVwLWNvbW1lbnQtaW5wdXQgbmFtZVxuY29uc3QgcG9wdXBDb21tZW50SW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnBvcHVwQ29tbWVudElucHV0TmFtZS5pZCA9ICdwb3B1cENvbW1lbnRJbnB1dE5hbWUnO1xucG9wdXBDb21tZW50SW5wdXROYW1lLmNsYXNzTGlzdCA9ICdwb3B1cC1jb21tZW50LWlucHV0JztcbnBvcHVwQ29tbWVudElucHV0TmFtZS50eXBlID0gJ3RleHQnO1xucG9wdXBDb21tZW50SW5wdXROYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XG5wb3B1cE5ld0NvbW1lbnQuYXBwZW5kQ2hpbGQocG9wdXBDb21tZW50SW5wdXROYW1lKTtcblxuLy8gcG9wdXAtY29tbWVudC1pbnB1dCBjb21tZW50XG5jb25zdCBwb3B1cENvbW1lbnRJbnB1dENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xucG9wdXBDb21tZW50SW5wdXRDb21tZW50LmlkID0gJ3BvcHVwQ29tbWVudElucHV0Q29tbWVudCc7XG5wb3B1cENvbW1lbnRJbnB1dENvbW1lbnQuY2xhc3NMaXN0ID0gJ3BvcHVwLWNvbW1lbnQtaW5wdXQgcG9wdXAtbmV3LWNvbW1lbnQtdGV4dCc7XG5wb3B1cENvbW1lbnRJbnB1dENvbW1lbnQuY29scyA9ICcxNSc7XG5wb3B1cENvbW1lbnRJbnB1dENvbW1lbnQucm93cyA9ICc0JztcbnBvcHVwQ29tbWVudElucHV0Q29tbWVudC5wbGFjZWhvbGRlciA9ICdDb21tZW50Li4uJztcbnBvcHVwTmV3Q29tbWVudC5hcHBlbmRDaGlsZChwb3B1cENvbW1lbnRJbnB1dENvbW1lbnQpO1xuXG4vLyBwb3B1cC1jb21tZW50LWJ0blxuZXhwb3J0IGNvbnN0IHBvcHVwQ29tbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbnBvcHVwQ29tbWVudEJ0bi5pZCA9ICdwb3B1cENvbW1lbnRCdG4nO1xucG9wdXBDb21tZW50QnRuLmNsYXNzTGlzdCA9ICdwb3B1cC1jb21tZW50LWJ0bic7XG5wb3B1cENvbW1lbnRCdG4uaW5uZXJIVE1MID0gJ0NvbW1lbnQnO1xucG9wdXBOZXdDb21tZW50LmFwcGVuZENoaWxkKHBvcHVwQ29tbWVudEJ0bik7XG5cbnhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbiAgcG9wdXBDb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1BvcHVwKG5hbWEsIGltYWdlLCBpbmZvKSB7XG4gIHBvcHVwSGVhZGVyVGV4dC5pbm5lckhUTUwgPSBuYW1hO1xuICBwb3B1cEltYWdlLnNyYyA9IGltYWdlO1xuICBwb3B1cERldGFpbC5pbm5lckhUTUwgPSBpbmZvO1xufVxuXG4vLy8gZ2V0IGNvbW1lbnRzXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIGNvbnN0IGludm9sdmVtZW50Q29tbWVudEFQSSA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy92MVFNOXE3bzVpWWNPTUUxczJrMi9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWA7XG4gIGF3YWl0IGZldGNoKGludm9sdmVtZW50Q29tbWVudEFQSSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbigoanNvbikgPT4ge1xuICAgIGlmIChqc29uLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwb3B1cENvbW1lbnRIZWFkZXIuaW5uZXJIVE1MID0gJ0NvbW1lbnRzICgwKSc7XG4gICAgICBwb3B1cENvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3B1cENvbW1lbnRIZWFkZXIuaW5uZXJIVE1MID0gYENvbW1lbnRzICgke2pzb24ubGVuZ3RofSlgO1xuICAgICAgcG9wdXBDb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAgIGpzb24uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbmV3Q29tbWVudC5jbGFzc0xpc3QgPSAncG9wdXAtY29tbWVudC1pdGVtJztcbiAgICAgICAgbmV3Q29tbWVudC5pbm5lckhUTUwgPSBgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInBvcHVwLWNvbW1lbnQtYXV0aG9yXCI+JHtlbGVtZW50LnVzZXJuYW1lfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1jb21tZW50LXRleHRcIj4ke2VsZW1lbnQuY29tbWVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1jb21tZW50LWRhdGVcIj4ke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX08L3A+YDtcbiAgICAgICAgcG9wdXBDb21tZW50TGlzdC5hcHBlbmRDaGlsZChuZXdDb21tZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSkuY2F0Y2goKGUpID0+IGUpO1xufTtcblxuLy8vIC8gYWRkIG5ldyBjb21tZW50XG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgY29uc3QgaW52b2x2ZW1lbnRDb21tZW50QVBJID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3YxUU05cTdvNWlZY09NRTFzMmsyL2NvbW1lbnRzJztcbiAgY29uc3QgaWQgPSBpdGVtSWQ7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb21tZW50SW5wdXROYW1lJykudmFsdWU7XG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb21tZW50SW5wdXRDb21tZW50JykudmFsdWU7XG4gIGlmIChuYW1lID09PSAnJyB8fCBjb21tZW50ID09PSAnJykgcmV0dXJuO1xuXG4gIGF3YWl0IGZldGNoKGludm9sdmVtZW50Q29tbWVudEFQSSwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgICBjb21tZW50LFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBnZXRDb21tZW50cyhpdGVtSWQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbW1lbnRJbnB1dE5hbWUnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbW1lbnRJbnB1dENvbW1lbnQnKS52YWx1ZSA9ICcnO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0pLmNhdGNoKChlKSA9PiBlKTtcbn07XG4vLy0tLS0tLS0tLS1cblxuLy8vIC8gZ2V0IGxpa2VzXG5leHBvcnQgY29uc3QgZ2V0TGlrZSA9IGFzeW5jIChsaWtlQVBJKSA9PiB7XG4gIGF3YWl0IGZldGNoKGxpa2VBUEkpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKGpzb24pID0+IHtcbiAgICBjb25zdCBsaWtlSG9sZGVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wZS0yJyk7XG4gICAgbGlrZUhvbGRlckxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaWQgPSBwYXJzZUludChlbGVtZW50LmlkLCAxMCk7XG4gICAgICBjb25zdCBpdGVtTGlrZSA9IGpzb24uZmluZCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkID09PSBpZCk7XG4gICAgICAvLyBjb25zdCBpdGVtTGlrZSA9IGpzb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgLy8gICBjb25zdCBpdGVtSUQgPSAgcGFyc2VJbnQoaXRlbS5pdGVtX2lkKTtcbiAgICAgIC8vICAgICBpZiAoaXRlbUlEID09IHBhcnNlSW50KGlkKSkgcmV0dXJuIGl0ZW07XG4gICAgICAvLyB9KTtcbiAgICAgIGlmIChpdGVtTGlrZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwgPSBpdGVtTGlrZS5saWtlcztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLy8gLyBhZGQgTGlrZVxuZXhwb3J0IGNvbnN0IGFkZExpa2UgPSBhc3luYyAobGlrZUFQSSwgaWQpID0+IHtcbiAgYXdhaXQgZmV0Y2gobGlrZUFQSSwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBnZXRMaWtlKGxpa2VBUEkpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0pLmNhdGNoKChlKSA9PiBlKTtcbn07XG5cbmxldCBjb21tZW50SUQgPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbW1lbnRJRChpZCkge1xuICBjb21tZW50SUQgPSBpZDtcbn1cblxuLy8gLS0gY29tbWVudCBidXR0b24gZXZlbnRsaXN0ZW5lclxucG9wdXBDb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBhZGRDb21tZW50KGNvbW1lbnRJRCk7XG59KTtcbi8vLS0tLS0tLS0tLSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgeyBnZXRQb2tlbW9uTGlzdCB9IGZyb20gJy4vZGlzcGxheXBva2Vtb25pdGVtcy5qcyc7XG5pbXBvcnQgeyBnZXRMaWtlIH0gZnJvbSAnLi9wb3B1cC5qcyc7XG5cbmNvbnN0IG15TG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUxvZ28nKTtcbmNvbnN0IGxpa2VBUEkgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvb2hlWWlrOXdkOHNMU3daZEFKMVAvbGlrZXMnO1xuXG4vLyBBZGQgTG9nbyBJbWFnZSAvL1xubGV0IGltYWdlSHRtbCA9ICcnO1xuaW1hZ2VIdG1sICs9IGBcbjxpbWcgc3JjPVwiJHtsb2dvfVwiIGFsdD1cImxvZ29cIj5gO1xubXlMb2dvLmlubmVySFRNTCA9IGltYWdlSHRtbDtcblxuLy8gZmV0Y2hwb2tlbW9ucygpO1xuXG5nZXRQb2tlbW9uTGlzdCgpO1xuZ2V0TGlrZShsaWtlQVBJKTtcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG5jb25zdCBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Q29udGFpbmVyJykuY2xhc3NMaXN0LmFkZCgnaGlkZS10YWInKTtcblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoIWhvbWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLWFjdGl2ZScpKXtcbiAgICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdwYWdlLWFjdGl2ZScpO1xuICAgICAgICBhYm91dC5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWFjdGl2ZScpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXRDb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRlLXRhYicpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZV9jb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLXRhYicpO1xuICAgIH1cbn0pO1xuXG5hYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbmlmICghYWJvdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlLWFjdGl2ZScpKXtcbiAgICAgICAgaG9tZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLWFjdGl2ZScpO1xuICAgICAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdwYWdlLWFjdGl2ZScpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXRDb250YWluZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLXRhYicpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZV9jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRlLXRhYicpO1xuICAgIH1cbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==