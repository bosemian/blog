import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
import routes from './routes';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    {routes(store) }
  </Provider>,
  document.querySelector('.container')
);
