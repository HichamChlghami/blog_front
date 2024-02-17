const Reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          user: null,
          isFetching: true,
          error: false,
          isAdmin: state.isAdmin, // Preserve the isAdmin state
          
        };
      case "LOGIN_SUCCESS":
        return {
          user: action.payload,
          isFetching: false,
          error: false,
          isAdmin: state.isAdmin, // Preserve the isAdmin state
        };
      case "LOGIN_FAILURE":
        return {
          user: null,
          isFetching: false,
          error: true,
          isAdmin: state.isAdmin, // Preserve the isAdmin state
        };
      case "SET_ADMIN_ROLE":
        return {
          isAdmin: action.payload,
          user:action.payload ,
          isFetching: false,
          error: false,

          

        };
    
        case "CHECK_DATA":
        return {
          ...state,
          check: action.payload,
          word: action.word,

         
        };
      default:
        return state;
    }
  };
  
  export default Reducer;
