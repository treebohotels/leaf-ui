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

var Divider = (0, _styledComponents2.default)(function (_ref) {
  var color = _ref.color,
      type = _ref.type,
      props = (0, _objectWithoutProperties3.default)(_ref, ['color', 'type']);
  return _react2.default.createElement('hr', props);
}).withConfig({
  displayName: 'Divider'
})(['border-width:1px 0 0;border-color:', ';border-style:', ';background:transparent;margin:0;'], function (props) {
  return props.theme.color[props.color];
}, function (props) {
  return props.type;
});

Divider.propTypes = {
  color: _propTypes2.default.oneOf(Object.keys(_theme2.default.color)),
  type: _propTypes2.default.oneOf(['solid', 'dashed'])
};

Divider.defaultProps = {
  color: 'greyLighter',
  type: 'solid'
};

exports.default = Divider;