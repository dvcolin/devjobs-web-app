import "../../scss/components/layout/Header.scss";
import logo from "../../assets/desktop/logo.svg";

const Header = () => {
  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    const theme = currentTheme === "light" ? "dark" : "light";

    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-box">
          <img src={logo} alt="devjobs logo" className="header__logo" />
        </div>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
    </header>
  );
};

export default Header;
