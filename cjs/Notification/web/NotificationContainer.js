'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _notificationTypes = require('./notificationTypes');

var _notificationTypes2 = _interopRequireDefault(_notificationTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationContainer = _styledComponents2.default.div.withConfig({
  displayName: 'NotificationContainer'
})(['background:', ';border-top:2px solid ', ';'], function (props) {
  return props.type ? props.theme.color[_notificationTypes2.default[props.type].color + 'Lighter'] : '';
}, function (props) {
  return props.type ? props.theme.color[_notificationTypes2.default[props.type].color] : '';
});

exports.default = NotificationContainer;