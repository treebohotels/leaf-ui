'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TR = _styledComponents2.default.tr.withConfig({
  displayName: 'TR'
})(['border-bottom:1px solid ', ';&:hover{background-color:', ';}'], function (props) {
  return props.theme.color.greyLight;
}, function (props) {
  return props.theme.color.translucent;
});

exports.default = TR;