import "./NavMenu.css";
import classNames from "classnames";
import { CategoryTag } from "../categoryTag/CategoryTag";
import { useState } from "react";

const predefinedCategories = [
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
];

export function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuState = () => {
    isMenuOpen === false ? setIsMenuOpen(true) : setIsMenuOpen(false);
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
                <CategoryTag key={index} category={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
