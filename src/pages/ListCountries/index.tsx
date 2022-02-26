import React from "react";
import { useQuery } from "react-query";
import CountryCard from "../../components/CountryCard";
import { listAllCountries } from "../../services/contriesService";
import { ListCoutriesContainer } from "./ListContries.styles";

const ListCountries = () => {
  const { isLoading, data } = useQuery("repoData", listAllCountries, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>loading</div>;

  return (
    <ListCoutriesContainer>
      {data?.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </ListCoutriesContainer>
  );
};

export default ListCountries;
