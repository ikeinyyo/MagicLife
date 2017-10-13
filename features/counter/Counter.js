import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { increment, decrement } from '../shared/actions/counter';

class Counter extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>{this.props.getCount(this.props.index)}</Text>
        <Button title="-" onPress={this.props.onDecrement}/>
        <Button title="+" onPress={this.props.onIncrement}/>
      </View>
    )};
}

const mapStateToProps = state => ({
    getCount: (index) => state.counter[index]
});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
