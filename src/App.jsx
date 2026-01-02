import { Routes, Route } from "react-router-dom";

import Login from "../common/Login";
import Register from "../common/Register";
import Home from "../common/Home";
import Admin from "../Admin/Admin";
import About from "../common/About";
import Service from "../common/Service";
import Contact from "../common/Contact";
import Lab from "../user/Lab";
import LabRecords from "../user/LabRecord";
import Appointment from "../user/Appointment";
import User from "../user/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/admin" element={<Admin />} />

      <Route path="/lab" element={<Lab />} />
      <Route path="/lab-records" element={<LabRecords />} />
      <Route path="/appointments" element={<Appointment />} />

      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
