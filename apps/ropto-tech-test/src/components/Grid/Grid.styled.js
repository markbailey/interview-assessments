import styled from 'styled-components';

const columns = (count, max) => {
  let array = [...new Array(count)];
  if (max < count) 
    array = array.slice(0, max);
  return array.map(() => 'auto').join(' ');
};

export const Container = styled.ul`
  display: grid;
  grid-template-columns: ${props => columns(2, props.maxColumns)};
  gap: 1rem;
  align-items: center;
  list-style: none;
  
  margin: 0;
  padding: 0;
  
  width: 100%;
  max-width: 100%;

  @media (max-width: 319px) {
    grid-template-columns: ${props => columns(1, props.maxColumns)};
  }

  @media (min-width: 576px) {
    grid-template-columns: ${props => columns(3, props.maxColumns)};
  }

  @media (min-width: 768px) {
    grid-template-columns: ${props => columns(4, props.maxColumns)};
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;
