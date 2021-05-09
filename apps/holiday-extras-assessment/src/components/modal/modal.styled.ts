import styled from 'styled-components';
import IWrapperProps from './interfaces/IWrapperProps';
import IModalRootProps from './interfaces/IModalRootProps';

export const Wrapper = styled.div<IWrapperProps>`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  overflow-y: auto;

  background-color: #151515;
  background-color: rgba(0 0 0 / 95%);
  opacity: 0;
  pointer-events: none;

  transition: all 0.3s ease-in-out;

  ${props => props.show ? `
    opacity: 1;
    pointer-events: all;
  ` : ''}
`;

export const ModalRoot = styled.div<IModalRootProps>`
  z-index: 9;
  position: relative;

  background-color: ${props => props.color || '#f5f5f5'};
  width: 100%;
  height: auto;
  min-height: 100%;

  padding: 1rem;
  margin: 0 auto;
  border: 5px solid #151515;

  transition: transform 0.3s ease-in-out;
  transform: translateY(200%);

  @media (min-width: 768px) {
    margin: 1rem auto;
    width: auto;
    min-height: auto;
    max-width: 425px;
    transform: translateY(-200%);
  }

  ${props => props.show ? `
    transform: translateY(0) !important;
  ` : ''}
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #151515 !important;
  border: 2px solid #f5f5f5;
  padding: 0.15rem 0.25rem;
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    top: -0.75rem;
    right: -0.75rem;
  }
`;