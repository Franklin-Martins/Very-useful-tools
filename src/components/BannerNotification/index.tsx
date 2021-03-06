import React from 'react'
import { useTransition } from 'react-spring'

import { Container } from './styles'

import { NotificationMessage } from '../../hooks/Notification'

import Notification from './Notification'

interface NotificationProps{
    messages: NotificationMessage[];
}

const BannerNotification:React.FC<NotificationProps> = ({ messages }) =>{
    const messagesWithTransitions = useTransition(
        messages,
        message=> message.id,
        {
            from: { right: '-120%' },
            enter: { right: '0' },
            leave: { right: '-120%' }
        }
    )

    return(
        <Container>
            {messagesWithTransitions.map(({ item, key, props }) => (
                <Notification key={key} style={props} message={item} />
            )
            )}
        </Container>
    )
}

export default BannerNotification;