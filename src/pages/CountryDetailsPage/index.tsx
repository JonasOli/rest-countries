import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCountryByName } from "services/contriesService";
import { numberWithCommas } from "utils/numberFormat";
import {
  BackButton,
  ContryName,
  CountryDescription,
  CountryDetailContainer,
} from "./CountryDetail.styles";
import DetailDescription from "./DetailDescription";

const CountryDetailsPage = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery(
    "getCountryByName-" + id,
    () => getCountryByName(id ?? ""),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <AiOutlineLoading3Quarters />;

  if (data) {
    return (
      <>
        <BackButton onClick={() => history.back()}>{"<- Back"}</BackButton>

        <CountryDetailContainer>
          <img src={data.imgSrc} alt={data.name + " flag"} />

          <CountryDescription>
            <ContryName>{data.name}</ContryName>

            <div>
              <DetailDescription
                detailName="Native Name"
                detailDescription={data.nativeName}
              />
              <DetailDescription
                detailName="Population"
                detailDescription={numberWithCommas(data.population)}
              />
              <DetailDescription
                detailName="Region"
                detailDescription={data.region}
              />
              <DetailDescription
                detailName="Sub Region"
                detailDescription={data.subRegion}
              />
              <DetailDescription
                detailName="Capital"
                detailDescription={data.capital}
              />
              <DetailDescription
                detailName="Top Level Domain"
                detailDescription={data.topLevelDomain?.join(", ")}
              />
              <DetailDescription
                detailName="Currencies"
                detailDescription={data.curencies?.join(", ")}
              />
              <DetailDescription
                detailName="Languages"
                detailDescription={data.languages?.join(", ")}
              />
              <DetailDescription
                detailName="Borders"
                detailDescription={data.borders?.join(" ")}
              />
            </div>
          </CountryDescription>
        </CountryDetailContainer>
      </>
    );
  }

  return <div>Country not found</div>;
};

export default CountryDetailsPage;
