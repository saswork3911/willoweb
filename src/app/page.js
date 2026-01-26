import Navbar from '../components/sections/Navbar'
import Hero from '../components/sections/Hero'
import BusinessSegments from '../components/sections/BusinessSegments'
import Innovation from '../components/sections/Innovation'
import GlobalPresence from '../components/sections/GlobalPresence'
import Insights from '../components/sections/Insights'
import Careers from '../components/sections/Careers'
import Footer from '../components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BusinessSegments />
      <Innovation />
      <Insights />
      <GlobalPresence />
      <Careers />
      <Footer />
    </main>
  )
}