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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_project */ \"./src/_project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_task */ \"./src/_task.js\");\n\n\n\nconst Dom = (() => {\n  const showOrHideSideBar = (sideBar) => {\n    if (sideBar.classList.contains(\"show\")) {\n      sideBar.classList.remove(\"show\");\n    } else {\n      sideBar.classList.add(\"show\");\n    }\n  };\n\n  function addTrashIcon() {\n    // Create i element\n    const i = document.createElement(\"i\");\n\n    // Add Bootstrap trash icon classes\n    i.classList.add(\"bi\", \"bi-trash-fill\");\n\n    // Append icon element to DOM\n    return i;\n  }\n\n  const getProperObjectArray = (jsonArray) => {\n    const newArray = [];\n\n    jsonArray.forEach((json) => {\n      const project = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](json.nameNoSpace, json.name);\n      project.selected = json.selected;\n\n      json.tasks.forEach((taskJson) => {\n        const task = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskJson.nameNoSpace, taskJson.name);\n        task.date = taskJson.date;\n        task.done = taskJson.done;\n\n        project.addItem(task);\n      });\n\n      newArray.push(project);\n    });\n\n    return newArray;\n  };\n\n  const showForm = (form) => {\n    if (form.classList.contains(\"show\")) {\n      form.classList.remove(\"show\");\n    }\n  };\n\n  const cancel = (form, input) => {\n    form.classList.add(\"show\");\n    input.value = \"\";\n  };\n\n  const resetContainer = (container) => {\n    while (container.firstChild) {\n      container.removeChild(container.firstChild);\n    }\n  };\n\n  const findTask = (projectArray, idName) => {\n    const found = projectArray.find((project) => project.getSelect() == true);\n    const task = found\n      .getTasks()\n      .find((task) => task.getNameNoSpace() == idName);\n\n    return task;\n  };\n\n  const loadTasks = (project, container) => {\n    Dom.resetContainer(container);\n\n    const tasks = project.getTasks();\n    tasks.forEach((task) => {\n      container.appendChild(\n        Dom.createTaskDomElement(\n          task.getNameNoSpace(),\n          task.getName(),\n          task.getDate(),\n          task.getDone()\n        )\n      );\n    });\n  };\n\n  const loadProject = (project, projectArray) => {\n    loadTasks(project, taskContainer, projectArray);\n\n    if (taskButton.classList.contains(\"show\")) {\n      taskButton.classList.remove(\"show\");\n    }\n  };\n\n  const createTaskDomElement = (idName, name, date, done) => {\n    const taskCard = document.createElement(\"div\");\n    const taskContent = document.createElement(\"div\");\n    const taskContent2 = document.createElement(\"div\");\n    const taskButton = document.createElement(\"input\");\n    const taskLabel = document.createElement(\"label\");\n    const taskDate = document.createElement(\"input\");\n    const taskIcon = document.createElement(\"i\");\n\n    taskCard.classList.add(\"task-card\");\n    taskCard.id = `${idName}`;\n\n    taskButton.type = \"button\";\n    taskButton.classList.add(\"task-button\");\n\n    taskLabel.htmlFor = `${idName}`;\n    taskLabel.textContent = `${name}`;\n\n    taskDate.type = \"date\";\n    if (date != \"\") {\n      taskDate.value = date;\n    }\n    taskDate.id = `date-${idName}`;\n    if (done == true) {\n      if (taskLabel.classList.contains(\"done\") == false) {\n        taskLabel.classList.add(\"done\");\n      } else {\n        taskLabel.classList.remove(\"done\");\n      }\n      if (taskButton.classList.contains(\"done-two\") == false) {\n        taskButton.classList.add(\"done-two\");\n      } else {\n        taskButton.classList.remove(\"done-two\");\n      }\n    }\n\n    const trashIcon = addTrashIcon();\n    trashIcon.classList.add(\"clickable\", \"primary-color\");\n    taskIcon.appendChild(trashIcon);\n\n    //events\n\n    taskDate.addEventListener(\"change\", () => {\n      const projectArray = Dom.getProperObjectArray(\n        JSON.parse(localStorage.getItem(\"projects\"))\n      );\n      const newDate = taskDate.value;\n      const task = findTask(projectArray, idName);\n      task.changeDate(newDate);\n      localStorage.setItem(\"projects\", JSON.stringify(projectArray));\n    });\n\n    taskButton.addEventListener(\"click\", () => {\n      const projectArray = Dom.getProperObjectArray(\n        JSON.parse(localStorage.getItem(\"projects\"))\n      );\n      const task = findTask(projectArray, idName);\n      task.changeStatus();\n      console.log(task)\n      if (taskLabel.classList.contains(\"done\") == false) {\n        taskLabel.classList.add(\"done\");\n      } else {\n        taskLabel.classList.remove(\"done\");\n      }\n      if (taskButton.classList.contains(\"done-two\") == false) {\n        taskButton.classList.add(\"done-two\");\n      } else {\n        taskButton.classList.remove(\"done-two\");\n      }\n      localStorage.setItem(\"projects\", JSON.stringify(projectArray));\n    });\n\n    taskIcon.addEventListener(\"click\", () => {\n      const projectArray = Dom.getProperObjectArray(\n        JSON.parse(localStorage.getItem(\"projects\"))\n      );\n      const tasks = projectArray\n        .find((project) => project.getSelect() == true)\n        .getTasks();\n      let taskNum;\n      tasks.forEach((task, index) => {\n        if (task.getNameNoSpace() == idName) {\n          taskNum = index;\n        }\n      });\n      tasks.splice(taskNum, 1);\n      taskCard.remove();\n      localStorage.setItem(\"projects\", JSON.stringify(projectArray));\n    });\n\n    // Structure elements\n    taskContent.appendChild(taskButton);\n    taskContent.appendChild(taskLabel);\n    taskContent2.appendChild(taskDate);\n    taskContent2.appendChild(taskIcon);\n\n    taskCard.appendChild(taskContent);\n    taskCard.appendChild(taskContent2);\n\n    return taskCard;\n  };\n\n  const createProjectDomElement = (idName, name) => {\n    let projectCard = document.createElement(\"div\");\n    projectCard.classList.add(\"project-card\");\n    let h1 = document.createElement(\"h1\");\n    h1.classList.add(\"project\");\n    h1.textContent = name;\n    h1.setAttribute(\"id\", idName);\n    h1.addEventListener(\"click\", () => {\n      const projectArray = Dom.getProperObjectArray(\n        JSON.parse(localStorage.getItem(\"projects\"))\n      );\n      const id = h1.id;\n      const found = projectArray.find(\n        (project) => project.getNameNoSpace() == id\n      );\n      const found_2 = projectArray.find(\n        (project) => project.getSelect() == true\n      );\n      if (found_2) {\n        found_2.select();\n      }\n      found.select();\n      localStorage.setItem(\"projects\", JSON.stringify(projectArray));\n      loadProject(found, projectArray);\n    });\n    let projectIcon = document.createElement(\"i\");\n    projectIcon.classList.add(\"clickable\", \"primary-color\");\n    projectIcon.appendChild(addTrashIcon());\n    projectIcon.addEventListener(\"click\", () => {\n      const projectArray = Dom.getProperObjectArray(\n        JSON.parse(localStorage.getItem(\"projects\"))\n      );\n      let projectNum;\n      projectArray.forEach((project, index) => {\n        if (project.getName() == idName) {\n          projectNum = index;\n        }\n      });\n      projectArray.splice(projectNum, 1);\n      projectCard.remove();\n      localStorage.setItem(\"projects\", JSON.stringify(projectArray));\n      Dom.resetContainer(taskContainer);\n      if (taskButton.classList.contains(\"show\") == false) {\n        taskButton.classList.add(\"show\");\n      }\n    });\n\n    projectCard.appendChild(h1);\n    projectCard.appendChild(projectIcon);\n\n    return projectCard;\n  };\n\n  return {\n    showForm: showForm,\n    cancel: cancel,\n    resetContainer: resetContainer,\n    createTaskDomElement: createTaskDomElement,\n    createProjectDomElement: createProjectDomElement,\n    loadTasks: loadTasks,\n    getProperObjectArray: getProperObjectArray,\n    showOrHideSideBar: showOrHideSideBar,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);\n\n\n//# sourceURL=webpack://to_do_list/./src/_dom.js?");

/***/ }),

/***/ "./src/_project.js":
/*!*************************!*\
  !*** ./src/_project.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Project(nameNoSpace, name) {\n  this.nameNoSpace = nameNoSpace;\n  this.name = name;\n  this.tasks = [];\n  this.selected = false;\n}\n\nProject.prototype.getNameNoSpace = function () {\n  return this.nameNoSpace;  \n};\n\nProject.prototype.getName = function () {\n  return this.name;  \n};\n\nProject.prototype.changeName = function(newName) {\n  return this.name = newName;\n}\n\nProject.prototype.getTasks = function () {\n  return this.tasks;\n}\n\nProject.prototype.addItem = function (item) {\n  this.tasks.push(item);\n}\n\nProject.prototype.getSelect = function() {\n  return this.selected;\n}\n\nProject.prototype.select = function() {\n  if (this.selected == false) {\n    this.selected = true;\n  } else {\n    this.selected = false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://to_do_list/./src/_project.js?");

/***/ }),

/***/ "./src/_task.js":
/*!**********************!*\
  !*** ./src/_task.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Task(nameNoSpace, name) {\n  this.nameNoSpace = nameNoSpace;\n  this.name = name;\n  this.date = \"\";\n  this.done = false;\n}\n\nTask.prototype.getNameNoSpace = function () {\n  return this.name;\n};\n\nTask.prototype.getName = function () {\n  return this.name;\n};\n\nTask.prototype.getDate = function () {\n  return this.date;\n};\n\nTask.prototype.getDone = function () {\n  return this.done;\n};\n\nTask.prototype.changeStatus = function () {\n  if (this.done == false) {\n    this.done = true;\n  } else {\n    this.done = false;\n  }\n};\n\nTask.prototype.changeName = function (newName) {\n  return (this.name = newName);\n};\n\nTask.prototype.changeDate = function (newDate) {\n  return (this.date = newDate);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://to_do_list/./src/_task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_task */ \"./src/_task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_project */ \"./src/_project.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_dom */ \"./src/_dom.js\");\n\n\n\n\nconst taskButton = document.querySelector(\"#taskButton\");\nconst taskForm = document.querySelector(\"#taskForm\");\nconst taskFormCancel = document.querySelector(\"#taskFormCancel\");\nconst taskFormAdd = document.querySelector(\"#taskFormAdd\");\nconst taskContainer = document.querySelector(\"#taskContainer\");\nconst projectForm = document.querySelector(\"#projectForm\");\nconst projectButton = document.querySelector(\"#projectButton\");\nconst projectFormAdd = document.querySelector(\"#projectFormAdd\");\nconst projectFormCancel = document.querySelector(\"#projectFormCancel\");\nconst projectInput = document.querySelector(\"#projectInput\");\nconst projectContainer = document.querySelector(\"#projectContainer\");\nconst allTask = document.querySelector(\"#allTask\");\nconst today = document.querySelector(\"#today\");\nconst nextSevenDays = document.querySelector(\"#nextSevenDays\");\nconst sideBar = document.querySelector(\"#sideBar\");\nconst sideBarButton = document.querySelector(\"#sideBarButton\");\n\nif (localStorage.getItem(\"projects\") == null) {\n  localStorage.setItem(\"projects\", JSON.stringify([]));\n}\n\nconst generateRefresh = () => {\n  const projects = _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProperObjectArray(\n    JSON.parse(localStorage.getItem(\"projects\"))\n  );\n\n  if (projects != []) {\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetContainer(projectContainer);\n    \n    projects.forEach((project) => {\n      projectContainer.appendChild(_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createProjectDomElement(project.nameNoSpace, project.name));\n    });\n\n    _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetContainer(taskContainer);\n    if (taskButton.classList.contains(\"show\") == false) {\n      taskButton.classList.add(\"show\");\n    }\n\n    projects.forEach((project) => {\n      project.getTasks().forEach((task) => {\n        taskContainer.appendChild(\n          _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createTaskDomElement(\n            task.getNameNoSpace(),\n            task.getName(),\n            task.getDate(),\n            task.getDone()\n          )\n        );\n      });\n    });\n  }\n};\nwindow.onload = generateRefresh;\nwindow.addEventListener(\"load\", generateRefresh);\n\n\nprojectButton.addEventListener(\"click\", () => {\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showForm(projectForm);\n});\ntaskButton.addEventListener(\"click\", () => {\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showForm(taskForm);\n});\nprojectFormCancel.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cancel(projectForm, projectInput);\n});\ntaskFormCancel.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cancel(taskForm, taskInput);\n});\n\nprojectFormAdd.addEventListener(\"click\", (event) => {\n  const projects = _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProperObjectArray(\n    JSON.parse(localStorage.getItem(\"projects\"))\n  );\n  event.preventDefault();\n\n  const nameNoSpace = projectInput.value.replace(/\\s/g, \"-\");\n  const name = projectInput.value;\n  const domElm = _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createProjectDomElement(nameNoSpace, name);\n\n  projects.push(new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](nameNoSpace, name));\n  projectContainer.appendChild(domElm);\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cancel(projectForm, projectInput);\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n});\ntaskFormAdd.addEventListener(\"click\", (event) => {\n  const projects = _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProperObjectArray(\n    JSON.parse(localStorage.getItem(\"projects\"))\n  );\n  event.preventDefault();\n  const found = projects.find((project) => project.getSelect() == true);\n\n  const nameNoSpace = taskInput.value.replace(/\\s/g, \"-\");\n  const name = taskInput.value;\n\n  found.addItem(new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nameNoSpace, name));\n\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadTasks(found, taskContainer, projects);\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cancel(taskForm, taskInput);\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n});\n\nallTask.addEventListener(\"click\", () => {\n  const projects = _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProperObjectArray(\n    JSON.parse(localStorage.getItem(\"projects\"))\n  );\n\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetContainer(taskContainer);\n  if (taskButton.classList.contains(\"show\") == false) {\n    taskButton.classList.add(\"show\");\n  }\n\n  projects.forEach((project) => {\n    project.getTasks().forEach((task) => {\n      taskContainer.appendChild(\n        _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createTaskDomElement(\n          task.getNameNoSpace(),\n          task.getName(),\n          task.getDate(),\n          task.getDone()\n        )\n      );\n    });\n  });\n});\ntoday.addEventListener(\"click\", () => {\n  const projects = _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProperObjectArray(\n    JSON.parse(localStorage.getItem(\"projects\"))\n  );\n\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetContainer(taskContainer);\n  if (taskButton.classList.contains(\"show\") == false) {\n    taskButton.classList.add(\"show\");\n  }\n\n  const today = new Date();\n  const year = today.getFullYear();\n  const month = String(today.getMonth() + 1).padStart(2, \"0\");\n  const day = String(today.getDate()).padStart(2, \"0\");\n  const formattedDate = `${year}-${month}-${day}`;\n  projects.forEach((project) => {\n    project.getTasks().forEach((task) => {\n      if (task.getDate() == formattedDate) {\n        taskContainer.appendChild(\n          _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createTaskDomElement(\n            task.getNameNoSpace(),\n            task.getName(),\n            task.getDate(),\n            task.getDone()\n          )\n        );\n      }\n    });\n  });\n});\nnextSevenDays.addEventListener(\"click\", () => {\n  const projects = _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getProperObjectArray(\n    JSON.parse(localStorage.getItem(\"projects\"))\n  );\n\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].resetContainer(taskContainer);\n  if (taskButton.classList.contains(\"show\") == false) {\n    taskButton.classList.add(\"show\");\n  }\n\n  const today = new Date();\n  const day = today.getDate();\n  projects.forEach((project) => {\n    project.getTasks().forEach((task) => {\n      const dateString = `${task.getDate()}`;\n      const dayString = dateString.split(\"-\")[2];\n      const dayInt = parseInt(dayString, 10);\n      if (dayInt <= day + 6) {\n        taskContainer.appendChild(\n          _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createTaskDomElement(\n            task.getNameNoSpace(),\n            task.getName(),\n            task.getDate(),\n            task.getDone()\n          )\n        );\n      }\n    });\n  });\n});\nsideBarButton.addEventListener(\"click\", () => {\n  _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showOrHideSideBar(sideBar);\n})\n\n//# sourceURL=webpack://to_do_list/./src/index.js?");

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