import Image from 'next/image'

function heroSources(name: string, widths: number[]) {
  return widths.map(width => `/images/responsive/${name}-${width}.avif ${width}w`).join(', ')
}

const preparedHeroSources: Partial<Record<string, string>> = {
  '/images/squarespace/hero-mountain.jpg': heroSources('home-hero', [640, 768, 828, 1024, 1280, 1400]),
  '/images/denver-hero.jpg': heroSources('denver-hero', [640, 768, 828, 1024, 1280, 1920]),
  '/blog-hero.jpg': heroSources('blog-hero', [480, 640, 768, 1024, 1920]),
  '/images/contact-hero.jpg': heroSources('contact-hero', [480, 640, 768, 1024, 1400]),
  '/images/aq-hero.jpg': heroSources('asset-hero', [480, 640, 768, 1024, 1400]),
}

type SectionBackdropProps = {
  src: string
  shade: number
  tint?: string
  position?: string
  hero?: boolean
}

export default function SectionBackdrop({
  src,
  shade,
  position = 'center',
  tint = '20,35,25',
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
        style={{ backgroundColor: `rgba(${tint},${shade})` }}
      />
    </>
  )
}
