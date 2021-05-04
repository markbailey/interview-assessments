import styled from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';

import FeedIcon from '../Icons/FeedIcon';

export const Card = styled.div`
  text-align: right;
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: ${props => !props.inverted ? 'rgba(255 255 255 / 15%)' : 'rgba(33 33 33 / 15%)'};

  background-image: url('data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(<FeedIcon color="#ffffff" size={64} />))}');
  background-size: 75%;
  background-position: -130%;
  background-repeat: no-repeat;

  cursor: pointer;

  :hover {
    //#fb651e
    background-color: rgba(251 101 30 / 15%);
  }

  @media (min-width: 375px) {
    background-size: 65%;
    background-position: -80%;
  }

  @media (min-width: 576px) {
    background-size: 60%;
    background-position: -70%;
  }

  @media (min-width: 768px) {
    background-size: 60%;
    background-position: -80%;
  }
`;

export const Heading = styled.h3`
  margin: 0; 
  text-transform: capitalize;
`;
    