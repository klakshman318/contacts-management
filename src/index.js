import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';

import App from './App';

import {ThemeContextProvider} from './ThemeProvider';

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('root')
);

{/* <React.StrictMode>
    <App />
</React.StrictMode> */}
