import Head from 'next/head'
import Baner from '../components/Baner'
import Header from '../components/Header'


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/airbnb.png" />
      </Head>
      <div className='bg-black'>
        <Header />
        <Baner />
      </div>
    </div>
  )
}
