import styled from 'styled-components';

export const Container = styled.form`
background-color: #FFFFFF;
border-radius: 5px;
width: 350px;
height: 200px;
display: flex;
flex-direction: column;
    h1{
        padding: 10px;
    }

    span{
        padding: 10px;
        margin-bottom: 20px;
    }
    div{
        align-self: flex-end;
        justify-self: flex-end;
        padding: 10px;

        button:first-child {
            margin-right: 10px;
            background-color: #365DF0;
        }
        button{
            color: #FFFFFF;
            border:none;
            border-radius: 5px;
            width: 80px;
            height: 35px;
            background-color: #F95E5A;
        }
    }
`;
export const Header = styled.header`
width: 100%;
height: 20%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;
padding: 20px 10px 0 10px;
    button{
        border:none;
        background-color: transparent;
        margin-right: 10px;
        font-size:20px;
    }
`;