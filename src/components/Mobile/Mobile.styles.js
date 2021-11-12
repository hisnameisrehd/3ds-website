import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Content = styled.div`
  background: var(--blue);

  .inactive-nav ul {
    display: flex;
    justify-content: space-between;
  }

  .inactive-nav li {
    cursor: pointer;
    align-self: center;
  }

  @media screen and (min-width: 720px) {
    display: none;
    z-index: -999;
  }
`;

export const MenuMobile = styled(motion.div)`
  display: grid;
  background: var(--black);
  z-index: 999;
  height: 100vh;
  color: var(--green);
  text-transform: uppercase;
  text-align: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  /* display: grid; */
  grid-template-rows: auto 1fr auto;
  padding: 16px;
  padding-top: 24px;

  hr {
    max-width: 80%;
  }

  nav li {
    p {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      :hover {
        color: var(--white);
        transition: all 0.3s ease-in-out;
      }
    }
  }

  > div:first-child {
    text-align: right;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;

    nav {
      flex: 0.8;
      display: flex;
      flex-direction: column;
    }

    nav ul {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    ul li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-self: center;
    }
  }

  > div:last-child {
    align-self: flex-end;
  }

  .socials ul {
    display: flex;
    justify-content: space-between;
  }

  .socials li:nth-child(2) {
    display: flex;
    justify-content: center;

    p {
      margin: 0;
      margin-top: 6px;
      margin-left: 4px;
    }
  }
`;
