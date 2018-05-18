'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = _styledComponents2.default.label.withConfig({
  displayName: 'Label'
})(['display:flex;cursor:pointer;']);

exports.default = Label;