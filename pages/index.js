/* eslint-disable react/jsx-key */
import Head from 'next/head'
import Baner from '../components/Baner'
import ExploreNearbuy from '../components/ExploreNearbuy';
import Header from '../components/Header'


export default function Home({  exploreData }) {
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

      <main className='max-w-7xl mx-auto px-8 sm:px-16 '>
          <section className='pt-6'>
            <h2 className='text-4xl text-semibold pb-5'>Explore Nearbuy</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {exploreData?.map(item => (
              <ExploreNearbuy
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location }
              />

            ))}
            </div>
            
          </section>
        </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://jsonkeeper.com/b/DKAY').then(
    res => res.json()
  );

  return{
    props:{
      exploreData 
    }
  }
}
