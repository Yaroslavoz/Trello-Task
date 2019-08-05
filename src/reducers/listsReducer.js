const initialState = [
  {
    title: 'Last Episode',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'we created a static list a static card'
      },
      {
        id: 1,
        text: 'we used a mix between..'
      }
    ]
  },
  {
    title: 'This Episode',
    id: 1,
    cards: [
      {
        id: 0,
        text: 'we will create our first reducer'
      },
      {
        id: 1,
        text: 'and render manh'
      },
      {
        id: 2,
        text: 'asdasdasdasd'
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
