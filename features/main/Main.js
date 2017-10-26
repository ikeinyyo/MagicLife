import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Counter from '../counter/Counter-container';
import Toolbar from '../toolbar/Toolbar';

export default class Main extends Component {

  static navigationOptions = {
   title: 'Magic Life',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Toolbar onPressSettings={() => navigate('Settings')} />
        <View style={styles.counters}>
          <Counter index="0"  />
          <Counter index="1" style={{backgroundColor: '#8DD4A9', flexGrow: 1}} />
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
