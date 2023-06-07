import { Link } from "react-router-dom";
import "./Header.scss";

import { NavLink } from "react-router-dom/dist";
import logo from "../../assets/logos/InStock-Logo_2x.png";

function Header() {
  const activeClassName = ({ isActive }) =>
    !isActive ? "header__link" : "header__link header__link--active";

  return (
    <>
      <section className="header">
        <div className="header__wrapper">
          <Link to="/" className="header__logo-link">
            <img className="header__logo" src={logo} alt="instock Logo" />
          </Link>
          <div className="header__links">
            <NavLink to="/warehouse" className={activeClassName}>
              Warehouse
            </NavLink>
            <NavLink to="/inventory" className={activeClassName}>
              Inventory
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
