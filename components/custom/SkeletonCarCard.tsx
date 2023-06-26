import React from 'react'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Skeleton } from '@/components/ui/skeleton'

const SkeletonCarCard = () => {
  return (
    <Card className='w-full h-[480px]'>
      <CardHeader>
        <Skeleton className='w-full h-7' />
        <Skeleton className='w-1/3 h-6' />
      </CardHeader>
      <CardContent>
        <div className='relative w-full max-w-[300px] h-[224px]'>
          <Skeleton className='relative flex-center w-full h-full'>
            <div className='w-4/5 h-4/5 bg-loading-car bg-center bg-no-repeat bg-contain opacity-75' />
          </Skeleton>
        </div>
      </CardContent>
      <CardFooter className='flex-col gap-4 flex-center'>
        <div className='w-full flex-center gap-12'>
          <Skeleton className='h-12 flex-1' />
          <Skeleton className='h-12 flex-1' />
          <Skeleton className='h-12 flex-1' />
        </div>
        <Skeleton className='w-full h-10' />
      </CardFooter>
    </Card>
  )
}

export default SkeletonCarCard