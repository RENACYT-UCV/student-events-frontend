import React, { useState } from 'react'
import './RegisterScreen.css'
import { useNavigate } from 'react-router-dom'

const RegisterScreen: React.FC = () => {
  const [username, setUser] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleRegister = async (): Promise<void> => {
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.')
      return
    }

    try {
      const response = await fetch('https://student-events-backend-kypp.onrender.com/api/auth/register', {
        // Use fetch API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, username })

      })

      const data = await response.json()

      if (response.ok) {
        alert(`Usuario registrado con éxito: ${data.email}`)
        navigate('/login')
      } else {
        alert(`Error en el registro: ${data.message || response.statusText}`)
      }
    } catch (error) {
      console.error('Error al registrar:', error)
      alert('Ocurrió un error al intentar registrar el usuario.')
    }
  }

  const handleGoBack = (): void => {
    navigate(-1)
  }

  return (
    <div className="bg-red-600 flex flex-col items-center min-h-screen">
      <div className="w-full bg-red-600 py-6 shadow-md">
        <h1 className="text-3xl font-extrabold [padding:70px_28px_22px] text-white text-center">Registrar Cuenta</h1>
      </div>

      <button className="back-button-register mt-1 mb-3 text-white font-semibold" onClick={handleGoBack}>
        <span className="arrow">&larr;</span>
        <span className="text"> Volver</span>
      </button>

      <div className="relative lg:w-full mt-6 max-w-md md:w-20 bg-gray-100 shadow-2xl rounded-3xl px-6 py-8 mx-4">
        <div className="flex justify-center mb-4 relative z-10">
          <img src="/assets/logo.png" alt="UniEventos Logo" className="w-28 h-28 object-contain" />
        </div>

        <h1 className="text-2xl font-extrabold text-center text-red-600 mb-6">Crear Cuenta</h1>

        <div className="space-y-4">
          {/* Nombre */}

          {/* Usuario */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={e => setUser(e.target.value)}
              placeholder="Nombre de usuario"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Email con ícono */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Correo electrónico</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="correo@example.com"
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <img
                src="/assets/images/mailIcon.png"
                alt="Icono de correo"
                className="absolute left-3 top-3 w-6 h-6 object-contain pointer-events-none"
              />
            </div>
          </div>

          {/* Contraseña con ícono y toggle */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••"
                autoComplete="new-password"
                className="w-full px-4 py-3 pl-12 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <img
                src="/assets/images/lockIcon.png"
                alt="Icono de candado"
                className="absolute left-3 top-3 w-6 h-6 object-contain pointer-events-none"
              />
              <button
                type="button"
                className="absolute right-3 top-3.5"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                <img
                  src={showPassword ? '/assets/images/visibleIcon.png' : '/assets/images/hiddenIcon.png'}
                  alt={showPassword ? 'Mostrar contraseña' : 'Ocultar contraseña'}
                  className="w-6 h-6 pointer-events-none"
                />
              </button>
            </div>
          </div>

          {/* Confirmar Contraseña con ícono y toggle */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Confirmar contraseña</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="••••••"
                className="w-full px-4 py-3 pl-12 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <img
                src="/assets/images/lockIcon.png"
                alt="Icono de candado"
                className="absolute left-3 top-3 w-6 h-6 object-contain pointer-events-none"
              />
              <button
                type="button"
                className="absolute right-3 top-3.5"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                tabIndex={-1}
              >
                <img
                  src={showConfirmPassword ? '/assets/images/visibleIcon.png' : '/assets/images/hiddenIcon.png'}
                  alt={showConfirmPassword ? 'Mostrar contraseña' : 'Ocultar contraseña'}
                  className="w-6 h-6 pointer-events-none"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Botón de registro */}
        <div className="mt-6">
          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 hover:bg-blue-900 text-white font-bold py-3 rounded-2xl transition cursor-pointer flex items-center justify-center gap-2"
          >
            REGISTRARSE
            <img src="/assets/images/registerIcon_1.png" alt="Icono registro" className="w-6 h-6 pointer-events-none" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
