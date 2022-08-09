import React, { createContext, useReducer, useContext } from "react"

export const UserContext = createContext();

export const UserContextProvider = ({reducer, initialState, children}) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);

export const useStateValue = () => useContext(UserContext);