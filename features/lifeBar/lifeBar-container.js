import { connect } from 'react-redux';

import LifeBar from './lifeBar';

const mapStateToProps = state => ({
  counters: state.counters.map((counter, index) => { life: counter, state.settings[index] })
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(LifeBar);
