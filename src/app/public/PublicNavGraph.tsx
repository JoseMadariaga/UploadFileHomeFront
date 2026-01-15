import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './Login/ui/LoginPage'

function PublicNavGraph() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default PublicNavGraph
