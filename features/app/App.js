import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Counter from '../counter/Counter';
import Settings from '../settings/Settings';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Settings />
        <View style={styles.counters}>
          <Counter index="0" style={{backgroundColor: 'red', flexGrow: 1}} />
          <Counter index="1" style={{backgroundColor: 'green', flexGrow: 1}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20
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
