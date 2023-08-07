import { useLazyLoadQuery } from 'react-relay'
import indexPage from '../queries/indexPage'

export default function Page() {
  console.log('bug')
  const data = useLazyLoadQuery(indexPage, {})
  return <h1>Hello, Next.js stand! {JSON.stringify(data)}</h1>
}
