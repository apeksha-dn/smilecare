import { Link } from 'react-router-dom'
export default function Button({ to, href, variant='primary', children, ...p }) {
  const c = `btn btn-${variant}`
  if (to) return <Link to={to} className={c} {...p}>{children}</Link>
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={c} {...p}>{children}</a>
  return <button className={c} {...p}>{children}</button>
}
