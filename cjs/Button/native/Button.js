'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var ButtonView = _styledComponents2.default.View.withConfig({
  displayName: 'Button__ButtonView'
})(['align-items:center;justify-content:center;border-width:1px;border-style:solid;', ' ', ' ', ' ', ' ', ''], function (p) {
  return {
    filled: '\n      background-color: ' + p.theme.color[p.color] + ';\n      border-color: ' + p.theme.color[p.color] + ';\n    ',
    outlined: '\n      background-color: transparent;\n      border-color: ' + p.theme.color[p.color] + ';\n    '
  }[p.kind];
}, function (p) {
  return {
    bluntEdged: '\n      border-radius: ' + p.theme.borderRadius + ';\n    ',
    sharpEdged: '\n      border-radius: 0;\n    ',
    capsular: '\n      border-radius: ' + p.theme.px(10) + ';\n    '
  }[p.shape];
}, function (p) {
  return {
    small: '\n      padding: ' + p.theme.px(1) + ';\n    ',
    medium: '\n      padding: ' + p.theme.px(2) + ';\n    ',
    large: '\n      padding: ' + p.theme.px([2, 3]) + ';\n    '
  }[p.size];
}, function (p) {
  return p.block ? 'align-self: stretch;' : 'align-self: flex-start;';
}, function (p) {
  return p.disabled ? 'opacity: 0.5;' : 'opacity: 1';
});

var Button = function Button(_ref) {
  var color = _ref.color,
      kind = _ref.kind,
      shape = _ref.shape,
      size = _ref.size,
      block = _ref.block,
      disabled = _ref.disabled,
      children = _ref.children,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['color', 'kind', 'shape', 'size', 'block', 'disabled', 'children']);
  return _reactNative.Platform.OS === 'android' ? _react2.default.createElement(
    _reactNative.TouchableNativeFeedback,
    (0, _extends3.default)({ disabled: disabled }, restProps),
    _react2.default.createElement(
      ButtonView,
      {
        color: color,
        kind: kind,
        size: size,
        shape: shape,
        block: block,
        disabled: disabled
      },
      children
    )
  ) : _react2.default.createElement(
    _reactNative.TouchableOpacity,
    (0, _extends3.default)({ disabled: disabled }, restProps),
    _react2.default.createElement(
      ButtonView,
      {
        color: color,
        kind: kind,
        size: size,
        shape: shape,
        block: block,
        disabled: disabled
      },
      children
    )
  );
};

Button.propTypes = (0, _extends3.default)({}, _reactNative.TouchableOpacity.propTypes, {
  color: _propTypes2.default.oneOf(Object.keys(_theme2.default.color)),
  kind: _propTypes2.default.oneOf(['filled', 'outlined']),
  shape: _propTypes2.default.oneOf(['bluntEdged', 'sharpEdged', 'capsular', 'circular']),
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  block: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  type: _propTypes2.default.string
});

Button.defaultProps = {
  color: 'primary',
  kind: 'filled',
  size: 'medium',
  shape: 'bluntEdged',
  block: false,
  disabled: false
};

exports.default = Button;