import React from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Submenu from "./Submenu";
import "./App.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SideBar />
      <Submenu />
    </>
  );
};

export default App;
