import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal as ReactOverlaysModal } from 'react-overlays';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';

const backdropStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  zIndex: 'auto',
  background: 'rgba(0, 0, 0, 0.25)',
};

const Dialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${(p) => p.theme.boxShadow[3]};
  min-width: ${(p) => p.theme.px(75)};
`;

const Modal = ({
  isOpen,
  onClose,
  container,
  children,
}) => (
  <ReactOverlaysModal
    backdropStyle={backdropStyle}
    show={isOpen}
    onHide={onClose}
    container={container}
  >
    <Dialog>
      {
        React.Children.map(children, (child) => (
          React.cloneElement(child, {
            onClose,
          })
        ))
      }
    </Dialog>
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
