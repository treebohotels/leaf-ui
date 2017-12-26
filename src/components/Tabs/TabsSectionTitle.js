import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  flex: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: ${(p) => p.theme.px([2, 3])};
  color: ${(p) => p.theme.color.white};
  background: ${(p) => p.theme.color.lagoon};
  border-bottom: 2px solid transparent;
  border-color: ${(p) => p.isSelected ? p.theme.color.yellow : 'transparent'};
`;

class TabsSectionTitle extends React.Component {
  componentDidMount() {}

  render() {
    const { children, isSelected, onClick } = this.props;
    return (
      <Title
        isSelected={isSelected}
        onClick={onClick}
      >
        {children}
      </Title>
    );
  }
}

TabsSectionTitle.propTypes = {
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default TabsSectionTitle;
