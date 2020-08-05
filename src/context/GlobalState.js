//one single global state because it is small 

import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//intial state
const initialState = {
  transactions: [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
]
}

//create context 
export const GlobalContext = createContext(initialState);

//for other components to have access to the global state we need a provider
//so wrap all components in a provider

//provider component 
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
//this providers state and action to the children componeents 
  return (<GlobalContext.Provider value={{transations:state.transactions}}>
    {children}
    </GlobalContext.Provider>)
}