import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import App from ".";

const queryClient = new QueryClient();
const wrapper = (children: React.ReactElement) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("<App />", () => {
  describe("Theme change tests", () => {
    it("should change the background and font colors when clicking the theme button", () => {
      // render(wrapper(<App />));

      // const changeThemeButton = screen.getByTestId("change-theme-button");

      // fireEvent.click(changeThemeButton);

      // expect(screen.getByRole("banner")).toHaveStyle("background-color: white");
    });
  });
});
