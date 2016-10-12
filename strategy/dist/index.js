/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ModalContext = __webpack_require__(1);

	var _ModalContext2 = _interopRequireDefault(_ModalContext);

	var _CanvasOffModal = __webpack_require__(2);

	var _CanvasOffModal2 = _interopRequireDefault(_CanvasOffModal);

	var _PopupModal = __webpack_require__(3);

	var _PopupModal2 = _interopRequireDefault(_PopupModal);

	var _CookiesModal = __webpack_require__(4);

	var _CookiesModal2 = _interopRequireDefault(_CookiesModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canvasOffModal = new _CanvasOffModal2.default();
	var popupModal = new _PopupModal2.default();
	var cookiesModal = new _CookiesModal2.default();

	var modal = new _ModalContext2.default('Contenido del modal');
	modal.setStrategy(canvasOffModal);
	console.log(modal.showModal());

	modal.setStrategy(popupModal);
	console.log(modal.showModal());

	modal.setStrategy(cookiesModal);
	console.log(modal.showModal());

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Modal = function () {
	  // setStrategy
	  function Modal(content) {
	    _classCallCheck(this, Modal);

	    this.content = content;
	  }

	  _createClass(Modal, [{
	    key: "setStrategy",
	    value: function setStrategy(modal) {
	      this.modal = modal;
	    }
	  }, {
	    key: "showModal",
	    value: function showModal() {
	      return this.modal.showModal(this.content);
	    }
	  }]);

	  return Modal;
	}();

	exports.default = Modal;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CanvasOffModal = function () {
	  function CanvasOffModal() {
	    _classCallCheck(this, CanvasOffModal);
	  }

	  _createClass(CanvasOffModal, [{
	    key: "showModal",
	    value: function showModal(content) {
	      return content + " is a canvasOff";
	    }
	  }]);

	  return CanvasOffModal;
	}();

	exports.default = CanvasOffModal;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PopupModal = function () {
	  function PopupModal() {
	    _classCallCheck(this, PopupModal);
	  }

	  _createClass(PopupModal, [{
	    key: "showModal",
	    value: function showModal(content) {
	      return content + " is a PopupModal";
	    }
	  }]);

	  return PopupModal;
	}();

	exports.default = PopupModal;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CookiesModal = function () {
	  function CookiesModal() {
	    _classCallCheck(this, CookiesModal);
	  }

	  _createClass(CookiesModal, [{
	    key: "showModal",
	    value: function showModal(content) {
	      return content + " is a Cookies";
	    }
	  }]);

	  return CookiesModal;
	}();

	exports.default = CookiesModal;

/***/ }
/******/ ]);