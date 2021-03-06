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

var _file = require('./file.js');

var _file2 = _interopRequireDefault(_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_React$Component) {
  _inherits(Gallery, _React$Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _this.state = {
      files: [],
      workingDirectory: _this.props.workingDirectory || process.env.HOME
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Gallery, [{
    key: 'handleChange',
    value: function handleChange(nextDirectory) {
      var _this2 = this;

      (0, _fs.readdir)(nextDirectory, function (err, files) {
        _this2.setState({
          files: files,
          workingDirectory: nextDirectory
        });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      (0, _fs.readdir)(this.state.workingDirectory, function (err, files) {
        _this3.setState({
          files: files
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { style: {
            width: "calc(100% - 20rem)",
            minHeight: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "flex-start",
            alignContent: "flex-start",
            margin: "0 auto"
          } },
        this.state.files.map(function (file) {
          return _react2.default.createElement(_file2.default, { filename: file, path: _this4.state.workingDirectory, key: file, onChange: _this4.handleChange });
        })
      );
    }
  }]);

  return Gallery;
}(_react2.default.Component);

exports.default = Gallery;