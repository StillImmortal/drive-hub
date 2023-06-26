import { FC } from 'react'

import { SearchBar, CarCardList } from '@/components/home'

const CarCatalogue: FC = () =>   {

  return (
    <div className='bg-[#fafafa] pt-8 pb-40'>
      <div id='discover' className='mt-12 padding-x padding-y max-width'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p className='text-gray-500'>Explore the cars you might like</p>
        </div>

        <SearchBar />

        <CarCardList />
      </div>
    </div>
  )
}

export default CarCatalogue