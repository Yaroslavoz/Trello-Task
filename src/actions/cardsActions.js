import { CONSTANTS } from '.';

export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID }
  };
};

export const deleteCard = (listID) => {
  return {
    type: CONSTANTS.DELETE_CARD, listID 
  };
};