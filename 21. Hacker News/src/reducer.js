const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "SET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payLoad.hits,
        nbPages: action.payLoad.nbPages,
      };
    case "REMOVE_STORY":
      return {
        ...state,
        hits: state.hits.filter(item => item.objectID !== action.payLoad),
      };
    case "HANDLE_SEARCH":
      return {
        ...state,
        query: action.payLoad,
        page: 0,
      };
    case "HANDLE_PAGE":
      if (action.payLoad === "dec") {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return {
          ...state,
          page: prevPage,
        };
      }
      if (action.payLoad === "next") {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }
        return {
          ...state,
          page: nextPage,
        };
      }
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};

export default reducer;
