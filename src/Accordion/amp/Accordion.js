import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccordionSection from './AccordionSection';
import AccordionSectionTrigger from './AccordionSectionTrigger';
import AccordionSectionContent from './AccordionSectionContent';

let index = 0;
const getAccordionGroup = () => {
  index += 1;
  return `__LEAF_UI__accordion-group-${index}`;
};

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.accordionGroup = getAccordionGroup();
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {
          React.Children.map(children, (child) => child.type.name === 'AccordionSection' ? (
            React.cloneElement(child, {
              accordionGroup: this.accordionGroup,
            })
          ) : child)
        }
      </div>
    );
  }
}

Accordion.propTypes = {
  children: PropTypes.node,
};

Accordion.Section = AccordionSection;
Accordion.Trigger = AccordionSectionTrigger;
Accordion.Content = AccordionSectionContent;

export default Accordion;
