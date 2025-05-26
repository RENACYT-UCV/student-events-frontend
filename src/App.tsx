import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EventList from './components/eventos/EventList'
import EventDetail from './components/eventos/EventDetail'
import { useAuthActions } from '@store/auth.store'
import { useEffect } from 'react'

export default function App() {
  const { loadTokens } = useAuthActions()

  useEffect(() => {
    loadTokens()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/eventos" element={<EventList />} />
        <Route path="/eventos/:id" element={<EventDetail />} />
      </Routes>
    </Router>
  )
}
