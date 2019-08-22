import React from 'react';
import PropTypes from 'prop-types';
import Position from '../Position';
import Size from '../Size';
import Flex from '../Flex';
import Card from '../Card';

const Dialog = ({ children }) => (
  <Position
    style={{ transform: 'translate(-50%, -50%)' }}
    position="absolute"
    top="50%"
    left="50%"
  >
    <Size
      minWidth={85}
      maxWidth="90vw"
      minHeight={60}
      maxHeight="90vh"
    >
      <Flex>
        <Card elevated>
          {children}
        </Card>
      </Flex>
    </Size>
  </Position>
);

Dialog.propTypes = {
  children: PropTypes.node,
};

export default Dialog;
