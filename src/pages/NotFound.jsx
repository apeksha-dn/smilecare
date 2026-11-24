import Button from '../components/Button'
import useTitle from '../components/useTitle'
export default function NotFound() {
  useTitle('Page not found')
  return <section className="sec wrap narrow"><h1>Page not found</h1><p>That page doesn’t exist or has moved.</p><Button to="/">Back to home</Button></section>
}
