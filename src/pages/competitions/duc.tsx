import { Button, Card, Group, Stack, Box, Grid, Center, Anchor, Accordion } from 'components/core'
import type { NextPage } from 'next'
import { IconChevronLeft, IconChevronRight, IconCircle1, IconCircle2, IconCircle3 } from '@tabler/icons'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { m, Variants } from 'framer-motion'
import GradientAnimation from 'components/GradientBackgroundAnim'
import GradientBackgroundAnim from 'components/GradientBackgroundAnim'

const timelineItems = [
  { title: 'Registration: 1st Batch', date: '5 August - 28 August', isActive: true },
  { title: 'Registration: 2nd Batch', date: '1 September - 23 September', isActive: false },
  {
    title: 'DUC Proposal Submission',
    date: '5 August - 25 September',
    isActive: false
  },
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
  {
    title: 'Bagaimana kriteria penilaiannya?',
    content:
      'Untuk kriteria penilaian tahap penyisihan dibagi jadi 4 yaitu ide, prototype, proposal, dan video. Sedangkan untuk tahap final dibagi jadi 2 penalaran dan performa, presentasi.'
  },
  { title: 'Berapa tim yang akan hadir di final?', content: 'Final DUC nantinya akan terdapat 4 tim.' },
  {
    title: 'Propsal yang sudah dikirim, apakah masih bisa direvisi?',
    content:
      'Proposal yang sudah dikirim masih bisa direvisi hingga batas waktu yang ditentukan. Jadi untuk teman-teman peserta yang sudah mengirim proposal dan ternyata terdapat revisi, masih bisa dikirim lagi ya.'
  },
  {
    title: 'Di mana dan kapan acara final diadakan?',
    content:
      'Nahh.. untuk acara final sendiri ini spesial teman-teman, karena final akan diadakan secara offline di kampus Universitas Diponegoro pada tanggal 8 Oktober 2022'
  }
]

const DUC: NextPage = () => {
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
          <div className='relative overflow-hidden z-50'>
            <div style={{ backdropFilter: 'brightness(50%)' }}>
              <Center>
                <div
                  className={`absolute left-[50%] top-[50%] -z-10 w-[768px] h-[768px] md:w-[2300px] md:h-[2300px] bg-[#FE6099] blur-2xl opacity-20 rounded-full animate-blob0`}
                />
                <div
                  className={`absolute left-[55%] top-[40%] mr-8 -z-10 w-[768px] h-[768px] md:w-[2300px] md:h-[2300px] bg-[#F1AB28] blur-2xl opacity-20 rounded-full animate-blob1`}
                />
                <div
                  className={`absolute left-[40%] top-[60%] ml-8 -z-10 w-[768px] h-[768px] md:w-[2300px] md:h-[2300px] bg-[#F1AB28] blur-2xl opacity-20 rounded-full animate-blob2`}
                />
                <Stack className='px-8 py-16 xl:px-64 lg:px-32 md:px-16 2xl:py-32 z-10 gap-8'>
                  <h1 className='text-5xl 2xl:text-8xl md:text-7xl font-bold max-w-4xl leading-snug z-10 text-center'>
                    Diponegoro{' '}
                    <span className='bg-gradient-to-r text-transparent bg-clip-text from-afblue to-afblue-lighter'>
                      UI/UX
                    </span>{' '}
                    Competition
                  </h1>
                  <h2 className='text-2xl font-light z-10 text-center'>Revolt, be creative, be different.</h2>
                  <Center>
                    <Group className='gap-2 z-10'>
                      <Button primary>Daftar sekarang</Button>
                      <Button>Rulebook</Button>
                    </Group>
                  </Center>
                </Stack>
              </Center>
            </div>
          </div>

          <div className='flex flex-col gap-0 items-center justify-center md:flex-row md:inline-flex md:gap-8'>
            <img src='/images/hires/duc.png' className='mt-0 max-w-[300px] md:min-w-[400px]' />
            <Stack className='gap-4 z-50 justify-center items-center px-8 md:justify-start md:items-start'>
              <h1 className='text-4xl font-bold'>
                Apa itu <span className='text-afblue'>DUC?</span>
              </h1>
              <p className='text-md max-w-3xl text-[#888] text-center md:text-start'>
                UI/UX adalah salah satu cabang lomba dari serangkaian kegiatan Anforcom 2022 yang dapat diikuti oleh
                mahasiswa se-Indonesia. Kegiatan ini berupa kompetisi desain antarmuka sistem/produk yang berorientasi
                pada kenyamanan dan kemudahan pengguna dalam menggunakan sistem/produk tersebut.
              </p>
            </Stack>
          </div>

          <Box className='px-8'>
            <Grid type='cols' amount='1' className='gap-4'>
              <Stack align='center'>
                <IconCircle1 className='stroke-afblue/20 -z-1' size={225} />
                <Stack align='center' className='mt-[-64px]'>
                  <h2 className='text-xs tracking-[0.5rem]'>FIRST PLACE</h2>
                  <h1 className='text-afblue text-5xl font-bold max-w-3xl'>Rp3.500.000</h1>
                </Stack>
              </Stack>

              <Group justify='center' className='gap-8'>
                <Stack align='center'>
                  <IconCircle2 className='stroke-[#222] -z-1' size={width > 1299 ? 225 : 128} />
                  <Stack align='center' className='mt-[-36px]'>
                    <h2 className='text-xs tracking-[0.25rem] text-center'>SECOND PLACE</h2>
                    <h1 className='text-xl font-bold max-w-3xl'>Rp2.500.000</h1>
                  </Stack>
                </Stack>

                <Stack align='center'>
                  <IconCircle3 className='stroke-[#222] -z-1' size={width > 1299 ? 225 : 128} />
                  <Stack align='center' className='mt-[-36px]'>
                    <h2 className='text-xs tracking-[0.25rem] text-center'>THIRD PLACE</h2>
                    <h1 className='text-xl font-bold max-w-3xl'>Rp1.500.000</h1>
                  </Stack>
                </Stack>
              </Group>
            </Grid>
          </Box>

          <Stack className='gap-16'>
            <Box>
              <Group
                className='items-center gap-8 whitespace-normal'
                style={{
                  transform: `translateX(-${timelineItem * 720}px)`,
                  transition: 'transform 0.3s'
                }}
              >
                <div className='ml-0 2xl:ml-64 xl:ml-32 md:ml-16'></div>
                {timelineItems.map((data, idx) => (
                  <>
                    <Box className='min-w-[400px]'>
                      <div>
                        <h1
                          className={`text-4xl md:text-6xl font-bold break-words ${
                            data.isActive ? `text-afblue` : `text-[#222]`
                          }`}
                        >
                          {data.title}
                        </h1>
                      </div>
                      <h2 className={`text-lg mt-8 ${!data.isActive ? 'text-[#222]' : ''}`}>{data.date}</h2>
                    </Box>
                    {idx != timelineItems.length - 1 && <div className='h-1 min-w-[256px] bg-[#222]'></div>}
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
            <h1 className='text-4xl font-bold text-center max-w-[350px]'>
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

export default DUC
