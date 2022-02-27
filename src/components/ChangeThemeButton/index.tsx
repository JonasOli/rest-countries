import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { StyledChangeThemeButton } from "./ChangeThemeButton.styles";

enum Theme {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

const ChangeThemeButton = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ?? Theme.LIGHT
  );

  useEffect(() => {
    if (theme === Theme.DARK) setDarkAttribute(theme);
  }, []);

  function changeThemeMode() {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

    setDarkAttribute(newTheme);
  }

  function setDarkAttribute(theme: Theme) {
    document.documentElement.setAttribute(
      "data-theme",
      theme === Theme.DARK ? "dark" : "light"
    );
  }

  return (
    <StyledChangeThemeButton
      onClick={changeThemeMode}
      data-testid="change-theme-button"
    >
      {theme === Theme.DARK ? (
        <>
          <FaMoon />
          <span>Dark mode</span>
        </>
      ) : (
        <>
          <FaSun />
          <span>Light mode</span>
        </>
      )}
    </StyledChangeThemeButton>
  );
};

export default ChangeThemeButton;
