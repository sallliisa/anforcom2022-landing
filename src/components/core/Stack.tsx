import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
}

export function Stack({ children, align, className }: Props) {
  return <div className={`flex flex-col ${!!align ? `items-${align}` : ''} ${className}`}>{children}</div>
}
