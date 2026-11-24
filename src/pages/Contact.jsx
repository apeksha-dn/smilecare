import { useState } from 'react'
import Button from '../components/Button'
import { CLINIC, waLink } from '../data/data'
import useTitle from '../components/useTitle'
export default function Contact() {
  useTitle('Contact Us')
  const [m, setM] = useState({ name: '', msg: '' })
  return (<section className="sec wrap narrow"><h1>Contact us</h1>
    <p>{CLINIC.address}</p><p>{CLINIC.phone}</p><p>{CLINIC.email}</p><p>{CLINIC.hours}</p>
    <div className="map" role="img" aria-label="Google Maps placeholder">Google Maps embed goes here. Add the clinic’s embed URL in an iframe.</div>
    <form onSubmit={(e) => { e.preventDefault(); window.open(waLink(`Hello, I'm ${m.name}. ${m.msg}`), '_blank') }}>
      <div className="field"><label htmlFor="cn">Your name</label><input id="cn" required value={m.name} onChange={(e) => setM({ ...m, name: e.target.value })} /></div>
      <div className="field"><label htmlFor="cm">Message</label><textarea id="cm" rows="3" required value={m.msg} onChange={(e) => setM({ ...m, msg: e.target.value })} /></div>
      <Button type="submit">Send via WhatsApp</Button></form></section>)
}
