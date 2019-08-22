/* eslint-disable global-require, no-console */
import React from 'react';
import { ScrollView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { getStorybookUI, addDecorator, configure } from '@storybook/react-native';
import { Font } from 'expo';
import theme from '../../src/theme';

const loadStories = () => {
  require('../../src/TextInput/TextInput.story');
  require('../../src/Card/Card.story');
  require('../../src/Button/Button.story');
  require('../../src/Text/Text.story');
  require('../../src/Tag/Tag.story');
  require('../../src/theme/theme.story');
};

const StorybookUI = getStorybookUI();

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <ScrollView style={{ backgroundColor: '#eee', padding: 16 }}>
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
