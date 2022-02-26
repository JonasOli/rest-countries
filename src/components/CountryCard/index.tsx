import React from "react";
import { ICountry } from "../../services/contriesService";
import {
  CountryCardContainer,
  CountryDetails,
  CountryName,
} from "./CountryCard.styles";

const CountryCard: React.FC<ICountry> = ({
  imgSrc,
  countryName,
  population,
  region,
  capital,
}: ICountry) => {
  function numberWithCommas(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <CountryCardContainer>
      <img src={imgSrc} alt={countryName + " flag"} />

      <CountryDetails>
        <CountryName>{countryName}</CountryName>

        <div data-testid="population-number">
          <b>Population: </b>
          {numberWithCommas(population)}
        </div>
        <div>
          <b>Region: </b>
          {region}
        </div>
        <div>
          <b>Capital: </b>
          {capital}
        </div>
      </CountryDetails>
    </CountryCardContainer>
  );
};

export default CountryCard;
