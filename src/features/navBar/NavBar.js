import "./NavBar.css";
import logo from "../../images/Logo.svg";
import { CategoryTag } from "../../components/categoryTag/CategoryTag";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedCategory,
  activeCategories,
} from "../../features/navMenu/navMenuSlice";
import { displayNavBar, setPostActive, setPostNotActive } from "./navBarSlice";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function NavBar() {
  const selectedCategories = useSelector(activeCategories);
  const dispatch = useDispatch();
  const changeNavBar = useSelector(displayNavBar);
  const location = useLocation();

  const handleRemoveSelectedCategory = (category) => {
    dispatch(removeSelectedCategory(category));
  };

  const handleExitPost = () => {
    dispatch(setPostNotActive());
  };

  useEffect(() => {
    if (location.pathname === "/" && changeNavBar !== "categories") {
      dispatch(setPostNotActive());
    } else if (location.pathname !== "/" && changeNavBar === "categories") {
      dispatch(setPostActive());
    }
  }, [location, changeNavBar, dispatch]);

  return (
    <header className="header">
      <div className={changeNavBar === "categories" ? "display" : "hidden"}>
        <div className="logo_container">
          <img src={logo} alt="FR logo" className="FR_logo" />
        </div>
        <div className="selected_categories_container">
          {selectedCategories.map((category, index) => (
            <CategoryTag
              key={index}
              category={category}
              onClick={handleRemoveSelectedCategory}
            />
          ))}
        </div>
      </div>
      <div className={changeNavBar === "post" ? "display" : "hidden"}>
        <Link to={`/`} onClick={handleExitPost}>
          <div className="logo_container back_arrow">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
        </Link>
        <div className="route_container">
          <p>{location.pathname}</p>
        </div>
      </div>
    </header>
  );
}
