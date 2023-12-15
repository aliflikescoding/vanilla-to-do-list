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

/***/ "./src/_dom.js":
/*!*********************!*\
  !*** ./src/_dom.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Dom = (() => {\n  const showForm = (form) => {\n    if (form.classList.contains(\"show\")) {\n      form.classList.remove(\"show\");\n    }\n  };\n\n  const cancel = (form, input) => {\n    form.classList.add(\"show\");\n    input.value = \"\";\n  };\n\n  const resetContainer = (container) => {\n    while (container.firstChild) {\n      container.removeChild(container.firstChild);\n    }\n  };\n\n  return {\n    showForm: showForm,\n    cancel: cancel,\n    resetContainer: resetContainer\n  }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);\n\n//# sourceURL=webpack://to_do_list/./src/_dom.js?");

/***/ }),

/***/ "./src/_project.js":
/*!*************************!*\
  !*** ./src/_project.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Project(name) {\n  this.name = name;\n  this.tasks = [];\n  this.selected = false;\n}\n\nProject.prototype.getName = function () {\n  return this.name;  \n};\n\nProject.prototype.changeName = function(newName) {\n  return this.name = newName;\n}\n\nProject.prototype.getTasks = function () {\n  return this.tasks;\n}\n\nProject.prototype.addItem = function (item) {\n  this.tasks.push(item);\n}\n\nProject.prototype.getSelect = function() {\n  return this.selected;\n}\n\nProject.prototype.select = function() {\n  if (this.selected == false) {\n    this.selected = true;\n  } else {\n    this.selected = false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://to_do_list/./src/_project.js?");

/***/ }),

/***/ "./src/_task.js":
/*!**********************!*\
  !*** ./src/_task.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Task(nameNoSpace, name) {\n  this.nameNoSpace = nameNoSpace;\n  this.name = name;\n  this.date = \"\";\n  this.done = false;\n}\n\nTask.prototype.getNameNoSpace = function () {\n  return this.name;\n};\n\nTask.prototype.getName = function () {\n  return this.name;\n};\n\nTask.prototype.getDate = function () {\n  return this.date;\n};\n\nTask.prototype.changeStatus = function () {\n  if (this.done == false) {\n    this.done = true;\n  } else {\n    this.done = false;\n  }\n};\n\nTask.prototype.changeName = function (newName) {\n  return (this.name = newName);\n};\n\nTask.prototype.changeDate = function (newDate) {\n  return (this.date = newDate);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://to_do_list/./src/_task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_task */ \"./src/_task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_project */ \"./src/_project.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_dom */ \"./src/_dom.js\");\n\n\n\n\nconst projects = [new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Default\")];\nconst taskButton = document.querySelector(\"#taskButton\");\nconst taskForm = document.querySelector(\"#taskForm\");\nconst taskFormCancel = document.querySelector(\"#taskFormCancel\");\nconst taskFormAdd = document.querySelector(\"#taskFormAdd\");\nconst taskContainer = document.querySelector(\"#taskContainer\");\nconst projectForm = document.querySelector(\"#projectForm\");\nconst projectButton = document.querySelector(\"#projectButton\");\nconst projectFormAdd = document.querySelector(\"#projectFormAdd\");\nconst projectFormCancel = document.querySelector(\"#projectFormCancel\");\nconst projectInput = document.querySelector(\"#projectInput\");\nconst projectContainer = document.querySelector(\"#projectContainer\");\nconst allTask = document.querySelector(\"#allTask\");\nconst today = document.querySelector(\"#today\");\nconst nextSevenDays = document.querySelector(\"#nextSevenDays\");\n\nconst findTask = (idName) => {\n  const found = projects.find((project) => project.getSelect() == true);\n  const task = found.getTasks().find((task) => task.getNameNoSpace() == idName);\n\n  return task;\n};\n\nconst createProjectDomElement = (idName, name) => {\n  let projectCard = document.createElement(\"div\");\n  projectCard.classList.add(\"project-card\");\n  let h1 = document.createElement(\"h1\");\n  h1.classList.add(\"project\");\n  h1.textContent = name;\n  h1.setAttribute(\"id\", idName);\n  h1.addEventListener(\"click\", () => {\n    const id = h1.id;\n    const found = projects.find((project) => project.getName() == id);\n    const found_2 = projects.find((project) => project.getSelect() == true);\n    if (found_2) {\n      found_2.select();\n    }\n    found.select();\n    loadProject(found);\n  });\n  let projectIcon = document.createElement(\"i\");\n  projectIcon.textContent = \"II\";\n  projectIcon.addEventListener(\"click\", () => {\n    let projectNum;\n    projects.forEach((project, index) => {\n      if (project.getName() == idName) {\n        projectNum = index;\n      }\n    });\n    projects.splice(projectNum, 1);\n    console.log(projects);\n    projectCard.remove();\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetContainer(taskContainer);\n    if (taskButton.classList.contains(\"show\") == false) {\n      taskButton.classList.add(\"show\");\n    }\n  });\n\n  projectCard.appendChild(h1);\n  projectCard.appendChild(projectIcon);\n\n  return projectCard;\n};\nprojectContainer.appendChild(createProjectDomElement(\"Default\", \"Default\"));\n\nconst createTaskDomElement = (idName, name, date) => {\n  const taskCard = document.createElement(\"div\");\n  const taskContent = document.createElement(\"div\");\n  const taskContent2 = document.createElement(\"div\");\n  const taskButton = document.createElement(\"input\");\n  const taskLabel = document.createElement(\"label\");\n  const taskDate = document.createElement(\"input\");\n  const taskIcon = document.createElement(\"i\");\n\n  taskCard.classList.add(\"task-card\");\n  taskCard.id = `${idName}`;\n\n  taskButton.type = \"button\";\n\n  taskLabel.htmlFor = `${idName}`;\n  taskLabel.textContent = `${name}`;\n\n  taskDate.type = \"date\";\n  if (date != \"\") {\n    taskDate.value = date;\n  }\n  taskDate.id = `date-${idName}`;\n\n  taskIcon.textContent = \"II\";\n\n  //events\n\n  taskDate.addEventListener(\"change\", () => {\n    const newDate = taskDate.value;\n    const task = findTask(idName);\n    task.changeDate(newDate);\n    console.log(task);\n  });\n\n  taskButton.addEventListener(\"click\", () => {\n    const task = findTask(idName);\n    task.changeStatus();\n    console.log(task);\n  });\n\n  taskIcon.addEventListener(\"click\", () => {\n    const tasks = projects\n      .find((project) => project.getSelect() == true)\n      .getTasks();\n    let taskNum;\n    tasks.forEach((task, index) => {\n      if (task.getNameNoSpace() == idName) {\n        taskNum = index;\n      }\n    });\n    tasks.splice(taskNum, 1);\n    taskCard.remove();\n  });\n\n  // Structure elements\n  taskContent.appendChild(taskButton);\n  taskContent.appendChild(taskLabel);\n  taskContent2.appendChild(taskDate);\n  taskContent2.appendChild(taskIcon);\n\n  taskCard.appendChild(taskContent);\n  taskCard.appendChild(taskContent2);\n\n  return taskCard;\n};\n\nconst loadProject = (project) => {\n  loadTasks(project, taskContainer);\n\n  if (taskButton.classList.contains(\"show\")) {\n    taskButton.classList.remove(\"show\");\n  }\n};\nconst loadTasks = (project, container) => {\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetContainer(container);\n\n  const tasks = project.getTasks();\n  tasks.forEach((task) => {\n    container.appendChild(\n      createTaskDomElement(\n        task.getNameNoSpace(),\n        task.getName(),\n        task.getDate()\n      )\n    );\n  });\n};\n\nprojectButton.addEventListener(\"click\", () => {\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showForm(projectForm);\n});\ntaskButton.addEventListener(\"click\", () => {\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showForm(taskForm);\n});\nprojectFormCancel.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cancel(projectForm, projectInput);\n});\ntaskFormCancel.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cancel(taskForm, taskInput);\n});\n\nprojectFormAdd.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n\n  const nameNoSpace = projectInput.value.replace(/\\s/g, \"-\");\n  const name = projectInput.value;\n  const domElm = createProjectDomElement(nameNoSpace, name);\n\n  projects.push(new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](nameNoSpace));\n  projectContainer.appendChild(domElm);\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cancel(projectForm, projectInput);\n});\ntaskFormAdd.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  const found = projects.find((project) => project.getSelect() == true);\n\n  const nameNoSpace = taskInput.value.replace(/\\s/g, \"-\");\n  const name = taskInput.value;\n\n  found.addItem(new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nameNoSpace, name));\n\n  loadTasks(found, taskContainer);\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cancel(taskForm, taskInput);\n});\n\nallTask.addEventListener(\"click\", () => {\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetContainer(taskContainer);\n  if (taskButton.classList.contains(\"show\") == false) {\n    taskButton.classList.add(\"show\");\n  }\n\n  projects.forEach((project) => {\n    project.getTasks().forEach((task) => {\n      taskContainer.appendChild(\n        createTaskDomElement(\n          task.getNameNoSpace(),\n          task.getName(),\n          task.getDate()\n        )\n      );\n    });\n  });\n});\ntoday.addEventListener(\"click\", () => {\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetContainer(taskContainer);\n  if (taskButton.classList.contains(\"show\") == false) {\n    taskButton.classList.add(\"show\");\n  }\n\n  const today = new Date();\n  const year = today.getFullYear();\n  const month = String(today.getMonth() + 1).padStart(2, \"0\");\n  const day = String(today.getDate()).padStart(2, \"0\");\n  const formattedDate = `${year}-${month}-${day}`;\n  console.log(formattedDate);\n  projects.forEach((project) => {\n    project.getTasks().forEach((task) => {\n      if (task.getDate() == formattedDate) {\n        taskContainer.appendChild(\n          createTaskDomElement(\n            task.getNameNoSpace(),\n            task.getName(),\n            task.getDate()\n          )\n        );\n      }\n    });\n  });\n});\nnextSevenDays.addEventListener(\"click\", () => {\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetContainer(taskContainer);\n  if (taskButton.classList.contains(\"show\") == false) {\n    taskButton.classList.add(\"show\");\n  }\n\n  const today = new Date();\n  const day = today.getDate();\n  projects.forEach((project) => {\n    project.getTasks().forEach((task) => {\n      const dateString = `${task.getDate()}`;\n      const dayString = dateString.split(\"-\")[2];\n      const dayInt = parseInt(dayString, 10);\n      if (dayInt <= day + 6) {\n        taskContainer.appendChild(\n          createTaskDomElement(\n            task.getNameNoSpace(),\n            task.getName(),\n            task.getDate()\n          )\n        );\n      }\n    });\n  });\n});\n\n\n//# sourceURL=webpack://to_do_list/./src/index.js?");

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