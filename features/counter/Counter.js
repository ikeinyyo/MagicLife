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
        <Button title="-" onPress={() => this.props.onDecrement(this.props.index)}/>
        <Button title="+" onPress={() => this.props.onIncrement(this.props.index)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
