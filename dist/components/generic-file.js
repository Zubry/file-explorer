'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fs = require('fs');

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericFile = function (_React$Component) {
  _inherits(GenericFile, _React$Component);

  function GenericFile(props) {
    _classCallCheck(this, GenericFile);

    var _this = _possibleConstructorReturn(this, (GenericFile.__proto__ || Object.getPrototypeOf(GenericFile)).call(this, props));

    _this.fullPath = (0, _path.resolve)(_this.props.path, _this.props.filename);
    return _this;
  }

  _createClass(GenericFile, [{
    key: 'render',
    value: function render() {
      var url = (0, _path.resolve)(__dirname, '../icons/text.svg');
      return _react2.default.createElement(
        'div',
        { style: {
            fontFamily: 'sans-serif',
            textAlign: 'center',
            margin: '1rem',
            opacity: this.props.filename[0] === '.' ? '0.7' : '1.0',
            cursor: 'pointer'
          } },
        _react2.default.createElement('div', { style: {
            width: '6rem',
            height: '6rem',
            backgroundImage: 'url(' + url + ')',
            backgroundSize: 'cover',
            margin: 'auto'
          } }),
        _react2.default.createElement(
          'div',
          { style: {
              maxWidth: '6rem',
              margin: 'auto',
              wordBreak: 'break-all',
              maxHeight: '3.5em',
              overflowY: 'hidden'
            }, title: this.props.filename },
          this.props.filename
        )
      );
    }
  }]);

  return GenericFile;
}(_react2.default.Component);

exports.default = GenericFile;