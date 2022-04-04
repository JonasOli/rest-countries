import React from "react";
import { StyledDetailDescription } from "./CountryDetail.styles";

interface IProps {
  detailName: string;
  detailDescription: string;
}

const DetailDescription = ({ detailDescription, detailName }: IProps) => {
  return (
    <StyledDetailDescription>
      <b>{detailName}: </b>
      {detailDescription}
    </StyledDetailDescription>
  );
};

export default DetailDescription;
