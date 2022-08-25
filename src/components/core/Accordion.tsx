import { IconChevronDown, IconChevronUp } from '@tabler/icons'
import React from 'react'
import { Group } from './Group'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title: string
  children: React.ReactNode
}

export function Accordion({ children, title, className, ...others }: Props) {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-neutral-900/80 rounded-md border border-neutral-400/20 p-4 w-full cursor-pointer hover:bg-neutral-900/50 ${className}`}
        {...others}
      >
        <Group justify='between' className='items-center gap-4'>
          <h1 className='font-bold text-zinc-400'>{title}</h1>
          {isOpen ? <IconChevronDown /> : <IconChevronUp />}
        </Group>

        {isOpen ? (
          <>
            <div className='h-[1px] min-w-[256px] bg-zinc-600/20 my-4'></div>
            <div className='text-sm font-normal'>
              <div className=''>{children}</div>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
