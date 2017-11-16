import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import CounterButton from '../shared/components/CounterButton';

export default class Counter extends Component {

  render() {
    return (
      <View style={{backgroundColor: this.props.getColor(this.props.index), flexGrow: 1}}>
        <Text style={styles.life}>{this.props.getCount(this.props.index)}</Text>
        <View style={styles.container}>
          <CounterButton
            style={styles.button} textStyle={styles.button_text}
            title="-"
            onPress={() => this.props.onDecrement(this.props.index)}/>
          <CounterButton
            style={styles.button} textStyle={styles.button_text}
            title="+"
            onPress={() => this.props.onIncrement(this.props.index)}/>
        </View>
      </View>
    )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  life: {
    fontSize: 100,
    textAlign: 'center',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  button_text: {
    fontSize: 72,
    textAlign: 'center',
  }
});
