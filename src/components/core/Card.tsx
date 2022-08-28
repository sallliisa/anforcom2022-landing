import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export function Card({ children, className, ...others }: Props) {
  return (
    <>
      <div className={`bg-main-dark-grey backdrop-blur-lg rounded-md ${className}`} {...others}>
        {children}
      </div>
    </>
  )
}
