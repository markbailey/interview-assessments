import styled from 'styled-components';

const mediaGridColumns = [
  { size: 375, columns: 2 },
  { size: 425, columns: 3 },
  { size: 576, columns: 4 },
  { size: 768, columns: 5 },
  { size: 992, columns: 6 },
  { size: 1200, columns: 7 },
  { size: 1400, columns: 8 },
];

const mediaFlexBasis = [
  { size: 375, width: 50 },
  { size: 425, width: 33 },
  { size: 576, width: 25 },
  { size: 768, width: 20 },
  { size: 992, width: 16.66 },
  { size: 1200, width: 14.28 },
  { size: 1400, width: 12.5 },
];

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;

  @supports (display: grid) {
    flex-wrap: unset;
    display: grid;
    grid-template-columns: auto;
    grid-auto-flow: dense;

    ${mediaGridColumns.map((item) => `
      @media (min-width: ${item.size}px) {
        grid-template-columns: repeat(${item.columns}, [col-start] auto [col-end]);
      }
    `)}
  }
`;

export const GridColumn = styled.div`
  position: relative;
  overflow: hidden;
  flex-basis: 100%;
  outline: 2px solid #151515;

  ${mediaFlexBasis.map((item) => `
    @media (min-width: ${item.size}px) {
      flex-basis: ${item.width}%;
    }
  `)}
  
  @supports (display: grid) {
    flex-basis: unset;
    grid-column: span 1;
    grid-row: span 1;

    @media (min-width: 375px) {
      :first-child {
        grid-column: span 2;
        grid-row: span 2;
      }
  
      :nth-child(2n+3) {
        grid-row: span 2;
      }
  
      :nth-child(4n+5) {
        grid-column: span 2;
        grid-row: span 2;
      }
  
      :nth-child(6n+7) {
        grid-row: span 1;
      }
  
      :nth-child(8n+9) {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
  }
`;