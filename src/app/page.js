import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BusinessSegments from '../components/BusinessSegments'
import Innovation from '../components/Innovation'
import GlobalPresence from '../components/GlobalPresence'
import Insights from '../components/Insights'
import Careers from '../components/Careers'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BusinessSegments />
      <Innovation />
      <GlobalPresence />
      <Insights />
      <Careers />
      <Footer />
    </main>
  )
}