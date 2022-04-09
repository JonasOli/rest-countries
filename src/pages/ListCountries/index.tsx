import CountryCard from "components/CountryCard";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "react-query";
import { listAllCountries } from "services/contriesService";
import { ListCoutriesContainer } from "./ListContries.styles";

const ListCountries = () => {
  const [search, setSearch] = useState<RegExp>(new RegExp(""));
  const { isLoading, data } = useQuery("listAllCountries", listAllCountries, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <AiOutlineLoading3Quarters />;

  return (
    <>
      <input
        type="text"
        onChange={(evt) => setSearch(new RegExp(evt.currentTarget.value, "gi"))}
      />
      <ListCoutriesContainer>
        {data
          ?.filter((country) => country.name.match(search))
          .map((country) => (
            <CountryCard key={country.name} {...country} />
          ))}
      </ListCoutriesContainer>
    </>
  );
};

export default ListCountries;
