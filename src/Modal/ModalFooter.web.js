import React from 'react';
import PropTypes from 'prop-types';
import Space from '../Space';
import View from '../View';
import Divider from '../Divider';

const ModalFooter = ({ children }) => (
  <Space padding={[0, 5, 5, 5]}>
    <View>
      <Space margin={[0, 'auto', 5, 'auto']}>
        <Divider color="greyLight" />
      </Space>
      {children}
    </View>
  </Space>
);

ModalFooter.propTypes = {
  children: PropTypes.node,
};

export default ModalFooter;
