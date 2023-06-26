import React from 'react'

import { CarCatalogue, Hero, LogoSlider } from '@/components/home'
import SkeletonCarCard from '@/components/custom/SkeletonCarCard'

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