import styled from "styled-components";

const defaultContainer = styled.section`
  padding: 5rem;
  margin: auto;
  max-width: 150rem;
`;

const CountryDetailContainer = styled(defaultContainer)`
  display: flex;
  gap: 0 4rem;
`;

const CountryDescription = styled.div`
  padding: 2rem 0;
  font-size: 1.6rem;
  columns: 2;
`;

const ContryName = styled.h2`
  font-size: 4rem;
`;

const BackButton = styled.button`
  margin: 5rem;
`;

export { BackButton, CountryDetailContainer, ContryName, CountryDescription };
