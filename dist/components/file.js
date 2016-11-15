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

var _directory = require('./directory.js');

var _directory2 = _interopRequireDefault(_directory);

var _genericFile = require('./generic-file.js');

var _genericFile2 = _interopRequireDefault(_genericFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var File = function (_React$Component) {
  _inherits(File, _React$Component);

  function File(props) {
    _classCallCheck(this, File);

    var _this = _possibleConstructorReturn(this, (File.__proto__ || Object.getPrototypeOf(File)).call(this, props));

    _this.fullPath = (0, _path.resolve)(_this.props.path, _this.props.filename);

    _this.state = {
      isDirectory: false
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(File, [{
    key: 'handleChange',
    value: function handleChange(nextDirectory) {
      this.props.onChange(nextDirectory);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _fs.stat)(this.fullPath, function (err, stats) {
        _this2.setState({
          isDirectory: stats.isDirectory()
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isDirectory) {
        return _react2.default.createElement(_directory2.default, { filename: this.props.filename, path: this.props.path, onChange: this.handleChange });
      } else {
        return _react2.default.createElement(_genericFile2.default, { filename: this.props.filename, path: this.props.path });
      }
    }
  }]);

  return File;
}(_react2.default.Component);

exports.default = File;