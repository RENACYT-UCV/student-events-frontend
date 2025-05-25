import React from 'react'
import Header from '@components/common/Header/Header'
import NotificationHistory from '@components/notification/NotificationHistory'

const NotificationPage = () => {
  return (
    <>
      <div className="main-page-blue">
        <Header title="Notificaciones" />
        <NotificationHistory notifications={[]} />
      </div>
    </>
  )
}

export default NotificationPage
