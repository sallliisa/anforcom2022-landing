import { Center, Group, Anchor } from './core'
import Router, { NextRouter, useRouter } from 'next/router'
import { routes } from 'routes/routes'
import { useId } from 'react'

const isActive = (route: string, router: NextRouter) => {
  return route === router.pathname
}

export default function Navbar() {
  const id = useId()
  const router = useRouter()
  return (
    <>
      <Center inline className='w-full h-12 bg-zinc-900/50 z-50 top-0 sticky backdrop-blur-xl'>
        <Group className='gap-8 font-light text-neutral-300'>
          {routes.map((ele) => (
            <Anchor
              key={id}
              href={ele.link}
              className={`${isActive(ele.route, router) ? 'font-bold' : 'font-normal'} hover:text-blue-600`}
            >
              {ele.text}
            </Anchor>
          ))}
        </Group>
      </Center>
    </>
  )
}
