import { Button, Card, Group, Stack, Box, Grid, Anchor } from 'components/core'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons'
import GradientBackgroundAnim from 'components/GradientBackgroundAnim'

const carouselItems = [
  { img: '/images/duc.png', title: 'Diponegoro UI/UX Competition', link: '/competitions/duc' },
  { img: '/images/dlc.png', title: 'Diponegoro Logic Competition', link: '/competitions/dlc' },
  { img: '/images/seminar.png', title: 'Seminar', link: '/seminar' }
]

const Home: NextPage = () => {
  const router = useRouter()
  const [carouselItem, setCarouselItem] = useState(0)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width])
  return (
    <>
      <div className='relative min-h-screen bg-black font-sans text-white overflow-hidden'>
        <Stack className='gap-36 overflow-hidden'>
          <div className='relative overflow-hidden bg-cover z-50'>
            <div style={{ backdropFilter: 'brightness(50%)' }}>
              <img
                src='/svgs/newset/anforcom.svg'
                className='absolute top-[386px] scale-150 sm:scale-100 sm:top-[128px] sm:right-[-64px] md:top-[64px] brightness-50 z-10'
              />
              <Stack align='center' className='px-8 py-16 xl:px-64 lg:px-32 md:px-16 2xl:py-32 z-10 gap-8'>
                <GradientBackgroundAnim color1='#FE6099' color2='#F1AB28' color3='#F1AB28' />
                <h1 className='text-5xl 2xl:text-8xl md:text-7xl font-bold max-w-5xl leading-snug z-10 text-center'>
                  Annual{' '}
                  <span className='bg-gradient-to-r text-transparent bg-clip-text from-afblue to-afblue-lighter'>
                    Informatics
                  </span>{' '}
                  Competition 2022
                </h1>
                <h2 className='text-2xl font-light z-10 text-center'>
                  Overcome the <span className='text-afblue font-semibold'>infinity</span>
                </h2>
                <Group className='gap-2 z-10'>
                  <Button primary onClick={() => router.push('https://app.anforcom.com/auth/register')}>
                    Daftar sekarang
                  </Button>
                  <Button onClick={() => router.push('https://app.anforcom.com/auth/login')}>Masuk</Button>
                </Group>
              </Stack>
            </div>
          </div>

          <Stack align='center' className='relative z-0 px-8 gap-4'>
            <Stack className='z-50 gap-4'>
              <h2 className='text-2xl font-light text-center'>Tentang</h2>
              <h1 className='text-4xl font-bold text-center'>
                Anforcom <span className='text-afblue'>2022</span>
              </h1>
              <p className='text-md max-w-3xl text-center text-[#888]'>
                Anforcom (Annual Informatics Competition) adalah serangkaian acara dan perlombaan yang diadakan
                Mahasiswa Informatika Universitas Diponegoro. Event ini dilaksanakan dalam rangka mengenalkan Kultur
                Teknologi kepada masyarakat dan menumbuhkan jiwa jiwa kompetititf yang sportif di kalangan pelajar.
              </p>
              <p className='text-md max-w-3xl text-center text-[#888]'>
                Anforcom kali ini mengangkat Tema “Overcome the Infinity”. Dalam event kali ini terdapat 2 perlombaan
                yaitu, Diponegoro Logic Competition (DLC), dan Diponegoro UI/UX Competition (DUC). DLC dapat diikuti
                oleh siswa SMA/SMK Sederajat Se-Indonesia dan DUC dapat diikuti Pelajar maupun Mahasiswa. Jadi, tunggu
                apa lagi dan persiapkan dirimu untuk Overcome the Infinity!
              </p>
            </Stack>
          </Stack>

          <Stack align='center' className='z-10 px-8 gap-8'>
            <Box>
              <h1 className='text-4xl font-bold text-center'>
                <span className='text-afblue'>Kompetisi</span> dan <span className='text-afblue'>Acara</span>
              </h1>
              <h2 className='text-xl font-light mt-6 max-w-sm text-center '>
                Anforcom 2022 menyelenggarakan dua kompetisi dan satu acara
              </h2>
            </Box>

            <Group className='overflow-x-visible gap-4 whitespace-normal overflow-auto w-[100vw] px-8 lg:overflow-hidden lg:px-32 lg:justify-center'>
              {carouselItems.map((data) => (
                <>
                  <Card
                    onClick={() => router.push(data.link)}
                    className='p-8 h-[450px] w-[350px] hover:scale-[0.99] hover:bg-main-dark-grey-active active:scale-[0.95] active:bg-neutral-800/90 cursor-pointer'
                  >
                    <Stack align='center' className='justify-between min-h-full'>
                      <img src={data.img} className='mt-0 max-w-[250px]' />
                      <Box>
                        <h2 className='text-2xl font-semibold max-w-[200px] text-center'>{data.title}</h2>
                      </Box>
                    </Stack>
                  </Card>
                </>
              ))}
            </Group>
          </Stack>

          <div className='relative z-0 overflow-hidden'>
            <div style={{ backdropFilter: 'brightness(50%)' }}>
              <Stack className='px-8 py-16 xl:px-64 lg:px-32 md:px-16 2xl:py-32 z-10 gap-16'>
                <GradientBackgroundAnim color1='#FE6099' color2='#F1AB28' color3='#F1AB28' />
                <h1 className='text-6xl 2xl:text-8xl md:text-7xl font-bold max-w-3xl z-10'>
                  Prepare yourselves, and get <span className='text-afblue'>ready.</span>
                </h1>
                <Group>
                  <Button primary className='z-10'>
                    Daftar sekarang
                  </Button>
                </Group>
              </Stack>
            </div>
          </div>
        </Stack>
      </div>
    </>
  )
}

export default Home
