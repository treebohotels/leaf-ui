'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactOverlays = require('react-overlays');

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _CloseIcon = require('./CloseIcon');

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalContent = require('./ModalContent');

var _ModalContent2 = _interopRequireDefault(_ModalContent);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  ReactOverlaysModal: {
    backdrop: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      zIndex: 'auto',
      background: 'rgba(0, 0, 0, 0.5)'
    }
  }
};

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      container = _ref.container,
      children = _ref.children;
  return _react2.default.createElement(
    _reactOverlays.Modal,
    {
      backdropStyle: styles.ReactOverlaysModal.backdrop,
      show: isOpen,
      onHide: onClose,
      container: container
    },
    _react2.default.createElement(
      _Dialog2.default,
      null,
      _react2.default.createElement(_CloseIcon2.default, { onClick: onClose }),
      children
    )
  );
};

Modal.propTypes = {
  isOpen: _propTypes2.default.bool,
  onClose: _propTypes2.default.func,
  container: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  children: _propTypes2.default.node
};

Modal.defaultProps = {
  isOpen: false,
  onClose: function onClose() {}
};

Modal.Header = _ModalHeader2.default;

Modal.Content = _ModalContent2.default;

Modal.Footer = _ModalFooter2.default;

exports.default = Modal;