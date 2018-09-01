
  
  const initialState = {

  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "test": {
        return state;
      }
      default:
        return state;
    }
  };
  
  export default reducer;