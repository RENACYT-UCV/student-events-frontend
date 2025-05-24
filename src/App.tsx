// src/App.tsx

import { Routes, Route } from 'react-router-dom'
import HeaderBar from './components/HeaderBar'
import LoginScreen from './components/LoginScreen'
import RegisterScreen from './components/RegisterScreen'
import RecoverAccountScreen from './components/RecoverAccountScreen'
import ResetPasswordScreen from './components/ResetPasswordScreen'
import Home from './components/eventos/Home'
import EventosAcademico from './components/eventos/EventosAcademico'

import MainLayout from './components/MainLayout'

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        {/* Rutas públicas CON HeaderBar */}
        <Route
          path="/login"
          element={
            <>
              <HeaderBar title="Ingresar"/>
              <LoginScreen />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <HeaderBar title="Registrar" />
              <RegisterScreen />
            </>
          }
        />
        <Route
          path="/recover-account"
          element={
            <>
              <HeaderBar title="Recuperar Cuenta"/>
              <RecoverAccountScreen />
            </>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <>
              <HeaderBar title="Restablecer Contraseña"/>
              <ResetPasswordScreen />
            </>
          }
        />
        <Route
          path="/profile/:token"
          element={
            <>

            </>
          }
          
        />

        {/* Rutas privadas SIN HeaderBar */}
        <Route path="/" element={<MainLayout />}>
          {/* <Route element={<HeaderBar title="Inicio"/>}/> */}
          <Route index element={<Home />} />
          {<Route path="eventos/academico" element={<EventosAcademico />} />}
        </Route>
      </Routes>
    </div>
  )
}

export default App
