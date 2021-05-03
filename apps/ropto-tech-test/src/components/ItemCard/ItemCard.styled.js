import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(255 255 255 / 15%);
  color: #ffffff;
  cursor: pointer;

  :hover {
    background-color: rgba(33 33 33 / 15%);
  }
`;
    