import React from "react";
import { ICountry } from "services/contriesService";
import { numberWithCommas } from "utils/numberFormat";
import {
  CountryCardContainer,
  CountryDetails,
  CountryName,
} from "./CountryCard.styles";

const CountryCard: React.FC<ICountry> = ({
  imgSrc,
  name,
  population,
  region,
  capital,
}: ICountry) => {
  return (
    <CountryCardContainer to={`/country/${name}`}>
      <img src={imgSrc} alt={name + " flag"} />

      <CountryDetails>
        <CountryName>{name}</CountryName>

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
