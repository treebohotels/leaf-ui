'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = _styledComponents2.default.div.withConfig({
  displayName: 'Title'
})(['display:flex;flex:0;white-space:nowrap;align-items:center;justify-content:center;cursor:pointer;padding:', ';border-bottom:2px solid transparent;color:', ';font-weight:', ';border-color:', ';'], function (props) {
  return props.theme.px(2);
}, function (props) {
  return props.isSelected ? '' : props.theme.color.grey;
}, function (props) {
  return props.isSelected ? props.theme.fontWeight.medium : '';
}, function (props) {
  return props.isSelected ? props.theme.color.primary : 'transparent';
});

exports.default = Title;