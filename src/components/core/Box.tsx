import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export function Box({ children, className }: Props) {
  return <div className={`${className}`}>{children}</div>
}
