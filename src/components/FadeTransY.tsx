import { Variants, m } from 'framer-motion'
import { useRouter } from 'next/router'

type FadeTransYProps = {
  children: React.ReactNode
  control: boolean
}

const FadeTransY = ({ children, control }: FadeTransYProps) => {
  const v: Variants = {
    open: { opacity: 1, y: -20 },
    closed: { opacity: 0, y: -30 }
  }

  return (
    <m.div
      initial={{ y: -30, opacity: 0 }}
      animate={control ? 'open' : 'closed'}
      variants={v}
      exit='closed'
      transition={{ duration: 0.1 }}
    >
      {children}
    </m.div>
  )
}

export default FadeTransY
