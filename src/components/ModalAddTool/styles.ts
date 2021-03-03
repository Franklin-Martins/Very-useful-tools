import styled from 'styled-components';

export const Form = styled.form`
padding: 48px 40px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 20px 25px #0000001A;
opacity: 1;

  label{
    align-self: flex-start;
  }
  input{
    width: 100%;
    margin-right: 5px;
    height: 35px;
    background: #F5F4F6  0% 0% no-repeat padding-box;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    opacity: 1;

    &:focus{
        background-color: #EBEAED;
    }
  }
  >input{
      margin-bottom: 10px;
  }
  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }
  button {
    margin-top: 48px;
  }
  button {
    align-self: flex-end;
    width: 100px;
    border: none;
    color: #fff;
    background: #0DCB7D 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    transition: background-color 0.2s;
    &:hover{
            background-color: #10B26C;
        }
  }
`;