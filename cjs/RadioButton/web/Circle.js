'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Circle = _styledComponents2.default.span.withConfig({
  displayName: 'Circle'
})(['display:flex;align-items:center;justify-content:center;border-radius:50%;width:', ';height:', ';margin-right:', ';'], function (props) {
  return props.theme.px(2);
}, function (props) {
  return props.theme.px(2);
}, function (props) {
  return props.theme.px(1);
});

exports.default = Circle;