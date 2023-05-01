import Navbar from '@/pages/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/Layout'
import MainPage from './components/MainPage'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Navbar/>
        <MainPage>
          <Component {...pageProps} />
        </MainPage>
      </Layout>
  )
}
