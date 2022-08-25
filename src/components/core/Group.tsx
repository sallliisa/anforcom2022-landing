import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  inline?: boolean
}

export function Group({ children, justify, inline, className, ...others }: Props) {
  return (
    <div
      className={`${inline ? 'inline-flex' : 'flex'} flex-row ${!!justify ? `justify-${justify}` : ''} ${className}`}
      {...others}
    >
      {children}
    </div>
  )
}
