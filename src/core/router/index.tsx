import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/**
 * In this router component will put in all routes from application
 * and separete from public or private access
 */
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route />
        </Route>

        <Route>
          <Route />
        </Route>
      </Routes>
    </Router>
  )
}
