import { Center, Group, Box, Stack, Anchor } from './core'
import { NextRouter, useRouter } from 'next/router'
import { routes } from 'routes/routes'
import { useId, useState } from 'react'

const isActive = (route: string, router: NextRouter) => {
  return route.split('/')[1] === router.pathname.split('/')[1]
}

export default function Navbar() {
  const id = useId()
  const router = useRouter()
  const [popover, setPopover] = useState(false)
  return (
    <>
      <Center inline className='w-full h-12 bg-zinc-900/50 z-50 top-0 sticky backdrop-blur-xl py-7'>
        <Group className='gap-0 sm:gap-8 font-light text-white text-sm sm:text-base'>
          <Box
            key={id}
            onClick={() => router.push(routes[0].link)}
            className={`hover:text-neutral-300 ${
              isActive(routes[0].route, router)
                ? 'font-semibold bg-afblue rounded-full hover:text-white'
                : 'font-normal'
            } cursor-pointer px-4 py-1`}
          >
            {routes[0].text}
          </Box>
          <Box
            key={id}
            onClick={() => setPopover(!popover)}
            className={`hover:text-neutral-300 ${
              isActive(routes[1].route, router)
                ? 'font-semibold bg-afblue rounded-full hover:text-white'
                : 'font-normal'
            } cursor-pointer px-4 py-1 relative`}
          >
            Competitions
            <Box className={`${popover ? `hidden` : null}`}>
              <Box className='absolute bg-zinc-800 p-2 text-sm w-64 top-12 left-[-64px] rounded-lg'>
                <Stack className='gap-1'>
                  <Box className='p-2 hover:bg-zinc-900 rounded-lg'>
                    <Box
                      onClick={() => router.push('/competitions/duc')}
                      className='text-white font-normal hover:text-white'
                    >
                      Diponegoro UI/UX Competition
                    </Box>
                  </Box>
                  <Box className='p-2 hover:bg-zinc-900 rounded-lg'>
                    <Box
                      onClick={() => router.push('/competitions/dlc')}
                      className='text-white font-normal hover:text-white'
                    >
                      Diponegoro Logic Competition
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
          <Box
            key={id}
            onClick={() => router.push(routes[2].link)}
            className={`hover:text-neutral-300 ${
              isActive(routes[2].route, router)
                ? 'font-semibold bg-afblue rounded-full hover:text-white'
                : 'font-normal'
            } cursor-pointer px-4 py-1`}
          >
            {routes[2].text}
          </Box>
          <Box
            key={id}
            onClick={() => router.push(routes[3].link)}
            className={`hover:text-neutral-300 ${
              isActive(routes[3].route, router)
                ? 'font-semibold bg-afblue rounded-full hover:text-white'
                : 'font-normal'
            } cursor-pointer px-4 py-1`}
          >
            {routes[3].text}
          </Box>
        </Group>
      </Center>
    </>
  )
}
