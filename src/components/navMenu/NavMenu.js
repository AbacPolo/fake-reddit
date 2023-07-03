import "./NavMenu.css";
import classNames from "classnames";
import { CategoryTag } from "../categoryTag/CategoryTag";
import { useState } from "react";

export function NavMenu(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { predefinedCategories, selectedCategories, setSelectedCategories } = props;

  const handleMenuState = () => {
    isMenuOpen === false ? setIsMenuOpen(true) : setIsMenuOpen(false);
  };

  const handleCategoryTagClick = (category) => {
    if (selectedCategories.includes(category)) {
      let removeCategorySelected = selectedCategories.filter(
        (item) => item !== category
      );
      if (removeCategorySelected.length < 1) {
        removeCategorySelected = ["Popular"];
      }
      setSelectedCategories(removeCategorySelected);
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
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
            <button className="BackLogo_Container" onClick={handleMenuState}>
              <i className="fa-solid fa-arrow-down"></i>
            </button>
            <div className="SearchInput_Container">
              <input
                className="SearchInput"
                placeholder="Search on Reddit"
              ></input>
            </div>
          </div>
          <div className="Categories_Container">
            <h3>Categories</h3>
            <div className="CategoriesTags_Container">
              {predefinedCategories.map((category, index) => (
                <CategoryTag
                  key={index}
                  category={category}
                  selectedCategories={selectedCategories}
                  onClick={handleCategoryTagClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
