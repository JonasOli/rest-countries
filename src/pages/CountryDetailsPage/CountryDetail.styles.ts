import styled from "styled-components";

const defaultContainer = styled.section`
  margin: 0 5rem;
`;

export const DetailDescriptionContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 1rem 0;

  & > * {
    flex: 1 1 50%;
  }
`;

export const CountryDetailContainer = styled(defaultContainer)`
  display: flex;
  gap: 0 10rem;

  img {
    max-width: 60rem;
    aspect-ratio: 16/9;
  }
`;

export const CountryDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

export const ContryName = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;
`;

export const BackButton = styled.button`
  margin: 5rem;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: none;
  background-color: var(--elementsColor);
  color: var(--fontColor);
  font-size: 1.3rem;
  box-shadow: 0 0 2px 2px var(--elementsColor);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledDetailDescription = styled.div`
  font-size: 1.5rem;
`;
