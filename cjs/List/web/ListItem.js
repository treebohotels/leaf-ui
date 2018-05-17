'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListItem = _styledComponents2.default.li.withConfig({
  displayName: 'ListItem'
})(['color:', ';cursor:', ';pointer-events:', ';opacity:', ';&:hover,&:focus{background:', ';}'], function (props) {
  return props.disabled ? props.theme.color.greyLight : '';
}, function (props) {
  return props.onClick ? 'pointer' : '';
}, function (props) {
  return props.disabled ? 'none' : '';
}, function (props) {
  return props.disabled ? '0.5' : '';
}, function (props) {
  return props.onClick ? props.theme.color.translucent : '';
});

ListItem.propTypes = {
  onClick: _propTypes2.default.func,
  disabled: _propTypes2.default.bool
};

ListItem.defaultProps = {
  disabled: false
};

exports.default = ListItem;