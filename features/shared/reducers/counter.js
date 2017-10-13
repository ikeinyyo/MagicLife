import { increment, decrement, reset } from '../actions/counter'

const INITIAL_LIFE_COUNT = 20;

export const counter = (state = INITIAL_LIFE_COUNT, action) => {
  switch (action.type) {
    case increment.getType():
      return state + 1;
    case decrement.getType():
      return state > 0 ? state - 1 : state;
    case reset.getType():
        return INITIAL_LIFE_COUNT;
    default:
      return state;
  }
}
