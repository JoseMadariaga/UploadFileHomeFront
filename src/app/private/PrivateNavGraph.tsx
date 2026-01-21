import { Navigate, Route, Routes } from 'react-router-dom'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import UploadArchivePage from './UploadArchive/ui/UploadArchivePage'
import DashboardPage from './Dashboard/ui/DashboardPage'

function PrivateNavGraph() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Routes>
          <Route index element={<Navigate to="upload-archive" replace />} />
      <Route path="upload-archive" element={<UploadArchivePage />} />
      <Route path="*" element={<Navigate to="upload-archive" replace />} />
      <Route path="dashboard" element={<DashboardPage />} />
        </Routes>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default PrivateNavGraph
