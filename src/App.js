import React from "react";
import "./App.css";
import { NavBar } from "./features/navBar/NavBar";
import { NavMenu } from "./features/navMenu/NavMenu";
import { Outlet } from "react-router-dom";
import imagePlaceholder from "./images/test_image.jpg";

const arrayOfPosts = [
  {
    id: 1,
    subreddit: "maybemaybemaybe",
    title: "Awesome",
    imageLink: imagePlaceholder,
    upvotes: 27,
    commentsNumb: 57,
    comments: [
      {
        profilePic: "link",
        name: "name",
        time: "time",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante neque, molestie et neque et, volutpat luctus ipsum. Duis nulla velit, luctus vitae accumsan in, pulvinar a risus.",
      },
      {
        profilePic: "link",
        name: "name",
        time: "time",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante neque, molestie et neque et, volutpat luctus ipsum. Duis nulla velit, luctus vitae accumsan in, pulvinar a risus.",
      },
      {
        profilePic: "link",
        name: "name",
        time: "time",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante neque, molestie et neque et, volutpat luctus ipsum. Duis nulla velit, luctus vitae accumsan in, pulvinar a risus.",
      },
      {
        profilePic: "link",
        name: "name",
        time: "time",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante neque, molestie et neque et, volutpat luctus ipsum. Duis nulla velit, luctus vitae accumsan in, pulvinar a risus.",
      },
    ],
  },
  {
    id: 2,
    subreddit: "maybemaybemaybe",
    title: "Awesome",
    imageLink: imagePlaceholder,
    upvotes: 1352,
    commentsNumb: 850,
    comments: [],
  },
  {
    id: 3,
    subreddit: "maybemaybemaybe",
    title: "Awesome",
    imageLink: imagePlaceholder,
    upvotes: 137,
    commentsNumb: 96,
    comments: [],
  },
];

function App() {
  return (
    <div className="AppRoot">
      <div className="AppWrapper">
        <h1 className="Main_Title">FAKE REDDIT</h1>
        <NavBar />
        <Outlet context={[arrayOfPosts]} />
        <NavMenu />
      </div>
    </div>
  );
}

export default App;
