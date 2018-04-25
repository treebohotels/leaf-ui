import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text/web';
import Icon from '../../Icon/web';
import Spacer from '../../Spacer/web';

const ModalHeader = ({ children, onBack }) => (
  <Spacer padding={[5, 5, 0, 5]}>
    <div>
      {
        onBack ? (
          <Spacer margin={[0, 0, 2, 0]}>
            <Icon
              name="arrow_back"
              onClick={onBack}
            />
          </Spacer>
        ) : null
      }
      <Text
        size="xxl"
        weight="bold"
      >
        {children}
      </Text>
    </div>
  </Spacer>
);

ModalHeader.propTypes = {
  children: PropTypes.node,
  onBack: PropTypes.func,
};

export default ModalHeader;
