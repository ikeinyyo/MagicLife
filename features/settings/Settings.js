import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import { reset } from '../shared/actions/counter';

class Settings extends Component {
  render() {
    return (
      <View>
        <Button title="Reset" onPress={this.props.onReset}/>
      </View>
    )};
}

const mapDispatchToProps = dispatch => ({
    onReset: () => dispatch(reset())
});

export default connect(null, mapDispatchToProps)(Settings)
