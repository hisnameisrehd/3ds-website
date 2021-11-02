import styled from 'styled-components';

export const Nav = styled.nav`
  height: 100px;

  > ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const LogoContainer = styled.li`
  flex-basis: 20%;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 100%;
`;

export const NavList = styled.li`
  flex-basis: 60%;
  align-self: center;
  text-transform: capitalize;

  ul {
    display: flex;
    justify-content: space-between;
  }
`;

export const NavLinks = styled.li`
  cursor: pointer;
`;
