import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header'
import format from 'date-fns/format';

function Search() {

  const router = useRouter();
  const { location, startDate, endDate, noOfguests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMM")
  const formattedEndDate = format(new Date(endDate), "dd MMM")
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div className='h-screen'>
      <Head >
        <title>Airbnb</title>
        <link rel="icon" href="/airbnb.ico" />
      </Head>
      <Header />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>300+ stays  - {range} - for {noOfguests} guests.</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
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