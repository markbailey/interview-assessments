import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  transition: flex 250ms ease-in-out;
  overflow: hidden;
  
  flex: ${props => props.open ? 1 : 0};
  padding: ${props => props.open ? '2.5rem 1rem 1rem;' : '2.5rem 1rem 0'};
  background-color: #ffffff;
  color: #212121;
`;

export const TextWrapper = styled.div` word-break: break-all; `;

export const ScrollableContent = styled.div`
  flex: 1; 
  overflow-y: auto; 
  margin-bottom: 0.5rem;
`;

export const ColoredText = styled.small`
  color: #fb651e;
  text-transform: capitalize;
`;

export const Title = styled.h2` margin: 0.5rem 0; `;
export const SubHeading = styled.h3` margin-top: 0 `;