import { Group, Box } from './core'
import { useRouter } from 'next/router'
import { IconBrandInstagram, IconBrandWhatsapp, IconMail } from '@tabler/icons'

export default function Footer() {
  const router = useRouter()
  return (
    <>
      <Box className='h-12 bg-black text-white'>
        <Group inline className='justify-between px-8 w-full h-12 bg-black py-7 items-center'>
          <Group inline className='items-center gap-4'>
            <h1 className='text-white/50 text-sm'>Need any help?</h1>
            <Group className='gap-2'>
              <IconMail
                stroke={1.5}
                onClick={() => router.push('mailto:webmaster@example.com')}
                className='cursor-pointer hover:stroke-afblue'
              />
              <IconBrandInstagram
                stroke={1.5}
                onClick={() => router.push('https://www.instagram.com/anforcom/')}
                className='cursor-pointer hover:stroke-afblue'
              />
              <IconBrandWhatsapp
                stroke={1.5}
                onClick={() => router.push('https://wa.me/6285641518460')}
                className='cursor-pointer hover:stroke-afblue'
              />
            </Group>
          </Group>
          <Group className='gap-4'>
            <h1 className='text-white/50 text-sm'>Anforcom @2022</h1>
          </Group>
        </Group>
      </Box>
    </>
  )
}
