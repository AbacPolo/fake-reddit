import React from "react";
import "./App.css";
import { NavBar } from "./features/navBar/NavBar";
import { NavMenu } from "./components/navMenu/NavMenu";
import { Outlet } from "react-router-dom";
import imagePlaceholder from "./images/test_image.jpg";

const arrayOfPosts = [
  {
    id: 1,
    subreddit: "maybemaybemaybe",
    title: "Awesome",
    imageLink: imagePlaceholder,
    upvotes: 27,
    comments: 13,
  },
  {
    id: 2,
    subreddit: "maybemaybemaybe",
    title: "Awesome",
    imageLink: imagePlaceholder,
    upvotes: 1352,
    comments: 563,
  },
  {
    id: 3,
    subreddit: "maybemaybemaybe",
    title: "Awesome",
    imageLink: imagePlaceholder,
    upvotes: 137,
    comments: 57,
  },
];

function App() {
  return (
    <div className="AppRoot">
      <div className="AppWrapper">
        <NavBar />
        <Outlet context={[arrayOfPosts]} />
        <NavMenu />
      </div>
    </div>
  );
}

export default App;
