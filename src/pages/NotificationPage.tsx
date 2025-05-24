import React from 'react'
import HeaderBar from '@components/HeaderBar'
import NotificationHistory from '@components/NotificationHistory'


const NotificationPage = () => {
  return (
    <>
      <div className= "main-page-blue">
        <HeaderBar title="Notificaciones"/>
        <NotificationHistory notifications={[]} />

      </div>
    </>
  )
}

export default NotificationPage