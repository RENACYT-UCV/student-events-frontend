import React from 'react'
import Header from '@components/common/Header/Header'
import NotificationHistory from '@components/notification/NotificationHistory'

const NotificationPage = () => {
  return (
    <>
      <div>
        <NotificationHistory notifications={[]} />
      </div>
    </>
  )
}

export default NotificationPage
