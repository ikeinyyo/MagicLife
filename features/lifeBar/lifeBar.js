import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

export default class LifeBar extends Component {
  render() {
    return (
      <View style={styles.container}>
          {this.props.counters.map((counter, index) =>
            (<TouchableOpacity key={index}
              style={{backgroundColor: counter.color, flexGrow: counter.life }}
              />)
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 10,
    marginTop: 5,
    marginBottom: 5
  }
});
