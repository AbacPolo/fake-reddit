import React from "react";
import "./App.css";
import { NavBar } from "./features/navBar/NavBar";
import { NavMenu } from "./components/navMenu/NavMenu";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div className="AppRoot">
      <div className="AppWrapper">
        <NavBar />
        <Outlet />
        <NavMenu />
      </div>
    </div>
  );
}

export default App;
