import { connect } from 'react-redux';

import DeckPickerList from './DeckPickerList';

const mapStateToProps = state => ({
  counters: state.counters
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckPickerList);
