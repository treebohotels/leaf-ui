import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Text/web';

class MoreOrLess extends Component {
  state = {
    isShowMore: false,
  }

  toggleShowMore = () => {
    this.setState((prevState) => ({ isShowMore: !prevState.isShowMore }));
  }

  render() {
    const {
      color,
      size,
      weight,
      labelForLess,
      labelForMore,
      visibleCharacters,
      children,
    } = this.props;
    const { isShowMore } = this.state;

    return (
      <React.Fragment>
        <Text
          color={color}
          component="span"
          size={size}
          weight={weight}
        >
          {children.slice(0, isShowMore ? children.length : visibleCharacters)}
        </Text>
        {
          children.length > visibleCharacters ? (
            <Text
              color="blue"
              component="span"
              size={size}
              weight={weight}
              onClick={this.toggleShowMore}
              style={{ cursor: 'pointer' }}
            >
              {' '}
              {isShowMore ? labelForLess : labelForMore}
            </Text>
          ) : null
        }
      </React.Fragment>
    );
  }
}

MoreOrLess.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  labelForLess: PropTypes.string,
  labelForMore: PropTypes.string,
  visibleCharacters: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

MoreOrLess.defaultProps = {
  labelForLess: 'Show Less',
  labelForMore: 'Show More',
};

export default MoreOrLess;
