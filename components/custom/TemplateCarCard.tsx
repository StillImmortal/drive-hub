import { FC, useState, useEffect, memo } from 'react'
import { isEqual } from "lodash"

import {
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle,
} from "@/components/ui/card"
import { CarProps } from '@/types'
import Image from 'next/image'
import { calculateCarRent, generateCarImageUrl } from '@/utils'
import { SearchButton } from "@/components/custom"
import { IconType } from 'react-icons'
import { GiCarWheel, GiSteeringWheel } from 'react-icons/gi'
import { BsFillFuelPumpFill } from 'react-icons/bs'
import { Skeleton } from '@/components/ui/skeleton'

interface PreviewItemProps {
  title: string
  Icon: IconType
  color: string
}

interface TemplateCarCardProps {
  car: CarProps
}

const PreviewItem: FC<PreviewItemProps> = ({
  title,
  Icon,
  color,
}) => {
  return (
    <div className='flex-col gap-2 flex-center'>
      <Icon className={`text-2xl ${color}`} />
      <p>{title}</p>
    </div>
  )
}

const TemplateCarCard: FC<TemplateCarCardProps> = memo(({ car }) => {
  const [isLoading, setIsLoading] = useState<boolean>()
  const { city_mpg, year, make, model, transmission, drive } = car

  useEffect(() => {
    setIsLoading(true)
  }, [])

  return (
    <>
      <CardHeader>
        <CardTitle className='leading-snug capitalize line-clamp-1'>
          {make} {model}
        </CardTitle>
        <CardDescription>
         $<span className='text-base font-extrabold text-black'>{calculateCarRent(city_mpg, year)}</span>/day
        </CardDescription>
      </CardHeader>
      <CardContent className='flex-col flex-center'>
        <div className='relative w-full max-w-[300px] h-[224px]'>
          {isLoading && (
            <Skeleton className='relative flex-center w-full h-full'>
              <div className='w-4/5 h-4/5 bg-loading-car bg-center bg-no-repeat bg-contain opacity-75' />
            </Skeleton>
          )}
          <Image 
            className={`object-contain transition-opacity ${isLoading ? "opacity-0" : "opacity-100"}`}
            src={generateCarImageUrl(car)}
            alt='car image preview'
            priority
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
            onError={() => setIsLoading(true)}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      </CardContent>
      <CardFooter className='flex-col gap-4 flex-center'>
        <div className='relative w-full text-sm font-light flex-between text-muted-foreground'>
            <PreviewItem 
              title={transmission === 'a' ? "Automatic" : "Manual"}
              Icon={GiSteeringWheel}
              color='text-blue-600'
            />
            <PreviewItem 
              title={drive.toUpperCase()}
              Icon={GiCarWheel}
              color='text-pink-600'
            />
            <PreviewItem 
              title={`${city_mpg} MPG`}
              Icon={BsFillFuelPumpFill}
              color='text-green-600'
            />
          </div>
        <SearchButton 
          title='View More'
          className='w-full hover:bg-primary'
          type='button'
        />
      </CardFooter>
    </>
  )
})

export default memo(TemplateCarCard, (prevProps, nextProps) => isEqual(prevProps, nextProps))