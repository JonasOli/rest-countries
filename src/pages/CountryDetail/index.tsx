import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCountryByName } from "services/contriesService";
import { numberWithCommas } from "utils/numberFormat";
import {
  ContryDescription,
  ContryName,
  CountryDetailContainer,
  Details,
} from "./CountryDetail.styles";
import DetailDescription from "./DetailDescription";

const CountryDetail = () => {
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
      <CountryDetailContainer>
        <button onClick={() => history.back()}>{"<- Back"}</button>

        <Details>
          <img src={data.imgSrc} alt={data.name + " flag"} />

          <ContryDescription>
            <ContryName>{data.name}</ContryName>

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
          </ContryDescription>
        </Details>
      </CountryDetailContainer>
    );
  }

  return null;
};

export default CountryDetail;
