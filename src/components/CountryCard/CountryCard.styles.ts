import { Link } from "react-router-dom";
import styled from "styled-components";

const CountryCardContainer = styled(Link)`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.5);
  transition: all 0.1s ease-in;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  img {
    object-fit: cover;
    aspect-ratio: 16/9;
  }
`;

const CountryName = styled.h2`
  margin-bottom: 1rem;
`;

const CountryDetails = styled.div`
  padding: 2rem;
  font-size: 1.2rem;

  & > div:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  b {
    font-weight: 600;
  }
`;

export { CountryCardContainer, CountryName, CountryDetails };
