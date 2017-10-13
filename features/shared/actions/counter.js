import { createAction } from 'redux-act';

const INCREMENT = "INCREMENT_COUNTER";
const DECREMENT = "DECREMENT_COUNTER";
const RESET = "RESET_COUNTERS";

const increment = createAction(INCREMENT);
const decrement = createAction(DECREMENT);
const reset = createAction(RESET);

export { increment, decrement, reset };
