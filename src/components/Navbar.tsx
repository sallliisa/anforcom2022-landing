import { Center, Group, Box, Stack, Anchor } from './core'
import { NextRouter, useRouter } from 'next/router'
import { routes } from 'routes/routes'
import { useId, useState } from 'react'
import { Variants, m, AnimatePresence } from 'framer-motion'
import FadeTransY from './FadeTransY'

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
        <Group className='gap-0 sm:gap-4 font-light text-white text-sm sm:text-base'>
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
            <AnimatePresence>
              {popover && (
                <>
                  <FadeTransY control={popover}>
                    <Box className='absolute bg-main-dark-grey p-2 text-sm w-64 top-12 left-[-64px] rounded-lg drop-shadow-lg'>
                      <Stack className='gap-1'>
                        <Box
                          onClick={() => router.push('/competitions/duc')}
                          className='p-2 hover:bg-black/50 rounded-lg'
                        >
                          <Box className='text-white font-normal hover:text-white'>Diponegoro UI/UX Competition</Box>
                        </Box>
                        <Box
                          onClick={() => router.push('/competitions/dlc')}
                          className='p-2 hover:bg-black/50 rounded-lg'
                        >
                          <Box className='text-white font-normal hover:text-white'>Diponegoro Logic Competition</Box>
                        </Box>
                      </Stack>
                    </Box>
                  </FadeTransY>
                </>
              )}
            </AnimatePresence>
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
