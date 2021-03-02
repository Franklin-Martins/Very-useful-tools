import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body, input, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
  }
  h1{
      font-weight: 600;
  }

  h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;