'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formatPrice = require('./formatPrice');

var _formatPrice2 = _interopRequireDefault(_formatPrice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Price = function Price(_ref) {
  var rounded = _ref.rounded,
      children = _ref.children;
  return (0, _formatPrice2.default)(children, rounded);
};

Price.propTypes = {
  rounded: _propTypes2.default.bool,
  children: _propTypes2.default.node
};

Price.defaultProps = {
  rounded: true
};

exports.default = Price;