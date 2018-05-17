'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _web = require('../../Spacer/web');

var _web2 = _interopRequireDefault(_web);

var _web3 = require('../../Flex/web');

var _web4 = _interopRequireDefault(_web3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TriggerArrows = function TriggerArrows() {
  return _react2.default.createElement(
    _web2.default,
    { padding: [1] },
    _react2.default.createElement(
      _web4.default,
      null,
      _react2.default.createElement(
        'svg',
        { width: '24px', height: '24px', viewBox: '0 0 24 24' },
        _react2.default.createElement(
          'g',
          { id: 'arrow-filled-down', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
          _react2.default.createElement('polygon', { id: 'Shape', fill: '#727171', fillRule: 'nonzero', points: '12 15 8 9 16 9' })
        )
      )
    )
  );
};

exports.default = TriggerArrows;