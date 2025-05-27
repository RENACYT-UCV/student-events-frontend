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
      style={{
        background: `url(/assets/mi-fondo.jpeg) center/cover no-repeat`
      }}
    >
      <button className="back-button" onClick={handleGoBack}>
        ← Volver
      </button>

      <div className="decoration-top-left"></div>
      <div className="decoration-top-right"></div>
      <div className="decoration-bottom-left"></div>
      <div className="decoration-bottom-right"></div>

      <div className="login-content">
        <div className="illustration-container">
          <div className="people-illustration">
            <img src="/assets/recuperar-cuenta.png" alt="Recover Account illustration" />
          </div>
        </div>

        <h1 className="login-title">Recuperar Cuenta</h1>

        <p style={{ textAlign: 'center', marginBottom: '20px', color: '#555' }}>
          Ingrese su correo electrónico para recuperar su cuenta
        </p>

        <div className="form-container">
          <div className="input-group">
            <label className="input-label">Correo</label>
            <div className="input-wrapper">
              <span className="input-icon">✉️</span>
              <input
                type="email"
                className="input-field"
                placeholder="example@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <button className="login-button" onClick={handleSendResetEmail}>
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecoverAccountScreen
