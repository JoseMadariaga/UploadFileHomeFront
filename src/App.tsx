import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PrivateNavGraph from './app/private/PrivateNavGraph'
import PublicNavGraph from './app/public/PublicNavGraph'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login/*" element={<PublicNavGraph />} />
        <Route path="/app/*" element={<PrivateNavGraph />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
