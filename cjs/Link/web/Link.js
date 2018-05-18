'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = _styledComponents2.default.a.withConfig({
  displayName: 'Link'
})(['color:', ';text-decoration:none;cursor:pointer;&:hover{color:', ';}&:focus{outline:none;text-decoration:underline;color:', ';}'], function (props) {
  return props.theme.color.blue;
}, function (props) {
  return props.theme.color.blueDark;
}, function (props) {
  return props.theme.color.blueDark;
});

exports.default = Link;