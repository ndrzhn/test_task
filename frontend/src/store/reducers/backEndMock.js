const initialState = {
  scale: "day",
  graphicData: []
};

export const backEndMock = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SCALE':
      return { ...state, scale: action.scale }; 
    case 'FETCH_DATA':
      return { ...state, graphicData: action.payload };
    default:
      return state;
  }
};
