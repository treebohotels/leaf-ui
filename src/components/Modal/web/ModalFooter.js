import React from 'react';
import PropTypes from 'prop-types';
import Spacer from '../../Spacer/web';
import Divider from '../../Divider/web';

const ModalFooter = ({ children }) => (
  <Spacer padding={[0, 5, 5, 5]}>
    <div>
      <Spacer margin={[0, 'auto', 5, 'auto']}>
        <Divider color="greyLight" />
      </Spacer>
      {children}
    </div>
  </Spacer>
);

ModalFooter.propTypes = {
  children: PropTypes.node,
};

export default ModalFooter;
