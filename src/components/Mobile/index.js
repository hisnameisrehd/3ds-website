import React, { useState } from 'react';

import logoMobile from '../../images/3ds-text-only-small.png';
import { Container } from '../Container.style';
import { FaBars, FaFacebook, FaTimes } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { Content, MenuMobile } from './Mobile.styles';

const Mobile = () => {
  const [toggle, setToggle] = useState(false);

  const checkToggle = () => {
    setToggle(!toggle);
  };

  console.log(toggle);
  return (
    <Content>
      <Container>
        <div className='inactive-nav'>
          <ul>
            <li>
              <img src={logoMobile} alt='mobile-logo' />
            </li>
            <li>
              <FaBars className='hover' onClick={checkToggle} />
            </li>
          </ul>
        </div>
      </Container>
      {toggle && (
        <Container>
          <MenuMobile transition={{ type: 'spring', stiffness: 100 }}>
            <div>
              <FaTimes className='hover' onClick={checkToggle} />
            </div>

            <div>
              <nav>
                <ul>
                  <li>
                    <p>home</p>
                    {/* <hr /> */}
                  </li>
                  <li>
                    <p>about us</p>
                    {/* <hr /> */}
                  </li>
                  <li>
                    <p>pricing</p>
                    {/* <hr /> */}
                  </li>
                  <li>
                    <p>contact us</p>
                    {/* <hr /> */}
                  </li>
                </ul>
              </nav>
            </div>

            <div className='socials'>
              <ul>
                <li>
                  <a
                    href='https://www.facebook.com/3dsdetailingandmetalpolishing/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaFacebook className='hover' />
                  </a>
                </li>
                <li>
                  <div>
                    <AiFillPhone className='hover' />
                  </div>
                  <p>(780) 405-9969</p>
                </li>
              </ul>
            </div>
          </MenuMobile>
        </Container>
      )}
    </Content>
  );
};

export default Mobile;
