import React, { useState } from 'react'
import './RecoverAccountScreen.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RecoverAccountScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const navigate = useNavigate()

  const handleSendResetEmail = async (): Promise<void> => {
    try {
      console.log('Solicitando restablecimiento para:', { email })
      const response = await axios.post(
        'https://student-events-backend-kypp.onrender.com/api/auth/forgot-password',
        { email }
      )
      alert(response.data.message)
    } catch (error) {
      console.error('Error al enviar el correo de restablecimiento:', error)
      alert(
        'Hubo un error al enviar el correo de restablecimiento. Por favor, inténtalo de nuevo más tarde.'
      )
    }
  }

  const handleGoBack = (): void => {
    navigate(-1)
  }

  return (
    <div
      className="login-container"
    >
      <button className="back-button" onClick={handleGoBack}>
        ← Volver
      </button>

      <div className="login-content">
        <div className="illustration-container">
          <div className="people-illustration">
            <img src="/assets/images/recoverGifIcon.gif" alt="" />
          </div>
        </div>

        <h1 className="login-title">Recuperar Cuenta</h1>

        <p style={{ textAlign: 'center', marginBottom: '10px', color: '#555' , userSelect: 'none' }}>
          Ingrese su correo electrónico para recuperar su cuenta
        </p>

        <div className="form-container">
          <div className="input-group">
            <label className="input-label select-none">Correo</label>
            <div className="input-wrapper">
              <input
                type="email"
                className="input-field ml-10"
                placeholder="example@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <img
                  src="/assets/images/recoverMailIcon.png"
                  alt="Icono de correo"
                  className="absolute pointer-events-none left-3 top-3 w-6 h-6 object-contain"
                />

            </div>
          </div>

          <button className="login-button" onClick={handleSendResetEmail}>
            ENVIAR

            <img src="/assets/images/sentIcon.png" alt="Icono registro" className="w-6 pointer-events-none h-6" />

          </button>
        </div>
      </div>
    </div>
  )
}

export default RecoverAccountScreen
