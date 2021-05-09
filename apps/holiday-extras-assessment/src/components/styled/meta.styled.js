import styled from 'styled-components';

export const MetaTitle = styled.h1`
  margin: 0;
  text-transform: uppercase;
  word-break: break-all;
`;

export const Author = styled.h3`
  font-weight: 400;
  margin-top: 0.5rem;
`;

export const Username = styled.span`
  color: #ff0084;
`;

export const TagWrapper = styled.div`
  display: flex; 
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const Tag = styled.span`
  background-color: #151515; 
  color: #f5f5f5;
  padding: 0.25em 0.5em; 
  border-radius: 10px;
`;