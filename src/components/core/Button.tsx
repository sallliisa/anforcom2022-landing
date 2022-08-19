import React, { ClassAttributes } from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  primary?: boolean
}

export function Button({ primary, children, className }: Props) {
  return (
    <>
      <button
        className={`${
          primary ? `bg-blue-800/30 hover:bg-blue-800/20` : `hover:bg-white/50`
        } border border-neutral-400/20 backdrop-blur-sm py-2 px-4 rounded-md font-medium ${className}`}
      >
        {children}
      </button>
    </>
  )
}
