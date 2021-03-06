import React, { useEffect } from 'react';

import { NotificationMessage, useNotification } from '../../../hooks/Notification'

import { Container } from './styles'

import IconInfo from '../../../assets/IconInfo.svg'
import IconSuccess from '../../../assets/IconSuccess.svg'
import IconError from '../../../assets/IconError.svg'

interface NotificationProps{
    message: NotificationMessage;
    style: Object;
}

const icons = {
    info: <img src={IconInfo} alt="info"/>,
    error: <img src={IconError} alt="error"/>,
    success: <img src={IconSuccess} alt="success"/>,
}

const Notification:React.FC<NotificationProps> = ({ message, style }) =>{
    const { removeNotification } = useNotification()

    useEffect(()=>{
        const timer = setTimeout(() => {
            removeNotification(message.id)
        }, 3000);

        return ()=>{
            clearTimeout(timer)
        }
    }, [message.id, removeNotification])

    return(
        <Container style={style} key={message.id} type={message.type}>
            {icons[message.type || 'info']}
            <div>
                <header>
                <strong> {message.title} </strong>
                <button onClick={()=> removeNotification(message.id)} type="button"> x </button>
                </header>

                <p> {message.description} </p>

                <button onClick={()=> removeNotification(message.id)} type="button"> <strong> Ok, i got! </strong> </button>
            </div>
        </Container>
    )
}

export default Notification