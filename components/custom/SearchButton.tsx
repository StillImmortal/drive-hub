import { FC, JSX } from 'react'

import { Button } from '@/components/ui/button'

interface SearchButtonProps {
  title: string
  onClick?: () => void
  className?: string
  icon?: JSX.Element
  type: "button" | "submit" | "reset" | undefined
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
}

const SearchButton: FC<SearchButtonProps> = ({
  title,
  onClick,
  className,
  icon,
  type,
  variant,
}) => {
  return (
    <Button
      onClick={onClick}
      className={`relative text-base ${className}`}
      type={type}
      variant={variant}
    >
      {title}
      {icon && (
        <span className='absolute text-lg right-2'>
          {icon}
        </span>
      )}
    </Button>
  )
}

export default SearchButton