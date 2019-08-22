import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Text';

let index = 0;
const getUniqueId = () => {
  index += 1;
  return `__LEAF_UI__more-or-less-input-${index}`;
};

const MoreOrLessContainer = styled(
  ({
    id,
    initialHeight,
    labelForMore,
    labelForLess,
    ...props
  }) => <div {...props} />,
)`
  > div {
    height: ${(props) => props.initialHeight};
    overflow: hidden;
  }

  > label::before {
    content: '${(props) => props.labelForMore}';
  }

  #${(props) => props.id} {
    display: none;

    &:checked {
      + div {
        height: auto;
      }

      ~ label::before {
        content: '${(props) => props.labelForLess}';
      }
    }
  }
`;

class MoreOrLess extends Component {
  constructor(props) {
    super(props);
    this.id = getUniqueId();
  }

  render() {
    const {
      initialHeight,
      labelForMore,
      labelForLess,
      children,
      ...props
    } = this.props;

    return (
      <MoreOrLessContainer
        id={this.id}
        initialHeight={initialHeight}
        labelForMore={labelForMore}
        labelForLess={labelForLess}
        {...props}
      >
        <input type="checkbox" id={this.id} />
        <div>{children}</div>
        <Text
          component="label"
          htmlFor={this.id}
          color="blue"
          size="s"
        />
      </MoreOrLessContainer>
    );
  }
}

MoreOrLess.propTypes = {
  initialHeight: PropTypes.string.isRequired,
  children: PropTypes.node,
  labelForMore: PropTypes.string,
  labelForLess: PropTypes.string,
};

MoreOrLess.defaultProps = {
  labelForMore: 'Show More',
  labelForLess: 'Show Less',
};

export default MoreOrLess;
