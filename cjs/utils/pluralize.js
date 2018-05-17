'use strict';

exports.__esModule = true;

exports.default = function (amount, singularForm) {
  var pluralForm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : singularForm + 's';

  var word = '';

  if (+amount === 1) {
    word = singularForm;
  } else {
    word = pluralForm;
  }

  return word;
};