import { useAccessToken } from '@store/auth.store'
import { Navigate, useLocation, Outlet } from 'react-router-dom'

export function ProtectedRoute() {
  const accessToken = useAccessToken()
  const location = useLocation()

  if (!accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <Outlet />
}
