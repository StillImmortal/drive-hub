import { FC } from 'react'
import { Control } from 'react-hook-form'

import {
  FormControl,
  FormField, 
  FormItem, 
  FormLabel
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { CarSearchParams } from '@/lib/redux/carSlice'

interface FormFieldInputProps {
  control?: Control<CarSearchParams> | undefined
  name: keyof CarSearchParams
  label?: string
  inputStyles?: string
  containerStyles?: string
  placeholder?: string
}

const FormFieldInput: FC<FormFieldInputProps> = ({
  control,
  name,
  label,
  inputStyles,
  containerStyles,
  placeholder,
}) => {

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`flex flex-col ${containerStyles}`}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input 
              {...control?.register(name)}
              className={inputStyles}
              placeholder={placeholder}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}

export default FormFieldInput