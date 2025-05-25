import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MainLayout from '@components/MainLayout'

import Login from '@pages/auth/Login'
import HomePage from '@pages/HomePage'
import ProfilePage from '@pages/ProfilePage'
import EditProfilePage from '@pages/EditProfilePage'
import NotificationPage from '@pages/NotificationPage'
import HistorialPage from '@pages/HistorialPage'

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
          <Route index element={<HomePage/>} />
          <Route path="/notifications" element={<NotificationPage/>}/>
          <Route path="/historial" element={< HistorialPage/>}/>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage/>}/>   

        </Route>
      </Routes>
    </Router>
  )
}
