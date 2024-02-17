"use client"





import { createContext, useEffect, useReducer } from "react";
import Reducer from "./reducer";

// Wrap this check in a try-catch block to handle potential errors in parsing JSON
function getParsedItem(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) ;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null; // Return a default value if parsing fails
  }
}

const userFromLocalStorage = getParsedItem("user");
const isAdminFromLocalStorage = getParsedItem("isAdmin");

const INITIAL_STATE = {
  user: userFromLocalStorage || false,
  isFetching: false,
  error: false,
  isAdmin: isAdminFromLocalStorage || false,
  check : true
};

const Context = createContext(INITIAL_STATE);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("isAdmin", JSON.stringify(state.isAdmin));
  }, [state.user, state.isAdmin]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        isAdmin: state.isAdmin,
        check: state.check,
        word: state.word,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
