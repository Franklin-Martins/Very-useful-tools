import React, { createContext, useCallback, useContext, useState } from 'react'
import { uuid } from 'uuidv4';

import BannerNotification from '../components/BannerNotification'

export interface NotificationMessage{
    id: string;
    type?: 'success' | 'error' | 'info';
    title: string;
    description?: string;
}

interface NotificationContextData{
    addNotification(message: Omit<NotificationMessage, 'id'>): void;
    removeNotification(id:string): void;
}

const NotificationContext = createContext<NotificationContextData>({} as NotificationContextData);

const NotificationProvider: React.FC = ({ children }) =>{
    const [messages, setMessages] = useState<NotificationMessage[]>([]);

    const addNotification = useCallback(({type, title, description }: Omit<NotificationMessage, 'id'>)=>{
        const id = uuid();

        const notification:NotificationMessage = {
            id,
            type,
            title,
            description
        };

        setMessages(oldMessages => [...oldMessages, notification]);
    }, [])

    const removeNotification = useCallback((id:string)=>{
        setMessages(oldMessages => oldMessages.filter(oldMessage => oldMessage.id !== id))
    }, [])

    return(
        <NotificationContext.Provider value={{ addNotification, removeNotification }} >
            {children}
            <BannerNotification messages={messages} />
        </NotificationContext.Provider>
    )
}

function useNotification(): NotificationContextData {
    const context = useContext(NotificationContext)

    if(!context){
        throw new Error('Use notification must be used within a NotificationProvider');
    }

    return context;
}

export { NotificationProvider, useNotification }