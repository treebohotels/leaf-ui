'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _web = require('../../Icon/web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  info: {
    color: 'blue',
    icon: _react2.default.createElement(_web2.default, { name: 'info', color: 'blue' })
  },
  success: {
    color: 'green',
    icon: _react2.default.createElement(_web2.default, { name: 'check_circle', color: 'green' })
  },
  warning: {
    color: 'yellow',
    icon: _react2.default.createElement(_web2.default, { name: 'error', color: 'yellow' })
  },
  danger: {
    color: 'red',
    icon: _react2.default.createElement(_web2.default, { name: 'cancel', color: 'red' })
  }
};