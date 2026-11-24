import Button from '../components/Button'
import { TreatmentCard, DoctorCard } from '../components/Cards'
import { treatments, doctors } from '../data/data'
import useTitle from '../components/useTitle'
const stats = [['10+', 'Years of experience (sample)'], ['5,000+', 'Patients treated (sample)'], ['3', 'Specialists (sample)']]
const why = [['Gentle approach', 'Unhurried appointments and clear explanations.'], ['Strict hygiene', 'Instruments sterilised between every patient.'], ['Transparent plans', 'You see options and costs before treatment.']]
const faqs = [['How often should I visit a dentist?', 'Many people benefit from a check-up every six months, but your dentist will advise what suits you.'], ['Do you treat children?', 'Yes. Our pediatric care is designed to keep visits calm and friendly.'], ['How do I book?', 'Use the appointment form. It opens WhatsApp with your request ready to send.']]
export default function Home() {
  useTitle('Expert Dental Care')
  return (<>
    <section className="hero"><div className="wrap hero-in"><div>
      <h1>Your Smile Deserves Expert Care.</h1>
      <p className="lead">Comfortable, modern dentistry for the whole family, with clear advice at every step.</p>
      <div className="row"><Button to="/appointment">Book appointment</Button><Button to="/treatments" variant="ghost">Explore treatments</Button></div></div>
      <div className="stats">{stats.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}</div></div></section>
    <section className="sec wrap"><h2>Featured treatments</h2><div className="grid">{treatments.slice(0, 6).map(t => <TreatmentCard key={t.slug} t={t} />)}</div></section>
    <section className="sec tint"><div className="wrap"><h2>Why patients choose us</h2><div className="grid">{why.map(([h, p]) => <div className="card" key={h}><h3>{h}</h3><p>{p}</p></div>)}</div></div></section>
    <section className="sec wrap"><h2>Meet our dentists</h2><p className="muted">Sample profiles until real team details are supplied.</p><div className="grid">{doctors.map(d => <DoctorCard key={d.slug} d={d} />)}</div></section>
    <section className="sec tint"><div className="wrap narrow"><h2>Frequently asked questions</h2>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section></>)
}
