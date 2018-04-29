import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AccordionSectionTriggerContainer } from './AccordionSectionTrigger';
import { AccordionSectionContentContainer } from './AccordionSectionContent';
import { I } from '../../Icon/amp';

let index = 0;
const getUniqueId = () => {
  index += 1;
  return `__LEAF_UI__accordion-trigger-input-${index}`;
};

const AccordionSectionContainer = styled(
  ({
    id,
    ...props
  }) => <div {...props} />,
)`
  > ${/* sc-selector */AccordionSectionContentContainer} {
    display: none;
  }

  #${(props) => props.id} {
    display: none;

    ~ ${/* sc-selector */AccordionSectionContentContainer} {
      display: block;
    }

    &:checked {
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
    this.id = getUniqueId();
  }

  render() {
    const {
      accordionGroup,
      children,
      ...props
    } = this.props;

    return (
      <AccordionSectionContainer
        id={this.id}
        {...props}
      >
        <input type="radio" name={accordionGroup} id={this.id} />
        {
          React.Children.map(children, (child) => child.type.name === 'AccordionSectionTrigger' ? (
            React.cloneElement(child, {
              htmlFor: this.id,
            })
          ) : child)
        }
      </AccordionSectionContainer>
    );
  }
}

AccordionSection.propTypes = {
  accordionGroup: PropTypes.string,
  children: PropTypes.node,
};

export default AccordionSection;
