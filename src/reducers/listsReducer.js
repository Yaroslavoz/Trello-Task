import { CONSTANTS } from '../actions';
import { v4 as uuidv4 } from 'uuid'



const browserState = JSON.parse(localStorage.getItem('lastEdited')) 
const initialState = [
  {
    title: 'Backlog',
    id: uuidv4(),
    cards: [
      {
        id: uuidv4(),
        text: 'to create the newCardForm',
        createdAt: +new Date()
      },
      {
        id: uuidv4(),
        text: 'to make an authorization form and cabinet',
        createdAt: +new Date()
      }
    ]
  },
  {
    title: 'In Progress',
    id: uuidv4(),
    cards: [
      {
        id: uuidv4(),
        text: 'first step in Progress..',
        createdAt: +new Date()
      }
    ]
  }
];


const listsReducer = (state = browserState||initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: uuidv4()
      };
      
      return [...state, newList];

    case CONSTANTS.DELETE_LIST:
      const filteredList = state.filter(list => list.id !== action.listId)
      localStorage.setItem('lastEdited', JSON.stringify(filteredList))
      return filteredList

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: uuidv4(),
        createdAt: +new Date()
      };
      
      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
            
          };
          
        } else {
          return list;
        }
      });
      
      localStorage.setItem('lastEdited', JSON.stringify(newState))
      
      return newState;
    }

    case CONSTANTS.DELETE_CARD:
      
    
    const updatedState = state.map(list => {
      if (list.id === action.payload.listID) {
        const updatedCards = list.cards.filter(card => card.id !== action.payload.cardID)
        return {
          ...list,
          cards: [...updatedCards]
          
        };
        
      } else {
        return list;
      }
    });
    localStorage.setItem('lastEdited', JSON.stringify(updatedState))
    return updatedState
    


    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        type  
      } = action.payload;

      const newState = [...state];

      // dragging lists around - the listOrderReducer should handle this
      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }
      //In the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state.find(list => droppableIdStart === list.id);
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state.find(list => droppableIdEnd === list.id);
        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;

    default:
      return state;
  }
};

export default listsReducer;
