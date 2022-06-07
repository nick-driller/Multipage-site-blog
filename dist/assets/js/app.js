/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/***/ (function() {

eval("const burger = document.getElementById(\"sidebarToggle\");\r\nconst sidebar = document.getElementById(\"sidebar\");\r\nconst page = document.getElementById(\"page\");\r\nconst body = document.body;\r\n\r\nburger.addEventListener(\"click\", (event) => {\r\n  if (body.classList.contains(\"show-sidebar\")) {\r\n    closeSidebar();\r\n  } else {\r\n    showSidebar();\r\n  }\r\n});\r\n\r\nfunction showSidebar() {\r\n  let mask = document.createElement(\"div\");\r\n  mask.classList.add(\"page__mask\");\r\n  mask.addEventListener(\"click\", closeSidebar);\r\n  page.appendChild(mask);\r\n\r\n  body.classList.add(\"show-sidebar\");\r\n}\r\n\r\nfunction closeSidebar() {\r\n  body.classList.remove(\"show-sidebar\");\r\n  document.querySelector(\".page__mask\").remove();\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll(\"[data-modal]\");\nconst body = document.body;\nconst modalClose = document.querySelectorAll(\".modal__close\");\nconst modal = document.querySelectorAll(\".modal\");\n\nmodalBtn.forEach((item) => {\n  item.addEventListener(\"click\", (event) => {\n    let $this = event.currentTarget;\n    let modalId = $this.getAttribute(\"data-modal\");\n    let modal = document.getElementById(modalId);\n    let modalContent = modal.querySelector(\".modal__content\");\n\n    modalContent.addEventListener(\"click\", (event) => {\n      event.stopPropagation();\n    });\n\n    modal.classList.add(\"show\");\n    body.classList.add(\"no-scroll\");\n\n    setTimeout(function () {\n      modalContent.style.transform = \"none\";\n      modalContent.style.opacity = \"1\";\n    }, 1);\n  });\n});\n\nmodalClose.forEach((item) => {\n  item.addEventListener(\"click\", (event) => {\n    let currentModal = event.currentTarget.closest(\".modal\");\n\n    closeModal(currentModal);\n  });\n});\n\nmodal.forEach((item) => {\n  item.addEventListener(\"click\", (event) => {\n    let currentModal = event.target.closest(\".modal\");\n\n    closeModal(currentModal);\n  });\n});\n\nfunction closeModal(currentModal) {\n  let modalContent = currentModal.querySelector(\".modal__content\");\n  modalContent.removeAttribute(\"style\");\n\n  setTimeout(() => {\n    currentModal.classList.remove(\"show\");\n    body.classList.remove(\"no-scroll\");\n  }, 200);\n}\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/textArea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textArea.js ***!
  \***********************************/
/***/ (function() {

eval("const textArea = document.querySelectorAll(\"[data-autoresize]\");\r\n\r\ntextArea.forEach((item) => {\r\n  let textAreaH = item.offsetHeight;\r\n\r\n  item.addEventListener(\"input\", (event) => {\r\n    let $this = event.target;\r\n\r\n    $this.style.height = textAreaH + \"px\";\r\n    $this.style.height = $this.scrollHeight + \"px\";\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/textArea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/mobileNav.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/textArea.js"]();
/******/ 	
/******/ })()
;