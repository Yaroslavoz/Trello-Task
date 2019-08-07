import { CONSTANTS } from '.';

export const addList = title => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
  };
};
