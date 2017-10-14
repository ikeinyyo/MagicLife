import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';

export default class DeckPicker extends Component {
  render() {
    return (
      <View>
        <Text>Color del Mazo</Text>
          <Picker
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="Blanco" value="#FFFFE1" />
            <Picker.Item label="Azul" value="#A0DDF9" />
            <Picker.Item label="Negro" value="#C4B8B6" />
            <Picker.Item label="Rojo" value="#F6A28B" />
            <Picker.Item label="Verde" value="#8DD4A9" />
          </Picker>
      </View>
    );
  }
}
