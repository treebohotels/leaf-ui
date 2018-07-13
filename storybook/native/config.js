import React, { Component } from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { getStorybookUI, addDecorator, configure } from '@storybook/react-native';
import { Font } from 'expo';
import theme from '../../src/theme';

const loadStories = () => {
  require('../../src/Card/native/Card.story');
  require('../../src/Button/native/Button.story');
  require('../../src/Text/native/Text.story');
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
      'Roboto-Regular': require('./fonts/Roboto.ttf'),
      'Roboto-Medium': require('./fonts/Roboto_medium.ttf'),
      'SFProDisplay-Regular': require('./fonts/SFProDisplay-Regular.otf'),
      'SFProDisplay-Medium': require('./fonts/SFProDisplay-Medium.otf'),
      'SFProDisplay-Semibold': require('./fonts/SFProDisplay-Semibold.otf'),
      'Averta-Bold': require('./fonts/Averta-Bold.otf'),
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
