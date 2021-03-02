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
`;

export const Navigation = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const Card = styled.article`
    margin: 20px 0;
    min-width: 600px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    max-height: 200px;

    header{
        padding: 4px;
        display: flex;
        height: 20px;
        justify-content: space-between;
        align-items: center;
        button{
            border: 0;
        }
    }
    div{
        padding: 10px;
    }

    footer{
        display: flex;
        padding: 10px;
    }
`;