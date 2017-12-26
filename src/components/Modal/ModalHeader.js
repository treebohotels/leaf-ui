import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Flex from '../Flex';
import Text from '../Text';
import Icon from '../Icon';
import Spacer from '../Spacer';

const ModalHeader = ({ dark, onClose, children }) => (
  <Spacer padding={[7, 7, 0, 7]}>
    <Card color={dark ? 'lagoon' : 'white'}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text
          color={dark ? 'white' : undefined}
          size="xxxl"
        >
          {children}
        </Text>
        <Icon
          color={dark ? 'white' : 'greyDarker'}
          name="close"
          button
          onClick={onClose}
        />
      </Flex>
    </Card>
  </Spacer>
);

ModalHeader.propTypes = {
  dark: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

ModalHeader.defaultProps = {
  dark: false,
};

export default ModalHeader;
