"use client"

import sc from "smoothscroll-polyfill"
import {useEffect} from 'react'
import Image from 'next/image'
import { FaCar } from "react-icons/fa"

import { CustomButton } from '@/components/custom'
import { handleScroll } from '@/utils'

const Hero = () => {
  useEffect(() => {
    sc.polyfill()
  }, [])

  return (
    <div className="hero">
      <div className="flex-1 pt-28 sm:pt-36 xl:pt-48 3xl:pt-60 padding-x">
        <h1 className='hero__title'>
          Your journey starts here - buy, rent, and enjoy!
        </h1>
        <p className='hero__subtitle'>
          Embark on a journey to new horizons: Let our exceptional cars pave the way as you unleash the thrill of the open road.
        </p>
        <CustomButton 
          title={"Explore Cars"}
          containerStyles={"flex w-full sm:w-1/2 xl:w-4/5 h-fit bg-transparent text-xl shadow-hero-btn border border-gray-200 p-0 mt-8 xl:mt-16"}
          handleClick={() => handleScroll("#discover")}
          btnType="button"
          icon={<FaCar />}
        />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image 
            className="object-contain"
            src={"/images/hero.png"}
            alt="hero"
            priority
            fill
            sizes='(max-width: 1280px) 80vw, 50vw'
          />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  )
}

export default Hero