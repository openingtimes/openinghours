import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bookmakers Opening Times</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bookies Opening Hours UK" />
        <p className="description">
          Betting Shop Store Opening Times Near Me 
        </p>
      </main>

      <Footer />
    </div>
  )
}
