import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import theme, { BaseStyles } from '../../src/theme/web';

withOptions({
  name: 'Leaf-UI',
  url: 'https://github.com/treebohotels/leaf-ui',
  addonPanelInRight: true,
});

addDecorator(withKnobs);

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <BaseStyles />
      {story()}
    </React.Fragment>
  </ThemeProvider>
));

configure(() => {
  const req = require.context('../../src', true, /\/web\/.*\.story.js$/);
  req.keys().forEach((filename) => req(filename));
}, module);
