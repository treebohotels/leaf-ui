'use strict';

exports.__esModule = true;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = (0, _styledComponents2.default)(function (_ref) {
  var component = _ref.component,
      color = _ref.color,
      size = _ref.size,
      weight = _ref.weight,
      family = _ref.family,
      align = _ref.align,
      truncate = _ref.truncate,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['component', 'color', 'size', 'weight', 'family', 'align', 'truncate', 'children']);
  return _react2.default.createElement(component, props, children);
}).withConfig({
  displayName: 'Text'
})(['color:', ';font-size:', ';font-weight:', ';font-family:', ';line-height:', ';text-align:', ';overflow:', ';white-space:', ';text-overflow:', ';padding:0;margin:0;'], function (props) {
  return props.color ? props.theme.color[props.color] : '';
}, function (props) {
  return props.size ? props.theme.fontSize[props.size] : '';
}, function (props) {
  return props.weight ? props.theme.fontWeight[props.weight] : '';
}, function (props) {
  return props.family ? props.theme.fontFamily[props.family] : '';
}, function (props) {
  return props.component === 'p' ? '1.5' : '';
}, function (props) {
  return props.align || '';
}, function (props) {
  return props.truncate ? 'hidden' : '';
}, function (props) {
  return props.truncate ? 'nowrap' : '';
}, function (props) {
  return props.truncate ? 'ellipsis' : '';
});

Text.propTypes = {
  component: _propTypes2.default.node,
  color: _propTypes2.default.oneOf(Object.keys(_theme2.default.color)),
  size: _propTypes2.default.oneOf(Object.keys(_theme2.default.fontSize)),
  weight: _propTypes2.default.oneOf(Object.keys(_theme2.default.fontWeight)),
  family: _propTypes2.default.oneOf(Object.keys(_theme2.default.fontFamily)),
  align: _propTypes2.default.oneOf(['left', 'center', 'right', 'justify']),
  truncate: _propTypes2.default.bool
};

Text.defaultProps = {
  component: 'div'
};

exports.default = Text;