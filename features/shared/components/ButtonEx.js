import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

class ButtonEx extends Component {
  render() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
        <Text style={this.props.textStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );}
}

export default ButtonEx;
