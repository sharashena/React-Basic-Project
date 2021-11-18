import React from "react";
import "./App.scss";
import { useFetch } from "./useFetch";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

const url = "https://course-api.com/react-useReducer-cart-project";

function App() {
  const { loading } = useFetch(url);
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
