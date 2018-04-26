import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../Text/web';

const MoreOrLessContainer = styled.div`
  > div {
    height: ${(props) => props.initialHeight};
    overflow: hidden;
  }

  > label::before {
    content: "${(props) => props.labelForMore}";
  }

  #togglemoreorless {
    display: none;

    &:checked {
      + div {
        height: auto;
      }

      ~ label::before {
        content: "${(props) => props.labelForLess}";
      }
    }
  }
`;

const MoreOrLess = (props) => (
  <MoreOrLessContainer {...props}>
    <input type="checkbox" id="togglemoreorless" />
    <div>
      {props.children}
    </div>
    <Text
      component="label"
      htmlFor="togglemoreorless"
      color="blue"
      size="s"
    />
  </MoreOrLessContainer>
);

MoreOrLess.propTypes = {
  initialHeight: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  labelForMore: PropTypes.string,
  labelForLess: PropTypes.string,
};

MoreOrLess.defaultProps = {
  labelForMore: 'Show More',
  labelForLess: 'Show Less',
};

export default MoreOrLess;
