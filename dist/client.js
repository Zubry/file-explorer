'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _gallery = require('./components/gallery.js');

var _gallery2 = _interopRequireDefault(_gallery);

var _sidebar = require('./components/sidebar.js');

var _sidebar2 = _interopRequireDefault(_sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_sidebar2.default, null),
  _react2.default.createElement(_gallery2.default, null)
), document.getElementById('root'));