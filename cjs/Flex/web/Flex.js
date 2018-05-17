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
      component = _ref.component,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['alignContent', 'alignItems', 'alignSelf', 'display', 'flex', 'flexBasis', 'flexDirection', 'flexGrow', 'flexShrink', 'flexWrap', 'justifyContent', 'order', 'component', 'children']);
  return _react2.default.createElement(component, props, children);
}).withConfig({
  displayName: 'Flex'
})(['align-content:', ';align-self:', ';align-items:', ';display:', ';flex:', ';flex-basis:', ';flex-direction:', ';flex-grow:', ';flex-shrink:', ';flex-wrap:', ';justify-content:', ';order:', ';'], function (props) {
  return props.alignContent ? props.alignContent : '';
}, function (props) {
  return props.alignSelf ? props.alignSelf : '';
}, function (props) {
  return props.alignItems ? props.alignItems : '';
}, function (props) {
  return props.display ? props.display : '';
}, function (props) {
  return props.flex ? props.flex : '';
}, function (props) {
  return props.flexBasis ? props.flexBasis : '';
}, function (props) {
  return props.flexDirection ? props.flexDirection : '';
}, function (props) {
  return props.flexGrow ? props.flexGrow : '';
}, function (props) {
  return props.flexShrink ? props.flexShrink : '';
}, function (props) {
  return props.flexWrap ? props.flexWrap : '';
}, function (props) {
  return props.justifyContent ? props.justifyContent : '';
}, function (props) {
  return props.order ? props.order : '';
});

Flex.propTypes = {
  alignContent: _propTypes2.default.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),
  alignItems: _propTypes2.default.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: _propTypes2.default.oneOf(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  display: _propTypes2.default.oneOf(['flex', 'inline-flex']),
  flex: _propTypes2.default.string,
  flexBasis: _propTypes2.default.string,
  flexDirection: _propTypes2.default.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),
  flexGrow: _propTypes2.default.number,
  flexShrink: _propTypes2.default.number,
  flexWrap: _propTypes2.default.oneOf(['nowrap', 'wrap-reverse', 'wrap']),
  justifyContent: _propTypes2.default.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  order: _propTypes2.default.number,
  component: _propTypes2.default.oneOf(['article', 'aside', 'div', 'figure', 'footer', 'header', 'main', 'nav', 'section'])
};

Flex.defaultProps = {
  component: 'div',
  display: 'flex'
};

exports.default = Flex;