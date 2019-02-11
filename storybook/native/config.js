/* eslint-disable global-require, no-console */

import React, { Component } from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { getStorybookUI, addDecorator, configure } from '@storybook/react-native';
import { Font } from 'expo';
import theme from '../../src/theme/native';

const loadStories = () => {
  require('../../src/Card/native/Card.story');
  require('../../src/Button/native/Button.story');
  require('../../src/Text/native/Text.story');
  require('../../src/Tag/native/Tag.story');
};

const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <ScrollView style={{ backgroundColor: '#eee' }}>
      {story()}
    </ScrollView>
  </ThemeProvider>
));

configure(loadStories, module);

class StorybookUIHMRRoot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFontsLoaded: false,
    };

    console.disableYellowBox = true;
  }

  componentDidMount() {
    Font.loadAsync({
      RegularFontAndroid: require('./fonts/Roboto-Regular.ttf'),
      MediumFontAndroid: require('./fonts/Roboto-Medium.ttf'),
      BoldFontAndroid: require('./fonts/Roboto-Bold.ttf'),
      RegularFontIOS: require('./fonts/SFProDisplay-Regular.otf'),
      MediumFontIOS: require('./fonts/SFProDisplay-Medium.otf'),
      SemiboldFontIOS: require('./fonts/SFProDisplay-Semibold.otf'),
      BoldFontIOS: require('./fonts/SFProDisplay-Bold.otf'),
    }).then(() => {
      this.setState({ isFontsLoaded: true });
    });
  }

  render() {
    return this.state.isFontsLoaded ? <StorybookUIRoot /> : null;
  }
}

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
