'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = _styledComponents2.default.Text.withConfig({
  displayName: 'Text'
})(['', ' ', ' ', ' ', ''], function (p) {
  return p.color ? 'color: ' + p.theme.color[p.color] + ';' : '';
}, function (p) {
  return p.size ? 'font-size: ' + p.theme.fontSize[p.size] + ';' : '';
}, function (p) {
  return p.weight ? 'font-weight: ' + p.theme.fontWeight[p.weight] + ';' : '';
}, function (p) {
  if (p.family) {
    return 'font-family: ' + p.family;
  }
  return 'font-family: ' + p.theme.fontFamily[p.weight];
});

Text.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.string,
  weight: _propTypes2.default.string,
  family: _propTypes2.default.string,
  truncate: _propTypes2.default.bool
};

Text.defaultProps = {
  size: 's',
  weight: 'normal'
};

exports.default = Text;