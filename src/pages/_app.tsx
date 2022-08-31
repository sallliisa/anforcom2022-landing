import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import PublicLayout from 'layouts/PublicLayout'
import { LazyMotion, AnimatePresence, domAnimation } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LazyMotion features={domAnimation}>
        <Head>
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
          <meta name='color-scheme' content='only light' />
          <title>Anforcom 2022</title>
          <link rel='icon' href='/favicon.ico' />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <AnimatePresence initial={false} onExitComplete={() => window.scrollTo(0, 0)} exitBeforeEnter>
          <PublicLayout>
            <Component {...pageProps} />
          </PublicLayout>
        </AnimatePresence>
      </LazyMotion>
    </>
  )
}

export default MyApp
