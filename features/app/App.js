import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Main from '../main/Main';
import Settings from '../settings/Settings';

const App = StackNavigator({
  Main: { screen: Main },
  Settings: { screen: Settings },
});

export default App;
