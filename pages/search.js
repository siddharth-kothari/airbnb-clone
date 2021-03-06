import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header'
import format from 'date-fns/format';
import InfoCard from '../components/InfoCard';
import MapBox from '../components/MapBox';

function Search({ searchResults }) {

  const router = useRouter();
  const { location, startDate, endDate, noOfguests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div className='h-screen'>
      <Head >
        <title>Airbnb</title>
        <link rel="icon" href="/airbnb.ico" />
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfguests} guests`} />
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

          <div className='flex flex-col'>
            {searchResults.map(item => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}

              />
            ))}
          </div>
        </section>

        <section className='hidden xl:inline-flex xl:min-w-[600]'>
          <MapBox searchResults={searchResults}/>
        </section>
      </main>

      <Footer />

    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    res => res.json()
  );

  return {
    props: {
      searchResults,
    }
  }
}