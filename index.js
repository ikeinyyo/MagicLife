import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import App from './features/app/App';
import reducer from './reducers';

const store = createStore(reducer)

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('MagicLife', () => ReduxApp);
