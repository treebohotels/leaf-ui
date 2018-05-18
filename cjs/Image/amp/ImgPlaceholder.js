'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImgPlaceholder = _styledComponents2.default.div.attrs({
  placeholder: ''
}).withConfig({
  displayName: 'ImgPlaceholder'
})(['background-color:', ';'], function (props) {
  return props.theme.color.translucent;
});

exports.default = ImgPlaceholder;