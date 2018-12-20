import React from 'react';
import PropTypes from 'prop-types';
import Space from '../../Space/web';
import Flex from '../../Flex/web';
import View from '../../View/web';

const ModalContent = ({ children }) => (
  <Space padding={[3, 5]}>
    <Flex flex="auto">
      <View style={{ overflow: 'auto' }}>
        {children}
      </View>
    </Flex>
  </Space>
);

ModalContent.propTypes = {
  children: PropTypes.node,
};

export default ModalContent;
