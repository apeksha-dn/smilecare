import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { Treatments, TreatmentDetails } from './pages/Treatments'
import { Doctors, DoctorDetails } from './pages/Doctors'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
export default function App() {
  return (<Routes><Route element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="treatments" element={<Treatments />} /><Route path="treatments/:slug" element={<TreatmentDetails />} />
    <Route path="doctors" element={<Doctors />} /><Route path="doctors/:slug" element={<DoctorDetails />} />
    <Route path="appointment" element={<Appointment />} /><Route path="contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} /></Route></Routes>)
}
