import styled from 'styled-components';

export const Container = styled.div`
    max-width: 11200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 600px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.header`
    align-self: flex-start;
    h1{
        font-weight: 600;
    }
    button{
        background-color: #0DCB7D;
        border-radius: 5px;
        opacity: 1;
    }
`;

export const Navigation = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    div{
        input{
            margin-right: 5px;
            height: 35px;
            background: #F5F4F6 0% 0% no-repeat padding-box;
            border: 1px solid #EBEAED;
            border-radius: 5px;
            opacity: 1;
        }
        .switch {
        position: relative;
        display: inline-block;
        width: 45px;
        height: 25px;
        margin-right: 12px;

        & input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #8F8A9B;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 16px;

          &:before {
            position: absolute;
            content: '';
            height: 25px;
            width: 25px;
            left: 0;
            bottom: 0;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 10px;
          }
        }

        input:checked + .slider {
          background-color: #12DB89;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #EBEAED;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(20px);
          -ms-transform: translateX(20px);
          transform: translateX(20px);
        }
      }
    }

    button{
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

export const Card = styled.article`
    margin: 20px 0;
    min-width: 600px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    max-height: 200px;

    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 10px #0000000D;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    opacity: 1;
    header{
        padding: 20px  10px ;
        display: flex;
        height: 15px;
        justify-content: space-between;
        align-items: center;
        button{
            width: 100px;
            border: none;
            color: #fff;
            background: #F95E5A 0% 0% no-repeat padding-box;
            border-radius: 5px;
            opacity: 1;
            transition: background-color 0.2s;
             
            &:hover{
                background-color: #CC4C4C;
            }
        }
    }
    div{
        padding: 10px;
    }

    footer{
        display: flex;
        padding: 15px;
        >strong{
            margin-right: 10px;
        }
    }
`;