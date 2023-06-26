import { CarSearchParams } from "@/lib/redux/carSlice";
import { CarProps } from "@/types";

// Genearl functions
export const isEqualStrings = (str1: string , str2: string): boolean => {
  if (str1 && str2) return str1.toLowerCase() === str2.toLowerCase()
  return false
}

export const handleScroll = (selector: string) => {
  const nextSection = document.querySelector(selector);

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Car functions
export const fetchCars = async (pageParam = 1, searchParams: CarSearchParams) => {
  try {
    let {manufacturer, model, fuel, year} = searchParams
    if (manufacturer === 'any_manufacturer') manufacturer = ''
    if (fuel === 'fuel' || fuel === 'any_type') fuel = ''
    if (year === 'any_year') year = ''

    model = model.toLowerCase()
    const initial_limit = 8
    const count = pageParam * initial_limit

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7c9bae9ae0msh0e755eb54582bb4p118ea5jsnedaee5642d16',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    }

    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&fuel_type=${fuel}&year=${year}&limit=${count}`, options)
    const cars: CarProps[] = await res.json()
    return cars.slice((pageParam - 1) * initial_limit)
  } catch (error) {
    throw error
  }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 
