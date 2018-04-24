import React from 'react';
import PropTypes from 'prop-types';

class Toggle extends React.Component {
  state = {
    on: false,
  }

  setToggle = (on) => {
    this.setState({ on });
  }

  toggle = () => {
    this.setState((prevState) => ({
      on: !prevState.on,
    }));
  }

  render() {
    const { on } = this.state;
    const { render } = this.props;
    return render({
      on,
      toggle: this.toggle,
      setToggle: this.setToggle,
    });
  }
}

Toggle.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Toggle;
