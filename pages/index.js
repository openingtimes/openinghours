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
    <p>
    <a href="https://betopeningtimes.co.uk/ladbrokes">Ladbrokes opening times</a>
    </p>
    <p>
    <a href="https://betnearme.co.uk/ladbrokes">Ladbrokes near me</a>
    </p>
    <p>
    <a href="https://closingtimes.co.uk/ladbrokes">Ladbrokes closing times</a>
    </p>
    <p>
    <a href="https://openingtimestoday.co.uk/ladbrokes">Ladbrokes opening times today</a>
    </p>
    <p>
    <a href="https://openingtimessunday.co.uk/ladbrokes">Ladbrokes opening times Sunday</a>
    </p>
    <p>
    <a href="https://openingtimessaturday.co.uk/ladbrokes">Ladbrokes opening times Saturday</a>
    </p>
    <p>
    <a href="https://bookieshours.co.uk/ladbrokes-opening-hours">Ladbrokes opening hours</a>
    </p>
    <p>
    <a href="https://openingtoday.co.uk/ladbrokes">Ladbrokes opening times tomorrow</a>
    </p>
    <p>
    <a href="https://openingtimesday.co.uk/">Ladbrokes opening times near me</a>
    </p>
      </main>
      <Footer />
    </div>
  )
}
