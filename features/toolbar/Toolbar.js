import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

import { reset } from '../shared/actions/counter';
import ButtonEx from '../shared/components/ButtonEx';

class Toolbar extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <ButtonEx style={{marginLeft: 5}} title="Reiniciar" onPress={this.reset.bind(this)}/>
        <ButtonEx style={{marginLeft: 5}} title="Configuración" onPress={this.props.onPressSettings}/>
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
