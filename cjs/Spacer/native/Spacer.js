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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spacer = (0, _styledComponents2.default)(function (_ref) {
  var margin = _ref.margin,
      padding = _ref.padding,
      minWidth = _ref.minWidth,
      width = _ref.width,
      maxWidth = _ref.maxWidth,
      minHeight = _ref.minHeight,
      height = _ref.height,
      maxHeight = _ref.maxHeight,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['margin', 'padding', 'minWidth', 'width', 'maxWidth', 'minHeight', 'height', 'maxHeight', 'children']);
  return _react2.default.cloneElement(children, props);
}).withConfig({
  displayName: 'Spacer'
})(['', ';', ';', ';', ';', ';', ';', ';', ';'], function (props) {
  return props.margin ? 'margin: ' + props.theme.px(props.margin) : '';
}, function (props) {
  return props.padding ? 'padding: ' + props.theme.px(props.padding) : '';
}, function (props) {
  return props.minWidth != null ? 'min-width: ' + props.theme.px(props.minWidth) : '';
}, function (props) {
  return props.width != null ? 'width: ' + props.theme.px(props.width) : '';
}, function (props) {
  return props.maxWidth != null ? 'max-width: ' + props.theme.px(props.maxWidth) : '';
}, function (props) {
  return props.minHeight != null ? 'min-height: ' + props.theme.px(props.minHeight) : '';
}, function (props) {
  return props.height != null ? 'height: ' + props.theme.px(props.height) : '';
}, function (props) {
  return props.maxHeight != null ? 'max-height: ' + props.theme.px(props.maxHeight) : '';
});

Spacer.propTypes = {
  margin: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])),
  padding: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])),
  minWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  maxWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  minHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  maxHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

exports.default = Spacer;