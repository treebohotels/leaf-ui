import React from 'react';
import Space from '../Space';
import Flex from '../Flex';
import View from '../View';

const TriggerArrows = () => (
  <Space padding={[1]}>
    <Flex>
      <View>
        <svg width="24px" height="24px" viewBox="0 0 24 24">
          <g id="arrow-filled-down" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon id="Shape" fill="#727171" fillRule="nonzero" points="12 15 8 9 16 9" />
          </g>
        </svg>
      </View>
    </Flex>
  </Space>
);

export default TriggerArrows;
