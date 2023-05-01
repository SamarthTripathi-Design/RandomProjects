import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import NightlightIcon from "@mui/icons-material/Nightlight";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Header = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Invoioce Billing
        </Link>
        <div className={"nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav_item">
              <Link to="/" className="nav__link active-link">
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link to="table" className="nav__link">
                Tables
              </Link>
            </li>
            <li className="nav_item">
              <div className="nav__link">
                <div className="darkmode__icon" onClick={toggleTheme}>
                  {theme === "light-theme" ? (
                    <WbSunnyRoundedIcon />
                  ) : (
                    <NightlightIcon color="#ffffff" />
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
