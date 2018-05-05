import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AccordionSectionTrigger = styled(
  ({
    htmlFor,
    children,
    ...props
  }) => (
    <div {...props}>
      <label htmlFor={htmlFor}>
        {children}
      </label>
    </div>
  ),
)`
  ${''}
`;

AccordionSectionTrigger.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

export default AccordionSectionTrigger;
