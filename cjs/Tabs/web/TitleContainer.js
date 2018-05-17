'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TitleContainer = _styledComponents2.default.div.withConfig({
  displayName: 'TitleContainer'
})(['display:flex;padding:', ';border-bottom:1px solid ', ';'], function (props) {
  return props.theme.px([0, 3]);
}, function (props) {
  return props.theme.color.greyLight;
});

exports.default = TitleContainer;