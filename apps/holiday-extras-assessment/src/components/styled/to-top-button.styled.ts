import styled from 'styled-components';
import IToTopButtonProps from './interfaces/IToTopButtonProps';

const ToTopButton = styled.button<IToTopButtonProps>`
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  transition: all 0.3s ease-in-out;
  transform: translateY(200%);
  background-color: #151515 !important;
  ${props => props.active ? 'transform: translateY(0);' : ''}
`;

export default ToTopButton;