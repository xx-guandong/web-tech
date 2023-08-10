import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { ImageFragment$key } from '@/__generated__/ImageFragment.graphql'
const ImageFragment = graphql`
  fragment ImageFragment on Image
  @argumentDefinitions(
    width: { type: "Int", defaultValue: null }
    height: { type: "Int", defaultValue: null }
  ) {
    url(width: $width, height: $height)
    altText
  }
`

type Props = {
  image: ImageFragment$key | null
  width?: number
  height?: number
  className?: string
}

export default function Image({ image, width, height, className }: Props) {
  const data = useFragment(ImageFragment, image)
  if (image == null) {
    return null
  }
  return (
    <img
      key={data?.url}
      alt={data?.altText ?? ''}
      src={data?.url ?? ''}
      width={width}
      height={height}
      className={className}
    />
  )
}
