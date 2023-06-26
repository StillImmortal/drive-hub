"use client"

import { FC, JSX, MouseEventHandler, useState } from 'react'

interface CarLogoProps {
  Icon: JSX.Element
  onClick: MouseEventHandler<HTMLDivElement | undefined>
}

const CarLogo: FC<CarLogoProps> = ({
  Icon,
  onClick
}) => {
  const [isPressed, setIsPressed] = useState<boolean>(false)

  return (
    <div 
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={`flex-center w-fit text-5xl text-gray-500 bg-transparent p-4 transition-all rounded-xl hover:text-white hover:shadow-home-logo hover:cursor-pointer ${isPressed ? "hover:shadow-home-logo-pressed" : "hover:shadow-home-logo"}`}>
      {Icon}
    </div>
  )
}

export default CarLogo