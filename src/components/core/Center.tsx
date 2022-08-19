import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  inline?: boolean
}

export function Center({ children, inline, className }: Props) {
  return <div className={`${inline ? 'inline-flex' : 'flex'} justify-center items-center ${className}`}>{children}</div>
}
