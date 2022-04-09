import CountryCard from "components/CountryCard";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "react-query";
import { listAllCountries } from "services/contriesService";
import { ListCoutries } from "./ListContries.styles";

const ListCountries = () => {
  const [searchCountry, setSearchCountry] = useState(new RegExp(""));
  const [filterRegion, setFilterRegion] = useState("");
  const { isLoading, data } = useQuery("listAllCountries", listAllCountries, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <AiOutlineLoading3Quarters />;

  function getCountryRegions() {
    const regions = data?.map((country) => country.region);

    return Array.from(new Set(regions));
  }

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(evt) =>
            setSearchCountry(new RegExp(evt.currentTarget.value, "gi"))
          }
        />

        <select
          name="filter-region"
          onChange={(evt) => setFilterRegion(evt.currentTarget.value)}
        >
          <option value="">Select...</option>

          {getCountryRegions().map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <ListCoutries>
        {data
          ?.filter((country) => country.name.match(searchCountry))
          .filter((country) => {
            if (!filterRegion) return true;

            return country.region === filterRegion;
          })
          .map((country) => (
            <CountryCard key={country.name} {...country} />
          ))}
      </ListCoutries>
    </>
  );
};

export default ListCountries;
