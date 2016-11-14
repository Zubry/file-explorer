'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = function () {
  ReactDOM.render(React.createElement(
    'h1',
    null,
    'Hello, Kartik!'
  ), document.getElementById('root'));
};