import React, { ClassAttributes } from 'react'

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  primary?: boolean
}

export function Button({ primary, children, className, ...others }: Props) {
  return (
    <>
      <button
        className={`${
          primary ? `bg-afblue hover:bg-afblue-dark` : ` hover:bg-black/30 bg-black/20`
        } py-2 px-4 rounded-md font-medium ${className}`}
        {...others}
      >
        {children}
      </button>
    </>
  )
}
