import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Counter from '../counter/Counter-container';

export default class CounterList extends Component {
  render() {
    return (
      <View style={styles.counters}>
        {this.props.counters.map((item, index) => (
           <Counter index={index} key={index} />
        ))}
        </View>
      );
  }
}


const styles = StyleSheet.create({
  counters: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
});
