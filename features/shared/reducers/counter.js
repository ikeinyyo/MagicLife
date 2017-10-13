import { increment, decrement, reset } from '../actions/counter'

const INITIAL_LIFE_COUNT = 20;
const initialState = [INITIAL_LIFE_COUNT, INITIAL_LIFE_COUNT];
export const counter = (state = initialState, action) => {
  switch (action.type) {
    case increment.getType():
      return [state[0] + 1, state[1]];
    case decrement.getType():
      return [state[0] > 0 ? state[0] - 1 : state[0], state[1]];
    case reset.getType():
        return initialState;
    default:
      return state;
  }
}
