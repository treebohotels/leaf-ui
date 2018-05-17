'use strict';

exports.__esModule = true;

var _taggedTemplateLiteralLoose2 = require('babel-runtime/helpers/taggedTemplateLiteralLoose');

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(['\n  position: absolute;\n  top: -42px;\n  left: 0;\n  overflow-y: scroll;\n  z-index: 1050;\n  background: ', ';\n  min-width: ', ';\n  max-height: ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n'], ['\n  position: absolute;\n  top: -42px;\n  left: 0;\n  overflow-y: scroll;\n  z-index: 1050;\n  background: ', ';\n  min-width: ', ';\n  max-height: ', ';\n  border-radius: ', ';\n  box-shadow: ', ';\n']);

var _web = require('../../List/web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionList = _web2.default.extend(_templateObject, function (props) {
  return props.theme.color.white;
}, function (props) {
  return props.block ? '100%' : props.theme.px(25);
}, function (props) {
  return props.theme.px(27);
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.theme.boxShadow;
});

exports.default = OptionList;