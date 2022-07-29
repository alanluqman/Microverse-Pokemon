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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* scrollbar customization */\r\nbody::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\nbody::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb {\r\n  background: orangered;\r\n  border-radius: 15px;\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb:hover {\r\n  background: #b30000;\r\n}\r\n\r\n/* *********** */\r\n\r\nheader {\r\n  overflow: hidden;\r\n  background-color: #eee;\r\n  padding: 10px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nheader a {\r\n  float: left;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 0 12px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  border-radius: 4px;\r\n}\r\n\r\nheader a.logo {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n}\r\n\r\nheader img {\r\n  width: 100px;\r\n}\r\n\r\n.right {\r\n  width: 100px;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  padding: 3px;\r\n  background-color: #efefbb;\r\n  color: black;\r\n}\r\n\r\nmain {\r\n  padding: 20px 0;\r\n  background-color: #efefbb;\r\n  background-image: linear-gradient(to right, #d4d3dd, #efefbb);\r\n  width: 100%;\r\n}\r\n\r\n.poke_container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  max-width: 1200px;\r\n}\r\n\r\n.pokemon {\r\n  background-color: #eee;\r\n  border-radius: 20px;\r\n  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);\r\n  padding: 20px;\r\n  margin: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.pokemon .img-container {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  border-radius: 50%;\r\n  width: 220px;\r\n  height: 220px;\r\n}\r\n\r\n.pokemon .img-container img {\r\n  margin-top: 20px;\r\n  max-width: 90%;\r\n  height: 200px;\r\n}\r\n\r\n.title,\r\n.info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.pokemon .info {\r\n  margin-top: 20px;\r\n}\r\n\r\n.pokemon .number {\r\n  background-color: #fff;\r\n  padding: 5px 10px;\r\n  border-radius: 0 0 0 40px;\r\n  font-size: 0.8em;\r\n  font-weight: 600;\r\n}\r\n\r\n.pokemon .name {\r\n  margin: 15px 0 7px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.title .name {\r\n  padding: 10px;\r\n  text-transform: capitalize;\r\n  margin: 0;\r\n}\r\n\r\n.likesbox {\r\n  background-color: yellow;\r\n  border-radius: 0 0 40px 0;\r\n  padding: 1px 15px;\r\n  border: 2px solid orangered;\r\n}\r\n\r\n.title {\r\n  background-color: #d4d3dd;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px;\r\n}\r\n\r\n.like-btn {\r\n  padding: 5px;\r\n  color: red;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.like-btn:hover {\r\n  transform: scale(1.3);\r\n  color: rgb(255, 55, 55);\r\n}\r\n\r\n.like-btn:active {\r\n  color: rgb(133, 1, 1);\r\n}\r\n\r\n.Comments-button {\r\n  margin-top: 20px;\r\n  width: inherit;\r\n  background-color: orangered;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: block;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 570px) {\r\n  .rigth {\r\n    display: none;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA,4BAA4B;AAC5B;EACE,WAAW;AACb;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,gBAAgB;;AAEhB;EACE,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,6DAA6D;EAC7D,WAAW;AACb;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,+CAA+C;EAC/C,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;EAC1C,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,yBAAyB;EACzB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,0BAA0B;EAC1B,SAAS;AACX;;AAEA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,iBAAiB;EACjB,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,2BAA2B;EAC3B,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE;IACE,aAAa;EACf;AACF","sourcesContent":["body {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* scrollbar customization */\r\nbody::-webkit-scrollbar {\r\n  width: 10px;\r\n}\r\n\r\nbody::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px rgb(151, 151, 151);\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb {\r\n  background: orangered;\r\n  border-radius: 15px;\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb:hover {\r\n  background: #b30000;\r\n}\r\n\r\n/* *********** */\r\n\r\nheader {\r\n  overflow: hidden;\r\n  background-color: #eee;\r\n  padding: 10px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nheader a {\r\n  float: left;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 0 12px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  border-radius: 4px;\r\n}\r\n\r\nheader a.logo {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n}\r\n\r\nheader img {\r\n  width: 100px;\r\n}\r\n\r\n.right {\r\n  width: 100px;\r\n}\r\n\r\nfooter {\r\n  text-align: center;\r\n  padding: 3px;\r\n  background-color: #efefbb;\r\n  color: black;\r\n}\r\n\r\nmain {\r\n  padding: 20px 0;\r\n  background-color: #efefbb;\r\n  background-image: linear-gradient(to right, #d4d3dd, #efefbb);\r\n  width: 100%;\r\n}\r\n\r\n.poke_container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  max-width: 1200px;\r\n}\r\n\r\n.pokemon {\r\n  background-color: #eee;\r\n  border-radius: 20px;\r\n  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);\r\n  padding: 20px;\r\n  margin: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.pokemon .img-container {\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  border-radius: 50%;\r\n  width: 220px;\r\n  height: 220px;\r\n}\r\n\r\n.pokemon .img-container img {\r\n  margin-top: 20px;\r\n  max-width: 90%;\r\n  height: 200px;\r\n}\r\n\r\n.title,\r\n.info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.pokemon .info {\r\n  margin-top: 20px;\r\n}\r\n\r\n.pokemon .number {\r\n  background-color: #fff;\r\n  padding: 5px 10px;\r\n  border-radius: 0 0 0 40px;\r\n  font-size: 0.8em;\r\n  font-weight: 600;\r\n}\r\n\r\n.pokemon .name {\r\n  margin: 15px 0 7px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.title .name {\r\n  padding: 10px;\r\n  text-transform: capitalize;\r\n  margin: 0;\r\n}\r\n\r\n.likesbox {\r\n  background-color: yellow;\r\n  border-radius: 0 0 40px 0;\r\n  padding: 1px 15px;\r\n  border: 2px solid orangered;\r\n}\r\n\r\n.title {\r\n  background-color: #d4d3dd;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 5px;\r\n}\r\n\r\n.like-btn {\r\n  padding: 5px;\r\n  color: red;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.like-btn:hover {\r\n  transform: scale(1.3);\r\n  color: rgb(255, 55, 55);\r\n}\r\n\r\n.like-btn:active {\r\n  color: rgb(133, 1, 1);\r\n}\r\n\r\n.Comments-button {\r\n  margin-top: 20px;\r\n  width: inherit;\r\n  background-color: orangered;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: block;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  border-radius: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (min-width: 570px) {\r\n  .rigth {\r\n    display: none;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

       

      const likeBtns = document.getElementById(`likeBtn${pokemon.id}`);
        likeBtns.addEventListener('click', () => {
        (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oheYik9wd8sLSwZdAJ1P/likes`,pokemon.id);
      });

      const commentBtn = document.getElementById(`comment${pokemon.id}`);
      commentBtn.addEventListener('click', () => {
            console.log('hello ID : '+pokemon.id);
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
            (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.getCommentID) (pokemon.id);
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

let commentID = 0;
function getCommentID (id) {
commentID = id;
}

//-- comment button eventlistener
            popupCommentBtn.addEventListener('click', () => {
              // console.log('hello ID : '+pokemon.id);
              addComment(commentID);
            });
            //----------

function showPopup(nama, image, info) {
  popupHeaderText.innerHTML = nama;
  popupImage.src = image;
  popupDetail.innerHTML = info;
}

/// get comments
const getComments = async (itemId) => {
  const involvementCommentAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/v1QM9q7o5iYcOME1s2k2/comments?item_id=${itemId}`;
  await fetch(involvementCommentAPI).then((response) => response.json()).then((json) => {
    // console.log(json);
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
        //   console.log(newComment);
        popupCommentList.appendChild(newComment);
      });
    }
  }).catch((e) => {
    return;
  });
};

/// / add new comment
const addComment = async (itemId) => {
  const involvementCommentAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/v1QM9q7o5iYcOME1s2k2/comments';
  const id = itemId;
  const name = document.getElementById('popupCommentInputName').value;
  const comment = document.getElementById('popupCommentInputComment').value;
  if (name === '' || comment === '') return;

  // console.log(name+" : "+comment+ `[added to ID : ${itemId}]`);

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
  }).catch((e) => {
    return;
  });
};
//----------


//// get likes
 const getLike = async (likeAPI) => {
  await fetch(likeAPI).then((response) => response.json()).then((json) => {
    const likeHolderList = document.querySelectorAll('.pe-2');
    likeHolderList.forEach((element) =>{
      const id = element.id;
      const itemLike = json.find(item => item.item_id == id);
      if (itemLike !== undefined){
      document.getElementById(id).innerHTML = itemLike.likes;
      } 
      });
    });
  };

  //// add Like
const addLike = async (likeAPI,id) => {
    await fetch(likeAPI,{
    method: 'POST',
    body: JSON.stringify({
      item_id: id
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => {
    console.log('you liked ID : '+id);
    getLike(likeAPI);
    return response.json();
  }).catch((e) => {return});
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
const likeAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oheYik9wd8sLSwZdAJ1P/likes`;


// Add Logo Image //
let imageHtml = '';
imageHtml += `
<img src="${_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__}" alt="logo">`;
myLogo.innerHTML = imageHtml;

// fetchpokemons();

(0,_displaypokemonitems_js__WEBPACK_IMPORTED_MODULE_2__.getPokemonList)();
(0,_popup_js__WEBPACK_IMPORTED_MODULE_3__.getLike)(likeAPI);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN1QjtBQUNjO0FBQ3ZCOztBQUVuQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFJLENBQUM7QUFDakI7O0FBRUE7O0FBRUEsdUVBQWM7QUFDZCxrREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9zcmMvcG9wdXAuY3NzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vc3JjL3BvcHVwLmNzcz81OWY5Iiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vc3JjL2Rpc3BsYXlwb2tlbW9uaXRlbXMuanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi8uL3NyYy9wb3B1cC5qcyIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dldHRpbmctc3RhcnRlZC11c2luZy1hLWNvbmZpZ3VyYXRpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLXVzaW5nLWEtY29uZmlndXJhdGlvbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQtdXNpbmctYS1jb25maWd1cmF0aW9uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvcHVwIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2Nyb2xsYmFyIGN1c3RvbWl6YXRpb24gKi9cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2IoMTUxLCAxNTEsIDE1MSk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYjMwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAqKioqKioqKioqKiAqL1xcclxcblxcclxcbi5wb3B1cC13aW5kb3cge1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlci10ZXh0IHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLngtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1ncmlkLTJjb2wge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1hZ2UtZGV0YWlsIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRldGFpbC1pdGVtIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1yZXZpZXcge1xcclxcbiAgbWF4LWhlaWdodDogMjIwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi8qIHNjcm9sbGJhciBjdXN0b21pemF0aW9uICovXFxyXFxuLnBvcHVwLWNvbW1lbnQtcmV2aWV3Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1yZXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDE1MSwgMTUxLCAxNTEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtcmV2aWV3Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1yZXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNiMzAwMDA7XFxyXFxufVxcclxcblxcclxcbi8qICoqKioqKioqKioqICovXFxyXFxuLnBvcHVwLWNvbW1lbnQtaGVhZGVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgcGFkZGluZzogMCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWl0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDY4LCAwLCAwLjE0NCk7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1hdXRob3Ige1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtdGV4dCB7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1kYXRlIHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLW5ldy1jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnYWluc2Jvcm87XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogcmdiKDE3MCwgMTcwLCAxNzApO1xcclxcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWlucHV0OmZvY3VzIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1uZXctY29tbWVudC10ZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1idG4ge1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xcclxcbiAgLmQtZ3JpZC0yY29sIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcG9wdXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsTUFBTTtFQUNOLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3RUFBd0U7RUFDeEUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGdCQUFnQjtFQUNoQix3RUFBd0U7RUFDeEUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2RUFBNkU7QUFDL0U7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkVBQTZFO0VBQzdFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix3RUFBd0U7RUFDeEUsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZFQUE2RTtBQUMvRTs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDZFQUE2RTtFQUM3RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysd0VBQXdFO0VBQ3hFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBvcHVwIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2Nyb2xsYmFyIGN1c3RvbWl6YXRpb24gKi9cXHJcXG4ucG9wdXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCByZ2IoMTUxLCAxNTEsIDE1MSk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYjMwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAqKioqKioqKioqKiAqL1xcclxcblxcclxcbi5wb3B1cC13aW5kb3cge1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWhlYWRlci10ZXh0IHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLngtYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgb3JhbmdlcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1ncmlkLTJjb2wge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1hZ2UtZGV0YWlsIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWRldGFpbC1pdGVtIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1yZXZpZXcge1xcclxcbiAgbWF4LWhlaWdodDogMjIwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi8qIHNjcm9sbGJhciBjdXN0b21pemF0aW9uICovXFxyXFxuLnBvcHVwLWNvbW1lbnQtcmV2aWV3Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1yZXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDE1MSwgMTUxLCAxNTEpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtcmV2aWV3Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1yZXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNiMzAwMDA7XFxyXFxufVxcclxcblxcclxcbi8qICoqKioqKioqKioqICovXFxyXFxuLnBvcHVwLWNvbW1lbnQtaGVhZGVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgcGFkZGluZzogMCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWl0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDY4LCAwLCAwLjE0NCk7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1hdXRob3Ige1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNvbW1lbnQtdGV4dCB7XFxyXFxuICBtYXJnaW46IDVweCAwO1xcclxcbiAgY29sb3I6IHJnYig4MCwgODAsIDgwKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1kYXRlIHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLW5ldy1jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnYWluc2Jvcm87XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogcmdiKDE3MCwgMTcwLCAxNzApO1xcclxcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jb21tZW50LWlucHV0OmZvY3VzIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBvcmFuZ2VyZWQ7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1uZXctY29tbWVudC10ZXh0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY29tbWVudC1idG4ge1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xcclxcbiAgLmQtZ3JpZC0yY29sIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIHNjcm9sbGJhciBjdXN0b21pemF0aW9uICovXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDE1MSwgMTUxLCAxNTEpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYjMwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAqKioqKioqKioqKiAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBhIHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCAxMnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgYS5sb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0IHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmYmI7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZiYjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Q0ZDNkZCwgI2VmZWZiYik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2VfY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDE1cHggcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjUpO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24gLmltZy1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDIyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24gLmltZy1jb250YWluZXIgaW1nIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSxcXHJcXG4uaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbiAuaW5mbyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbiAubnVtYmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDQwcHg7XFxyXFxuICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24gLm5hbWUge1xcclxcbiAgbWFyZ2luOiAxNXB4IDAgN3B4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIC5uYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzYm94IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0MHB4IDA7XFxyXFxuICBwYWRkaW5nOiAxcHggMTVweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQzZGQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG46aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDU1LCA1NSk7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0bjphY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYigxMzMsIDEsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uQ29tbWVudHMtYnV0dG9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICB3aWR0aDogaW5oZXJpdDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3MHB4KSB7XFxyXFxuICAucmlndGgge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLGdCQUFnQjs7QUFFaEI7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsNkRBQTZEO0VBQzdELFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwrQ0FBK0M7RUFDL0MsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIHNjcm9sbGJhciBjdXN0b21pemF0aW9uICovXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDE1MSwgMTUxLCAxNTEpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiBvcmFuZ2VyZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYjMwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAqKioqKioqKioqKiAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBhIHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCAxMnB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgYS5sb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0IHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmYmI7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZiYjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Q0ZDNkZCwgI2VmZWZiYik7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2VfY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDE1cHggcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjUpO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24gLmltZy1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDIyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24gLmltZy1jb250YWluZXIgaW1nIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSxcXHJcXG4uaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbiAuaW5mbyB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbiAubnVtYmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDQwcHg7XFxyXFxuICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24gLm5hbWUge1xcclxcbiAgbWFyZ2luOiAxNXB4IDAgN3B4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIC5uYW1lIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzYm94IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0MHB4IDA7XFxyXFxuICBwYWRkaW5nOiAxcHggMTVweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIG9yYW5nZXJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGQzZGQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1idG46aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDU1LCA1NSk7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWJ0bjphY3RpdmUge1xcclxcbiAgY29sb3I6IHJnYigxMzMsIDEsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uQ29tbWVudHMtYnV0dG9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICB3aWR0aDogaW5oZXJpdDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMzJweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3MHB4KSB7XFxyXFxuICAucmlndGgge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHNob3dQb3B1cCwgZ2V0Q29tbWVudHMsIGFkZExpa2UsIHBvcHVwLCBnZXRDb21tZW50SUR9IGZyb20gJy4vcG9wdXAuanMnO1xyXG5cclxuY29uc3QgUG9rZWNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb2tlX2NvbnRhaW5lcicpO1xyXG5jb25zdCBwb2tlbW9uQ291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uQ291bnQnKTtcclxuXHJcblxyXG5cclxuY29uc3QgY3JlYXRlcG9rZW1vbmNhcmQgPSAoUG9rZW1vbnMpID0+IHtcclxuICBwb2tlbW9uQ291bnRlci5pbm5lckhUTUwgPSBgKCAke1Bva2Vtb25zLmxlbmd0aH0gKWA7XHJcbiAgUG9rZW1vbnMuZm9yRWFjaChhc3luYyAoZWxlbWVudCkgPT4ge1xyXG4gICAgYXdhaXQgZmV0Y2goZWxlbWVudC51cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKGpzb24pID0+IHtcclxuICAgICAgY29uc3QgcG9rZW1vbiA9IGpzb247XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHApO1xyXG4gICAgICBjb25zdCBQb2tlbW9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgUG9rZW1vbkVsLmNsYXNzTGlzdC5hZGQoJ3Bva2Vtb24nKTtcclxuICAgICAgY29uc3QgcG9rZWlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWcgaWQ9XCJhdmF0YXIke3Bva2Vtb24uaWR9XCIgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vcG9rZWFwaS1zcHJpdGVzQDIuMC4yL3Nwcml0ZXMvcG9rZW1vbi9vdGhlci9kcmVhbS13b3JsZC8ke3Bva2Vtb24uaWR9LnN2Z1wiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cIm5hbWVcIj4ke3Bva2Vtb24ubmFtZX08L2gzPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibGlrZS1idG5cIiBpZD1cImxpa2VCdG4ke3Bva2Vtb24uaWR9XCI+PGkgY2xhc3M9XCJmYSBmYS1oZWFydFwiPjwvaT48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJudW1iZXJcIj4jICR7cG9rZW1vbi5pZH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlc2JveFwiPjxzcGFuICBpZD1cIiR7cG9rZW1vbi5pZH1cIiBjbGFzcz1cInBlLTJcIj4wPC9zcGFuPiBMaWtlczwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxhICBjbGFzcz1cIkNvbW1lbnRzLWJ1dHRvblwiIGlkPVwiY29tbWVudCR7cG9rZW1vbi5pZH1cIiA+Q29tbWVudHM8L2E+XHJcbiAgICAgICAgYDtcclxuICAgICAgICAgXHJcblxyXG4gICAgICAgIFBva2Vtb25FbC5pbm5lckhUTUwgPSBwb2tlaW5uZXJIVE1MO1xyXG4gICAgICAgIFBva2Vjb250YWluZXIuYXBwZW5kQ2hpbGQoUG9rZW1vbkVsKTtcclxuXHJcbiAgICAgICBcclxuXHJcbiAgICAgIGNvbnN0IGxpa2VCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpa2VCdG4ke3Bva2Vtb24uaWR9YCk7XHJcbiAgICAgICAgbGlrZUJ0bnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkTGlrZShgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvb2hlWWlrOXdkOHNMU3daZEFKMVAvbGlrZXNgLHBva2Vtb24uaWQpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbW1lbnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY29tbWVudCR7cG9rZW1vbi5pZH1gKTtcclxuICAgICAgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvIElEIDogJytwb2tlbW9uLmlkKTtcclxuICAgICAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzcGxheScpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtTmFtZSA9IHBva2Vtb24ubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBgaHR0cHM6Ly91bnBrZy5jb20vcG9rZWFwaS1zcHJpdGVzQDIuMC4yL3Nwcml0ZXMvcG9rZW1vbi9vdGhlci9kcmVhbS13b3JsZC8ke3Bva2Vtb24uaWR9LnN2Z2A7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1kZXRhaWwtaXRlbVwiPlNpemUgOiAke3Bva2Vtb24uc2l6ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1kZXRhaWwtaXRlbVwiPk1heC1oYXJ2ZXN0IDogJHtwb2tlbW9uLm1heF9oYXJ2ZXN0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBvcHVwLWRldGFpbC1pdGVtXCI+R3Jvd3RoLXRpbWUgOiAke3Bva2Vtb24uZ3Jvd3RoX3RpbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtZGV0YWlsLWl0ZW1cIj5TbW9vdGhuZXNzIDogJHtwb2tlbW9uLnNtb290aG5lc3N9PC9wPiBgO1xyXG4gICAgICAgICAgICBzaG93UG9wdXAoaXRlbU5hbWUsIGltYWdlLCBpbmZvKTtcclxuICAgICAgICAgICAgZ2V0Q29tbWVudHMocG9rZW1vbi5pZCk7XHJcbiAgICAgICAgICAgIGdldENvbW1lbnRJRCAocG9rZW1vbi5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbiAgIFxyXG5cclxuY29uc3QgcG9rZW1vbkFQSSA9ICdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL2JlcnJ5Lyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UG9rZW1vbkxpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2gocG9rZW1vbkFQSSkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbigoanNvbikgPT4ge1xyXG4gICAgY29uc3QgcG9rZW1vbnMgPSBqc29uLnJlc3VsdHM7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwb2tlbW9ucyk7XHJcbiAgICBjcmVhdGVwb2tlbW9uY2FyZChwb2tlbW9ucyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IGNyZWF0ZXBva2Vtb25jYXJkLCBnZXRQb2tlbW9uTGlzdCB9OyIsImltcG9ydCAnLi9wb3B1cC5jc3MnO1xyXG5pbXBvcnQgcG9rZW1vbjMgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3Bva2Vtb24zLnBuZyc7XHJcbi8vICBwb3B1cFxyXG5leHBvcnQgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxucG9wdXAuaWQgPSAncG9wdXAnO1xyXG5wb3B1cC5jbGFzc0xpc3QgPSAncG9wdXAnO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcclxuXHJcbi8vIHBvcHVwLXdpbmRvd1xyXG5jb25zdCBwb3B1cFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5wb3B1cFdpbmRvdy5jbGFzc0xpc3QgPSAncG9wdXAtd2luZG93JztcclxucG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBXaW5kb3cpO1xyXG5cclxuLy8gcG9wdXAtaGVhZGVyXHJcbmNvbnN0IHBvcHVwSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnBvcHVwSGVhZGVyLmNsYXNzTGlzdCA9ICdwb3B1cC1oZWFkZXInO1xyXG5wb3B1cFdpbmRvdy5hcHBlbmRDaGlsZChwb3B1cEhlYWRlcik7XHJcblxyXG4vLyBwb3B1cC1oZWFkZXIgdGV4dFxyXG5jb25zdCBwb3B1cEhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5wb3B1cEhlYWRlclRleHQuaWQgPSAncG9wdXBIZWFkZXJUZXh0JztcclxucG9wdXBIZWFkZXJUZXh0LmNsYXNzTGlzdCA9ICdwb3B1cC1oZWFkZXItdGV4dCc7XHJcbnBvcHVwSGVhZGVyVGV4dC5pbm5lckhUTUwgPSAnVGVzdCc7IC8vLyAvLy8gZm9yIHRlc3RcclxucG9wdXBIZWFkZXIuYXBwZW5kQ2hpbGQocG9wdXBIZWFkZXJUZXh0KTtcclxuXHJcbi8vIHBvcHVwLWhlYWRlciBYLWJ0blxyXG5jb25zdCB4QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG54QnRuLmlkID0gJ3hCdG4nO1xyXG54QnRuLmNsYXNzTGlzdCA9ICd4LWJ0bic7XHJcbnhCdG4uaW5uZXJIVE1MID0gJ1gnO1xyXG5wb3B1cEhlYWRlci5hcHBlbmRDaGlsZCh4QnRuKTtcclxuXHJcbi8vIHBvcHVwLWltYWdlXHJcbmNvbnN0IHBvcHVwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxucG9wdXBJbWFnZS5pZCA9ICdwb3B1cEltYWdlJztcclxucG9wdXBJbWFnZS5jbGFzc0xpc3QgPSAncG9wdXAtaW1hZ2UnO1xyXG5wb3B1cEltYWdlLnNyYyA9IHBva2Vtb24zOyAvLy8gLy8vLy8vLy8vLyBmb3IgdGVzdFxyXG5wb3B1cEltYWdlLmFsdCA9ICdwb2tlbW9uJztcclxucG9wdXBXaW5kb3cuYXBwZW5kQ2hpbGQocG9wdXBJbWFnZSk7XHJcblxyXG4vLyBwb3B1cC1pbWFnZS1kZXRhaWxzXHJcbmNvbnN0IHBvcHVwRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnBvcHVwRGV0YWlsLmlkID0gJ3BvcHVwRGV0YWlsJztcclxucG9wdXBEZXRhaWwuY2xhc3NMaXN0ID0gJ3BvcHVwLWltYWdlLWRldGFpbCBkLWdyaWQtMmNvbCc7XHJcbi8vLyAvLy8vLy8vLy8vLy8vLy8gZm9yIHRlc3RcclxucG9wdXBEZXRhaWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1kZXRhaWwtaXRlbVwiPkNvbG9yIDogR3JlZW48L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInBvcHVwLWRldGFpbC1pdGVtXCI+QWdlIDogNiB5ZWFyczwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtZGV0YWlsLWl0ZW1cIj5Qb3dlciA6IDEzMjwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtZGV0YWlsLWl0ZW1cIj5TcGVlZCA6IDQyIEtNL2g8L3A+XHJcbmA7XHJcbnBvcHVwV2luZG93LmFwcGVuZENoaWxkKHBvcHVwRGV0YWlsKTtcclxuXHJcbi8vIHBvcHVwLWNvbW1lbnQtaGVhZGVyXHJcbmNvbnN0IHBvcHVwQ29tbWVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbnBvcHVwQ29tbWVudEhlYWRlci5jbGFzc0xpc3QgPSAncG9wdXAtY29tbWVudC1oZWFkZXInO1xyXG5wb3B1cENvbW1lbnRIZWFkZXIuaW5uZXJIVE1MID0gJ0NvbW1lbnRzICg0KSc7IC8vLyAvLy8vLy8vIGZvciB0ZXN0XHJcbnBvcHVwV2luZG93LmFwcGVuZENoaWxkKHBvcHVwQ29tbWVudEhlYWRlcik7XHJcblxyXG4vLyBwb3B1cC1lbmdhZ2Ugc2VjdGlvblxyXG5jb25zdCBlbmdhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZW5nYWdlLmNsYXNzTGlzdCA9ICdkLWdyaWQtMmNvbCc7XHJcbnBvcHVwV2luZG93LmFwcGVuZENoaWxkKGVuZ2FnZSk7XHJcblxyXG4vLyBwb3B1cC1jb21tZW50LXJldmlld1xyXG5jb25zdCBwb3B1cENvbW1lbnRSZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxucG9wdXBDb21tZW50UmV2aWV3LmNsYXNzTGlzdCA9ICdwb3B1cC1jb21tZW50LXJldmlldyc7XHJcbmVuZ2FnZS5hcHBlbmRDaGlsZChwb3B1cENvbW1lbnRSZXZpZXcpO1xyXG5cclxuLy8gcG9wdXAtY29tbWVudC1saXN0XHJcbmNvbnN0IHBvcHVwQ29tbWVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5wb3B1cENvbW1lbnRMaXN0LmlkID0gJ3BvcHVwQ29tbWVudExpc3QnO1xyXG5wb3B1cENvbW1lbnRMaXN0LmNsYXNzTGlzdCA9ICdwb3B1cC1jb21tZW50LWxpc3QnO1xyXG5wb3B1cENvbW1lbnRSZXZpZXcuYXBwZW5kQ2hpbGQocG9wdXBDb21tZW50TGlzdCk7XHJcblxyXG4vLyBwb3B1cC1uZXctY29tbWVudFxyXG5jb25zdCBwb3B1cE5ld0NvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxucG9wdXBOZXdDb21tZW50LmNsYXNzTGlzdCA9ICdwb3B1cC1uZXctY29tbWVudCc7XHJcbmVuZ2FnZS5hcHBlbmRDaGlsZChwb3B1cE5ld0NvbW1lbnQpO1xyXG5cclxuLy8gcG9wdXAtY29tbWVudC1pbnB1dCBuYW1lXHJcbmNvbnN0IHBvcHVwQ29tbWVudElucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnBvcHVwQ29tbWVudElucHV0TmFtZS5pZCA9ICdwb3B1cENvbW1lbnRJbnB1dE5hbWUnO1xyXG5wb3B1cENvbW1lbnRJbnB1dE5hbWUuY2xhc3NMaXN0ID0gJ3BvcHVwLWNvbW1lbnQtaW5wdXQnO1xyXG5wb3B1cENvbW1lbnRJbnB1dE5hbWUudHlwZSA9ICd0ZXh0JztcclxucG9wdXBDb21tZW50SW5wdXROYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XHJcbnBvcHVwTmV3Q29tbWVudC5hcHBlbmRDaGlsZChwb3B1cENvbW1lbnRJbnB1dE5hbWUpO1xyXG5cclxuLy8gcG9wdXAtY29tbWVudC1pbnB1dCBjb21tZW50XHJcbmNvbnN0IHBvcHVwQ29tbWVudElucHV0Q29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbnBvcHVwQ29tbWVudElucHV0Q29tbWVudC5pZCA9ICdwb3B1cENvbW1lbnRJbnB1dENvbW1lbnQnO1xyXG5wb3B1cENvbW1lbnRJbnB1dENvbW1lbnQuY2xhc3NMaXN0ID0gJ3BvcHVwLWNvbW1lbnQtaW5wdXQgcG9wdXAtbmV3LWNvbW1lbnQtdGV4dCc7XHJcbnBvcHVwQ29tbWVudElucHV0Q29tbWVudC5jb2xzID0gJzE1JztcclxucG9wdXBDb21tZW50SW5wdXRDb21tZW50LnJvd3MgPSAnNCc7XHJcbnBvcHVwQ29tbWVudElucHV0Q29tbWVudC5wbGFjZWhvbGRlciA9ICdDb21tZW50Li4uJztcclxucG9wdXBOZXdDb21tZW50LmFwcGVuZENoaWxkKHBvcHVwQ29tbWVudElucHV0Q29tbWVudCk7XHJcblxyXG4vLyBwb3B1cC1jb21tZW50LWJ0blxyXG5leHBvcnQgY29uc3QgcG9wdXBDb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5wb3B1cENvbW1lbnRCdG4uaWQgPSAncG9wdXBDb21tZW50QnRuJztcclxucG9wdXBDb21tZW50QnRuLmNsYXNzTGlzdCA9ICdwb3B1cC1jb21tZW50LWJ0bic7XHJcbnBvcHVwQ29tbWVudEJ0bi5pbm5lckhUTUwgPSAnQ29tbWVudCc7XHJcbnBvcHVwTmV3Q29tbWVudC5hcHBlbmRDaGlsZChwb3B1cENvbW1lbnRCdG4pO1xyXG5cclxueEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5Jyk7XHJcbiAgcG9wdXBDb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcclxufSk7XHJcblxyXG5sZXQgY29tbWVudElEID0gMDtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbW1lbnRJRCAoaWQpIHtcclxuY29tbWVudElEID0gaWQ7XHJcbn1cclxuXHJcbi8vLS0gY29tbWVudCBidXR0b24gZXZlbnRsaXN0ZW5lclxyXG4gICAgICAgICAgICBwb3B1cENvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2hlbGxvIElEIDogJytwb2tlbW9uLmlkKTtcclxuICAgICAgICAgICAgICBhZGRDb21tZW50KGNvbW1lbnRJRCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93UG9wdXAobmFtYSwgaW1hZ2UsIGluZm8pIHtcclxuICBwb3B1cEhlYWRlclRleHQuaW5uZXJIVE1MID0gbmFtYTtcclxuICBwb3B1cEltYWdlLnNyYyA9IGltYWdlO1xyXG4gIHBvcHVwRGV0YWlsLmlubmVySFRNTCA9IGluZm87XHJcbn1cclxuXHJcbi8vLyBnZXQgY29tbWVudHNcclxuZXhwb3J0IGNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xyXG4gIGNvbnN0IGludm9sdmVtZW50Q29tbWVudEFQSSA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy92MVFNOXE3bzVpWWNPTUUxczJrMi9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWA7XHJcbiAgYXdhaXQgZmV0Y2goaW52b2x2ZW1lbnRDb21tZW50QVBJKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKChqc29uKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhqc29uKTtcclxuICAgIGlmIChqc29uLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBvcHVwQ29tbWVudEhlYWRlci5pbm5lckhUTUwgPSAnQ29tbWVudHMgKDApJztcclxuICAgICAgcG9wdXBDb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBvcHVwQ29tbWVudEhlYWRlci5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7anNvbi5sZW5ndGh9KWA7XHJcbiAgICAgIHBvcHVwQ29tbWVudExpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIGpzb24uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIG5ld0NvbW1lbnQuY2xhc3NMaXN0ID0gJ3BvcHVwLWNvbW1lbnQtaXRlbSc7XHJcbiAgICAgICAgbmV3Q29tbWVudC5pbm5lckhUTUwgPSBgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9wdXAtY29tbWVudC1hdXRob3JcIj4ke2VsZW1lbnQudXNlcm5hbWV9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9wdXAtY29tbWVudC10ZXh0XCI+JHtlbGVtZW50LmNvbW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwb3B1cC1jb21tZW50LWRhdGVcIj4ke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX08L3A+YDtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKG5ld0NvbW1lbnQpO1xyXG4gICAgICAgIHBvcHVwQ29tbWVudExpc3QuYXBwZW5kQ2hpbGQobmV3Q29tbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLy8gLyBhZGQgbmV3IGNvbW1lbnRcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoaXRlbUlkKSA9PiB7XHJcbiAgY29uc3QgaW52b2x2ZW1lbnRDb21tZW50QVBJID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3YxUU05cTdvNWlZY09NRTFzMmsyL2NvbW1lbnRzJztcclxuICBjb25zdCBpZCA9IGl0ZW1JZDtcclxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQ29tbWVudElucHV0TmFtZScpLnZhbHVlO1xyXG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb21tZW50SW5wdXRDb21tZW50JykudmFsdWU7XHJcbiAgaWYgKG5hbWUgPT09ICcnIHx8IGNvbW1lbnQgPT09ICcnKSByZXR1cm47XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKG5hbWUrXCIgOiBcIitjb21tZW50KyBgW2FkZGVkIHRvIElEIDogJHtpdGVtSWR9XWApO1xyXG5cclxuICBhd2FpdCBmZXRjaChpbnZvbHZlbWVudENvbW1lbnRBUEksIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpdGVtX2lkOiBpZCxcclxuICAgICAgdXNlcm5hbWU6IG5hbWUsXHJcbiAgICAgIGNvbW1lbnQsXHJcbiAgICB9KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgIH0sXHJcbiAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgIGdldENvbW1lbnRzKGl0ZW1JZCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBDb21tZW50SW5wdXROYW1lJykudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cENvbW1lbnRJbnB1dENvbW1lbnQnKS52YWx1ZSA9ICcnO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9KS5jYXRjaCgoZSkgPT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH0pO1xyXG59O1xyXG4vLy0tLS0tLS0tLS1cclxuXHJcblxyXG4vLy8vIGdldCBsaWtlc1xyXG4gZXhwb3J0IGNvbnN0IGdldExpa2UgPSBhc3luYyAobGlrZUFQSSkgPT4ge1xyXG4gIGF3YWl0IGZldGNoKGxpa2VBUEkpLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKGpzb24pID0+IHtcclxuICAgIGNvbnN0IGxpa2VIb2xkZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBlLTInKTtcclxuICAgIGxpa2VIb2xkZXJMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+e1xyXG4gICAgICBjb25zdCBpZCA9IGVsZW1lbnQuaWQ7XHJcbiAgICAgIGNvbnN0IGl0ZW1MaWtlID0ganNvbi5maW5kKGl0ZW0gPT4gaXRlbS5pdGVtX2lkID09IGlkKTtcclxuICAgICAgaWYgKGl0ZW1MaWtlICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJIVE1MID0gaXRlbUxpa2UubGlrZXM7XHJcbiAgICAgIH0gXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8vLyBhZGQgTGlrZVxyXG5leHBvcnQgIGNvbnN0IGFkZExpa2UgPSBhc3luYyAobGlrZUFQSSxpZCkgPT4ge1xyXG4gICAgYXdhaXQgZmV0Y2gobGlrZUFQSSx7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgaXRlbV9pZDogaWRcclxuICAgIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgfSxcclxuICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3lvdSBsaWtlZCBJRCA6ICcraWQpO1xyXG4gICAgZ2V0TGlrZShsaWtlQVBJKTtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfSkuY2F0Y2goKGUpID0+IHtyZXR1cm59KTtcclxuICB9O1xyXG5cclxuICBcclxuICAgXHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnO1xuaW1wb3J0IHsgZ2V0UG9rZW1vbkxpc3QgfSBmcm9tICcuL2Rpc3BsYXlwb2tlbW9uaXRlbXMuanMnO1xuaW1wb3J0IHtnZXRMaWtlfSBmcm9tICcuL3BvcHVwLmpzJztcblxuY29uc3QgbXlMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TG9nbycpO1xuY29uc3QgbGlrZUFQSSA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9vaGVZaWs5d2Q4c0xTd1pkQUoxUC9saWtlc2A7XG5cblxuLy8gQWRkIExvZ28gSW1hZ2UgLy9cbmxldCBpbWFnZUh0bWwgPSAnJztcbmltYWdlSHRtbCArPSBgXG48aW1nIHNyYz1cIiR7bG9nb31cIiBhbHQ9XCJsb2dvXCI+YDtcbm15TG9nby5pbm5lckhUTUwgPSBpbWFnZUh0bWw7XG5cbi8vIGZldGNocG9rZW1vbnMoKTtcblxuZ2V0UG9rZW1vbkxpc3QoKTtcbmdldExpa2UobGlrZUFQSSk7XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==