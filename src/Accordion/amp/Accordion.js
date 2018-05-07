import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccordionSection from './AccordionSection';
import AccordionSectionTrigger from './AccordionSectionTrigger';
import AccordionSectionContent from './AccordionSectionContent';

let groupIndex = 0;

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.groupName = this.getGroupName();
  }

  getGroupName = () => {
    groupIndex += 1;
    return `__LEAF_UI__accordion-group-${groupIndex}`;
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        {
          React.Children.map(children, (child) =>
          child && child.type === AccordionSection ? (
            React.cloneElement(child, {
              groupName: this.groupName,
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
Accordion.Section.Trigger = AccordionSectionTrigger;
Accordion.Section.Content = AccordionSectionContent;

export default Accordion;
