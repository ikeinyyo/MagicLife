import React, { Component } from 'react';
import { TouchableOpacity, Button } from 'react-native';

export default class ButtonEx extends Component {
  render() {
    return (
      <TouchableOpacity style={this.props.style}>
        <Button title={this.props.title} onPress={this.props.onPress} />
      </TouchableOpacity>
    );}
}
