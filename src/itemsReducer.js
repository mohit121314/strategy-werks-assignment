const initialState = {
    items: []
  };
  
  const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_ITEMS":
        return {
          ...state,
          items: [...state.items, ...action.payload.items]
        };
      default:
        return state;
    }
  };
  
  export default itemsReducer;
  