import { changeColorDeck } from './actions.js';

const initialState = [ { color: "#FFFFE1" }, { color: "#FFFFE1" } ];

const changeColor = (state, action) => {
  return Object.assign({}, state, { color: action.payload.newColor });
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case changeColorDeck.getType():
      return [...state.slice(0, action.payload.index),
        changeColor(state[action.payload.index], action),
        ...state.slice(action.payload.index + 1)]
      break;
    default:
      return state;
  }
}

export { settings };
