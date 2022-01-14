import { Link } from "react-router-dom";
import "../../scss/components/layout/Header.scss";
import logo from "../../assets/desktop/logo.svg";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-box">
          <Link className="header__link" to="/">
            <img src={logo} alt="devjobs logo" className="header__logo" />
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
