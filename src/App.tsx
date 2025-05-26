import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EventList from './components/eventos/EventList'
import EventDetail from './components/eventos/EventDetail'
import { useAuthActions } from '@store/auth.store'
import { useEffect } from 'react'

export default function App() {
  const { setAccessToken, setRefreshToken, setUserId } = useAuthActions()

  useEffect(() => {
    const loadTokens = () => {
      const storedAccessToken = localStorage.getItem('accessToken')
      const storedRefreshToken = localStorage.getItem('refreshToken')
      const storedUserId = localStorage.getItem('userId')

      if (storedAccessToken) {
        setAccessToken(storedAccessToken)
      }
      if (storedRefreshToken) {
        setRefreshToken(storedRefreshToken)
      }
      if (storedUserId) {
        setUserId(storedUserId)
      }
    }
    loadTokens()
  }, [setAccessToken, setRefreshToken, setUserId])

  return (
    <Router>
      <Routes>
        <Route path="/eventos" element={<EventList />} />
        <Route path="/eventos/:id" element={<EventDetail />} />
      </Routes>
    </Router>
  )
}
