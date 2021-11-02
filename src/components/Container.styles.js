import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px;
  padding-top: 3rem;

  @media screen and (min-width: 720px) {
    max-width: 700px;
  }
  @media screen and (min-width: 920px) {
    max-width: 880px;
  }

  @media screen and (min-width: 1165px) {
    max-width: 1020px;
  }

  @media screen and (min-width: 1350px) {
    max-width: 1260px;
  }
`;
