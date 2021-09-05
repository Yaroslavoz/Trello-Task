import { CONSTANTS } from '.';

export const addList = title => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
  };
};
export const deleteList = listId =>  {
   return { type: CONSTANTS.DELETE_LIST, listId }}


export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type
    }
  };
};
