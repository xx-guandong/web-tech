'use client'

import { RelayEnvironmentProvider } from 'react-relay'
import { getCurrentEnvironment } from '../relay/environment'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const environment = getCurrentEnvironment()
  return (
    <html lang="en">
      <head>
        <title>SSR</title>
      </head>
      <RelayEnvironmentProvider environment={environment}>
        <body>{children}</body>
      </RelayEnvironmentProvider>
    </html>
  )
}
