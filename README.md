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
import theme, { injectBaseStyles } from 'leaf-ui/es/theme';
import App from './App';

injectBaseStyles(theme);

ReactDOM.hydrate(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
```

Import and use the components in your App.js
```js
// App.js
import React from 'react';
import Button from 'leaf-ui/es/Button';

const App = () => (
  <Button>
    Leaf-UI
  </Button>
);

export default App;
```

# Contribute

```
npm install
npm start
```

The Storybook will be available on port `http://localhost:9000/`
