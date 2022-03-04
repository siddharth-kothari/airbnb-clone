import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header'

function Search() {
  return (
    <div className='h-screen'>
      <Head >
        <title>Airbnb</title>
        <link rel="icon" href="/airbnb.ico" />
      </Head>
      <Header />
      <main className='flex'>
        <section>
          <p className='text-xs'>X no of stays for N no of guests.</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in City</h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Price</p>
            <p className='button'>Type of place</p>
            <p className='button'>Amenities</p>
            <p className='button'>Free cancellation</p>
            <p className='button'>Filters</p>
          </div> 
        </section>

      </main>
      <Footer />

    </div>
  )
}

export default Search