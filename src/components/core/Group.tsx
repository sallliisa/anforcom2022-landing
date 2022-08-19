import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  justify?: string
}

export function Group({ children, justify, className }: Props) {
  return <div className={`flex flex-row ${!!justify ? `justify-${justify}` : ''} ${className}`}>{children}</div>
}
