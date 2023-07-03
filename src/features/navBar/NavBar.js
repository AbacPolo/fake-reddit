import "./NavBar.css";
import logo from "../../images/Logo.svg";
import { CategoryTag } from "../../components/categoryTag/CategoryTag";
import { useState } from "react";

const displayNavBar = "categories";

export function NavBar() {
  const [selectedCategories, setSelectedCategories] = useState(["Popular"]);

  const handleSelectedCategoryClick = (category) => {
    if (selectedCategories.length > 1) {
      const removeCategory = selectedCategories.filter(
        (item) => item !== category
      );
      setSelectedCategories(removeCategory);
    }
  };

  return (
    <header className="header">
      <div className={displayNavBar === "categories" ? "display" : "hidden"}>
        <div className="logo_container">
          <img src={logo} alt="FR logo" className="FR_logo" />
        </div>
        <div className="selected_categories_container">
          {selectedCategories.map((category, index) => (
            <CategoryTag key={index} category={category} onClick={handleSelectedCategoryClick}/>
          ))}
        </div>
      </div>
      <div className={displayNavBar === "route" ? "display" : "hidden"}>
        <div className="logo_container">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="route_container">
          <p>/r/maybemaybenmayebe/POST_TITLE</p>
        </div>
      </div>
    </header>
  );
}
