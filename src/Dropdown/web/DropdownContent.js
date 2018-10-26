import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Size from '../../Size/web';
import Card from '../../Card/web';

class DropdownContent extends React.Component {
  styles = {
    dropdown: {
      position: 'absolute',
      padding: this.props.theme.px(1),
    },
  }

  render() {
    const {
      style,
      children,
    } = this.props;

    return (
      <div style={{ ...this.styles.dropdown, ...style }}>
        <Size minWidth={25}>
          <Card borderStyle="none" elevated>
            {children}
          </Card>
        </Size>
      </div>
    );
  }
}

DropdownContent.propTypes = {
  theme: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default withTheme(DropdownContent);
