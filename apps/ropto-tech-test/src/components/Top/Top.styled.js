import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  transition: flex 250ms ease-in-out;
  overflow: hidden;

  flex: ${props => props.open ? 1 : 0};
  padding: ${props => props.open ? '1rem 1rem 2.5rem' : '0 1rem 2.5rem'};

  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;
    padding: 1rem 2.5rem 1rem 1rem;
  }

  @media (min-width: 992px) {
    flex: 1;
  }
`;

export const Heading = styled.h1` margin: 0 0 0.5rem; `;
export const SubHeading = styled.h3` margin-top: 0 `;
export const Blurb = styled.p` margin-top: 0; `;

export const GridWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;