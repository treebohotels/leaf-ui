<div align="center">

## 🍃 Leaf-UI
#### A react component library for web, native and amp built using styled-components
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
import leafUiTheme, { BaseStyles } from 'leaf-ui/theme';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={leafUiTheme}>
    <BaseStyles/>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
```

Import and use the components in your App.js
```js
// App.js
import React from 'react';
import Button from 'leaf-ui/Button';

// for commonjs use,
// import Button from 'leaf-ui/cjs/Button';

const App = () => (
  <Button>
    Leaf-UI
  </Button>
);

export default App;
```

Supported Platforms
* web
* native
* amp


# Contribute

Read our [contributing guide](CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to leaf-ui.

# Setup
Follow this quick [setup guide](SETUP.md) to get leaf-ui working on your local machine.
