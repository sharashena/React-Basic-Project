import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import Data from "./data";

const App = () => {
  const allCategories = ["all", ...new Set(Data.map(item => item.category))];
  const [data, setData] = useState(Data);
  const [categories, setCategories] = useState(allCategories);
  const [count, setCount] = useState(0);

  const filterData = category => {
    if (category === "all") {
      setData(Data);
      return;
    }
    const filterItem = Data.filter(item => item.category === category);
    setData(filterItem);
  };

  

  return (
    <section className="container">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <h1 className="title">our menu</h1>
      <div className="title-border"></div>
      <Categories filterData={filterData} categories={categories} />
      <Menu items={data} />
    </section>
  );
};

export default App;
