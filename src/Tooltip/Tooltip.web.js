import React from 'react';
import PropTypes from 'prop-types';
import { Overlay } from 'react-overlays';
import reactChildrenByType from '../utils/reactChildrenByType';
import TooltipTrigger from './TooltipTrigger';
import TooltipContent from './TooltipContent';

class Tooltip extends React.Component {
  state = {
    show: false,
  }

  setTooltipTriggerRef = (ref) => {
    this.tooltipTriggerRef = ref;
  }

  open = () => {
    this.setState({ show: true });
  }

  close = () => {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    const { placement, children } = this.props;
    const tooltipChildrenByType = reactChildrenByType(children);

    return (
      <span>
        {
          React.cloneElement(tooltipChildrenByType[TooltipTrigger], {
            ref: this.setTooltipTriggerRef,
            onMouseEnter: this.open,
            onMouseLeave: this.close,
          })
        }
        <Overlay
          show={show}
          placement={placement}
          target={this.tooltipTriggerRef}
        >
          {tooltipChildrenByType[TooltipContent]}
        </Overlay>
      </span>
    );
  }
}

Tooltip.propTypes = {
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  children: PropTypes.node,
};

Tooltip.defaultProps = {
  placement: 'bottom',
};

Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;

export default Tooltip;
