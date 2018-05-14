import React from 'react';
import PropTypes from 'prop-types';
import View from '../../View/web';
import Tab from './Tab';
import Title from './Title';
import TitleContainer from './TitleContainer';

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
    const { className, children } = this.props;

    return (
      <View className={className}>
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
      </View>
    );
  }
}

Tabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Tabs.Tab = Tab;

export default Tabs;
