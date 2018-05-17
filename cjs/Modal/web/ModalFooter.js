'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _web = require('../../Spacer/web');

var _web2 = _interopRequireDefault(_web);

var _web3 = require('../../Divider/web');

var _web4 = _interopRequireDefault(_web3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalFooter = function ModalFooter(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _web2.default,
    { padding: [0, 5, 5, 5] },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _web2.default,
        { margin: [0, 'auto', 5, 'auto'] },
        _react2.default.createElement(_web4.default, { color: 'greyLight' })
      ),
      children
    )
  );
};

ModalFooter.propTypes = {
  children: _propTypes2.default.node
};

exports.default = ModalFooter;