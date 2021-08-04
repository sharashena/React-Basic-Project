import React from "react";
import CocktailsList from '../Components/CocktailsList';
import SearchForm from '../Components/SearchForm';

const Home = () => {
  return <main>
    <SearchForm/>
    <CocktailsList/>
  </main>;
};

export default Home;
