import React, { FC } from 'react'

interface ErrorMessageProps {
  title: string
  containerStyles: string
  textStyles: string
}

const ErrorMessage: FC<ErrorMessageProps> = ({
  title,
  containerStyles,
  textStyles,
}) => {
  return (
    <div className={`flex items-center p-2 rounded-md ${containerStyles}`}>
      <p className={`${textStyles}`}>
        {title}
      </p>
    </div>
  )
}

export default ErrorMessage