import React from 'react';
import PropTypes from 'prop-types';
import Position from '../Position';
import Size from '../Size';
import Card from '../Card';

const OptionList = ({ children }) => (
  <Position
    position="absolute"
    top="-42px"
    left={0}
    zIndex="1050"
  >
    <Size width="100%">
      <Card
        style={{ overflowY: 'scroll' }}
        borderStyle="none"
        elevated
      >
        {children}
      </Card>
    </Size>
  </Position>
);

OptionList.propTypes = {
  children: PropTypes.node,
};

export default OptionList;
