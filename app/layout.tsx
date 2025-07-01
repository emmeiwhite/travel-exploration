import { Poppins } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Travel Your Way | Next.js 15',
  description: 'Travel made easy yet challenging and daring with Next.js as your companion'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <nav>NAVBAR</nav>
        {children}
        <footer>FOOTER</footer>
      </body>
    </html>
  )
}
