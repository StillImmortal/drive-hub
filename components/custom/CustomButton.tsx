"use client"

import React from 'react'
import { CustomButtonProps } from '@/types'
import { Button } from '@/components/ui/button'

const CustomButton = ({ title, containerStyles, handleClick, btnType, variant, icon }: CustomButtonProps) => {
  return (
    <Button
      variant={variant}
      disabled={false}
      type={btnType || "button"}
      className={`${containerStyles}`}
      onClick={handleClick} 
    >
      <span className={`${icon ? "basis-5/6" : "flex-1"} flex-center whitespace-nowrap`}>
        {title}
      </span>
      {icon && <span className='basis-1/6 flex-center p-2 border-l text-3xl'>
        {icon}
      </span>}
    </Button>
  )
}

export default CustomButton