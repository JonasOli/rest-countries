import styled from "styled-components";

const CountryDetailContainer = styled.section`
  padding: 5rem;
`;

const Details = styled.div`
  padding: 5rem 0;
  display: flex;
  gap: 0 4rem;
`;

const ContryDescription = styled.div`
  padding: 2rem 0;
  font-size: 1.6rem;
  columns: 2;
`;

const ContryName = styled.h2`
  font-size: 4rem;
`;

export { CountryDetailContainer, Details, ContryName, ContryDescription };
