import { connect } from 'react-redux';

import CounterList from './CounterList';

const mapStateToProps = state => ({
  counters: state.counters
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterList);
