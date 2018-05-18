'use strict';

exports.__esModule = true;

var _taggedTemplateLiteralLoose2 = require('babel-runtime/helpers/taggedTemplateLiteralLoose');

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']);

var _web = require('../../List/web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  backgroundColor: function backgroundColor(props) {
    if (props.isActive) {
      return props.theme.color.translucent;
    } else if (props.isSelected) {
      return props.theme.color.primaryLighter;
    }
    return '';
  }
};

var Option = _web2.default.Item.extend(_templateObject, styles.backgroundColor);

exports.default = Option;