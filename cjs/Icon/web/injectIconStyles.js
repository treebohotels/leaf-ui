'use strict';

exports.__esModule = true;

var _taggedTemplateLiteralLoose2 = require('babel-runtime/helpers/taggedTemplateLiteralLoose');

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(['\n  @font-face {\n    font-family: \'Material Icons\';\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2) format(\'woff2\');\n  }\n\n  .material-icons {\n    font-family: \'Material Icons\', sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    font-feature-settings: \'liga\';\n    -webkit-font-smoothing: antialiased;\n  }\n'], ['\n  @font-face {\n    font-family: \'Material Icons\';\n    font-style: normal;\n    font-weight: 400;\n    src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2) format(\'woff2\');\n  }\n\n  .material-icons {\n    font-family: \'Material Icons\', sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    font-size: 24px;\n    line-height: 1;\n    letter-spacing: normal;\n    text-transform: none;\n    display: inline-block;\n    white-space: nowrap;\n    word-wrap: normal;\n    direction: ltr;\n    font-feature-settings: \'liga\';\n    -webkit-font-smoothing: antialiased;\n  }\n']);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return (0, _styledComponents.injectGlobal)(_templateObject);
};