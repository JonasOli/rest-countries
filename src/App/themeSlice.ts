import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ThemeState {
  dark: boolean;
}

// Define the initial state using that type
const initialState: ThemeState = {
  dark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      const darkTheme = !state.dark;

      state.dark = darkTheme;

      document.documentElement.setAttribute(
        "data-theme",
        darkTheme ? "dark" : "light"
      );
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
