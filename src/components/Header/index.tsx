import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { changeTheme } from "../../App/themeSlice";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  box-shadow: 1px 3px 9px hsl(0deg 0% 74%);

  h1 {
    font-size: 2rem;
  }
`;

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
