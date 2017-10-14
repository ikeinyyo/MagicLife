import React, { Component } from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';

import DeckPicker from '../deckPicker/DeckPicker';

export default class Settings extends Component {

  static navigationOptions = {
   title: 'Settings',
  };

  render() {
    return (
      <View>
        <DeckPicker index="0" />
        <DeckPicker index="1" />
      </View>
    );
  }
}
