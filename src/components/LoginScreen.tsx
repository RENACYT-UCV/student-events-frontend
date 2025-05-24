import React, { useState } from 'react'
import './LoginScreen.css'
// import fondo from '../assets/mi-fondo.jpeg'
// import imagenLogin from '../assets/imagen-login.png'
import { useNavigate } from 'react-router-dom'

// interface LoginScreenProps {}

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleLogin = (): void => {
    console.log('Iniciando sesión con:', { email, password })
    alert(`Login con email: ${email}`)
  }

  const handleRegister = (): void => {
    console.log('Navegando a registro')
    navigate('/register')
  }

  const handleForgotPassword = (): void => {
    console.log('Navegando a recuperar contraseña')
    navigate('/recover-account')
  }

  return (
    <div
      className="login-container"
      style={
        {
          // background: `url(${fondo}) center/cover no-repeat`
        }
      }
    >
      {/* Decoraciones de fondo */}
      <div className="decoration-top-left"></div>
      <div className="decoration-top-right"></div>
      <div className="decoration-bottom-left"></div>
      <div className="decoration-bottom-right"></div>

      {/* Contenido principal */}
      <div className="login-content">
        {/* Ilustración principal */}
        <div className="illustration-container">
          <div className="people-illustration">
            <img src="" alt="Login illustration" />
          </div>
        </div>

        {/* Título */}
        <h1 className="login-title">Iniciar Sesión</h1>

        {/* Formulario */}
        <div className="form-container">
          {/* Campo de correo */}
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
              />
            </div>
          </div>

          {/* Campo de contraseña */}
          <div className="input-group">
            <label className="input-label">Contraseña</label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                className="input-field"
                placeholder="••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '🙈'}
              </button>
            </div>
          </div>

          {/* Enlace de olvidaste contraseña */}
          <button className="forgot-password-link" onClick={handleForgotPassword}>
            ¿Olvidaste tu contraseña?
          </button>

          {/* Botón de iniciar sesión */}
          <button className="login-button" onClick={handleLogin}>
            INICIAR SESIÓN
          </button>

          {/* Botón de registro */}
          <button className="register-button" onClick={handleRegister}>
            REGISTRARSE 👥
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
