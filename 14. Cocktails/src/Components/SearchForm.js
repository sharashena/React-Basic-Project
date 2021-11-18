import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const search = React.useRef("");
  React.useEffect(() => {
    search.current.focus();
  }, []);
  const searchCocktails = () => {
    setSearchTerm(search.current.value);
  };

  const submit = e => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={search}
            onChange={searchCocktails}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
