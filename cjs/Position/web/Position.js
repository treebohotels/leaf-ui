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

var Position = (0, _styledComponents2.default)(function (_ref) {
  var position = _ref.position,
      top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['position', 'top', 'right', 'bottom', 'left', 'children']);
  return _react2.default.cloneElement(children, props);
}).withConfig({
  displayName: 'Position'
})(['position:', ';top:', ';right:', ';bottom:', ';left:', ';z-index:', ';'], function (props) {
  return props.position ? props.position + ' !important;' : '';
}, function (props) {
  return props.top != null ? props.theme.px(props.top) + ' !important;' : '';
}, function (props) {
  return props.right != null ? props.theme.px(props.right) + ' !important;' : '';
}, function (props) {
  return props.bottom != null ? props.theme.px(props.bottom) + ' !important;' : '';
}, function (props) {
  return props.left != null ? props.theme.px(props.left) + ' !important;' : '';
}, function (props) {
  return props.zIndex != null ? props.zIndex + ' !important;' : '';
});

Position.propTypes = {
  position: _propTypes2.default.oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky']),
  top: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  right: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  bottom: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  left: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  zIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

exports.default = Position;