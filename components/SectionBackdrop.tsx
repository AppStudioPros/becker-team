import Image from 'next/image'

const preparedHeroSources: Partial<Record<string, string>> = {
  '/images/squarespace/hero-mountain.jpg': [640, 768, 828, 1024, 1280, 1400].map(width => `/images/responsive/home-hero-${width}.avif ${width}w`).join(', '),
  '/images/denver-hero.jpg': [640, 768, 828, 1024, 1280, 1920].map(width => `/images/responsive/denver-hero-${width}.avif ${width}w`).join(', '),
}

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
  const preparedSource = hero ? preparedHeroSources[src] : undefined
  const image = (
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
  )

  return (
    <>
      {preparedSource ? (
        <>
          <link rel="preload" as="image" type="image/avif" imageSrcSet={preparedSource} imageSizes="100vw" fetchPriority="high" />
          <picture>
            <source type="image/avif" srcSet={preparedSource} sizes="100vw" />
            {image}
          </picture>
        </>
      ) : image}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundColor: `rgba(20,35,25,${shade})` }}
      />
    </>
  )
}
