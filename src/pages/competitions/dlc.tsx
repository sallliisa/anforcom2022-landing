import { Button, Card, Group, Stack, Box, Grid, Anchor } from 'components/core'
import type { NextPage } from 'next'

const DLC: NextPage = () => {
  return (
    <>
      <div className='relative min-h-screen bg-black font-sans text-white overflow-hidden'>
        <Stack className='gap-36  overflow-hidden'>
          <div className='relative bg-zinc-900 z-0 overflow-hidden'>
            <Stack className='px-8 py-16 xl:px-64 lg:px-32 md:px-16 2xl:py-32 z-10 gap-8'>
              <h1 className='text-6xl 2xl:text-8xl md:text-7xl font-bold max-w-4xl leading-snug z-10'>
                Annual <span className='text-afblue'>Informatics</span> Competition 2022
              </h1>
              <h2 className='text-2xl font-light z-10'>
                Overcome the <span className='text-afblue font-semibold'>infinity</span>
              </h2>
              <Group className='gap-2 z-10'>
                <Button primary>Daftar sekarang</Button>
                <Button>Masuk</Button>
              </Group>
            </Stack>
            <img className='absolute right-[-225px] top-16 z-0 md:w-[700px] xl:right-24' src='/images/abs1.png' />
          </div>

          <Stack align='center' className='z-10 px-8 gap-4'>
            <h2 className='text-2xl font-light text-center'>Tentang</h2>
            <h1 className='text-4xl font-bold text-center'>
              Anforcom <span className='text-afblue'>2022</span>
            </h1>
            <p className='text-md max-w-3xl text-center'>
              Anforcom (Annual Informatics Competition) adalah serangkaian acara dan perlombaan yang diadakan Mahasiswa
              Informatika Universitas Diponegoro. Event ini dilaksanakan dalam rangka mengenalkan Kultur Teknologi
              kepada masyarakat dan menumbuhkan jiwa jiwa kompetititf yang sportif di kalangan pelajar.
            </p>
            <p className='text-md max-w-3xl text-center'>
              Anforcom kali ini mengangkat Tema “Overcome the Infinity”. Dalam event kali ini terdapat 2 perlombaan
              yaitu, Diponegoro Logic Competition (DLC), dan Diponegoro UI/UX Competition (DUC). DLC dapat diikuti oleh
              siswa SMA/SMK Sederajat Se-Indonesia dan DUC dapat diikuti Pelajar maupun Mahasiswa. Jadi, tunggu apa lagi
              dan persiapkan dirimu untuk Overcome the Infinity!
            </p>
          </Stack>

          <Stack align='center' className='z-10 px-8 gap-8'>
            <Box>
              <h1 className='text-4xl font-bold text-center'>
                <span className='text-afblue'>Kompetisi</span> dan <span className='text-afblue'>Acara</span>
              </h1>
              <h2 className='text-xl font-light mt-6 max-w-sm text-center'>
                Anforcom 2022 menyelenggarakan dua kompetisi dan satu acara
              </h2>
            </Box>
            <Grid type='cols' amount='1' className='gap-8 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
              <Card className='p-8 h-[448px]'>
                <Stack align='center' className='justify-between min-h-full'>
                  <img src='/images/duc.png' className='mt-8' />
                  <Box>
                    <h2 className='text-2xl font-semibold max-w-[200px] text-center'>UI/UX Competition</h2>
                    <Anchor href='#' className='text-md font-light max-w-[200px] text-center underline mt-4'>
                      Selengkapnya
                    </Anchor>
                  </Box>
                </Stack>
              </Card>
              <Card className='p-8 h-[448px]'>
                <Stack align='center' className='justify-between min-h-full'>
                  <img src='/images/dlc.png' />
                  <Box>
                    <h2 className='text-2xl font-semibold max-w-[200px] text-center'>Logic Competition</h2>
                    <Anchor href='#' className='text-md font-light max-w-[200px] text-center underline mt-4'>
                      Selengkapnya
                    </Anchor>
                  </Box>
                </Stack>
              </Card>
              <Card className='p-8 h-[448px] md:col-span-2 xl:col-span-1'>
                <Stack align='center' className='justify-between'>
                  <img src='/images/seminar.png' />
                  <Box>
                    <h2 className='text-2xl font-semibold max-w-[200px] text-center'>Seminar</h2>
                    <Anchor href='#' className='text-md font-light max-w-[200px] text-center underline mt-4'>
                      Selengkapnya
                    </Anchor>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Stack>

          <div className='relative bg-zinc-900 z-0 overflow-hidden'>
            <Stack className='px-8 py-16 xl:px-64 lg:px-32 md:px-16 2xl:py-32 z-10 gap-16'>
              <h1 className='text-6xl 2xl:text-8xl md:text-7xl font-bold max-w-3xl '>
                Prepare yourselves, and get <span className='text-afblue'>ready.</span>
              </h1>
              <Group>
                <Button primary>Daftar sekarang</Button>
              </Group>
            </Stack>
            <img
              className='absolute right-0 top-[100px] sm:top-[-50px] md:top-[-100px] lg:top-[-150px] xl:top-[-200px] 2xl:top-[-250px] -z-10'
              src='/images/abs2.png'
            />
          </div>
        </Stack>
      </div>
    </>
  )
}

export default DLC
