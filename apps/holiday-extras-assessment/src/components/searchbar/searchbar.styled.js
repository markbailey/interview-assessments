import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  padding: 0.5rem 1rem;
  color: #f5f5f5;

  ::placeholder {
    color: rgba(255 255 255 / 33%);
  }
`;

export const Button = styled.button`
  background-color: #151515;
  border: 0;
  padding: 0.5rem 0.75rem;

  :not(:disabled) {
    cursor: pointer;
  }

  :hover {
    background-color: #e651a8;
  }
  
  :disabled {
    opacity: 0.5;
    background-color: #212121;
  }
`;