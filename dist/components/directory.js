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

var _electron = require('electron');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = _electron.remote.Menu,
    MenuItem = _electron.remote.MenuItem;

var Directory = function (_React$Component) {
  _inherits(Directory, _React$Component);

  function Directory(props) {
    _classCallCheck(this, Directory);

    var _this = _possibleConstructorReturn(this, (Directory.__proto__ || Object.getPrototypeOf(Directory)).call(this, props));

    _this.fullPath = (0, _path.resolve)(_this.props.path, _this.props.filename);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleContextMenu = _this.handleContextMenu.bind(_this);
    return _this;
  }

  _createClass(Directory, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.onChange(this.fullPath);
    }
  }, {
    key: 'handleContextMenu',
    value: function handleContextMenu(e) {
      var _this2 = this;

      e.preventDefault();

      var menu = new Menu();

      [{
        label: 'Copy path',
        click: function click() {
          return _electron.clipboard.writeText(_this2.fullPath);
        }
      }].map(function (item) {
        return new MenuItem(item);
      }).forEach(menu.append);

      menu.popup(_electron.remote.getCurrentWindow());
    }
  }, {
    key: 'render',
    value: function render() {
      var url = (0, _path.resolve)(__dirname, '../icons/folder.svg');
      return _react2.default.createElement(
        'div',
        { style: {
            fontFamily: 'sans-serif',
            textAlign: 'center',
            margin: '1rem',
            opacity: this.props.filename[0] === '.' ? '0.7' : '1.0',
            cursor: 'pointer'
          }, onClick: this.handleClick, onContextMenu: this.handleContextMenu },
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

  return Directory;
}(_react2.default.Component);

exports.default = Directory;