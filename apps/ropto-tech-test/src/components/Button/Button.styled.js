import styled from 'styled-components';
import { renderToStaticMarkup } from 'react-dom/server';

import CloseIcon from '../Icons/CloseIcon';
import BackIcon from '../Icons/BackIcon';

const closeIconString = encodeURIComponent(renderToStaticMarkup(<CloseIcon color="#ffffff" size={64} />));
const backIconString = encodeURIComponent(renderToStaticMarkup(<BackIcon color="#212121" size={64} />));

export const ButtonRoot = styled.button`
  z-index: 99;
  position: absolute;
  ${props => !props.dark ? 'top: -29px; right: 58px;' : 'bottom: -29px; right: 0;'}
  padding: 1.75rem;
  border-radius: 50%;
  border: 1px solid ${props => props.dark ? '#212121' : '#ffffff'};
  background-color: ${props => props.dark ? '#212121' : '#ffffff'};
  background-image: url('data:image/svg+xml,${props => props.dark ? closeIconString : backIconString}');
  background-size: 75%;
  background-position: center;
  cursor: pointer;

  @media (min-width: 768px) {
    ${props => !props.dark ? 'top: 58px; right: -29px;' : 'top: 0; right: -29px; bottom: auto;'}
  }
`;