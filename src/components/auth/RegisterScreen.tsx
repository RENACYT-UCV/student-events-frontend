import React, { useState } from 'react'
import './RegisterScreen.css'
import { useNavigate } from 'react-router-dom'

// interface RegisterScreenProps {}

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const [name, setName] = useState<string>('') // Add state for name

  const navigate = useNavigate() // Obtener la función de navegación

  const handleRegister = async (): Promise<void> => {
    // Make function async
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.')
      return
    }

    console.log('Registrando usuario:', { name, email, password }) // Include name in log

    // Aquí iría la lógica de registro - Reemplazar con llamada a la API
    try {
      const response = await fetch('https://student-events-backend.onrender.com/api/user', {
        // Use fetch API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }) // Send email, password
      })

      const data = await response.json()

      if (response.ok) {
        alert(`Usuario registrado con éxito: ${data.email}`)
        navigate('/login') // Navigate to login on success
      } else {
        alert(`Error en el registro: ${data.message || response.statusText}`)
      }
    } catch (error) {
      console.error('Error al registrar:', error)
      alert('Ocurrió un error al intentar registrar el usuario.')
    }
  }

  // Función para volver a la pantalla anterior
  const handleGoBack = (): void => {
    navigate(-1) // Vuelve a la página anterior (Login en este caso)
  }

  return (
    <div
      className="login-container"
      style={{
        background: `url(/assets/mi-fondo.jpeg) center/cover no-repeat`
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
            <img src="/assets/Fot-crear.png" alt="Registration illustration" />{' '}
            {/* Usar la nueva imagen */}
          </div>
        </div>

        {/* Título */}
        <h1 className="login-title">Crear Cuenta</h1>

        {/* Formulario */}
        <div className="form-container">
          {/* Campo de nombre */}
          <div className="input-group">
            <label className="input-label">Nombre</label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span> {/* Icono para nombre */}
              <input
                type="text"
                className="input-field"
                placeholder="Tu Nombre"
                value={name}
                onChange={e => setName(e.target.value)}
                required // Campo obligatorio
              />
            </div>
          </div>

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
            type="button" // Specify type button to prevent form submission
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
