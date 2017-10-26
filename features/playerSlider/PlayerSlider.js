import React, { Component } from 'react';
import { Slider } from 'react-native';

export default class PlayerSlider extends Component {
  render() {
    return (<Slider minimumValue={1} maximumValue={4} step={1} />);
  }
}
