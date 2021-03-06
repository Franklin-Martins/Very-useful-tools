import styled, {css} from 'styled-components'


interface NotificationProps{
    type?: 'success' | 'error' | 'info';
}

const notificationTypeVariations = {
    info: css`
        background: #B1ADB9 0% 0% no-repeat padding-box;
        button{
         color: #B1ADB9;
     }
    `,
    success: css`
        background: #12DB89 0% 0% no-repeat padding-box;
        button{
         color: #12DB89;
     }
    `,
    error: css`
     background: #F95E5A 0% 0% no-repeat padding-box;
     button{
         color: #F95E5A;
     }
    `
}


export const Container = styled.div<NotificationProps>`
    max-width: 400px;
    color: #fff;
    position: relative;
    padding: 16px 30px 25px 16px;
    border-radius: 5px;
    box-shadow: 0px 20px 25px #0000001A;
    display: flex;
    
    & + div{
        margin-top: 8px;
    }

    ${(props)=> notificationTypeVariations[props.type || 'info']}


    img{
        color: #fff;
        filter: invert(1);
        background-image: #fff;
        width: 20px;
        height: 20px;
        margin: 5px 12px 0 0;
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        button{
            font-size: 18px;
            border: none;
            background-color:transparent;
            color: #fff;
        }
    }

    button{
        border:none;
        background: #EBEAED 0% 0% no-repeat padding-box;
        border-radius: 5px;
        padding: 5px 15px;
        opacity: 1;
    }
`;