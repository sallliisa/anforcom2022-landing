import { Button, Card, Group, Stack, Box, Grid, Center, Anchor, Accordion } from 'components/core'
import type { NextPage } from 'next'
import { IconChevronLeft, IconChevronRight, IconCircle1, IconCircle2, IconCircle3 } from '@tabler/icons'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const timelineItems = [
  { title: 'First Batch\nof Registration', date: '5 August - 28 August', isActive: true },
  { title: 'Second Batch\nof Registration', date: '1 September - 23 September', isActive: false },
  { title: 'Logic Competition\nElimination Phase', date: '1 October - 3 October', isActive: false },
  { title: 'Finalists\nAnnouncement', date: '3 October 2022', isActive: false },
  { title: 'Technical Meeting:\nFinal Day', date: '5 October 2022', isActive: false },
  { title: 'Anforcom 2022\nGrand Final', date: '8 October 2022', isActive: false }
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
        <Stack className='gap-0 overflow-hidden'>
          <div
            className='relative z-0 overflow-hidden bg-cover'
            style={{ backgroundImage: "url('/svgs/bg-grad-4.svg')" }}
          >
            <div style={{ backdropFilter: 'brightness(50%)' }}>
              <Center>
                <Stack className='px-8 py-16 xl:px-64 lg:px-32 md:px-16 2xl:py-32 z-10 gap-4'>
                  <h1 className='text-xs tracking-[1rem] z-10 text-center'>SEMINAR</h1>
                  <h1 className='text-6xl 2xl:text-8xl md:text-7xl font-bold max-w-4xl leading-snug z-10 text-center text-afblue'>
                    Awake
                  </h1>
                  <h2 className='text-2xl font-normal z-10 text-center'>
                    How to Find Your Passion on Information Technology World
                  </h2>
                  <Center>
                    <Button primary>Daftar sekarang</Button>
                  </Center>
                </Stack>
              </Center>
            </div>
          </div>
        </Stack>
      </div>
    </>
  )
}

export default DLC
