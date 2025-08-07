import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/admin/Dashboard'
import Login from '../components/Login'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aos/login" element={<Login/>} />
        <Route path="/aos/dashboard" element={<Dashboard/>} />
    </Routes>
  )
}

export default AppRoutes