import { CarCatalogue, Hero, LogoSlider } from '@/components/home'

const Home = async () => {

  return ( 
    <main className="overflow-x-hidden">
        <Hero />
        <LogoSlider />
        <CarCatalogue />
    </main>
  )
}

export default Home