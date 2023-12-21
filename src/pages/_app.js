import Footer from '@/components/globals/Footer'
import Navbar from '@/components/globals/Navbar'
import '@/styles/globals.css'
import Router from "next/router";
import { useState } from 'react';
import Loader from '@/components/loader';
export default function App({ Component, pageProps }) {
  const [loading, setloading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setloading(true);
  });
  Router.events.on("routeChangeError", (url) => {
    setloading(false);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setloading(false);
  });
  return (
    <>
      {
        loading == false ? (
          <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </>
        ) : (
          <Loader />
        )
      }
    </>
  )
}
