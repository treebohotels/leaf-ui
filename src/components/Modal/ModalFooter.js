import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Spacer from '../Spacer';
import Divider from '../Divider';

const ModalFooter = ({ children }) => (
  <Spacer padding={[0, 7, 4, 7]}>
    <Card>
      <Spacer margin={[0, 'auto', 4, 'auto']}>
        <Divider />
      </Spacer>
      {children}
    </Card>
  </Spacer>
);

ModalFooter.propTypes = {
  children: PropTypes.node,
};

export default ModalFooter;
