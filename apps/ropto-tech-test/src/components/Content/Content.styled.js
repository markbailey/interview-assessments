import styled from 'styled-components';
export const Wrapper = styled.div`
  display: ${props => props.show ? 'flex' : ''};
  flex-direction: column;
  flex: 1;

  width: 100%;
  max-width: 680px;
  max-height: 100%;
  margin: 0 auto;

  transition: transform 250ms ease-in-out;
  transform: translateY(${props => props.top ? '' : '-'}250%);
  ${props => props.show ? 'transform: translateY(0);' : 'overflow: hidden;'}

  @media (min-width: 768px) {
      ${props => props.top ? 'flex: 0;' : ''}
  }
`;