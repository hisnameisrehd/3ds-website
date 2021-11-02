import React from 'react';
import {
  LogoContainer,
  LogoImg,
  NavLinks,
  NavList,
  Nav,
} from './Navbar.styles';

import { Container } from '../Container.styles';

// logo
import logo from '../../images/3ds-logo-med.png';

const Navbar = () => {
  return (
    <>
      <Container>
        <Nav>
          <ul>
            <LogoContainer>
              <LogoImg src={logo} alt='logo' />
            </LogoContainer>
            <NavList>
              <ul>
                <NavLinks>about</NavLinks>
                <NavLinks>services</NavLinks>
                <NavLinks>pricing</NavLinks>
                <NavLinks>contact</NavLinks>
              </ul>
            </NavList>
          </ul>
        </Nav>
      </Container>
    </>
  );
};

export default Navbar;
