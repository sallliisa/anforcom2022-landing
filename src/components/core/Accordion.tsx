import { IconChevronDown, IconChevronUp } from '@tabler/icons'
import React from 'react'
import { Group } from './Group'
import { Variants, m, AnimatePresence } from 'framer-motion'
import { Stack } from './Stack'
import useMeasure from 'react-use-measure'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title: string
  children: React.ReactNode
}

const v: Variants = {
  open: { opacity: 1, height: 'auto' },
  collapsed: { opacity: 1, height: '60px' }
}

export function Accordion({ children, title, className, ...others }: Props) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [ref, { height }] = useMeasure()
  return (
    <>
      <div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? `bg-afblue hover:bg-afblue/80` : `bg-main-dark-grey hover:bg-main-dark-grey-active`
          } rounded-md p-4 w-full cursor-pointer ${className}`}
          {...others}
        >
          <Group justify='between' className='items-center gap-4'>
            <h1 className='font-semibold text-white'>{title}</h1>
            <m.div animate={{ rotate: isOpen ? 180 : 0 }}>
              <IconChevronDown />
            </m.div>
          </Group>
        </div>

        <AnimatePresence exitBeforeEnter initial={false}>
          {isOpen && (
            <m.div
              variants={{ collapsed: { height: '0px', marginTop: 0 }, open: { height, marginTop: 16 } }}
              animate={isOpen ? 'open' : 'collapsed'}
              initial='collapsed'
              exit='collapsed'
            >
              <div ref={ref}>
                <m.div
                  variants={{
                    open: { opacity: 1, scale: 1 },
                    collapsed: { opacity: 0, scale: 0.8 }
                  }}
                  animate={isOpen ? 'open' : 'collapsed'}
                  initial='collapsed'
                  exit='collapsed'
                  transition={{ duration: 0.1 }}
                >
                  <div className='text-sm font-normal px-4'>
                    <div className=''>{children}</div>
                  </div>
                </m.div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
