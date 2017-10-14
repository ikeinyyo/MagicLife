import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { increment, decrement } from '../shared/actions/counter';
import ButtonEx from '../shared/components/ButtonEx';

class Counter extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={{backgroundColor: this.props.getColor(this.props.index), flexGrow: 1}}>
        <Text style={styles.life}>{this.props.getCount(this.props.index)}</Text>
        <View style={styles.container}>
          <ButtonEx
            style={styles.button} textStyle={styles.button_text}
            title="-"
            onPress={() => this.props.onDecrement(this.props.index)}/>
          <ButtonEx
            style={styles.button} textStyle={styles.button_text}
            title="+"
            onPress={() => this.props.onIncrement(this.props.index)}/>
        </View>
      </View>
    )};
}

const mapStateToProps = state => ({
  getCount: (index) => state.counters[index],
  getColor: (index) => state.settings[index].color
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
