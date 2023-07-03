import React from "react";
import "./App.css";
import { NavBar } from "./features/navBar/NavBar";
import { NavMenu } from "./components/navMenu/NavMenu";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [selectedCategories, setSelectedCategories] = useState(["Popular"]);
  const [predefinedCategories, setPredefinedCategories] = useState([
    "Popular",
    "Videogames",
    "Sports",
    "Business",
    "Television",
    "Celebs",
    "Animals and Mascots",
    "Anime",
    "Art",
    "Cars",
    "DIY",
    "Culture, race and ethnicities",
    "Food",
    "History",
  ]);

  return (
    <div className="AppRoot">
      <div className="AppWrapper">
        <NavBar
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <Outlet />
        <NavMenu
          predefinedCategories={predefinedCategories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </div>
    </div>
  );
}

export default App;
