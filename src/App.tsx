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
              <HeaderBar />
              <LoginScreen />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <HeaderBar />
              <RegisterScreen />
            </>
          }
        />
        <Route
          path="/recover-account"
          element={
            <>
              <HeaderBar />
              <RecoverAccountScreen />
            </>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <>
              <HeaderBar />
              <ResetPasswordScreen />
            </>
          }
        />

        {/* Rutas privadas SIN HeaderBar */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {<Route path="eventos/academico" element={<EventosAcademico />} />}
        </Route>
      </Routes>
    </div>
  )
}

export default App
