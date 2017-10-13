import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { increment, decrement } from './actions.js';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor(){
       super();
   }

  render() {
    return (
      <View>
        <Text>{this.props.count}</Text>
        <Button title="-" onPress={this.props.onDecrement}></Button>
        <Button title="+" onPress={this.props.onIncrement}></Button>
      </View>
    );
  };
}

const mapStateToProps = state => ({
    count : state.counter
});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(increment),
    onDecrement: () => dispatch(decrement)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
