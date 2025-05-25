import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from '@components/MainLayout'

import HistorialScreen from '@components/Historial/HistorialScreen'
import HistorialEventDetail from '@components/Historial/HistorialEventDataileScreen'
import Login from '@pages/auth/Login'
import HomePage from '@pages/HomePage'
import ProfilePage from '@pages/ProfilePage'
import EditProfilePage from '@pages/EditProfilePage'
import NotificationPage from '@pages/NotificationPage'
import HistorialPage from '@pages/HistorialPage'
import EventList from '@components/eventos/EventList'
import EventDetail from '@components/eventos/EventDetail'
import EventSuccess from '@components/eventos/EventSuccess'
import RegisterScreen from '@components/auth/RegisterScreen'
import RecoverAccountScreen from '@components/auth/RecoverAccountScreen'
import ResetPasswordScreen from '@components/auth/ResetPasswordScreen'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/recover-account" element={<RecoverAccountScreen />} />
          <Route path="/reset-password" element={<ResetPasswordScreen />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/historial" element={<HistorialPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="historial" element={<HistorialScreen />} /> {/* <-- Aquí */}
          <Route path="/evento/:id" element={<HistorialEventDetail />} />
          <Route path="eventos" element={<EventList />} />
          <Route path="eventos/:id" element={<EventDetail />} />
          <Route path="eventos/success" element={<EventSuccess />} />
        </Route>
      </Routes>
    </Router>
  )
}
