import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full bg-gray-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
