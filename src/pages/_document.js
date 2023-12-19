import Footer from '@/components/globals/Footer'
import Navbar from '@/components/globals/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  )
}
