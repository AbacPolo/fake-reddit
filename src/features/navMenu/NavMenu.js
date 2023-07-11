import "./NavMenu.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSelectedCategory,
  activeCategory,
  predefinedCategories,
  addCustomSearch,
  goToPopular,
  loadSelectedCategory,
  loadPopularPosts,
} from "./navMenuSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CategoriesDisplay } from "../../components/categoriesDisplay/CategoriesDisplay";
import { SearchBar } from "../../components/searchBar/SearchBar";

export function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const selectedCategory = useSelector(activeCategory);
  const defaultCategories = useSelector(predefinedCategories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isMenuOpen && setIsMenuOpen(false);
  }, [selectedCategory]);

  const handleMenuState = () => {
    isMenuOpen === false ? setIsMenuOpen(true) : setIsMenuOpen(false);
  };

  const handleSelectCategory = (category) => {
    if (category === "Popular") {
      dispatch(goToPopular(category));
      dispatch(loadPopularPosts());
    } else if (selectedCategory !== category) {
      dispatch(changeSelectedCategory(category));
      dispatch(loadSelectedCategory(category));
    } else {
      dispatch(goToPopular(category));
      dispatch(loadPopularPosts());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCustomSearch(searchInput));
    dispatch(loadSelectedCategory(searchInput));
    setSearchInput("");
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleGoToPopular = () => {
    dispatch(goToPopular());
    dispatch(loadPopularPosts());
  };

  return (
    <div className="All_Menus_Container">
      <div className="Menu_Container_Phone">
        <div className="NavMenu_Container">
          <div className="Search_Button_Container">
            <button
              className="Search_Button"
              aria-label="Open Search Menu Button"
              onClick={handleMenuState}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="Nav_Buttons_Container">
            <button
              className="Nav_Button Popular_Button"
              aria-label="Go to Popular Button"
              onClick={handleGoToPopular}
            >
              <Link to={`/`} className="Link_Container">
                <i className="fa-solid fa-arrow-trend-up"></i> Popular
              </Link>
            </button>
            <button className="Nav_Button FAQ_Button" aria-label="Open FAQ Button">
              <Link to={`/`} className="Link_Container">
                <i className="fa-regular fa-circle-question"></i> FAQ
              </Link>
            </button>
          </div>
        </div>
        <div
          className={classNames("PopUpMenu_Container", {
            MenuIsOpen: isMenuOpen === true,
          })}
        >
          <div className="PopUpMenu_Wrapper">
            <div className="SearchBar_Container">
              <Link to={`/`} className="SearchBar_Link_Container">
                <button
                  className="BackLogo_Container"
                  aria-label="Go Back Button"
                  onClick={handleMenuState}
                >
                  <i className="fa-solid fa-arrow-down"></i>
                </button>
              </Link>
              <SearchBar
                handleSubmit={handleSubmit}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            </div>
            <CategoriesDisplay
              defaultCategories={defaultCategories}
              selectedCategory={selectedCategory}
              handleSelectCategory={handleSelectCategory}
            />
          </div>
        </div>
      </div>
      <div className="Menu_Container_Desktop">
        <div
          className={classNames("Desktop_PopUpMenu_Container", {
            Desktop_MenuIsOpen: isMenuOpen === true,
          })}
        >
          <div className="Desktop_PopUpMenu_Wrapper">
            <div className="Desktop_SearchBar_Container">
              <SearchBar
                handleSubmit={handleSubmit}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            </div>
            <CategoriesDisplay
              defaultCategories={defaultCategories}
              selectedCategory={selectedCategory}
              handleSelectCategory={handleSelectCategory}
            />
          </div>
        </div>
        <div className="Desktop_NavMenu_Container">
          <button
            className="Desktop_Menu_Button"
            aria-label="Search Button"
            onClick={handleMenuState}
          >
            {isMenuOpen ? (
              <i className="fa-solid fa-arrow-left"></i>
            ) : (
              <i className="fa-solid fa-magnifying-glass"></i>
            )}
          </button>
          <button
            className="Desktop_Menu_Button"
            aria-label="Popular Button"
            onClick={handleGoToPopular}
          >
            <Link to={`/`} className="Link_Container">
              <i className="fa-solid fa-arrow-trend-up"></i>
            </Link>
          </button>
          <button className="Desktop_Menu_Button" aria-label="FAQ Button">
            <Link to={`/`} className="Link_Container">
              <i className="fa-regular fa-circle-question"></i>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
