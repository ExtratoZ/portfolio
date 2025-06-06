import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    background-color: ${({ theme }) => theme.colorBackground};
  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;

    @media (max-width: 768px) {
      padding-top: 16px;
  }
`;

export default GlobalStyle;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`;
