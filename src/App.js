import React from "react";
import "./App.css";
import { NavBar } from "./features/navBar/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App-Root">
      <div className="App-Wrapper">
        <NavBar />
        <Outlet />
        {/* <Menu /> */}
      </div>
    </div>
  );
}

export default App;
