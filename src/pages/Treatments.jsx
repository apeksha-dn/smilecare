import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import { TreatmentCard } from '../components/Cards'
import { treatments } from '../data/data'
import useTitle from '../components/useTitle'
import NotFound from './NotFound'
export function Treatments() {
  useTitle('Treatments')
  return <section className="sec wrap"><h1>Our treatments</h1><div className="grid">{treatments.map(t => <TreatmentCard key={t.slug} t={t} />)}</div></section>
}
export function TreatmentDetails() {
  const t = treatments.find(x => x.slug === useParams().slug)
  useTitle(t ? t.name : 'Not found')
  if (!t) return <NotFound />
  return (<section className="sec wrap narrow"><h1>{t.name}</h1>
    <h2>Overview</h2><p>{t.desc} Outcomes vary from person to person, and your dentist will explain what is realistic for you.</p>
    <h2>Benefits</h2><ul>{t.benefits.map(b => <li key={b}>{b}</li>)}</ul>
    <h2>When it may be recommended</h2><p>This treatment may be suggested {t.when}.</p>
    <h2>Procedure overview</h2><ol>{t.steps.map(s => <li key={s}>{s}</li>)}</ol>
    <h2>FAQs</h2>{t.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
    <div className="row"><Button to={`/appointment?treatment=${t.slug}`}>Book appointment</Button><Button to="/treatments" variant="ghost">All treatments</Button></div></section>)
}
