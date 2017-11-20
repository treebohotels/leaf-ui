import React from 'react';
import PropTypes from 'prop-types';

class TabsSectionContent extends React.Component {
  componentDidMount() {}

  render() {
    const { children } = this.props;
    return children;
  }
}

TabsSectionContent.propTypes = {
  children: PropTypes.node,
};

export default TabsSectionContent;
