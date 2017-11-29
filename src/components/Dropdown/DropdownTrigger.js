import React from 'react';
import PropTypes from 'prop-types';

class DropdownTrigger extends React.Component {
  render() {
    const { onClick, children } = this.props;
    return React.cloneElement(children, {
      onClick: (...args) => {
        if (children.props.onClick) children.props.onClick.apply(children, args);
        onClick.apply(children, args);
      },
    });
  }
}

DropdownTrigger.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default DropdownTrigger;
