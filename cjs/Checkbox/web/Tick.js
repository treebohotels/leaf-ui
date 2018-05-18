'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tick = (0, _styledComponents2.default)(function (_ref) {
  var className = _ref.className;
  return _react2.default.createElement(
    'svg',
    {
      className: className,
      fillRule: 'evenodd',
      viewBox: '0 0 12 9'
    },
    _react2.default.createElement('path', { d: 'M4.1 6.1L1.4 3.4 0 4.9 4.1 9l7.6-7.6L10.3 0z' })
  );
}).withConfig({
  displayName: 'Tick'
})(['fill:', ';width:100%;height:100%;padding:0 1px;display:none;'], function (props) {
  return props.theme.color.white;
});

exports.default = Tick;