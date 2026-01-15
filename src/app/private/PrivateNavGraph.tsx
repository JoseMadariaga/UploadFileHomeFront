import { Navigate, Route, Routes } from 'react-router-dom'
import UploadArchivePage from './UploadArchive/ui/pages/uploadArchive/UploadArchivePage'

function PrivateNavGraph() {
  return (
    <Routes>
      <Route index element={<Navigate to="upload-archive" replace />} />
      <Route path="upload-archive" element={<UploadArchivePage />} />
      <Route path="*" element={<Navigate to="upload-archive" replace />} />
    </Routes>
  )
}

export default PrivateNavGraph
