import React from 'react';
import PropTypes from 'prop-types';
import View from '../View';
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

  onTabClick = ({ index, title }) => () => {
    const { selectedTabIndex } = this.state;
    const { onChange } = this.props;

    if (index !== selectedTabIndex) {
      this.setState({ selectedTabIndex: index });
      onChange({ index, title });
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
                onClick={this.onTabClick({ index, title: tab.props.title })}
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
  onChange: PropTypes.func,
  children: PropTypes.node,
};

Tabs.defaultProps = {
  onChange: () => {},
};

Tabs.Tab = Tab;

export default Tabs;
