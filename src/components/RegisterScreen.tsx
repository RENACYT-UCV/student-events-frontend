import React, { useState } from 'react'
import './RegisterScreen.css' // Usar el nuevo CSS
import fotCrear from '../assets/Fot-crear.png' // Importar la nueva imagen
import fondo from '../assets/mi-fondo.jpeg' // Puedes usar el mismo fondo o cambiarlo
import { useNavigate } from 'react-router-dom' // Aseguramos que esté importado

interface RegisterScreenProps {}

const RegisterScreen: React.FC<RegisterScreenProps> = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const navigate = useNavigate() // Obtener la función de navegación

  const handleRegister = (): void => {
    console.log('Registrando usuario:', { email, password, confirmPassword })
    // Aquí iría la lógica de registro
    alert(`Usuario registrado con email: ${email}`)
  }

  // Función para volver a la pantalla anterior
  const handleGoBack = (): void => {
    navigate(-1) // Vuelve a la página anterior (Login en este caso)
  }

  return (
    <div
      className="login-container"
      style={{
        background: `url(${fondo}) center/cover no-repeat`
      }}
    >
      {/* Botón de volver - Usamos una clase para estilizarlo */}
      <button className="back-button" onClick={handleGoBack}>
        {' '}
        {/* Quitamos estilos en línea */}← Volver
      </button>

      {/* Decoraciones de fondo (pueden ser las mismas) */}
      <div className="decoration-top-left"></div>
      <div className="decoration-top-right"></div>
      <div className="decoration-bottom-left"></div>
      <div className="decoration-bottom-right"></div>

      {/* Contenido principal */}
      <div className="login-content">
        {/* Ilustración principal */}
        <div className="illustration-container">
          <div className="people-illustration">
            <img src={fotCrear} alt="Registration illustration" /> {/* Usar la nueva imagen */}
          </div>
        </div>

        {/* Título */}
        <h1 className="login-title">Crear Cuenta</h1>

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
                required // Campo obligatorio
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
                required // Campo obligatorio
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

          {/* Campo de confirmar contraseña */}
          <div className="input-group">
            <label className="input-label">Confirmar Contraseña</label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="input-field"
                placeholder="••••••"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required // Campo obligatorio
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '👁️' : '🙈'}
              </button>
            </div>
          </div>

          {/* Botón de registro */}
          <button
            className="login-button" // Puedes usar los mismos estilos de botón si quieres
            onClick={handleRegister}
          >
            CREAR CUENTA
          </button>

          {/* Opcional: Enlace para volver al Login */}
          {/* <button 
            className="forgot-password-link" // Puedes usar el mismo estilo de enlace
            onClick={() => alert('Volver a Login')}
          >
            ¿Ya tienes cuenta? Inicia Sesión
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
