import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal as ReactOverlaysModal } from 'react-overlays';
import Dialog from './Dialog';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';

const styles = {
  ReactOverlaysModal: {
    backdrop: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      zIndex: 'auto',
      background: 'rgba(0, 0, 0, 0.25)',
    },
  },
};

class Modal extends Component {
  getChildContext() {
    const { isOpen, onClose } = this.props;
    return {
      isOpen,
      onClose,
    };
  }

  render() {
    const {
      isOpen,
      onClose,
      container,
      children,
    } = this.props;

    return (
      <ReactOverlaysModal
        backdropStyle={styles.ReactOverlaysModal.backdrop}
        show={isOpen}
        onHide={onClose}
        container={container}
      >
        <Dialog>
          {children}
        </Dialog>
      </ReactOverlaysModal>
    );
  }
}

Modal.childContextTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  container: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  children: PropTypes.node,
};

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
};

Modal.Header = ModalHeader;

Modal.Content = ModalContent;

Modal.Footer = ModalFooter;

export default Modal;
