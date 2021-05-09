import styled from 'styled-components';

export const NavbarRoot = styled.nav`
  z-index: 99;
  position: fixed;
  top: 0;

  display: flex;
  width: 100%;
  height: 48px;

  background-color: #151517;
  color: #f5f5f5;

  @supports (position: sticky) {
    position: sticky;
  }

  > svg {
    flex-shrink: 0;
  }
`;

export const Span = styled.span`
  font-size: smaller;
  text-transform: uppercase;
  align-self: center;
  padding: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;