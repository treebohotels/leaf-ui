import React from 'react';
import PropTypes from 'prop-types';
import View from '../View';
import Space from '../Space';
import Icon from '../Icon';
import Text from '../Text';

const ModalHeader = ({ children, onBack }) => (
  <Space padding={[5, 5, 1, 5]}>
    <View>
      {
        onBack ? (
          <Space margin={[0, 0, 2, 0]}>
            <Icon
              name="arrow_back"
              onClick={onBack}
            />
          </Space>
        ) : null
      }
      <Text
        size="xxl"
        weight="bold"
      >
        {children}
      </Text>
    </View>
  </Space>
);

ModalHeader.propTypes = {
  children: PropTypes.node,
  onBack: PropTypes.func,
};

export default ModalHeader;
