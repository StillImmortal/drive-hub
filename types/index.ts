import React, { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType: "button" | "submit"
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
  icon?: React.JSX.Element
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarCardProps {
  model: string
  make: string
  mpg: number
  transmission: string
  year: number
  drive: string
  cityMPG: number
}

