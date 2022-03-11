import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCountryByName } from "../../services/contriesService";

const CountryDetail = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery(
    "getCountryByName",
    () => getCountryByName(id ?? ""),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <AiOutlineLoading3Quarters />;

  console.log(data);

  if (data) {
    return (
      <div>
        <img src={data.imgSrc} alt={data.name + " flag"} />

        <div>
          <b>Native Name: </b>
          {data.nativeName}
        </div>
        <div>
          <b>Population: </b>
          {data.population}
        </div>
        <div>
          <b>Region: </b>
          {data.region}
        </div>
        <div>
          <b>Sub Region: </b>
          {data.subRegion}
        </div>
        <div>
          <b>Capital: </b>
          {data.capital}
        </div>
        <div>
          <b>Top Level Domain: </b>
          {data.topLevelDomain?.join(", ")}
        </div>
        <div>
          <b>Currencies: </b>
          {data.curencies?.join(", ")}
        </div>
        <div>
          <b>Languages: </b>
          {data.languages?.join(", ")}
        </div>
        <div>
          <b>Borders: </b>
          {data.borders?.join(" ")}
        </div>
      </div>
    );
  }

  return null;
};

export default CountryDetail;
