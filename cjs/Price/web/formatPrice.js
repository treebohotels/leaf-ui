'use strict';

exports.__esModule = true;
var formatPrice = function formatPrice(value) {
  var rounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var price = +value;
  var inrPrice = price.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: rounded ? 0 : 2,
    maximumFractionDigits: rounded ? 0 : 2
  });
  return inrPrice;
};

exports.default = formatPrice;