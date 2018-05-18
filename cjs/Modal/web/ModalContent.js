'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContent = _styledComponents2.default.div.withConfig({
  displayName: 'ModalContent'
})(['flex:auto;padding:', ';'], function (props) {
  return props.theme.px([3, 5]);
});

exports.default = ModalContent;