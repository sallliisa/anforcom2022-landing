import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export function Card({ children, className, ...others }: Props) {
  return (
    <>
      <div
        className={`bg-neutral-900/80 backdrop-blur-lg rounded-md border border-neutral-400/20 ${className}`}
        {...others}
      >
        {children}
      </div>
    </>
  )
}
