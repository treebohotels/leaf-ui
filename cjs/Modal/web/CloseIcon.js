'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _web = require('../../Icon/web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseIcon = (0, _styledComponents2.default)(_web2.default).attrs({
  color: 'white',
  name: 'close'
}).withConfig({
  displayName: 'CloseIcon'
})(['position:absolute;top:0;right:', ';'], function (props) {
  return props.theme.px(-4);
});

exports.default = CloseIcon;