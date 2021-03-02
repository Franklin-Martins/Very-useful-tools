import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    box-sizing: border-box;
    outline: 0;
  }
  a{
    text-decoration: none;
  }
  body{
      background: #EBEAED 0% 0% no-repeat padding-box;
  }
  body, input, button {
    color: #170C3A;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
  }
  h1{
    color: #170C3A;
    font-weight: 600;
  }

  h2, h3, h4, h5, h6{
    color: #170C3A;
    font-weight: 500;
  }
  strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
`;