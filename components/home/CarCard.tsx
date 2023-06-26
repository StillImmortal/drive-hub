"use client"

import { FC } from 'react'

import { CarProps } from '@/types';
import { Card } from '../ui/card';
import {
  TemplateCarCard, 
  TemplateCarDialog 
} from '@/components/custom';
import {
  Dialog,
  DialogTrigger,
  DialogContent
} from "@/components/ui/dialog"

interface CarCardProps {
  car: CarProps;
}

const CarCard: FC<CarCardProps> = ({ car }) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Card className='w-full h-[480px] transition-colors hover:bg-secondary hover:cursor-pointer'>
          <TemplateCarCard car={car} />
        </Card>
      </DialogTrigger>
      <DialogContent className='flex flex-col gap-4 sm:max-w-md'>
        <TemplateCarDialog car={car} />
      </DialogContent>
    </Dialog>
  )
}

export default CarCard