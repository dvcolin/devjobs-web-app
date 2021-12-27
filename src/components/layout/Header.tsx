import "../../scss/components/layout/Header.scss";
import logo from "../../assets/desktop/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-box">
          <img src={logo} alt="devjobs logo" className="header__logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
