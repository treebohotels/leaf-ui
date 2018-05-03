import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const AccordionSectionContentContainer = styled.div`
  display: none;
`;

const AccordionSectionContent = (props) => {
  const {
    children,
  } = props;

  return (
    <AccordionSectionContentContainer>
      {children}
    </AccordionSectionContentContainer>
  );
};

AccordionSectionContent.propTypes = {
  children: PropTypes.node,
};

export default AccordionSectionContent;
