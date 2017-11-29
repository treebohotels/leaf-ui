import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

class TooltipContent extends React.Component {
  tooltipStyle = {
    position: 'absolute',
    padding: this.props.theme.px(1),
  }

  tooltipInnerStyle = {
    background: this.props.theme.color.black,
    padding: this.props.theme.px(1),
    color: this.props.theme.color.white,
    textAlign: 'center',
    borderRadius: this.props.theme.borderRadius,
  }

  tooltipArrowStyle = {
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
        borderTopColor: this.props.theme.color.black,
      },
    },
    right: {
      arrow: {
        left: 1,
        marginTop: this.props.theme.px(-1),
        borderWidth: this.props.theme.px([1, 1, 1, 0]),
        borderRightColor: this.props.theme.color.black,
      },
    },
    bottom: {
      arrow: {
        top: 1,
        marginLeft: this.props.theme.px(-1),
        borderWidth: this.props.theme.px([0, 1, 1]),
        borderBottomColor: this.props.theme.color.black,
      },
    },
    left: {
      arrow: {
        right: 1,
        marginTop: this.props.theme.px(-1),
        borderWidth: this.props.theme.px([1, 0, 1, 1]),
        borderLeftColor: this.props.theme.color.black,
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
      <div style={{ ...this.tooltipStyle, ...style }}>
        <div
          style={{
            ...this.tooltipArrowStyle,
            ...this.placementStyles[placement].arrow,
            left,
            top,
          }}
        />
        <div style={this.tooltipInnerStyle}>
          {children}
        </div>
      </div>
    );
  }
}

TooltipContent.propTypes = {
  theme: PropTypes.object,
  style: PropTypes.object,
  placement: PropTypes.string,
  arrowOffsetLeft: PropTypes.string,
  arrowOffsetTop: PropTypes.string,
  children: PropTypes.node,
};

export default withTheme(TooltipContent);
