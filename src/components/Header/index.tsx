import React from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { changeTheme } from "../../App/themeSlice";
import { StyledHeader } from "./Header.styles";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const { darkTheme } = useAppSelector((state) => ({
    darkTheme: state.theme.dark,
  }));
  const dispatch = useAppDispatch();

  return (
    <StyledHeader>
      <h1>Where in the world?</h1>

      <button onClick={() => dispatch(changeTheme())}>
        {darkTheme ? (
          <>
            <FaMoon />
            <span>Dark mode</span>
          </>
        ) : (
          <>
            <span>Light mode</span>
          </>
        )}
      </button>
    </StyledHeader>
  );
};

export default Header;
