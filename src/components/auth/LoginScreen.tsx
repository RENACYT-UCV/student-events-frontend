import { useState } from 'react'
import { useLogin } from '@/hooks/auth/use-login'
import { useAuthActions } from '@store/auth.store'
import { useNavigate } from 'react-router-dom'

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const navigate = useNavigate()

  const { setAccessToken } = useAuthActions()

  const { loginAsync } = useLogin()

  const handleLogin = async (): Promise<void> => {
    console.log('Iniciando sesión con:', { email, password })

    await loginAsync(
      { email, password },
      {
        onSuccess: (data: { accessToken: string; refreshToken: string }) => {
          console.log('Inicio de sesión exitoso:', data)
          setAccessToken(data.accessToken)
          setAccessToken(data.refreshToken)
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
      <div className="relative w-full max-w-md bg-gray-100 shadow-2xl rounded-3xl px-6 py-8 mt-20 mx-4">
        {/* Decoraciones */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-white opacity-10 rounded-full" />
        <div
          className="absolute top-4 -right-8 w-24 h-24 bg-red-300 opacity-30 rounded-lg"
          style={{ transform: 'rotate(25deg)' }}
        />
        <div className="absolute -bottom-12 -left-8 w-20 h-20 bg-sky-400 opacity-40 rounded-full" />
        <div
          className="absolute -bottom-14 -right-6 w-28 h-28 bg-green-200 opacity-30 rounded-lg"
          style={{ transform: 'rotate(-15deg)' }}
        />

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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 pl-10"
              />
              <span className="absolute left-3 top-3.5 text-gray-400">📧</span>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-3.5 text-xl text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '🙈'}
              </button>
            </div>
          </div>
        </div>

        {/* Olvidaste contraseña */}
        <div className="text-right mt-2 relative z-10">
          <button onClick={handleForgotPassword} className="text-sm text-blue-500 hover:underline">
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        {/* Botones de acción */}
        <div className="mt-6 space-y-3 relative z-10">
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
          >
            INICIAR SESIÓN
          </button>
          <button
            onClick={handleRegister}
            className="w-full border-2 border-blue-600 text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition"
          >
            REGISTRARSE 👥
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
