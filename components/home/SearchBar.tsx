"use client"

import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FaCarSide } from 'react-icons/fa'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'

import { CarSearchParams, carSelector } from '@/lib/redux/carSlice'
import { Form } from '@/components/ui/form'
import { manufacturers, fuels, yearsOfProduction } from '@/constants'
import { 
  FormFieldInput, 
  FormFieldCombobox,
  SearchButton,
  ErrorMessage,
} from "@/components/custom"
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { updateParams } from '@/lib/redux/carSlice'

const SearchBar = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(carSelector)

  const [isValid, setIsValid] = useState<boolean>(true)
  const form = useForm<CarSearchParams>({
    defaultValues: state
  })

  const onSubmit: SubmitHandler<CarSearchParams> = (inputs) => {
    const { manufacturer, model, fuel, year} = inputs
    if ((fuel === '' || fuel === "any_type") && (year === '' || year === "any_year")) {
      if ((manufacturer === '' || manufacturer === "any_manufacturer") && model === '') {
        setIsValid(false)
      } else {
        setIsValid(true)
        dispatch(updateParams(inputs))
      }
    } else {
      setIsValid(true)
      dispatch(updateParams(inputs))
    }
  }

  useEffect(() => {
    Object.entries(state).map(([key, value]) => {
      form.setValue(key as keyof CarSearchParams, value)
    })
  }, [Object.values(state)])

  return (
    <div className='home__filters'>
      <Form {...form} >
        <form 
          className="flex flex-col flex-1 gap-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className='flex flex-col gap-4 xl:flex-row'>
            <div className="flex flex-col flex-1 gap-4 md:flex-row">
              <FormFieldCombobox 
                setValue={form.setValue}
                control={form.control}
                name="manufacturer"
                label="Car Manufacturer"
                data={manufacturers}
                withIcon={true}
                buttonStyles="w-[280px]"
                popoverStyles="w-[280px] !max-h-[320px] overflow-y-auto"
                placeholder='Any Manufacturer'
                placeholderIcon={<FaCarSide />}
                placeholderEmpty="No manufacturer found."
                placeholderSearch="Search manufacturer..."
              />
              <FormFieldInput 
                control={form.control}
                name="model"
                label="Car Model"
                inputStyles="font-medium hover:bg-accent focus:bg-accent focus-visible:ring-transparent focus-visible:ring-offset-0"
                containerStyles="w-[280px] xl:flex-1 xl:min-w-[280px]"
                placeholder="Any Model"
              />
            </div>
            <div className="flex flex-col flex-1 gap-4 md:flex-row">
              <FormFieldCombobox 
                control={form.control}
                name="fuel"
                label="Fuel Type"
                placeholder="Any Type"
                buttonStyles="w-[280px]"
                popoverStyles="w-[280px] !max-h-[320px] overflow-y-auto"
                data={fuels}
                setValue={form.setValue}
                withSearch={false}
              />
              <FormFieldCombobox 
                control={form.control}
                name="year"
                label="Year of Production"
                placeholder="Any Year"
                buttonStyles="w-[280px]"
                popoverStyles="w-[280px] !max-h-[320px] overflow-y-auto"
                data={yearsOfProduction}
                setValue={form.setValue}
                withSearch={false}
              />
            </div>
          </div>
          {!isValid && (
            <ErrorMessage
              title='If you have selected "Fuel Type" equal to "Any Type" and "Year of Production" equal to "Any Year", then you need to specify either "Car Model" or "Car Manufacturer" or both.'
              containerStyles='max-w-[720px] bg-blue-50'
              textStyles='text-base font-semibold text-blue-900'
              
            />
          )}
          <SearchButton 
            title='Search'
            type='submit'
            className='w-[280px]'
            icon={<HiOutlineMagnifyingGlass />}
          />
        </form>
      </Form>
    </div>
  )
}

export default SearchBar