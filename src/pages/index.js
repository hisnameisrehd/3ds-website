import React from 'react';
import { IconContext } from 'react-icons/lib';
import Mobile from '../components/Mobile';
import { GlobalStyle } from '../GlobalStyle';

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <IconContext.Provider value={{ color: 'var(--green)', size: '1.9rem' }}>
        <Mobile />
      </IconContext.Provider>
    </>
  );
};

export default Home;
