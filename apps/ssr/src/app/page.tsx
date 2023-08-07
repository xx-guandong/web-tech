'use client'

import { useLazyLoadQuery } from 'react-relay'
import indexPage from '../queries/indexPage'
import { IS_SERVER } from '@/relay/environment'

export default function Page() {
  const data = !IS_SERVER ? useLazyLoadQuery(indexPage, {}) : 'Server'
  return <h1>Hello, Next.js stand! {JSON.stringify(data)}</h1>
}
