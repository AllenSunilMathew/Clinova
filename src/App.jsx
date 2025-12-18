import { useState } from 'react'
import Login from '../common/Login'
import Register from '../common/Register'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../common/Home'
import Admin from '../Admin/Admin'
import About from '../common/About'
import Service from '../common/Service'
import Contact from '../common/Contact'
import Lab from '../user/Lab'
import LabRecords from '../user/LAbRecord'
import Appointment from '../user/Appointment'
function App() {

  return (
    <>
      
      <Routes>


        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />

        <Route path="/service" element={<Service />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/lab" element={<Lab />} />
        <Route path="/labrecords" element={<  LabRecords />} />

        <Route path="/appoinment" element={<  Appointment />} />

      </Routes>
    
    </>
  )
}

export default App
