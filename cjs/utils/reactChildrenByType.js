'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (children) {
  var childrenByType = {};
  _react2.default.Children.forEach(children, function (child) {
    if (child) {
      childrenByType[child.type] = child;
    }
  });
  return childrenByType;
};