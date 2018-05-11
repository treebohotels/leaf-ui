import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

class TooltipContent extends React.Component {
  styles = {
    tooltip: {
      position: 'absolute',
      padding: this.props.theme.px(1),
    },

    tooltipInner: {
      background: this.props.theme.color.greyDarker,
      padding: this.props.theme.px(1),
      color: this.props.theme.color.white,
      textAlign: 'center',
      borderRadius: this.props.theme.borderRadius,
    },

    tooltipArrow: {
      position: 'absolute',
      width: 0,
      height: 0,
      borderRightColor: this.props.theme.color.transparent,
      borderLeftColor: this.props.theme.color.transparent,
      borderTopColor: this.props.theme.color.transparent,
      borderBottomColor: this.props.theme.color.transparent,
      borderStyle: 'solid',
    },

    placement: {
      top: {
        arrow: {
          bottom: 1,
          marginLeft: this.props.theme.px(-1),
          borderWidth: this.props.theme.px([1, 1, 0]),
          borderTopColor: this.props.theme.color.greyDarker,
        },
      },
      right: {
        arrow: {
          left: 1,
          marginTop: this.props.theme.px(-1),
          borderWidth: this.props.theme.px([1, 1, 1, 0]),
          borderRightColor: this.props.theme.color.greyDarker,
        },
      },
      bottom: {
        arrow: {
          top: 1,
          marginLeft: this.props.theme.px(-1),
          borderWidth: this.props.theme.px([0, 1, 1]),
          borderBottomColor: this.props.theme.color.greyDarker,
        },
      },
      left: {
        arrow: {
          right: 1,
          marginTop: this.props.theme.px(-1),
          borderWidth: this.props.theme.px([1, 0, 1, 1]),
          borderLeftColor: this.props.theme.color.greyDarker,
        },
      },
    },
  }

  render() {
    const {
      style,
      placement,
      arrowOffsetLeft: left = this.styles.placement[placement].arrow.left,
      arrowOffsetTop: top = this.styles.placement[placement].arrow.top,
      children,
    } = this.props;

    return (
      <div style={{ ...this.styles.tooltip, ...style }}>
        <div
          style={{
            ...this.styles.tooltipArrow,
            ...this.styles.placement[placement].arrow,
            left,
            top,
          }}
        />
        <div style={this.styles.tooltipInner}>
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
