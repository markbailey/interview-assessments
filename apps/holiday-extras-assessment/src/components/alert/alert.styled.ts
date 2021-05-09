import styled from 'styled-components';
import IDivProps from './interfaces/IDivProps';

const context: any = {
  error: `
    background-color: hsl(354deg 70% 70%);
    border-color: hsl(354deg 70% 54%);
    color: hsl(354deg 70% 35%);
  `,
};

export const Div = styled.div<IDivProps>`
  padding: 1rem;
  ${props => props.center ? 'text-align: center;' : ''}
  ${props => props.context ? context[props.context] : ''}
`;