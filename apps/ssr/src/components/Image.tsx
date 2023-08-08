import * as React from 'react'

type Props = {
  image: {
    url: string | null
  } | null
  width?: number
  height?: number
  className?: string
}

export default function Image({ image, width, height, className }: Props) {
  if (image == null) {
    return null
  }
  return (
    <img
      key={image.url}
      src={image.url ?? ''}
      width={width}
      height={height}
      className={className}
    />
  )
}
