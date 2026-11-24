import { Smile, User } from 'lucide-react'
import Button from './Button'
export const TreatmentCard = ({ t }) => (
  <article className="card"><div className="thumb"><Smile size={40} /></div>
    <h3>{t.name}</h3><p>{t.desc}</p><Button to={`/treatments/${t.slug}`} variant="ghost">Learn more</Button></article>)
export const DoctorCard = ({ d }) => (
  <article className="card"><div className="thumb round"><User size={40} /></div>
    <h3>{d.name}</h3><p className="muted">{d.qual}</p><p><strong>{d.spec}</strong>, {d.exp}</p><p>{d.bio}</p>
    <div className="row"><Button to={`/doctors/${d.slug}`} variant="ghost">View profile</Button><Button to={`/appointment?doctor=${d.slug}`}>Book appointment</Button></div></article>)
