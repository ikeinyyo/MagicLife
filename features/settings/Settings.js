import React, { Component } from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';

import DeckPickerList from '../deckPickerList/DeckPickerList-container';
import PlayerSlider from '../playerSlider/PlayerSlider-container';

export default class Settings extends Component {

  static navigationOptions = {
   title: 'Settings',
  };

  render() {
    return (
      <View>
        <PlayerSlider />
        <DeckPickerList />
      </View>
    );
  }
}
