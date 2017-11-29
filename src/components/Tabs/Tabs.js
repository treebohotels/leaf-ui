import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import reactChildrenByType from '../../utils/reactChildrenByType';
import Flex from '../Flex';
import TabsSection from './TabsSection';
import TabsSectionTitle from './TabsSectionTitle';
import TabsSectionContent from './TabsSectionContent';

const TitleContainer = styled.div`
  display: flex;
  padding: ${(p) => p.theme.px([0, 7])};
  background: ${(p) => p.theme.color.lagoon};
`;

const getSelectedTab = (props) => (
  props.children ? (
    React.Children.map(props.children, (tabSection, index) => (
      tabSection && tabSection.props.defaultSelected ? index : null
    )).find((index) => index !== null) || 0
  ) : 0
);

class Tabs extends React.Component {
  state = {
    selectedTab: getSelectedTab(this.props),
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedTab: getSelectedTab(nextProps) });
  }

  onTabClick = (index) => () => {
    const { selectedTab } = this.state;
    if (selectedTab !== index) {
      this.setState({ selectedTab: index });
    }
  }

  getTabParts = () => {
    const { children } = this.props;
    const tabParts = { titles: [], contents: [] };

    React.Children.map(children, (tabSection) => {
      const tabSectionByType = reactChildrenByType(tabSection.props.children);
      tabParts.titles.push(tabSectionByType[TabsSectionTitle]);
      tabParts.contents.push(tabSectionByType[TabsSectionContent]);
    });

    return tabParts;
  }

  render() {
    const { selectedTab } = this.state;
    const tabParts = this.getTabParts();

    return (
      <Flex flexDirection="column">
        <TitleContainer>
          {
            React.Children.map(tabParts.titles, (tabTitle, index) => (
              React.cloneElement(tabTitle, {
                isSelected: index === selectedTab,
                onClick: this.onTabClick(index),
              })
            ))
          }
        </TitleContainer>
        {tabParts.contents[selectedTab]}
      </Flex>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.node,
};

Tabs.Section = TabsSection;
Tabs.Section.Title = TabsSectionTitle;
Tabs.Section.Content = TabsSectionContent;

export default Tabs;
