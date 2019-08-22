import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AccordionSectionTrigger from './AccordionSectionTrigger';
import AccordionSectionContent from './AccordionSectionContent';
import { I } from '../Icon';

let inputIndex = 0;

const AccordionSectionContainer = styled(
  ({
    inputId,
    ...props
  }) => <div {...props} />,
)`
  #${(props) => props.inputId} {
    display: none;

    &:checked {
      ~ ${/* sc-selector */AccordionSectionContent} {
        height: auto;
      }

      + ${/* sc-selector */AccordionSectionTrigger} {
        ${/* sc-selector */I} {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

class AccordionSection extends Component {
  constructor(props) {
    super(props);
    this.inputId = this.getInputId();
  }

  getInputId = () => {
    inputIndex += 1;
    return `__LEAF_UI__accordion-trigger-input-${inputIndex}`;
  };

  getInputType = (noOtherSiblingSections) => noOtherSiblingSections ? 'checkbox' : 'radio';

  render() {
    const {
      groupName,
      noOtherSiblingSections,
      children,
      ...props
    } = this.props;

    return (
      <AccordionSectionContainer
        inputId={this.inputId}
        {...props}
      >
        <input
          type={this.getInputType(noOtherSiblingSections)}
          name={groupName}
          id={this.inputId}
        />
        {
          React.Children.map(children, (child) =>
            child && child.type === AccordionSectionTrigger ? (
              React.cloneElement(child, {
                htmlFor: this.inputId,
              })
            ) : child)
        }
      </AccordionSectionContainer>
    );
  }
}

AccordionSection.propTypes = {
  children: PropTypes.node,
  groupName: PropTypes.string,
  noOtherSiblingSections: PropTypes.bool,
};

export default AccordionSection;
