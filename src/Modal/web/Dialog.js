import React from 'react';
import PropTypes from 'prop-types';
import Position from '../../Position/web';
import Size from '../../Size/web';
import Flex from '../../Flex/web';
import Card from '../../Card/web';

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
