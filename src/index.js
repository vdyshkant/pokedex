import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components'
const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  font-family: 'Roboto', sans-serif;
}
`

ReactDOM.render(
  <>
    <Global />
    <App />
  </>,
  document.getElementById('root')
);