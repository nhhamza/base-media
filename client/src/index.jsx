import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import * as serviceWorker from './serviceWorker';

import './index.scss';
import App from './App';

const isLocalMode = process.env.REACT_APP_ENV === 'local';

if (isLocalMode) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
} else {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}

serviceWorker.register();