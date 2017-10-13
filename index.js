import React from 'react';
import { AppRegistry } from 'react-native';
import App from './features/app/App';
import { render } from 'react-dom'
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux'

const store = createStore(reducer)

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('MagicLife', () => ReduxApp);
