<div align="center">

## 🍃 Leaf-UI
#### A react component library built using styled-components
#### [WARNING: This is a work in progress, API is subject to change]

</div>

# Installation

``` bash
npm install -S leaf-ui
```

# Usage

Wrap your App component with ThemeProvider and pass it the leaf-ui theme (or override it with custom a theme)
```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import leafUiTheme, { injectBaseStyles } from 'leaf-ui/es/theme';
import App from './App';

injectBaseStyles(leafUiTheme);

ReactDOM.render(
  <ThemeProvider theme={leafUiTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
```

Import and use the components in your App.js
```js
// App.js
import React from 'react';
import Button from 'leaf-ui/es/Button/web';

const App = () => (
  <Button>
    Leaf-UI
  </Button>
);

export default App;
```

# Contribute

Web Components
```
npm install
npm run web
# open http://localhost:9000
```

Native Components
```
npm install

# terminal-1
npm run native:storybook

# terminal-2
npm run native
# press i for ios
# press a for android
```

Amp Components
```
npm install
npm run amp
# open http://localhost:9001
```
