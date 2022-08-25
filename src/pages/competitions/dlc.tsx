import { Button, Card, Group, Stack, Box, Grid, Center, Anchor, Accordion } from 'components/core'
import type { NextPage } from 'next'
import { IconChevronLeft, IconChevronRight, IconCircle1, IconCircle2, IconCircle3 } from '@tabler/icons'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const timelineItems = [
  { title: 'Registration: 1st Batch', date: '5 August - 28 August', isActive: true },
  { title: 'Registration: 2nd Batch', date: '1 September - 23 September', isActive: false },
  { title: 'Logic Competition Elimination Phase', date: '1 October - 3 October', isActive: false },
  { title: 'Finalists Announcement', date: '3 October 2022', isActive: false },
  { title: 'Technical Meeting: Final Day', date: '5 October 2022', isActive: false },
  { title: 'Anforcom 2022 Grand Final', date: '8 October 2022', isActive: false }
]

const faqItems = [
  { title: 'Bagaimana cara mendaftar?', content: 'Tatacara pendaftaran tersedia di highlight Instagram Anforcom.' },
  {
    title: 'Bagaimana jika belum memiliki KTM/Kartu Pelajar?',
    content: 'Bisa menggunakan e-KTM, IRS, atau surat pengantar dari instansi pendidikan terkait.'
  },
  {
    title: 'Apa itu kode tim?',
    content:
      'Kode Team adalah kode unik yang didapatkan setiap tim setelah ketua tim mendaftar. Kode ini digunakan untuk anggota tim bergabung kedalam tim masing masing'
  },
  { title: 'Berapa lama pembayaran akan dikonfirmasi?', content: 'Pembayaran akan terkonfirmasi maksimal 3x24 Jam.' },
  { title: 'Berapa tim yang akan hadir di final?', content: 'Final DUC nantinya akan terdapat 4 tim.' },
  {
    title: 'Di mana dan kapan acara final diadakan?',
    content:
      'Nahh.. untuk acara final sendiri ini spesial teman-teman, karena final akan diadakan secara offline di kampus Universitas Diponegoro pada tanggal 8 Oktober 2022'
  }
]

const DLC: NextPage = () => {
  const [timelineItem, setTimelineItem] = useState(0)
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
      <div className='relative min-h-screen bg-black font-sans text-white'>
        <Stack className='gap-36 overflow-hidden pb-36'>
          <div className='relative bg-zinc-900 z-0 overflow-hidden'>
            <Center>
              <Stack className='px-8 py-16 xl:px-64 lg:px-32 md:px-16 2xl:py-32 z-10 gap-8'>
                <h1 className='text-6xl 2xl:text-8xl md:text-7xl font-bold max-w-4xl leading-snug z-10 text-center'>
                  Diponegoro <span className='text-afblue'>Logic</span> Competition
                </h1>
                <h2 className='text-2xl font-light z-10 text-center'>Breaking the logic gate.</h2>
                <Center>
                  <Group className='gap-2 z-10'>
                    <Button primary>Daftar sekarang</Button>
                    <Button>Rulebook</Button>
                  </Group>
                </Center>
              </Stack>
            </Center>
            <img
              className='absolute left-[-200px] top-[200px] sm:top-[0px] lg:left-0 xl:top-[-50px] 2xl:top-[150px] z-0 md:w-[700px] xl:right-24'
              src='/images/abs4.png'
            />
          </div>

          <Stack align='center' className='z-10 px-8 gap-4'>
            <h1 className='text-4xl font-bold text-center'>
              Tentang <span className='text-afblue'>DLC</span>
            </h1>
            <p className='text-md max-w-3xl text-center'>
              Diponegoro Logic Competition adalah salah satu cabang lomba dari serangkaian kegiatan Anforcom 2022 yang
              dapat diikuti oleh mahasiswa se-Indonesia. Kegiatan ini bertujuan untuk mengasah kemampuan berpikir logis
              dan kemampuan problem solving secara kompetitif. Kompetisi ini terdiri dari 2 tahap, yaitu tahap
              penyisihan berupa cerdas cermat dan tahap final berupa Rally Games dan Competitive Programming.
            </p>
          </Stack>

          <Box className='px-8'>
            <Grid type='cols' amount='1' className='gap-4'>
              <Stack align='center'>
                <IconCircle1 className='stroke-afblue/20 -z-1' size={225} />
                <Stack align='center' className='mt-[-64px]'>
                  <h2 className='text-xs tracking-[0.5rem]'>FIRST PLACE</h2>
                  <h1 className='text-afblue text-6xl font-bold max-w-3xl'>Rp3.500.000</h1>
                </Stack>
              </Stack>

              <Group justify='center' className='gap-8'>
                <Stack align='center'>
                  <IconCircle2 className='stroke-[#101012] -z-1' size={width > 1299 ? 225 : 128} />
                  <Stack align='center' className='mt-[-36px]'>
                    <h2 className='text-xs tracking-[0.25rem] text-center'>SECOND PLACE</h2>
                    <h1 className='text-xl font-bold max-w-3xl'>Rp2.500.000</h1>
                  </Stack>
                </Stack>

                <Stack align='center'>
                  <IconCircle3 className='stroke-[#101012] -z-1' size={width > 1299 ? 225 : 128} />
                  <Stack align='center' className='mt-[-36px]'>
                    <h2 className='text-xs tracking-[0.25rem] text-center'>THIRD PLACE</h2>
                    <h1 className='text-xl font-bold max-w-3xl'>Rp1.500.000</h1>
                  </Stack>
                </Stack>
              </Group>
            </Grid>
          </Box>

          <Stack className='gap-16'>
            <Box className='overflow-x-hidden'>
              <Group
                className='items-center gap-8 whitespace-normal'
                style={{
                  transform: `translateX(-${timelineItem * 670}px)`,
                  transition: 'transform 0.3s'
                }}
              >
                <div className='ml-0 2xl:ml-64 xl:ml-32 md:ml-16'></div>
                {timelineItems.map((data, idx) => (
                  <>
                    <Box className='min-w-[350px]'>
                      <div>
                        <h1
                          className={`text-5xl md:text-6xl font-bold ${
                            data.isActive ? `text-afblue` : `text-zinc-900/80`
                          }`}
                        >
                          {data.title}
                        </h1>
                      </div>
                      <h2 className={`text-xl mt-8 ${!data.isActive ? 'text-zinc-900/80' : ''}`}>{data.date}</h2>
                    </Box>
                    {idx != timelineItems.length - 1 && <div className='h-1 min-w-[256px] bg-zinc-600/20'></div>}
                  </>
                ))}
              </Group>
            </Box>

            <Group justify='center' className='gap-4'>
              <IconChevronLeft
                size={32}
                onClick={() => {
                  setTimelineItem(timelineItem - 1)
                }}
                style={{ cursor: 'pointer' }}
                className='hover:bg-white/20 rounded-full'
              />
              <IconChevronRight
                size={32}
                onClick={() => {
                  timelineItem != timelineItems.length - 1 ? setTimelineItem(timelineItem + 1) : null
                }}
                style={{ cursor: 'pointer' }}
                className='hover:bg-white/20 rounded-full'
              />
            </Group>
          </Stack>

          <Stack align='center' className='gap-8'>
            <h1 className='text-4xl font-bold text-center'>
              Frequently Asked <span className='text-afblue'>Questions</span>
            </h1>
            <Stack className='gap-4 px-96 max-w-[1440px] min-w-[1150px] sm:min-w-[1280px] md:w-[1440px]'>
              {faqItems.map((data) => (
                <Accordion title={data.title}>{data.content}</Accordion>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </div>
    </>
  )
}

export default DLC
