'use strict';

exports.__esModule = true;
exports.default = undefined;

var _web = require('../web');

Object.keys(_web).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _web[key];
    }
  });
});

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _web2.default;