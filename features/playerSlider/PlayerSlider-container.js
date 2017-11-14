import { connect } from 'react-redux';

import { changeNumberOfPlayers } from '../shared/actions/counter';
import PlayerSlider from './PlayerSlider';

const mapStateToProps = state => ({
  numberOfPlayers: state.counters.length
});

const mapDispatchToProps = dispatch => ({
  onNumberOfPlayerChanged: numberOfPlayers => dispatch(changeNumberOfPlayers(numberOfPlayers))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSlider);
