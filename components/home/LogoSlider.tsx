"use client"

import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { manufacturers } from "@/constants";
import { CarLogo } from "@/components/home"
import { useAppDispatch } from "@/lib/redux/hooks";
import { updateParams } from "@/lib/redux/carSlice";
import { handleScroll } from "@/utils";


const LogoSlider = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
  const isDesktop = useMediaQuery({ query: '(max-width: 1280px)' })
  const dispatch = useAppDispatch()

  const settings = {
    infinite: true,
    slidesToShow: isMobile ? 4 : isDesktop ? 8 : 12,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <>
      <div className="mt-16 max-width padding-x sm:mt-8">
        <h1 className="mx-auto mt-4 text-xl text-gray-500">
          Our Partners
        </h1>
        <p className="text-2xl font-bold text-gray-200 sm:text-4xl">
          Driving Success Together
        </p>
      </div>
      <div className="w-full max-width padding-y">
        <Slider className="" {...settings}>
          {manufacturers.filter((item) => item.value !== "any_manufacturer").map((manufacturer) => (
            <div 
              key={`slider_item-${manufacturer.value}`} 
              className="py-4"
            >
              <CarLogo 
                 onClick={() => {
                  dispatch(updateParams({
                    manufacturer: manufacturer.value,
                    model: "",
                    fuel: "",
                    year: "",
                  }))
                  handleScroll("#discover")
                }}
                Icon={manufacturer.icon} 
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default LogoSlider