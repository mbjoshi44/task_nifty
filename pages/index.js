import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeroSection from '../components/HeroSection'
// import Features from "../components/Features"
import Features from '../components/Features.jsx'
import Options from '../components/Options.jsx'
import Testimonials from '../components/Testimonials.jsx'
import PriceSection from '../components/PricingSection.jsx'
import Accordion from '../components/Accordion.jsx'
import Footer from '../components/Footer.jsx'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Nifty Trader" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <HeroSection/>
        <Features/>
        <Options/>
        <Testimonials/>
        <PriceSection/>
        <Accordion/>
        <Footer/>
      </>
    </div>
  )
}
