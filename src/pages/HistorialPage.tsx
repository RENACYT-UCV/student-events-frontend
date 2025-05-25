import React from 'react'
import Header from '@components/common/Header/Header'
import HistorialScreen from '@components/Historial/HistorialScreen'

const HistorialPage = () => {
  return (
    <div className="main-page-blue">
      <Header title="Historial" />
      <HistorialScreen />
    </div>
  )
}

export default HistorialPage
