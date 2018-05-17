'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _web = require('../../Flex/web');

var _web2 = _interopRequireDefault(_web);

var _web3 = require('../../Text/web');

var _web4 = _interopRequireDefault(_web3);

var _web5 = require('../../Button/web');

var _web6 = _interopRequireDefault(_web5);

var _web7 = require('../../Spacer/web');

var _web8 = _interopRequireDefault(_web7);

var _NotificationContainer = require('./NotificationContainer');

var _NotificationContainer2 = _interopRequireDefault(_NotificationContainer);

var _notificationTypes = require('./notificationTypes');

var _notificationTypes2 = _interopRequireDefault(_notificationTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = function Notification(_ref) {
  var type = _ref.type,
      title = _ref.title,
      content = _ref.content,
      actionProps = _ref.actionProps;
  return _react2.default.createElement(
    _web8.default,
    { padding: [1], margin: [0, 0, 2, 0] },
    _react2.default.createElement(
      _NotificationContainer2.default,
      { type: type },
      _react2.default.createElement(
        _web8.default,
        { padding: [2] },
        _react2.default.createElement(
          _web2.default,
          { justifyContent: 'space-around', alignItems: 'center' },
          _react2.default.createElement(
            _web2.default,
            { flex: '0' },
            _notificationTypes2.default[type].icon
          ),
          _react2.default.createElement(
            _web8.default,
            { margin: [0, 24, 0, 3] },
            _react2.default.createElement(
              _web2.default,
              { flex: '1', flexDirection: 'column' },
              title ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  _web8.default,
                  { margin: [0, 0, 1, 0] },
                  _react2.default.createElement(
                    _web4.default,
                    { size: 'm', weight: 'semibold' },
                    title
                  )
                ),
                _react2.default.createElement(
                  _web4.default,
                  { size: 'xs', color: 'greyDark' },
                  content
                )
              ) : _react2.default.createElement(
                _web4.default,
                null,
                content
              )
            )
          ),
          actionProps ? _react2.default.createElement(_web6.default, (0, _extends3.default)({
            color: _notificationTypes2.default[type].color,
            size: 'small'
          }, actionProps)) : null
        )
      )
    )
  );
};

Notification.propTypes = {
  type: _propTypes2.default.oneOf(Object.keys(_notificationTypes2.default)),
  title: _propTypes2.default.string,
  content: _propTypes2.default.string,
  actionProps: _propTypes2.default.object
};

Notification.defaultProps = {
  type: 'info'
};

exports.default = Notification;