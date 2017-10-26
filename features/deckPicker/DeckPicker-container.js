import { connect } from 'react-redux';

import { changeColorDeck } from '../settings/actions';
import DeckPicker from './DeckPicker';

const mapStateToProps = state => ({
  getColor: (index) => state.settings[index].color
});

const mapDispatchToProps = dispatch => ({
    onColorChange: (index, newColor) => dispatch(changeColorDeck({ index: index, newColor: newColor })),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckPicker);
