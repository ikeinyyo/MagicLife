import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { changeColorDeck } from '../settings/actions';

class DeckPicker extends Component {
  render() {
    return (
      <View>
        <Text>Color del Mazo</Text>
          <Picker
            selectedValue={this.props.getColor(this.props.index)}
            onValueChange={(itemValue) => this.props.onColorChange(this.props.index, itemValue)}>
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

const mapStateToProps = state => ({
  getColor: (index) => state.settings[index].color
});

const mapDispatchToProps = dispatch => ({
    onColorChange: (index, newColor) => dispatch(changeColorDeck({ index: index, newColor: newColor })),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckPicker);
