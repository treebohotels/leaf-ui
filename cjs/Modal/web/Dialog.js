'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _web = require('../../Card/web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dialog = (0, _styledComponents2.default)(_web2.default).attrs({
  elevated: true
}).withConfig({
  displayName: 'Dialog'
})(['display:flex;flex-direction:column;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);min-width:', ';min-height:', ';'], function (props) {
  return props.theme.px(85);
}, function (props) {
  return props.theme.px(60);
});

exports.default = Dialog;