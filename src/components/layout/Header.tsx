import { useContext } from "react";
import "../../scss/components/layout/Header.scss";
import logo from "../../assets/desktop/logo.svg";
import { ThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-box">
          <img src={logo} alt="devjobs logo" className="header__logo" />
        </div>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </header>
  );
};

export default Header;
