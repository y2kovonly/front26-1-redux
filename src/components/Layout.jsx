import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


const Layout = () => {
  return (
    <div className="grid grid-cols-4 grid-flow-row auto-rows-min gap-4 bg-gray-100 h-screen text-center text-slate-900">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout
