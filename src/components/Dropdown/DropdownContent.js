import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

class DropdownContent extends React.Component {
  dropdownStyle = {
    position: 'absolute',
    padding: this.props.theme.px(1),
  }

  dropdownInnerStyle = {
    background: this.props.theme.color.white,
    minWidth: this.props.theme.px(25),
    border: `1px solid ${this.props.theme.color.greyLight}`,
    borderRadius: this.props.theme.borderRadius,
    boxShadow: this.props.theme.boxShadow[2],
  }

  dropdownArrowStyle = {
    position: 'absolute',
    width: 0,
    height: 0,
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderStyle: 'solid',
  }

  placementStyles = {
    top: {
      arrow: {
        bottom: 1,
        marginLeft: this.props.theme.px(-1),
        borderWidth: this.props.theme.px([1, 1, 0]),
        borderTopColor: this.props.theme.color.white,
      },
    },
    right: {
      arrow: {
        left: 1,
        marginTop: this.props.theme.px(-1),
        borderWidth: this.props.theme.px([1, 1, 1, 0]),
        borderRightColor: this.props.theme.color.white,
      },
    },
    bottom: {
      arrow: {
        top: 1,
        marginLeft: this.props.theme.px(-1),
        borderWidth: this.props.theme.px([0, 1, 1]),
        borderBottomColor: this.props.theme.color.white,
      },
    },
    left: {
      arrow: {
        right: 1,
        marginTop: this.props.theme.px(-1),
        borderWidth: this.props.theme.px([1, 0, 1, 1]),
        borderLeftColor: this.props.theme.color.white,
      },
    },
  }

  render() {
    const {
      style,
      placement,
      arrowOffsetLeft: left = this.placementStyles[placement].arrow.left,
      arrowOffsetTop: top = this.placementStyles[placement].arrow.top,
      children,
    } = this.props;

    return (
      <div style={{ ...this.dropdownStyle, ...style }}>
        <div
          style={{
            ...this.dropdownArrowStyle,
            ...this.placementStyles[placement].arrow,
            left,
            top,
          }}
        />
        <div style={this.dropdownInnerStyle}>
          {children}
        </div>
      </div>
    );
  }
}

DropdownContent.propTypes = {
  theme: PropTypes.object,
  style: PropTypes.object,
  placement: PropTypes.string,
  arrowOffsetLeft: PropTypes.string,
  arrowOffsetTop: PropTypes.string,
  children: PropTypes.node,
};

export default withTheme(DropdownContent);
