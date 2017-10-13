import { INCREMENT_ACTION, DECREMENT_ACTION } from './actions.js'

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_ACTION:
      return state + 1;
    case DECREMENT_ACTION:
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
}
