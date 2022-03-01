/* eslint-disable react/jsx-key */
import Head from 'next/head'
import Baner from '../components/Baner'
import BottomBaner from '../components/BottomBaner';
import Category from '../components/Category';
import ExploreNearbuy from '../components/ExploreNearbuy';
import Footer from '../components/Footer';
import Header from '../components/Header'



export default function Home({ exploreData, cardData }) {
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
                location={item.location}
              />

            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl text-semibold pb-5 py-8'>Live Anywhere</h2>
          <div className='flex space-x-6 overflow-scroll scrollbar-hide p-4'>
            {cardData.map(item => ( 
              <Category
                key={item.img}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </section>

        <BottomBaner 
          img='/bottombaner.webp'
          title='Questions about hosting?'
          buttonText='Ask a Superhost'
        />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://jsonkeeper.com/b/DKAY').then(
    res => res.json()
  );

  const cardData = await fetch('https://links.papareact.com/zp1').then(
    res => res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
