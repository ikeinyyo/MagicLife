import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

import { reset } from '../shared/actions/counter';

class Toolbar extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Button title="Reiniciar" onPress={this.reset.bind(this)}/>
        <Button title="Configuración" onPress={this.props.onPressSettings}/>
      </View>
    )};

    reset() {
      Alert.alert(
        'Reiniciar la partida',
        '¿Quieres reiniciar la partida?',
        [
          {text: 'Cancelar', style: 'cancel'},
          {text: 'OK', onPress: () => this.props.onReset()},
        ],
        { cancelable: true }
      );
    }
}

const mapDispatchToProps = dispatch => ({
    onReset: () => dispatch(reset())
});

export default connect(null, mapDispatchToProps)(Toolbar);
