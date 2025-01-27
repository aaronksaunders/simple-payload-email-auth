import React from 'react'

export const metadata = {
  description: 'Payload App',
  title: 'Payload Auth   Example',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
