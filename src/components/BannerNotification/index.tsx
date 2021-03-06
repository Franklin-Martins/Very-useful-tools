import React from 'react'

import { Container } from './styles'

import { NotificationMessage } from '../../hooks/Notification'

import Notification from './Notification'

interface NotificationProps{
    messages: NotificationMessage[];
}

const BannerNotification:React.FC<NotificationProps> = ({ messages }) =>{

    return(
        <Container>
            {messages.map((message) => (
                <Notification key={message.id} message={message} />
            )
            )}
        </Container>
    )
}

export default BannerNotification;