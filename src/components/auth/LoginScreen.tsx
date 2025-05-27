import { useState } from 'react'
import { useLogin } from '@/hooks/auth/use-login'
import { useAuthActions } from '@store/auth.store'
import { useNavigate } from 'react-router-dom'

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const navigate = useNavigate()

  const { setAccessToken, setRefreshToken } = useAuthActions()

  const { loginAsync } = useLogin()

  const handleLogin = async (): Promise<void> => {
    console.log('Iniciando sesión con:', { email, password })

    await loginAsync(
      { email, password },
      {
        onSuccess: (data: { accessToken: string; refreshToken: string }) => {
          console.log('Inicio de sesión exitoso:', data)
          setAccessToken(data.accessToken)
          setRefreshToken(data.refreshToken)
        },
        onError: (error: Error) => {
          console.error('Error al iniciar sesión:', error)
          alert('Error al iniciar sesión. Por favor, verifica tus credenciales.')
        }
      }
    )

    // Navigate to Home screen
    navigate('/home')
  }

  const handleRegister = (): void => {
    navigate('/register')
  }

  const handleForgotPassword = (): void => {
    navigate('/recover-account')
  }

  return (
    <div className="min-h-screen bg-red-600 flex flex-col items-center">
      {/* Encabezado UniEventos directamente aquí */}
      <div className="w-full bg-red-600 py-6 shadow-md">
        <h1 className="text-3xl font-extrabold text-white text-center">UniEventos</h1>
      </div>

      {/* Contenedor principal */}
      <div className="relative lg:w-full mt-10 max-w-md md:w-20 md:mt-10  bg-gray-100 shadow-2xl rounded-3xl px-6 py-8  mb-30 mx-4">
        {/* Decoraciones */}

        {/* Logo o ilustración */}
        <div className="flex justify-center mb-4 relative z-10">
          <img src="/assets/logo.png" alt="UniEventos Logo" className="w-32 h-32 object-contain" />
        </div>

        {/* Título */}
        <h1 className="text-2xl font-extrabold text-center text-red-600 mb-6 relative z-10">
          Iniciar Sesión
        </h1>

        {/* Botón de Google */}
        <button className="relative z-10 w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 mb-4 hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700">Continuar con Google</span>
        </button>

        {/* Formulario */}
        <div className="space-y-4 relative z-10">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Correo</label>
            <div className="relative">
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 pl-12"
              />
              {/* Reemplazo de 📧 por imagen */}
              <img
                src="/assets/images/mailIcon.png"
                alt="Icono de correo"
                className="absolute pointer-events-none left-3 top-3 w-6 h-6 object-contain"
              />
            </div>
          </div>

          {/* Contraseña */}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="new-password"
                inputMode="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 pr-10"
              />
              {/* Ícono para mostrar/ocultar */}
              <button
                type="button"
                className="absolute right-3 top-3.5 text-xl text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1} // Previene que se active en foco accidental
              >
                <img
                  src={
                    showPassword
                      ? '/assets/images/visibleIcon.png'
                      : '/assets/images/hiddenIcon.png'
                  }
                  alt={showPassword ? 'Mostrar contraseña' : 'Ocultar contraseña'}
                  className="w-6 h-6 pointer-events-none cursor-pointer select-none"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Olvidaste contraseña */}
        <div className="text-right mt-2 relative z-10">
          <button
            onClick={handleForgotPassword}
            className="text-sm text-blue-500 hover:underline cursor-pointer"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        {/* Botones de acción */}
        <div className="mt-6 space-y-3 relative z-10">
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-900 text-white font-bold py-3 rounded-2xl transition cursor-pointer flex items-center justify-center gap-2"
          >
            INICIAR SESIÓN
            <img
              src="/assets/images/loginIcon.png"
              alt="Icono login"
              className="w-6 pointer-events-none h-6"
            />
          </button>
          <button
            onClick={handleRegister}
            className="w-full border-2 border-blue-600 text-blue-900 font-bold py-3 rounded-2xl hover:bg-blue-50 transition cursor-pointer flex items-center justify-center gap-2"
          >
            REGISTRARSE
            <img
              src="/assets/images/registerIcon.png"
              alt="Icono registro"
              className="w-6 pointer-events-none h-6"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
