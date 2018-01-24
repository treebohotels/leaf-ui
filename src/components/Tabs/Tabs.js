import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Flex from '../Flex';

const TitleContainer = styled.div`
  display: flex;
  padding: ${(p) => p.theme.px([0, 7])};
  background: ${(p) => p.theme.color.lagoon};
`;

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

const Tab = ({ children }) => children;

class Tabs extends React.Component {
  state = {
    selectedTabIndex:
      React.Children.map(this.props.children, (tab, index) => (
        tab.props.defaultSelected ? index : null
      )).find((index) => index !== null) || 0,
  };

  onTabClick = (index) => () => {
    const { selectedTabIndex } = this.state;
    if (index !== selectedTabIndex) {
      this.setState({ selectedTabIndex: index });
    }
  }

  render() {
    const { selectedTabIndex } = this.state;
    const { children } = this.props;

    return (
      <Flex flexDirection="column">
        <TitleContainer>
          {
            React.Children.map(children, (tab, index) => (
              <Title
                isSelected={index === selectedTabIndex}
                onClick={this.onTabClick(index)}
              >
                {tab.props.title}
              </Title>
            ))
          }
        </TitleContainer>
        {children[selectedTabIndex]}
      </Flex>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.node,
};

Tabs.Tab = Tab;

export default Tabs;
