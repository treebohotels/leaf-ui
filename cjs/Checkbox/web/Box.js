'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = _styledComponents2.default.span.withConfig({
  displayName: 'Box'
})(['display:flex;width:', ';height:', ';margin-right:', ';border-width:1px;border-style:solid;border-radius:', ';'], function (props) {
  return props.theme.px(2);
}, function (props) {
  return props.theme.px(2);
}, function (props) {
  return props.theme.px(1);
}, function (props) {
  return props.theme.borderRadius;
});

exports.default = Box;