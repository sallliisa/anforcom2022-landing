import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import PageTransition from 'components/PageTransition'

export interface PublicLayoutProps {
  children: React.ReactNode
  pageTitle?: string
}

export default function PublicLayout({ children, pageTitle }: PublicLayoutProps) {
  return (
    <>
      <div className='bg-zinc-900'>
        <Navbar />
        <PageTransition>
          {children}
          <Footer />
        </PageTransition>
      </div>
    </>
  )
}
