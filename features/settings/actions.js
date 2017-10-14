import { createAction } from 'redux-act';

const CHANGE_COLOR_DECK = "CHANGE_COLOR_DECK_ACTION";

const changeColorDeck = createAction(CHANGE_COLOR_DECK);

export { changeColorDeck };
