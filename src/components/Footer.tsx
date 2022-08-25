import { Center, Group, Box, Stack, Anchor } from './core'
import { NextRouter, useRouter } from 'next/router'
import { routes } from 'routes/routes'
import { useId, useState } from 'react'
import { IconBrandDiscord, IconBrandWhatsapp, IconMail } from '@tabler/icons'

export default function Footer() {
  const id = useId()
  const router = useRouter()
  const [popover, setPopover] = useState(false)
  return (
    <>
      <Box className='h-12 bg-black text-white'>
        <Group inline className='justify-between px-8 w-full h-12 bg-black py-7 items-center gap-16'>
          <Group className='gap-4'>
            <h1 className='font-medium text-white/50'>Need any help?</h1>
            <IconMail stroke={1.5} />
            <IconBrandWhatsapp stroke={1.5} />
            <IconBrandDiscord stroke={1.5} />
          </Group>
          <Group className='gap-4'>
            <h1 className='font-medium text-white/50'>Anforcom @2022</h1>
          </Group>
        </Group>
      </Box>
    </>
  )
}