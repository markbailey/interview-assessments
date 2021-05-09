// import { renderToStaticMarkup } from 'react-dom/server';
import styled from 'styled-components';

export const ButtonRoot = styled.button`
  display: block;
  border: 1px solid ${props => props.primary ? '#0063dc' : '#ff0084'};
  border-radius: 20px;
  background-color: ${props => props.primary ? '#0063dc' : '#ff0084'};
  color: #f5f5f5;

  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  padding: 0.75em 1em;

  :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const IconButtonRoot = styled(ButtonRoot)`
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
`;