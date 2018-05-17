'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = (0, _styledComponents2.default)(function (_ref) {
  var color = _ref.color,
      vertical = _ref.vertical,
      props = (0, _objectWithoutProperties3.default)(_ref, ['color', 'vertical']);
  return _react2.default.createElement(_reactNative.View, props);
}).withConfig({
  displayName: 'Divider'
})(['border-top-width:', ';border-right-width:', ';border-color:', ';margin:0;'], function (props) {
  return props.vertical ? 0 : 1;
}, function (props) {
  return props.vertical ? 1 : 0;
}, function (props) {
  return props.theme.color[props.color] || '';
});

Divider.propTypes = {
  color: _propTypes2.default.oneOf(Object.keys(_theme2.default.color)),
  vertical: _propTypes2.default.bool
};

Divider.defaultProps = {
  color: 'greyLighter',
  vertical: false
};

exports.default = Divider;