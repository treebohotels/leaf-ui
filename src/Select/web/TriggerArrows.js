import React from 'react';
import Spacer from '../../Spacer/web';
import Flex from '../../Flex/web';

const TriggerArrows = () => (
  <Spacer padding={[1]}>
    <Flex>
      <svg width="24px" height="24px" viewBox="0 0 24 24">
        <g id="arrow-filled-down" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon id="Shape" fill="#4A4A4A" fillRule="nonzero" points="12 15 8 9 16 9" />
        </g>
      </svg>
    </Flex>
  </Spacer>
);

export default TriggerArrows;
