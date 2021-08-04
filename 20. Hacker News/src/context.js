import React, { useEffect, useReducer, useContext } from "react";
import reducer from "./reducer";
import * as action from "./actions";

const API_KEY = "http://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async url => {
    dispatch({ type: action.SET_LOADING });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: action.SET_STORIES,
        payLoad: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeStory = id => {
    dispatch({ type: action.REMOVE_STORY, payLoad: id });
  };

  const handleSearch = query => {
    dispatch({ type: action.HANDLE_SEARCH, payLoad: query });
  };

  const handlePage = value => {
    dispatch({ type: action.HANDLE_PAGE, payLoad: value });
  };

  useEffect(() => {
    fetchStories(`${API_KEY}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        removeStory,
        handleSearch,
        handlePage,
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
