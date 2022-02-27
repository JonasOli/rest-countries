import { render, screen } from "@testing-library/react";
import React from "react";
import CountryCard from ".";

describe("<CountryCard />", () => {
  it("should display the population number formated with a comma in the thousands", () => {
    render(
      <CountryCard
        capital="test"
        countryName="test"
        imgSrc="src"
        population={10000}
        region="test"
      />
    );

    const populationNumber = screen.getByTestId("population-number");

    expect(populationNumber.textContent).toEqual("Population: 10,000");
  });
});
