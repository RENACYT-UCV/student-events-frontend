import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MainLayout from '@components/MainLayout'
import HistorialScreen from '@components/Historial/HistorialScreen';
import HistorialEventDetail from '@components/Historial/HistorialEventDataileScreen'
import Login from '@pages/auth/Login'
import Home from '@pages/Home'

/**
 * In this router component will put in all routes from application
 * and separete from public or private access
 */
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="historial" element={<HistorialScreen />} /> {/* <-- Aquí */}
          <Route path="/evento/:id" element={<HistorialEventDetail />} />
        </Route>
      </Routes>
    </Router>
  )
}
