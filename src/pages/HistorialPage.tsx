import React from 'react'
import HeaderBar from '@components/HeaderBar'
import HistorialScreen from '@components/Historial/HistorialScreen'

const HistorialPage = () => {
  return (
    <div className='main-page-blue'>
        <HeaderBar title="Historial"/>
        <HistorialScreen/>
    
    </div>
  )
}

export default HistorialPage