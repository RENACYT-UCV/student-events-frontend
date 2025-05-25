import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EventList from './components/eventos/EventList'
import EventDetail from './components/eventos/EventDetail'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/eventos" element={<EventList />} />
        <Route path="/eventos/:id" element={<EventDetail />} />
      </Routes>
    </Router>
  )
}
