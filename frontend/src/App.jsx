import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'

const App = () => {
  return (
    <div>
      {/* <Login/> */}
      {/* <EmployeeDashBoard/> */}
      <AdminDashBoard/>
    </div>
  )
}

export default App