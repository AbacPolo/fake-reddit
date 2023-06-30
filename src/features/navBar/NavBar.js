import "./NavBar.css";
import logo from "../../images/Logo.svg";

const selected_categories = ["1", "2"];

export function NavBar() {
  const displayNavBar = "categories";
  return (
    <header className="header">
      <div
        className={
          displayNavBar === "categories" ? "category_display" : "hidden"
        }
      >
        <div className="logo_container">
          <img src={logo} alt="FR logo" className="FR_logo"/>
        </div>
        <div className="selected_categories_container">
          {/* {selected_categories.map((category) => (
            <CategoryCard category={category} />
          ))} */}
        </div>
      </div>
      <div className={displayNavBar === "route" ? "route_display" : "hidden"}>
        <div className="back_logo_container">
          <h2>
            <i className="fa-solid fa-arrow-left"></i>
          </h2>
        </div>
        <div className="route_container"></div>
      </div>
    </header>
  );
}
