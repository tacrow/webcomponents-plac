(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _buttonDef = require('./component/button/button-def.js');

var _buttonDef2 = _interopRequireDefault(_buttonDef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

customElements.define('button-def', _buttonDef2.default);

},{"./component/button/button-def.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonDef = function (_HTMLElement) {
  _inherits(ButtonDef, _HTMLElement);

  _createClass(ButtonDef, null, [{
    key: 'template',
    get: function get() {
      return '\n      <style>\n        button {\n          display: inline-flex;\n          margin: 0.5rem;\n          padding: 1rem;\n          border: none;\n          color: #fff;\n          font-size: 14rem;\n          cursor: pointer;\n        }\n      </style>\n      <button>\n        <slot></slot>\n      </button>\n    ';
    }
  }]);

  function ButtonDef() {
    _classCallCheck(this, ButtonDef);

    return _possibleConstructorReturn(this, (ButtonDef.__proto__ || Object.getPrototypeOf(ButtonDef)).call(this));
  }

  _createClass(ButtonDef, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.attachShadow({
        mode: 'open'
      }).innerHTML = ButtonDef.template;
    }
  }]);

  return ButtonDef;
}(HTMLElement);

exports.default = ButtonDef;
;

},{}]},{},[1]);
