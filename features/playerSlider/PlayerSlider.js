import React, { Component } from 'react';
import { Slider } from 'react-native';

export default class PlayerSlider extends Component {
  render() {
    return (<Slider minimumValue={1}
      maximumValue={4} value={this.props.numberOfPlayers}
      step={1} onValueChange={ value => {
        this.props.onNumberOfPlayerChanged(value)
      }} />);
      }
  }
