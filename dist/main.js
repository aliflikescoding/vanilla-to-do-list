/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_project.js":
/*!*************************!*\
  !*** ./src/_project.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Project(name) {\n  this.name = name;\n  this.tasks = [];\n}\n\nProject.prototype.getName = function () {\n  return this.name;  \n};\n\nProject.prototype.changeName = function(newName) {\n  return this.name = newName;\n}\n\nProject.prototype.getTasks = function () {\n  return this.tasks;\n}\n\nProject.prototype.addItem = function (item) {\n  this.tasks.push(item);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://to_do_list/./src/_project.js?");

/***/ }),

/***/ "./src/_task.js":
/*!**********************!*\
  !*** ./src/_task.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Task(name, date, project) {\n  this.name = name;\n  this.date = date;\n  this.project = project;\n}\n\nTask.prototype.getName = function () {\n  return this.name;  \n};\n\nTask.prototype.getDate = function () {\n  return this.date;  \n};\n\nTask.prototype.getProject = function () {\n  return this.project;  \n};\n\nTask.prototype.changeName = function(newName) {\n  return this.name = newName;\n}\n\nTask.prototype.changeDate = function(newDate) {\n  return this.date = newDate;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://to_do_list/./src/_task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_task */ \"./src/_task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_project */ \"./src/_project.js\");\n\n\n\nconst projects = [new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Default\")];\nconsole.log(projects);\nprojects.forEach((project) => {\n  console.log(project);\n});\n\nconst projectForm = document.querySelector(\"#projectForm\");\nconst projectButton = document.querySelector(\"#projectButton\");\nconst projectFormAdd = document.querySelector(\"#projectFormAdd\");\nconst projectFormCancel = document.querySelector(\"#projectFormCancel\");\nconst projectInput = document.querySelector(\"#projectInput\");\nconst projectContainer = document.querySelector(\"#projectContainer\");\n\nprojectButton.addEventListener(\"click\", () => {\n  if (projectForm.classList.contains(\"show\")) {\n    projectForm.classList.remove(\"show\");\n  }\n});\n\nprojectFormAdd.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n\n  const name = projectInput.value.replace(/\\s/g, \"-\");\n  let h1 = document.createElement(\"h1\");\n  h1.classList.add(\"project\");\n  h1.textContent = `${projectInput.value}`;\n  h1.setAttribute(\"id\", name);\n\n  projects.push(new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name));\n  projectContainer.appendChild(h1);\n  projectForm.classList.add(\"show\");\n  projectInput.value = \"\";\n});\n\nprojectFormCancel.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  projectForm.classList.add(\"show\");\n  projectInput.value = \"\";\n});\n\n\n//# sourceURL=webpack://to_do_list/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;