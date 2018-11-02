import React from 'react';
import PropTypes from 'prop-types';
import Position from '../../Position/web';
import Size from '../../Size/web';
import Card from '../../Card/web';

const OptionList = ({ size, children }) => (
  <Position
    position="absolute"
    top="-42px"
    left={0}
    zIndex="1050"
  >
    <Size width={size}>
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
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  children: PropTypes.node,
};

export default OptionList;
