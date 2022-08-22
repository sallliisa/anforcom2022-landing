import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export function Box({ children, className, ...others }: Props) {
  return (
    <div className={`${className}`} {...others}>
      {children}
    </div>
  )
}
