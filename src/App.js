import React from "react";
import "./App.css";
import { NavBar } from "./features/navBar/NavBar";
import { NavMenu } from "./features/navMenu/NavMenu";
import { HashRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="AppRoot">
        <div className="AppWrapper">
          <h1 className="Main_Title">FAKE REDDIT</h1>
          <NavBar />
          <Outlet />
          <NavMenu />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
