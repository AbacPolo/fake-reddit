import "./NavBar.css";
import logo from "../../images/Logo.svg";
import { CategoryTag } from "../../components/categoryTag/CategoryTag";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedCategory,
  activeCategories,
} from "../../components/navMenu/navMenuSlice";
import { displayNavBar, setPostNotActive } from "./navBarSlice";
import { Link } from "react-router-dom";

export function NavBar() {
  const selectedCategories = useSelector(activeCategories);
  const dispatch = useDispatch();
  const changeNavBar = useSelector(displayNavBar);

  const handleRemoveSelectedCategory = (category) => {
    dispatch(removeSelectedCategory(category));
  };

  const handleExitPost = () => {
    dispatch(setPostNotActive());
  };

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
          <p>/r/maybemaybenmayebe/POST_TITLE</p>
        </div>
      </div>
    </header>
  );
}
