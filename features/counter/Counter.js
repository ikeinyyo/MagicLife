import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { increment, decrement } from '../shared/actions/counter';

class Counter extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={this.props.style}>
        <View style={styles.container}>
          <Button title="-" onPress={() => this.props.onDecrement(this.props.index)}/>
          <Text>{this.props.getCount(this.props.index)}</Text>
          <Button title="+" onPress={() => this.props.onIncrement(this.props.index)}/>
        </View>
      </View>
    )};
}

const mapStateToProps = state => ({
    getCount: (index) => state.counters[index]
});

const mapDispatchToProps = dispatch => ({
    onIncrement: (index) => dispatch(increment({ index: index })),
    onDecrement: (index) => dispatch(decrement({ index: index }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
