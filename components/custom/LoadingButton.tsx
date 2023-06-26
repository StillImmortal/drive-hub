import { FC } from 'react'

import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LoadingButtonProps {
  className?: string
}

const LoadingButton: FC<LoadingButtonProps> = ({
  className,
}) => {
  return (
    <Button  
      className={`relative text-base ${className}`}
      disabled
    >
      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      Please wait
    </Button>
  )
}

export default LoadingButton