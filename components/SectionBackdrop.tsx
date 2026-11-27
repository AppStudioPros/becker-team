import Image from 'next/image'

type SectionBackdropProps = {
  src: string
  shade: number
  position?: string
  hero?: boolean
}

export default function SectionBackdrop({
  src,
  shade,
  position = 'center',
  hero = false,
}: SectionBackdropProps) {
  return (
    <>
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        loading={hero ? 'eager' : 'lazy'}
        fetchPriority={hero ? 'high' : 'low'}
        className="pointer-events-none -z-20 object-cover"
        style={{ objectPosition: position }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundColor: `rgba(20,35,25,${shade})` }}
      />
    </>
  )
}
