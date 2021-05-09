import styled, { css } from 'styled-components';

const gridStyle = css`
  object-fit: cover; 
  height: 100%;

  filter: brightness(0.5) grayscale(1);
  transition: all 0.3s ease-in-out;

  cursor: pointer;
  border: 1px solid #f5f5f5;

  :hover {
    filter: brightness(1) grayscale(0);
    transform: scale(1.2);
  }
`

export const Image = styled.img`
  width: 100%;
  ${props => props.grid ? gridStyle : 'margin: 0 0 1rem;'}
`;