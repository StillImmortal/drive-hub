"use client"

import Image from "next/image"
import Link from "next/link"

import { CustomButton } from '@/components/custom'
import logo from "@/public/images/logo.svg"

const Navbar = () => {
  return (
    <header className="absolute z-50 w-full">
      <nav className="max-width flex-between padding-x padding-y">
        <Link 
          href={"/"} 
          className="flex-center"
        >
          <Image 
            className="object-contain w-[180px] h-auto"
            src={logo}
            alt="Drive Hub Logo"
          />
        </Link>

        <CustomButton 
          title="Sign in"
          btnType="button"
          containerStyles="py-2 px-4 transition-all bg-[#111111] text-lg hover:bg-opacity-90 border-transparent text-gray-200"
        />
      </nav>
    </header>
  )
}

export default Navbar