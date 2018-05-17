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

var Card = (0, _styledComponents2.default)(function (_ref) {
  var color = _ref.color,
      elevated = _ref.elevated,
      props = (0, _objectWithoutProperties3.default)(_ref, ['color', 'elevated']);
  return _react2.default.createElement(_reactNative.View, props);
}).withConfig({
  displayName: 'Card'
})(['background:', ';border-radius:', ';elevation:', ';shadow-offset:', ';shadow-radius:', ';shadow-color:rgba(0,0,0);shadow-opacity:', ';'], function (props) {
  return props.theme.color[props.color];
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.elevated ? 1 : 0;
}, function (props) {
  return props.elevated ? '0px 6px' : '0px 0px';
}, function (props) {
  return props.elevated ? '16px' : '0px';
}, function (props) {
  return props.elevated ? '0.16' : '0';
});

Card.propTypes = {
  color: _propTypes2.default.oneOf(Object.keys(_theme2.default.color)),
  elevated: _propTypes2.default.bool
};

Card.defaultProps = {
  color: 'white',
  elevated: false
};

exports.default = Card;