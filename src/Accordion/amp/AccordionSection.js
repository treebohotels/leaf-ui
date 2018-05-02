import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AccordionSectionTriggerContainer } from './AccordionSectionTrigger';
import { AccordionSectionContentContainer } from './AccordionSectionContent';
import { I } from '../../Icon/amp';

let inputIndex = 0;
const getInputId = () => {
  inputIndex += 1;
  return `__LEAF_UI__accordion-trigger-input-${inputIndex}`;
};

const AccordionSectionContainer = styled(
  ({
    inputId,
    ...props
  }) => <div {...props} />,
)`
  > ${/* sc-selector */AccordionSectionContentContainer} {
    display: none;
  }

  #${(props) => props.inputId} {
    display: none;

    &:checked {
      ~ ${/* sc-selector */AccordionSectionContentContainer} {
        display: block;
      }

      + ${/* sc-selector */AccordionSectionTriggerContainer} {
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
    this.inputId = getInputId();
  }

  render() {
    const {
      groupName,
      children,
      ...props
    } = this.props;

    return (
      <AccordionSectionContainer
        inputId={this.inputId}
        {...props}
      >
        <input type="radio" name={groupName} id={this.inputId} />
        {
          React.Children.map(children, (child) => child && child.type.name === 'AccordionSectionTrigger' ? (
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
  groupName: PropTypes.string,
  children: PropTypes.node,
};

export default AccordionSection;
