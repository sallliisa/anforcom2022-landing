type Props = {
  color1: string
  color2: string
  color3: string
}

export default function GradientBackgroundAnim({ color1, color2, color3 }: Props) {
  return (
    <>
      <div
        className={`absolute left-[50%] top-[50%] -z-50 w-[768px] h-[768px] md:w-[2300px] md:h-[2300px] bg-[${color1}] blur-2xl opacity-20 rounded-full animate-blob0`}
      />
      <div
        className={`absolute left-[55%] top-[40%] mr-8 -z-50 w-[768px] h-[768px] md:w-[2300px] md:h-[2300px] bg-[${color2}] blur-2xl opacity-20 rounded-full animate-blob1`}
      />
      <div
        className={`absolute left-[40%] top-[60%] ml-8 -z-50 w-[768px] h-[768px] md:w-[2300px] md:h-[2300px] bg-[${color3}] blur-2xl opacity-20 rounded-full animate-blob2`}
      />
    </>
  )
}
