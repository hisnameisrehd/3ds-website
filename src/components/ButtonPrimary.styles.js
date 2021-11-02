import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  border: none;
  background: var(--blue);
  padding: 0.5rem;
  border-radius: 4px;
  color: var(--white);
  font-family: var(--fontText);
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    background: var(--green);
    text-decoration: underline;
    transition: all 0.5s ease-in-out;
  }
`;
