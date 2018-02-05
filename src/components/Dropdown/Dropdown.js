import React from 'react';
import PropTypes from 'prop-types';
import { Overlay } from 'react-overlays';
import reactChildrenByType from '../../utils/reactChildrenByType';
import Flex from '../Flex';
import DropdownTrigger from './DropdownTrigger';
import DropdownContent from './DropdownContent';

class Dropdown extends React.Component {
  state = {
    show: false,
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.close);
  }

  open = () => {
    if (!this.state.show) {
      document.addEventListener('click', this.close);
      this.setState({ show: true });
    }
  }

  close = () => {
    if (this.state.show) {
      document.removeEventListener('click', this.close);
      this.setState({ show: false });
    }
  }

  render() {
    const { placement, children } = this.props;
    const dropdownChildrenByType = reactChildrenByType(children);

    return (
      <Flex display="inline-block">
        {
          React.cloneElement(dropdownChildrenByType[DropdownTrigger], {
            onClick: this.open,
          })
        }
        <Overlay
          show={this.state.show}
          placement={placement}
          target={this}
        >
          {dropdownChildrenByType[DropdownContent]}
        </Overlay>
      </Flex>
    );
  }
}

Dropdown.propTypes = {
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  children: PropTypes.node,
};

Dropdown.defaultProps = {
  placement: 'bottom',
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;

export default Dropdown;
