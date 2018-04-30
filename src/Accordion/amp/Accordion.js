import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccordionSection from './AccordionSection';
import AccordionSectionTrigger from './AccordionSectionTrigger';
import AccordionSectionContent from './AccordionSectionContent';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.groupIndex = 0;
    this.groupName = this.getGroupName();
  }

  getGroupName = () => {
    this.groupIndex += 1;
    return `__LEAF_UI__accordion-group-${this.groupIndex}`;
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        {
          React.Children.map(children, (child) => child.type.name === 'AccordionSection' ? (
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
Accordion.Trigger = AccordionSectionTrigger;
Accordion.Content = AccordionSectionContent;

export default Accordion;
