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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = (0, _styledComponents2.default)(function (_ref) {
  var alignContent = _ref.alignContent,
      alignItems = _ref.alignItems,
      alignSelf = _ref.alignSelf,
      display = _ref.display,
      flex = _ref.flex,
      flexBasis = _ref.flexBasis,
      flexDirection = _ref.flexDirection,
      flexGrow = _ref.flexGrow,
      flexShrink = _ref.flexShrink,
      flexWrap = _ref.flexWrap,
      justifyContent = _ref.justifyContent,
      order = _ref.order,
      props = (0, _objectWithoutProperties3.default)(_ref, ['alignContent', 'alignItems', 'alignSelf', 'display', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'justifyContent', 'order']);
  return _react2.default.createElement(_reactNative.View, props);
}).withConfig({
  displayName: 'Flex'
})(['', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';', ';'], function (props) {
  return props.alignContent ? 'align-content: ' + props.alignContent + ';' : '';
}, function (props) {
  return props.alignItems ? 'align-items: ' + props.alignItems + ';' : '';
}, function (props) {
  return props.alignSelf ? 'align-self: ' + props.alignSelf + ';' : '';
}, function (props) {
  return props.display ? 'display: ' + props.display + ';' : '';
}, function (props) {
  return props.flex ? 'flex: ' + props.flex + ';' : '';
}, function (props) {
  return props.flexBasis ? 'flex-basis: ' + props.flexBasis + ';' : '';
}, function (props) {
  return props.flexDirection ? 'flex-direction: ' + props.flexDirection + ';' : '';
}, function (props) {
  return props.flexGrow ? 'flex-grow: ' + props.flexGrow + ';' : '';
}, function (props) {
  return props.flexShrink ? 'flex-shrink: ' + props.flexShrink + ';' : '';
}, function (props) {
  return props.flexWrap ? 'flex-wrap: ' + props.flexWrap + ';' : '';
}, function (props) {
  return props.justifyContent ? 'justify-content: ' + props.justifyContent + ';' : '';
}, function (props) {
  return props.order ? 'order: ' + props.order + ';' : '';
});

Flex.propTypes = {
  alignContent: _propTypes2.default.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),
  alignItems: _propTypes2.default.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: _propTypes2.default.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  display: _propTypes2.default.oneOf(['flex', 'none']),
  flex: _propTypes2.default.number,
  flexBasis: _propTypes2.default.string,
  flexDirection: _propTypes2.default.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: _propTypes2.default.number,
  flexShrink: _propTypes2.default.number,
  flexWrap: _propTypes2.default.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  justifyContent: _propTypes2.default.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  order: _propTypes2.default.number
};

exports.default = Flex;