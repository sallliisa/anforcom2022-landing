import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  href: string
}

export function Anchor({ children, href, className }: Props) {
  return (
    <div className={`${className}`}>
      <a href={`${href}`}>{children}</a>
    </div>
  )
}
