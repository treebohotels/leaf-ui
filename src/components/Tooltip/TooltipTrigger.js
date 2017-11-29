import React from 'react';
import PropTypes from 'prop-types';

class TooltipTrigger extends React.Component {
  render() {
    const { onMouseEnter, onMouseLeave, children } = this.props;
    return React.cloneElement(children, {
      onMouseEnter: (...args) => {
        if (children.props.onMouseEnter) children.props.onMouseEnter.apply(children, args);
        onMouseEnter.apply(children, args);
      },
      onMouseLeave: (...args) => {
        if (children.props.onMouseLeave) children.props.onMouseLeave.apply(children, args);
        onMouseLeave.apply(children, args);
      },
    });
  }
}

TooltipTrigger.propTypes = {
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  children: PropTypes.node,
};

export default TooltipTrigger;
