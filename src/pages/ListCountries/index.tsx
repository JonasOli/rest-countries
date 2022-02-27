import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "react-query";
import CountryCard from "../../components/CountryCard";
import { listAllCountries } from "../../services/contriesService";
import { ListCoutriesContainer } from "./ListContries.styles";

const ListCountries = () => {
  const { isLoading, data } = useQuery("repoData", listAllCountries, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <AiOutlineLoading3Quarters />;

  return (
    <ListCoutriesContainer>
      {data?.map((country) => (
        <CountryCard key={country.countryName} {...country} />
      ))}
    </ListCoutriesContainer>
  );
};

export default ListCountries;
