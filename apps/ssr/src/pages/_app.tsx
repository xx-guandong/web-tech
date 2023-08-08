import { RelayEnvironmentProvider } from 'react-relay'
import { initRelayEnvironment } from '../RelayEnvironment'
import { RecordSource } from 'relay-runtime'
import { useMemo, useEffect, Suspense } from 'react'
import { RelayPageProps } from '../relay-types'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import App from 'next/app'
import '../styles/style.css'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function MyApp({
  Component,
  pageProps,
}: AppProps<RelayPageProps>) {
  const environment = useMemo(initRelayEnvironment, [])

  useEffect(() => {
    const store = environment.getStore()

    // Hydrate the store.
    store.publish(new RecordSource(pageProps.initialRecords))

    // Notify any existing subscribers.
    store.notify()
  }, [environment, pageProps.initialRecords])

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={<LoadingSpinner />}>
        <Component {...pageProps} />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
  return { ...ctx }
}
