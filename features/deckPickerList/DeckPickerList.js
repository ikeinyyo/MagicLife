import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import DeckPicker from '../deckPicker/DeckPicker-container';

export default class DeckPickerList extends Component {
  render() {
    return (
      <ScrollView>
        {this.props.counters.map((item, index) => (
           <DeckPicker index={index} key={index} />
        ))}
        </ScrollView>
      );
  }
}
