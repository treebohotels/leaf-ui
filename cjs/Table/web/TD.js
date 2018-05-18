'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TD = _styledComponents2.default.td.withConfig({
  displayName: 'TD'
})(['padding:', ';color:', ';text-align:', ';'], function (props) {
  return props.theme.px(2);
}, function (props) {
  return props.theme.color.greyDark;
}, function (props) {
  return props.textAlign ? props.textAlign : '';
});

TD.propTypes = {
  textAlign: _propTypes2.default.oneOf(['left', 'center', 'right', 'justify'])
};

TD.defaultProps = {
  textAlign: 'left'
};

exports.default = TD;