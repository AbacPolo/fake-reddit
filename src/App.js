import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./features/navBar/NavBar";

function App() {
  return (
    <div className="App-Root">
      <div className="App-Wrapper">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
