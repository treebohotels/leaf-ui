import React from 'react';
import PropTypes from 'prop-types';
import { Overlay } from 'react-overlays';
import reactChildrenByType from '../../utils/reactChildrenByType';
import Aux from '../Aux';
import TooltipTrigger from './TooltipTrigger';
import TooltipContent from './TooltipContent';

class Tooltip extends React.Component {
  state = {
    show: false,
  }

  open = () => {
    this.setState({ show: true });
  }

  close = () => {
    this.setState({ show: false });
  }

  render() {
    const { placement, children } = this.props;
    const childrenByType = reactChildrenByType(children);

    return (
      <Aux>
        {
          React.cloneElement(childrenByType[TooltipTrigger], {
            onMouseEnter: this.open,
            onMouseLeave: this.close,
          })
        }
        <Overlay
          show={this.state.show}
          placement={placement}
          target={this}
        >
          {childrenByType[TooltipContent]}
        </Overlay>
      </Aux>
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
