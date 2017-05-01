import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import rootReducers from './reducers';
import App from './App';
import routes from './routes';

const middleware = applyMiddleware(thunk)

const store = createStore(rootReducers, middleware)

ReactDOM.render(
  <Provider store={store}>
    {routes(store) }
  </Provider>,
  document.getElementById('root')
);
