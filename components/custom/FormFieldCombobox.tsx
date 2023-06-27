import { FC } from 'react'
import { Control, UseFormSetValue } from 'react-hook-form'
import { LuChevronsUpDown, LuCheck } from "react-icons/lu"

import { isEqualStrings } from '@/utils'
import { cn } from '@/lib/utils'
import { 
  FormField, 
  FormItem, 
  FormLabel,
  FormControl
} from '@/components/ui/form'
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import { Button } from '@/components/ui/button'
import { CarSearchParams, carSelector } from '@/lib/redux/carSlice'
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'

interface manufacturerData {
  icon?: React.JSX.Element
  label: string
  value: string
}

interface FormFieldComboboxProps {
  control?: Control<CarSearchParams> | undefined
  name: keyof CarSearchParams
  label?: string
  buttonStyles?: string
  popoverStyles?: string
  placeholder?: string
  placeholderIcon?: React.JSX.Element
  placeholderSearch?: string
  placeholderEmpty?: string
  withIcon?: boolean
  withSearch?: boolean
  setValue: UseFormSetValue<CarSearchParams>
  data: manufacturerData[]
}

const FormFieldCombobox: FC<FormFieldComboboxProps> = ({
  control,
  name,
  label,
  buttonStyles,
  popoverStyles,
  placeholder,
  placeholderIcon,
  placeholderSearch,
  placeholderEmpty,
  data,
  withIcon = false,
  withSearch = true,
  setValue
}) => {
  const { manufacturer: manufacturerValue } = useAppSelector(carSelector)

  const findValue = (data: manufacturerData[], value: string | undefined, fn: (str1: string | undefined, str2: string | undefined) => boolean): manufacturerData | undefined => {
    return data.find((item) => fn(item.value, value))
  }

  return (
    <FormField 
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-col'>
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  {...control?.register(name)}
                  variant="outline"
                  role="combobox"
                  className={cn(
                    `w-[200px] justify-between ${buttonStyles}`,
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <span className='flex items-center gap-2'>
                    {withIcon && <span className='text-lg translate-y-[1px]'>
                      {field.value
                        ? findValue(data, field.value, isEqualStrings)?.icon
                        : findValue(data, manufacturerValue, isEqualStrings)?.icon|| placeholderIcon}
                    </span>}
                    {field.value
                      ? findValue(data, field.value, isEqualStrings)?.label
                      : findValue(data, manufacturerValue, isEqualStrings)?.label || placeholder}
                  </span>
                  <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className={`w-[200px] p-0 z-10 ${popoverStyles}`}>
              <Command>
                {withSearch && <CommandInput placeholder={placeholderSearch} />}
                <CommandEmpty>{placeholderEmpty}</CommandEmpty>
                <CommandGroup>
                  {data.map((item) => (
                    <CommandItem
                      value={item.value}
                      key={item.value}
                      onSelect={(value) => {
                        setValue(name, value)
                      }}
                    >
                      <LuCheck
                        className={cn(
                          "mr-2 h-4 w-4",
                          isEqualStrings(item.value, field.value)
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  )
}

export default FormFieldCombobox