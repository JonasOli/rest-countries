import React from "react";
import ChangeThemeButton from "../ChangeThemeButton";
import { StyledHeader } from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <h1 data-testid="header-title">Where in the world?</h1>
      <ChangeThemeButton />
    </StyledHeader>
  );
};

export default Header;
