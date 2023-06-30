import "./NavBar.css";

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
        <div className="logo-container">
          <h1>FR</h1>
        </div>
        <div className="selected-categories-container">
          {/* {selected_categories.map((category) => (
            <CategoryCard category={category} />
          ))} */}
        </div>
      </div>
      <div className={displayNavBar === "route" ? "route_display" : "hidden"}>
        <div className="back-logo-container">
          <h2>c-</h2>
        </div>
        <div className="route-container"></div>
      </div>
    </header>
  );
}
