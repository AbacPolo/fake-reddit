import "./NavMenu.css";
import classNames from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedCategory,
  removeSelectedCategory,
  activeCategories,
  predefinedCategories,
  addCustomSearch,
} from "./navMenuSlice";
import { Link } from "react-router-dom";
import { CategoriesDisplay } from "../../components/categoriesDisplay/CategoriesDisplay";

export function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const selectedCategories = useSelector(activeCategories);
  const defaultCategories = useSelector(predefinedCategories);
  const dispatch = useDispatch();

  const handleMenuState = () => {
    isMenuOpen === false ? setIsMenuOpen(true) : setIsMenuOpen(false);
  };

  const handleSelectCategory = (category) => {
    if (!selectedCategories.includes(category)) {
      dispatch(addSelectedCategory(category));
    } else {
      dispatch(removeSelectedCategory(category));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCategories.includes(searchInput)) {
      dispatch(addCustomSearch(searchInput));
    }
    setSearchInput("");
    setIsMenuOpen(false);
  };

  return (
    <div className="Menu_Container">
      <div className="Search_Button_Container">
        <button className="Search_Button" onClick={handleMenuState}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="Nav_Buttons_Container">
        <button className="Nav_Button Popular_Button">
          <i className="fa-solid fa-arrow-trend-up"></i> Popular
        </button>
        <button className="Nav_Button FAQ_Button">
          <i className="fa-regular fa-circle-question"></i> FAQ
        </button>
      </div>
      <div
        className={classNames("PopUpMenu_Container", {
          MenuIsOpen: isMenuOpen === true,
        })}
      >
        <div className="PopUpMenu_Wrapper">
          <div className="SearchBar_Container">
            <Link to={`/`} className="SearchBar_Link_Container">
              <button className="BackLogo_Container" onClick={handleMenuState}>
                <i className="fa-solid fa-arrow-down"></i>
              </button>
            </Link>
            <form className="SearchInputForm_Container" onSubmit={handleSubmit}>
              <div className="SearchInput_Container">
                <input
                  className="SearchInput"
                  placeholder="Search on Reddit"
                  id="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.currentTarget.value)}
                  type="text"
                ></input>
              </div>
            </form>
          </div>
          <CategoriesDisplay
            defaultCategories={defaultCategories}
            selectedCategories={selectedCategories}
            handleSelectCategory={handleSelectCategory}
          />
        </div>
      </div>
    </div>
  );
}
