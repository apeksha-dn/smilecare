import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import { DoctorCard } from '../components/Cards'
import { doctors } from '../data/data'
import useTitle from '../components/useTitle'
import NotFound from './NotFound'
export function Doctors() {
  useTitle('Our Doctors')
  return <section className="sec wrap"><h1>Our doctors</h1><p className="muted">Sample, fictional profiles. Replace with real clinic details.</p><div className="grid">{doctors.map(d => <DoctorCard key={d.slug} d={d} />)}</div></section>
}
export function DoctorDetails() {
  const d = doctors.find(x => x.slug === useParams().slug)
  useTitle(d ? d.name : 'Not found')
  if (!d) return <NotFound />
  return <section className="sec wrap narrow"><h1>{d.name}</h1><p><strong>{d.spec}</strong></p><p>Qualification: {d.qual}</p><p>Experience: {d.exp}</p><p>{d.bio}</p>
    <div className="row"><Button to={`/appointment?doctor=${d.slug}`}>Book appointment</Button><Button to="/doctors" variant="ghost">All doctors</Button></div></section>
}
