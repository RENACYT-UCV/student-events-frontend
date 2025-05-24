import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from '@components/MainLayout'
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
          <Route path="eventos" element={<EventList />} />
          <Route path="eventos/:id" element={<EventDetail />} />
          <Route path="eventos/success" element={<EventSuccess />} />
        </Route>
      </Routes>
    </Router>
  )
}
