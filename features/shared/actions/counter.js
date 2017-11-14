import { createAction } from 'redux-act';

const INCREMENT = "INCREMENT_COUNTER";
const DECREMENT = "DECREMENT_COUNTER";
const RESET = "RESET_COUNTERS";
const CHANGE_NUMBER_OF_PLAYERS = "CHANGE_NUMBER_OF_PLAYERS";

const increment = createAction(INCREMENT);
const decrement = createAction(DECREMENT);
const reset = createAction(RESET);
const changeNumberOfPlayers = createAction(CHANGE_NUMBER_OF_PLAYERS);

export { increment, decrement, reset, changeNumberOfPlayers };
