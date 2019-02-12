/* eslint-disable global-require, no-console */
import React from 'react';
import { ScrollView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { getStorybookUI, addDecorator, configure } from '@storybook/react-native';
import { Font } from 'expo';
import theme from '../../src/theme/native';

console.disableYellowBox = true;

const loadStories = () => {
  require('../../src/Card/native/Card.story');
  require('../../src/Button/native/Button.story');
  require('../../src/Text/native/Text.story');
  require('../../src/Tag/native/Tag.story');
};

const StorybookUI = getStorybookUI();

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <ScrollView style={{ backgroundColor: '#eee' }}>
      {story()}
    </ScrollView>
  </ThemeProvider>
));

configure(loadStories, module);

class StorybookRoot extends React.Component {
  state = {
    isFontsLoaded: false,
  };

  componentDidMount() {
    Font.loadAsync({
      'Roboto-Regular': require('./fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('./fonts/Roboto-Medium.ttf'),
      'Roboto-Bold': require('./fonts/Roboto-Bold.ttf'),
      'SFProDisplay-Regular': require('./fonts/SFProDisplay-Regular.otf'),
      'SFProDisplay-Medium': require('./fonts/SFProDisplay-Medium.otf'),
      'SFProDisplay-Semibold': require('./fonts/SFProDisplay-Semibold.otf'),
      'Averta-Bold': require('./fonts/SFProDisplay-Bold.otf'),
    }).then(() => {
      this.setState({ isFontsLoaded: true });
    });
  }

  render() {
    return this.state.isFontsLoaded ? <StorybookUI /> : null;
  }
}

export default StorybookRoot;
