import React from "react";
import SearchForm from "./searchForm";
import Stories from "./Stories";
import Buttons from "./Buttons";

const App = () => {
  return (
    <React.Fragment>
      <SearchForm />
      <Buttons />
      <Stories />
    </React.Fragment>
  );
};

export default App;
