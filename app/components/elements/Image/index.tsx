import NextImage from 'next/image'

type Image = {
  src: string
  alt: string
  blurredDataUrl?: string
  width?: number
  height?: number
}

// NOTE:Image型を内包していればok
type HasImageProperties<T> = T extends Image ? T : never

export const Image = async <T,>(image: HasImageProperties<T>) => {
  // NOTE:これだとLSが発生する
  return (
    <div className="rounded-xl overflow-hidden group">
      <NextImage
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="group-hover:opacity-75"
        placeholder="blur"
        blurDataURL={image.blurredDataUrl}
      ></NextImage>
    </div>
  )
}

export const ImageCover = async <T,>(image: HasImageProperties<T>) => {
  // NOTE:下記だとLSが発生しない
  return (
    <div className="h-64 rounded-xl relative overflow-hidden group">
      <NextImage
        src={image.src}
        alt={image.alt}
        fill
        sizes="276px" // NOTE:https://ausi.github.io/respimagelint/
        className="object-cover group-hover:opacity-75"
        placeholder="blur"
        blurDataURL={image.blurredDataUrl}
      ></NextImage>
    </div>
  )
}
