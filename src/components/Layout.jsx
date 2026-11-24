import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle, ArrowUp, Phone, MapPin, Mail } from 'lucide-react'
import Button from './Button'
import { CLINIC, waLink } from '../data/data'
const links = [['/', 'Home'], ['/treatments', 'Treatments'], ['/doctors', 'Doctors'], ['/appointment', 'Appointment'], ['/contact', 'Contact']]
export default function Layout() {
  const [open, setOpen] = useState(false), [top, setTop] = useState(false), { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])
  useEffect(() => { const f = () => setTop(window.scrollY > 500); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f) }, [])
  return (<>
    <a href="#main" className="skip">Skip to content</a>
    <header className="nav"><div className="wrap nav-in">
      <Link to="/" className="logo">SmileCare<span> Dental</span></Link>
      <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'links open' : 'links'} aria-label="Main">
        {links.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'}>{l}</NavLink>)}
        <Button to="/appointment">Book appointment</Button></nav></div></header>
    <main id="main"><Outlet /></main>
    <footer className="foot"><div className="wrap foot-in">
      <div><div className="logo light">SmileCare Dental</div><p>Gentle, expert dental care. Demo site: all clinic details are placeholders.</p></div>
      <div><p><Phone size={14} /> {CLINIC.phone}</p><p><Mail size={14} /> {CLINIC.email}</p><p><MapPin size={14} /> {CLINIC.address}</p></div>
      <div><p>{CLINIC.hours}</p><Link to="/treatments">Treatments</Link> · <Link to="/doctors">Doctors</Link></div></div></footer>
    <a className="wa" href={waLink('Hello SmileCare, I have a question.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /></a>
    {top && <button className="totop" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp /></button>}
  </>)
}
