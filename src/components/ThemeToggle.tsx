import { useState, useEffect } from "react";
import "../scss/components/ThemeToggle.scss";
import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState<null | string>(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setCurrentTheme(theme);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    const theme = currentTheme === "light" ? "dark" : "light";

    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setCurrentTheme(theme);
  };
  return (
    <div className="theme-toggle">
      <img src={sunIcon} alt="Sun icon" className="theme-toggle__icon" />
      <label className="theme-toggle__switch">
        <input
          className="theme-toggle__input"
          type="checkbox"
          checked={currentTheme === "dark"}
          onChange={toggleTheme}
        />
        <span className="theme-toggle__slider"></span>
      </label>
      <img src={moonIcon} alt="Moon icon" className="theme-toggle__icon" />
    </div>
  );
};

export default ThemeToggle;
