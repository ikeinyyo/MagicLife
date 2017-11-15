import { changeColorDeck } from './actions.js';
import { changeNumberOfPlayers } from '../shared/actions/counter';

const initialColor = { color: "#FFFFE1" };
const initialState = [ initialColor, initialColor ];

const changeColor = (state, action) => {
  return Object.assign({}, state, { color: action.payload.newColor });
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case changeColorDeck.getType():
      return [...state.slice(0, action.payload.index),
        changeColor(state[action.payload.index], action),
        ...state.slice(action.payload.index + 1)]
      case changeNumberOfPlayers.getType():
        return new Array(action.payload).fill(initialColor);
      break;
    default:
      return state;
  }
}

export { settings };
