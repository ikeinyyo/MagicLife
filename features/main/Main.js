import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import CounterList from '../counterList/CounterList-container';
import Toolbar from '../toolbar/Toolbar';
import LifeBar from '../lifeBar/lifeBar-container';

export default class Main extends Component {

  static navigationOptions = {
   title: 'Magic Life',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Toolbar onPressSettings={() => navigate('Settings')} />
        <LifeBar />
        <View style={styles.counters}>
          <CounterList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  counters: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  counter: {
    flexGrow: 1
  }
});
