import { useState } from 'react'
import Login from '../common/Login'
import Register from '../common/Register'

import './App.css'
import { Routes, Route,Navigate } from 'react-router-dom'
import Home from '../common/Home'
import Admin from '../Admin/Admin'
import About from '../common/About'
import Service from '../common/Service'
import Contact from '../common/Contact'
import Lab from '../user/Lab'
import LabRecords from '../user/LAbRecord'
import Appointment from '../user/Appointment'
import User from '../user/User'
function App() {
const isAuthenticated = !!localStorage.getItem('token');
  const userRole = localStorage.getItem('role');
  return (
    <>
      
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<Route path="/admin" element={
        (isAuthenticated && userRole === 'admin') ? <Admin /> : <Navigate to="/login" />
      } />        <Route path="/about" element={<About />} />

        <Route path="/service" element={<Service />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />

        <Route path="/lab" element={<Lab />} />
        <Route path="/labrecords" element={<  LabRecords />} />

<Route path="/appoinment" element={
        isAuthenticated ? <Appointment /> : <Navigate to="/login" />
      } />

      <Route path="/admin" element={
        (isAuthenticated && userRole === 'admin') ? <Admin /> : <Navigate to="/login" />
      } />
      </Routes>
    
    </>
  )
}

export default App
