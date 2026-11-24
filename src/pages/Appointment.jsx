import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from '../components/Button'
import { treatments, doctors, waLink } from '../data/data'
import useTitle from '../components/useTitle'
const today = () => new Date().toISOString().slice(0, 10)
function Field({ k, label, err, children }) {
  return <div className="field"><label htmlFor={k}>{label}</label>{children}{err[k] && <span className="err" role="alert">{err[k]}</span>}</div>
}
export default function Appointment() {
  useTitle('Book an Appointment')
  const [q] = useSearchParams()
  const [f, setF] = useState({ name: '', phone: '', email: '', treatment: q.get('treatment') || '', doctor: q.get('doctor') || '', date: '', time: '', message: '' })
  const [err, setErr] = useState({}), [sent, setSent] = useState(null)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const validate = () => {
    const e = {}
    if (!f.name.trim()) e.name = 'Enter your full name.'
    if (!/^\+?[0-9\s-]{10,15}$/.test(f.phone.trim())) e.phone = 'Enter a valid phone number (10–15 digits).'
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email address.'
    if (!f.treatment) e.treatment = 'Select a treatment.'
    if (!f.date) e.date = 'Choose a date.'; else if (f.date < today()) e.date = 'Choose today or a future date.'
    if (!f.time) e.time = 'Choose a time.'
    return e
  }
  const submit = (ev) => {
    ev.preventDefault(); const e = validate(); setErr(e)
    if (Object.keys(e).length) return
    const tn = treatments.find(t => t.slug === f.treatment)?.name, dn = doctors.find(d => d.slug === f.doctor)?.name || 'Any available doctor'
    setSent(waLink(`Appointment request\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email || '-'}\nTreatment: ${tn}\nDoctor: ${dn}\nDate: ${f.date}\nTime: ${f.time}\nMessage: ${f.message || '-'}`))
  }
  if (sent) return <section className="sec wrap narrow"><h1>Request ready</h1><p>Your request is prepared. Tap below to send it to the clinic on WhatsApp. It is not a confirmed appointment until the clinic replies, and nothing is stored on this website.</p><Button href={sent}>Send on WhatsApp</Button></section>
  return (<section className="sec wrap narrow"><h1>Book an appointment</h1>
    <p className="muted">Requests are sent through WhatsApp and are not stored as confirmed appointments.</p>
    <form onSubmit={submit} noValidate>
      <Field k="name" label="Full name" err={err}><input id="name" value={f.name} onChange={set('name')} /></Field>
      <Field k="phone" label="Phone number" err={err}><input id="phone" type="tel" value={f.phone} onChange={set('phone')} /></Field>
      <Field k="email" label="Email (optional)" err={err}><input id="email" type="email" value={f.email} onChange={set('email')} /></Field>
      <Field k="treatment" label="Treatment" err={err}><select id="treatment" value={f.treatment} onChange={set('treatment')}><option value="">Select…</option>{treatments.map(t => <option key={t.slug} value={t.slug}>{t.name}</option>)}</select></Field>
      <Field k="doctor" label="Preferred doctor" err={err}><select id="doctor" value={f.doctor} onChange={set('doctor')}><option value="">No preference</option>{doctors.map(d => <option key={d.slug} value={d.slug}>{d.name}</option>)}</select></Field>
      <Field k="date" label="Preferred date" err={err}><input id="date" type="date" min={today()} value={f.date} onChange={set('date')} /></Field>
      <Field k="time" label="Preferred time" err={err}><input id="time" type="time" value={f.time} onChange={set('time')} /></Field>
      <Field k="message" label="Additional message" err={err}><textarea id="message" rows="3" value={f.message} onChange={set('message')} /></Field>
      <Button type="submit">Prepare WhatsApp request</Button></form></section>)
}
