import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import GlobalLoading from '@/components/ui/global-loading'

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <GlobalLoading />
      <Header />
      <main className="flex-1 w-full bg-gray-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
