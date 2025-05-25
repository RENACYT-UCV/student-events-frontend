import React, { useState } from 'react'
import './RegisterScreen.css'
import { useNavigate } from 'react-router-dom'

// interface RegisterScreenProps {}

const RegisterScreen: React.FC = () => {
  const [username, setUser] = useState<string>('')
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
    <div className=" bg-red-600 flex flex-col items-center">
      <div className="w-full bg-red-600 py-6 shadow-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center">Registrar Cuenta</h1>
      </div>
      {/* Botón de volver - Usamos una clase para estilizarlo */}
      <button className="back-button-register">
        <span className="arrow">&larr;</span>
        <span className="text"> Volver</span>
      </button>

      <div>
        <img src="/assets/images/background_1(2).png" className='background-image-ucv' alt="" />
      </div>
      

      {/* Contenido principal */}
      <div className="register-content">
        {/* Ilustración principal */}
        <div className="illustration-container-register">
          <div className="people-illustration-register">
            <img src="/assets/images/young_teamwork.png" alt="Registration illustration" />{' '}
            {/* Usar la nueva imagen */}
          </div>
        </div>

        {/* Título */}
        {/* <h1 className="login-title">Crear Cuenta</h1> */}

        <button className="relative z-10 w-full flex items-center justify-center
         gap-3 border border-gray-300 rounded-lg py-3 mb-4 hover:bg-gray-200 
         transition cursor-pointer">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700">
            Registrarse con Google
          </span>
        </button>
        {/* Formulario */}
        <div className="form-container-register">

          <div className="input-group">
            <label className="input-label-register">Usuario</label>
            <div className="input-wrapper">
              <span className="input-icon">✉️</span>
              <input
                type='text'
                className="input-field"
                placeholder="Usuario123"
                value={username}
                onChange={e => setUser(e.target.value)}
                required // Campo obligatorio
              />
            </div>
          </div>


          {/* Campo de correo */}
          <div className="input-group">
            <label className="input-label-register">Correo</label>
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
            <label className="input-label-register">Contraseña</label>
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
            <label className="input-label-register">Confirmar Contraseña</label>
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
            className="register-button" // Puedes usar los mismos estilos de botón si quieres
            onClick={handleRegister}
          >
            REGISTRAR CUENTA
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