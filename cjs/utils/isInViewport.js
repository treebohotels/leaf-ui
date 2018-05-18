'use strict';

exports.__esModule = true;

var _getDeviceDimensions = require('./getDeviceDimensions');

var _getDeviceDimensions2 = _interopRequireDefault(_getDeviceDimensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (element) {
  if (element) {
    var boundingClientRect = element.getBoundingClientRect();
    var deviceDimensions = (0, _getDeviceDimensions2.default)();
    var isInViewportVertically = boundingClientRect.top <= deviceDimensions.height && boundingClientRect.bottom >= 0;
    var isInViewportHorizontally = boundingClientRect.left <= deviceDimensions.width && boundingClientRect.right >= 0;
    return isInViewportVertically && isInViewportHorizontally;
  }

  return false;
};