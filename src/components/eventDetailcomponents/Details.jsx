import React from "react";
import {
  DetailMetricHeader,
  DetailsDiv,
  DetailMetricDiv,
} from "../../styledComponents/styledComponents";

const Details = ({ details }) => {
  return (
    <DetailsDiv>
      {details && details.map((detail, idx) => {
        return (
          <DetailMetricDiv key={idx}>
            <DetailMetricHeader>{detail.title}</DetailMetricHeader>
            <span>{detail.value}</span>
          </DetailMetricDiv>
        );
      })}
    </DetailsDiv>
  );
};

export default Details;
