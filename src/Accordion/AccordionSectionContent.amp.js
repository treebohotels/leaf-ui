import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AccordionSectionContent = styled(
  ({
    children,
    ...props
  }) => (
    <div {...props}>
      {children}
    </div>
  ),
)`
  height: 0;
  overflow: hidden;
`;

AccordionSectionContent.propTypes = {
  children: PropTypes.node,
};

export default AccordionSectionContent;
