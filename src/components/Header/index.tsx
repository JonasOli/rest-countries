import React from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { changeTheme } from "../../App/themeSlice";

const Header = () => {
  const { darkTheme } = useAppSelector((state) => ({
    darkTheme: state.theme.dark,
  }));
  const dispatch = useAppDispatch();

  return (
    <header>
      <h1>Where in the world?</h1>
      <button onClick={() => dispatch(changeTheme())}>Change theme</button>

      <div>{darkTheme ? "dark" : "light"}</div>
    </header>
  );
};

export default Header;
