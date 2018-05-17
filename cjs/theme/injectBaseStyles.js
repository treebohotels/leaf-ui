'use strict';

exports.__esModule = true;

var _taggedTemplateLiteralLoose2 = require('babel-runtime/helpers/taggedTemplateLiteralLoose');

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(['\n    html {\n      box-sizing: border-box;\n    }\n\n    body {\n      background: ', ';\n      color: ', ';\n      font-size: ', ';\n      font-weight: ', ';\n      font-family: ', ', system-ui, sans-serif;\n      margin: 0;\n    }\n\n    *,\n    *::after,\n    *::before {\n      line-height: 1.2;\n      box-sizing: inherit;\n    }\n  '], ['\n    html {\n      box-sizing: border-box;\n    }\n\n    body {\n      background: ', ';\n      color: ', ';\n      font-size: ', ';\n      font-weight: ', ';\n      font-family: ', ', system-ui, sans-serif;\n      margin: 0;\n    }\n\n    *,\n    *::after,\n    *::before {\n      line-height: 1.2;\n      box-sizing: inherit;\n    }\n  ']); /* eslint-disable no-unused-expressions */


var _styledComponents = require('styled-components');

var _injectIconStyles = require('../Icon/web/injectIconStyles');

var _injectIconStyles2 = _interopRequireDefault(_injectIconStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var injectBaseStyles = function injectBaseStyles(theme) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    icons: true
  };

  (0, _styledComponents.injectGlobal)(_templateObject, theme.color.greyLighter, theme.color.greyDarker, theme.fontSize.s, theme.fontWeight.normal, theme.fontFamily.roboto);

  if (options.icons) {
    (0, _injectIconStyles2.default)(theme);
  }
};

exports.default = injectBaseStyles;