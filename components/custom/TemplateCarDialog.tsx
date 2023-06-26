"use client"

import { FC, useState, useEffect } from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { DialogHeader } from "@/components/ui/dialog"
import { CarProps } from '@/types'
import { generateCarImageUrl } from '@/utils'
import Image from 'next/image'

interface CarImageProps {
  car: CarProps
  className?: string
  angle?: string
  sizes?: string
}

interface TemplateCarDialogProps {
  car: CarProps
} 

const CarImage: FC<CarImageProps> = ({ 
  car,
  className,
  angle = "",
  sizes
}) => {
  const [isLoading, setIsLoading] = useState<boolean>()

  useEffect(() => {
    setIsLoading(true)
  }, [])

  return (
    <div className={`relative w-full h-20 bg-blue-100 rounded-lg ${className}`}>
      {isLoading && (
        <Skeleton className='relative flex-center w-full h-full'>
          <div className='w-4/5 h-4/5 bg-loading-car bg-center bg-no-repeat bg-contain opacity-75' />
        </Skeleton>
      )}
      <Image 
        className={`object-contain transition-opacity ${isLoading ? "opacity-0" : "opacity-100"}`}
        src={generateCarImageUrl(car, angle)}
        alt="car model"
        priority
        fill
        sizes={sizes}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}

const TemplateCarDialog: FC<TemplateCarDialogProps> = ({ car }) => {
  return (
    <>
      <DialogHeader className='flex-col gap-1 flex-center'>
        <CarImage 
          car={car}
          className='bg-center bg-cover h-36 bg-pattern'
          sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
        />
        <div className='w-full gap-3 flex-center'>
          <CarImage car={car} angle='29' sizes='(max-width: 1280px) 33vw, 11vw' />
          <CarImage car={car} angle='22' sizes='(max-width: 1280px) 33vw, 11vw' />
          <CarImage car={car} angle='13' sizes='(max-width: 1280px) 33vw, 11vw' />
        </div>
      </DialogHeader>
      <div className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold capitalize'>
          {car.make} {car.model}
        </h2>
        <div className='flex flex-col gap-1.5'>
          {Object.entries(car).map(([key, value]) => (
            <div key={key} className='flex gap-5 flex-between'>
              <h4 className='text-gray-400 capitalize'>{key.split("_").join(" ")}</h4>
              <p className='font-semibold'>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TemplateCarDialog