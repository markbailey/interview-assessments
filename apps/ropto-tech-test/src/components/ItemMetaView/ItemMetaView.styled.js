import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgb(255 109 0 / 90%);
  color: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;

  transition: all 0.25s ease;
  transform: scale(0);
  ${props => props.visible ? `transform: scale(1);` : ''}
`;

export const ActionsBar = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: ${props => props.split ? 'space-between' : 'flex-end'}; 
  overflow: hidden;
  width: 100%;
  padding: 1rem; 
`;
    
export const ActionButton = styled.button`  
  cursor: pointer;
  width: 32px;
  height: 32px;

  border: 0;
  padding: 0;
  background-color: transparent;

  :hover {
    background-color: rgba(33 33 33 / 15%);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 128px; 
  height: 128px; 
  margin-bottom: 1rem;
  
  border-radius: 50%; 
  border: 5px solid rgba(255 255 255 / 70%);
  background-color: rgba(255 255 255 / 15%);
`;

export const TextWrapper = styled.div`
  padding: 1rem;
  flex-shrink: 1;
  flex-grow: 0;
`;

export const CommentsWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
`;