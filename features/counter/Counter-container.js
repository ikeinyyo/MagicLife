import { connect } from 'react-redux';

import { increment, decrement } from '../shared/actions/counter';

import Counter from './Counter';

const mapStateToProps = state => ({
  getCount: (index) => state.counters[index],
  getColor: (index) => state.settings[index] ? state.settings[index].color : null
});

const mapDispatchToProps = dispatch => ({
    onIncrement: (index) => dispatch(increment({ index: index })),
    onDecrement: (index) => dispatch(decrement({ index: index }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
