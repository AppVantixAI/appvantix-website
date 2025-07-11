import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import { AuthProvider } from '@/components/auth/AuthProvider'
import { StripeProvider } from '@/components/checkout/StripeProvider'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - AppVantix',
    default: 'AppVantix - AI App Agency | Don\'t Reinvent the Wheel, Focus on Building the Car',
  },
  description:
    'AppVantix LLC is an AI App Agency that creates apps to save people time using AI. We enhance human experiences without replacing them—delivering innovative solutions through app stores, SaaS services, and AI consultation.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <AuthProvider>
          <StripeProvider>
            {children}
          </StripeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}