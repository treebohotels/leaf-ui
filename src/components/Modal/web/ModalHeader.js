import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../Card/web';
import Flex from '../../Flex/web';
import Text from '../../Text/web';
import Icon from '../../Icon/web';
import Spacer from '../../Spacer/web';

const ModalHeader = ({ dark, children }, { onClose }) => (
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

ModalHeader.contextTypes = {
  onClose: PropTypes.func,
};

ModalHeader.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node,
};

ModalHeader.defaultProps = {
  dark: false,
};

export default ModalHeader;
