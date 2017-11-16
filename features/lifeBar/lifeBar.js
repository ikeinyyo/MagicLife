import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class LifeBar extends Component {
  render() {
    return (
      <View style={styles.container}>
          {this.props.counters.map(counter =>
            <View style={{backgroundColor: counter ? counter.color: 'blue', flexGrow: counter ? counter.life : 1 }} />
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 5
  }
});
