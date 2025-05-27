import './VerifyResetCodeScreen.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  useForgotPasswordActions,
  useForgotPasswordCode,
  useForgotPasswordEmail
} from '@store/forgot-password.store'

const VerifyResetCodeScreen: React.FC = () => {
  const navigate = useNavigate()

  const email = useForgotPasswordEmail()
  const code = useForgotPasswordCode()
  const { setCode } = useForgotPasswordActions()

  const handleVerifyCode = async (): Promise<void> => {
    try {
      console.log('Verificando código:', code)
      const response = await axios.post(
        'https://student-events-backend-kypp.onrender.com/api/auth/verify-reset-code',
        {
          code,
          email
        }
      )
      console.log('Token recibido para restablecer contraseña:', response.data.token)
      alert('Código verificado correctamente.')
      navigate('/reset-password', { state: { token: response.data.token } })
    } catch (error) {
      console.error('Error al verificar el código:', error)
      alert('Código incorrecto. Por favor, inténtalo de nuevo.')
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
            <img src="/assets/verificar-codigo.png" alt="Verify Code illustration" />
          </div>
        </div>

        <h1 className="login-title">Verificar Código</h1>

        <p style={{ textAlign: 'center', marginBottom: '20px', color: '#555' }}>
          Ingrese el código de verificación enviado a su correo
        </p>

        <div className="form-container">
          <div className="input-group">
            <label className="input-label">Código</label>
            <div className="input-wrapper">
              <span className="input-icon">🔑</span>
              <input
                type="text"
                className="input-field"
                placeholder="123456"
                value={code}
                onChange={e => setCode(e.target.value)}
                required
              />
            </div>
          </div>

          <button className="login-button" onClick={handleVerifyCode}>
            VERIFICAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default VerifyResetCodeScreen
