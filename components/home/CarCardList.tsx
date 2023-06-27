"use client"

import { Fragment } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { HiArrowUp } from "react-icons/hi"

import { fetchCars } from '@/utils'
import { CarCard } from '@/components/home'
import { 
  ErrorMessage,
  LoadingButton, 
  SearchButton, 
} from '@/components/custom'
import { handleScroll } from '@/utils'
import { useAppSelector } from '@/lib/redux/hooks'
import { carSelector } from '@/lib/redux/carSlice'


const CarCardList = () => {
  const searchParams = useAppSelector(carSelector)

  const { data, isLoading, isFetching, fetchNextPage, isError, hasNextPage, } = useInfiniteQuery(
    ['cars', Object.values(searchParams)], 
    ({pageParam}) => fetchCars(pageParam, searchParams), 
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage !== undefined && lastPage.length === 8) return pages.length + 1
        else return undefined
      },
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-16">
        <div className="w-12 h-12 border-t-4 border-b-4 border-gray-900 rounded-full animate-spin"></div>
      </div>
    )
  }

  if (isError) {
    return (
      <ErrorMessage 
        title='Something went wrong... Please reload the page.'
        containerStyles='mt-12 max-w-[720px] bg-red-50'
        textStyles='text-xl font-semibold text-red-900'
      />
    )
  }

  return (
    <div className='w-full'>
      <div className='home__cars-wrapper'>
        {data?.pages.map((page, pageIndex) => (
          <Fragment key={`page-${pageIndex}`}>
            {page?.map((car, carIndex) => (
              <CarCard 
                key={`car-${pageIndex}-${carIndex}`}
                car={car}
              />
            ))}
          </Fragment>
        ))}
      </div>
      {data?.pages.length === 1 && data?.pages[0]?.length === 0 ? (
        <div className='w-full'>
          <p className='text-2xl md:text-3xl font-bold text-center'>
            No cars with these parameters were found.
          </p>
        </div>
      ) : (
        <div className='flex-col gap-4 mt-16 flex-center'>
          {hasNextPage && (
            isFetching ? (
              <LoadingButton 
              className='w-[200px] font-medium'
            />
            ) : (
              <SearchButton 
              title='Show More'
              className='w-[200px] font-medium'
              onClick={() => fetchNextPage()}
              type='button'
            />
            )
          )}
          <SearchButton 
            variant={"outline"}
            title='Up to Search'
            onClick={() => handleScroll("#discover")}
            type='button'
            className='w-[200px] font-semibold'
            icon={<HiArrowUp />}
          />
        </div>
      )}
    </div>
  )
}

export default CarCardList