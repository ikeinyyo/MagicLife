import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { increment, decrement } from './actions';

class Counter extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.count}</Text>
        <Button title="-" onPress={this.props.onDecrement}/>
        <Button title="+" onPress={this.props.onIncrement}/>
      </View>
    )};
}

const mapStateToProps = state => ({
    count : state.counter
});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(increment),
    onDecrement: () => dispatch(decrement)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
