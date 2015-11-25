MainNamespace =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MainClass = undefined;
	
	var _classes = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainClass = exports.MainClass = (function () {
	  function MainClass() {
	    _classCallCheck(this, MainClass);
	
	    console.log('MainClass instantiation.');
	  }
	
	  _createClass(MainClass, [{
	    key: 'doStuff',
	    value: function doStuff() {
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? { one: 1, two: 2, three: 3 } : arguments[0];
	
	      var one = _ref.one;
	      var two = _ref.two;
	      var three = _ref.three;
	
	      console.log('MainClass::doStuff invoked with args', { one: one }, { two: two }, { three: three });
	      var opts = { one: one, two: two, three: three };
	      var myInhClass = new _classes.InheritedClass(opts);
	      myInhClass.doStuff(opts);
	    }
	  }]);
	
	  return MainClass;
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MasterClass = exports.MasterClass = (function () {
	  function MasterClass() {
	    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, MasterClass);
	
	    console.log('MasterClass instantiation.', opts);
	  }
	
	  _createClass(MasterClass, [{
	    key: 'doStuff',
	    value: function doStuff() {
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? { one: 1, two: 2, three: 3 } : arguments[0];
	
	      var one = _ref.one;
	      var two = _ref.two;
	      var three = _ref.three;
	
	      console.log('MasterClass::doStuff invoked with args', { one: one }, { two: two }, { three: three });
	    }
	  }]);
	
	  return MasterClass;
	})();
	
	var InheritedClass = exports.InheritedClass = (function (_MasterClass) {
	  _inherits(InheritedClass, _MasterClass);
	
	  function InheritedClass() {
	    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, InheritedClass);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InheritedClass).call(this, opts));
	
	    console.log('InheritedClass instantiation.', opts);
	    return _this;
	  }
	
	  _createClass(InheritedClass, [{
	    key: 'doStuff',
	    value: function doStuff() {
	      var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? { one: 'one', two: 'two' } : arguments[0];
	
	      var one = _ref2.one;
	      var two = _ref2.two;
	
	      console.log('InheritedClass::doStuff invoked with args', { one: one }, { two: two });
	      _get(Object.getPrototypeOf(InheritedClass.prototype), 'doStuff', this).call(this, { one: one, two: two });
	    }
	  }]);
	
	  return InheritedClass;
	})(MasterClass);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map