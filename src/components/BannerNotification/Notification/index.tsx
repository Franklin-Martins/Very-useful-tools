import React, { useEffect } from 'react';

import { NotificationMessage, useNotification } from '../../../hooks/Notification'

import { Container } from './styles'

import IconInfo from '../../../assets/IconInfo.svg'

interface NotificationProps{
    message: NotificationMessage;
}

const Notification:React.FC<NotificationProps> = ({ message }) =>{
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
        <Container key={message.id} type={message.type}>
            <img src={IconInfo} alt="info"/>
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