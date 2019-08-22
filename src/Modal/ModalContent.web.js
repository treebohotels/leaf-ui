import React from 'react';
import PropTypes from 'prop-types';
import Space from '../Space';
import Flex from '../Flex';
import View from '../View';

const ModalContent = ({
  className,
  children,
}) => (
  <Space className={className} padding={[3, 5]}>
    <Flex flex="auto">
      <View style={{ overflow: 'auto' }}>
        {children}
      </View>
    </Flex>
  </Space>
);

ModalContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ModalContent;
