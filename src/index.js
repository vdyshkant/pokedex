import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {store} from './store'
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

body {
  min-height: 100vh;
  background: rgba(241,231,103,1);
  background: linear-gradient(135deg, rgba(241,231,103,1) 0%, rgba(241,231,103,1) 61%, rgba(254,182,69,1) 100%);
}
`

ReactDOM.render(
  <Provider store={store}>
    <Global />
    <App />
  </Provider>,
  document.getElementById('root')
);