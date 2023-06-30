import "./NavBar.css";
import logo from "../../images/Logo.svg";
import { CategoryTag } from "../../components/categoryTag/CategoryTag";

const selected_categories = ["Popular"];
const displayNavBar = "categories";

export function NavBar() {
  return (
    <header className="header">
      <div
        className={
          displayNavBar === "categories" ? "display" : "hidden"
        }
      >
        <div className="logo_container">
          <img src={logo} alt="FR logo" className="FR_logo" />
        </div>
        <div className="selected_categories_container">
          {selected_categories.map((category, index) => (
            <CategoryTag key={index} category={category} />
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
