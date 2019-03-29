import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
import theme, { BaseStyles } from '../../src/theme/amp';

addParameters({
  options: {
    theme: create({
      brandTitle: 'Leaf-UI',
      brandUrl: 'https://github.com/treebohotels/leaf-ui',
    }),
    panelPosition: 'right',
  },
});

addDecorator(withKnobs);

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <BaseStyles />
    {story()}
  </ThemeProvider>
));

configure(() => {
  const req = require.context('../../src', true, /\/amp\/.*\.story.js$/);
  req.keys().forEach((filename) => req(filename));
}, module);
