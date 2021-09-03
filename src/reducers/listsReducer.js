import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 5;

const initialState = [
  {
    title: 'Backlog',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'we created a static list a static card',
        createdAt: +new Date()
      },
      {
        id: `card-${1}`,
        text: 'we used a mix between..',
        createdAt: +new Date()
      }
    ]
  },
  {
    title: 'In Progress',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: 'we will create our first reducer',
        createdAt: +new Date()
      },
      {
        id: `card-${3}`,
        text: 'and render manh',
        createdAt: +new Date()
      },
      {
        id: `card-${4}`,
        text: 'asdasdasdasd',
        createdAt: +new Date()
      }
    ]
  }
];

const humanizeDateTime = ( date, currentDate = +new Date() ) => {
 
  const datetimeDiff = currentDate - date;
  if (datetimeDiff < 60000) {
        return 'just a moment ago';
      }
  else if(datetimeDiff < 3600000){
    return `${datetimeDiff/60000} minutes ago`
  }
  else if(datetimeDiff < 3600000){
    return `${datetimeDiff/3600000} hours ago`
  }
  else return 'Long time ago...'
}

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      };
      listID += 1;
      return [...state, newList];

      case CONSTANTS.DELETE_LIST:
        console.log(action)
      return state.filter(list => list.id !== action.listId);

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
        createdAt: +new Date()
      };
      
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [
              list.cards.reduce((acc, rec) => ([...acc, { ...rec, createdAt: humanizeDateTime(rec.createdAt)}]),[]),
              newCard
            ]
            // cards: [...list.cards, newCard]
            
          };
          
        } else {
          return list;
        }
      });
      console.log(newState)
      return newState;
    }
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
