import React from "react";

interface IProps {
  detailName: string;
  detailDescription: string;
}

const DetailDescription = ({ detailDescription, detailName }: IProps) => {
  return (
    <div>
      <b>{detailName}: </b>
      {detailDescription}
    </div>
  );
};

export default DetailDescription;
