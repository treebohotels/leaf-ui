import React from 'react';
import PropTypes from 'prop-types';
import { Modal as ReactOverlaysModal } from 'react-overlays';
import ModalDialog from './ModalDialog';
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

const Modal = ({
  isOpen,
  onClose,
  container,
  children,
}) => (
  <ReactOverlaysModal
    backdropStyle={styles.ReactOverlaysModal.backdrop}
    show={isOpen}
    onHide={onClose}
    container={container}
  >
    <ModalDialog>
      {
        React.Children.map(children, (child) => (
          React.cloneElement(child, {
            onClose,
          })
        ))
      }
    </ModalDialog>
  </ReactOverlaysModal>
);

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
