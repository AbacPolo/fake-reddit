import "./NavMenu.css";

export function NavMenu() {
  return (
    <div className="Menu_Container">
      <div className="Search_Button_Container">
        <button className="Search_Button">
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
    </div>
  );
}
