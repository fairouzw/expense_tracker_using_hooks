//one single global state because it is small

import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//intial state
const initialState = {
  transactions: [],
};

//CREATE   context
export const GlobalContext = createContext(initialState);

//for other components to have access to the global state we need a provider
//so wrap all components in a provider

//PROVIDER component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //this providers state and action to the children componeents
  //ACTIONS

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
