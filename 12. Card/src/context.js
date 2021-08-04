import React, { useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const defaultState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearList = () => {
    dispatch({ type: "CLEAR_LIST" });
  };

  const removeItem = id => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [state.cart]);

  const getAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearList,
        removeItem,
        getAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
