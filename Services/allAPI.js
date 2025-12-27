// AllApi.js
import commonAPI from "./commonApi";

// Auth APIs
export const registerUser = (data) => commonAPI.post("/api/auth/register", data);
export const loginUser = (data) => commonAPI.post("/api/auth/login", data);

// User Bookings APIs
export const getUserAppointments = () => commonAPI.get("/api/user/appointments");
export const bookAppointment = (data) => commonAPI.post("/api/user/appointments", data);

export const getUserLabBookings = () => commonAPI.get("/api/user/labs");
export const bookLabTest = (data) => commonAPI.post("/api/user/labs", data);

// Doctors by department
export const getDoctorsByDepartment = (department) =>
  commonAPI.get(`/api/doctors?department=${department}`);

// Fetch user profile info
export const getUserProfile = () => commonAPI.get("/api/user/profile");
