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
      state.dark = !state.dark;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
