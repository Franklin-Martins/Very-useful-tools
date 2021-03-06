import React from 'react'

import { NotificationProvider } from './Notification'

const AppProvider:React.FC = ({ children })=>(
    <NotificationProvider>
        {children}
    </NotificationProvider>
)

export default AppProvider