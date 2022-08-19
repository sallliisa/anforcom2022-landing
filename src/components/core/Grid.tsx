import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  type: 'rows' | 'cols'
  amount: string
}

export function Grid({ children, type, amount, className }: Props) {
  return <div className={`grid grid-${type}-${amount} ${className}`}>{children}</div>
}
