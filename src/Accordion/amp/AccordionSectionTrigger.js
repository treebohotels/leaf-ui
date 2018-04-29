import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const AccordionSectionTriggerContainer = styled.div`
  ${''}
`;

const AccordionSectionTrigger = (props) => {
  const {
    children,
    htmlFor,
  } = props;

  return (
    <AccordionSectionTriggerContainer>
      <label htmlFor={htmlFor}>
        {children}
      </label>
    </AccordionSectionTriggerContainer>
  );
};

AccordionSectionTrigger.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node,
};

export default AccordionSectionTrigger;
