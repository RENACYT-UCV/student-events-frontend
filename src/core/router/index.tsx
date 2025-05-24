import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from '@components/MainLayout'

import HistorialScreen from '@components/Historial/HistorialScreen';
import HistorialEventDetail from '@components/Historial/HistorialEventDataileScreen'
import Login from '@pages/auth/Login'
import Home from '@pages/Home'
import EventList from '@components/eventos/EventList'
import EventDetail from '@components/eventos/EventDetail'
import EventSuccess from '@components/eventos/EventSuccess'

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
          <Route path="eventos" element={<EventList />} />
          <Route path="eventos/:id" element={<EventDetail />} />
          <Route path="eventos/success" element={<EventSuccess />} />
        </Route>
      </Routes>
    </Router>
  )
}
