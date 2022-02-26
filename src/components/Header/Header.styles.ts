import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  box-shadow: 1px 3px 9px var(--backgroundColor);
  background-color: var(--backgroundColor);
  position: sticky;
  z-index: 20;
  top: 0;

  h1 {
    font-size: 2rem;
  }
`;
