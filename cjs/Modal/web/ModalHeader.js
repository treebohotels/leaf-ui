'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _web = require('../../Text/web');

var _web2 = _interopRequireDefault(_web);

var _web3 = require('../../Icon/web');

var _web4 = _interopRequireDefault(_web3);

var _web5 = require('../../Spacer/web');

var _web6 = _interopRequireDefault(_web5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalHeader = function ModalHeader(_ref) {
  var children = _ref.children,
      onBack = _ref.onBack;
  return _react2.default.createElement(
    _web6.default,
    { padding: [5, 5, 1, 5] },
    _react2.default.createElement(
      'div',
      null,
      onBack ? _react2.default.createElement(
        _web6.default,
        { margin: [0, 0, 2, 0] },
        _react2.default.createElement(_web4.default, {
          name: 'arrow_back',
          onClick: onBack
        })
      ) : null,
      _react2.default.createElement(
        _web2.default,
        {
          size: 'xxl',
          weight: 'bold'
        },
        children
      )
    )
  );
};

ModalHeader.propTypes = {
  children: _propTypes2.default.node,
  onBack: _propTypes2.default.func
};

exports.default = ModalHeader;