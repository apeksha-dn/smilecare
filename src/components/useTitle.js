import { useEffect } from 'react'
export default (t) => useEffect(() => { document.title = `${t} | SmileCare Dental Clinic` }, [t])
