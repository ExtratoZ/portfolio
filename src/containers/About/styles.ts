import style from 'styled-components';

export const GitSection = style.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 14px;
  margin-top: 32px;
  margin-bottom: 64px;

  img {
    height: 157px;
    width: 100%;
  }

  @media (max-width: 768px) {
    img {
      grid-column: 1 / -1;
      width: 100%;
      height: auto;
    }
  }
`;
