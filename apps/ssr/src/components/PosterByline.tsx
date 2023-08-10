import { graphql } from 'relay-runtime'
import Image from './Image'
import type { PosterBylineFragment$key } from '@/__generated__/PosterBylineFragment.graphql'
import { useFragment, useQueryLoader } from 'react-relay'
import Hovercard from './Hovercard'
import PosterDetailsHovercardContents, {
  PosterDetailsHovercardContentsQuery,
} from './PosterDetailsHovercardContents'
import type { PosterDetailsHovercardContentsQuery as QueryType } from '@/__generated__/PosterDetailsHovercardContentsQuery.graphql'

import { useRef } from 'react'

const PosterBylineFragment = graphql`
  fragment PosterBylineFragment on Actor {
    id
    name
    profilePicture {
      ...ImageFragment @arguments(width: 60, height: 60)
    }
  }
`

export type Props = {
  poster: PosterBylineFragment$key
}

export default function PosterByline({ poster }: Props) {
  const data = useFragment(PosterBylineFragment, poster)
  const [hovercardQueryRef, loadHovercardQuery] = useQueryLoader<QueryType>(
    PosterDetailsHovercardContentsQuery
  )
  function onBeginHover() {
    loadHovercardQuery({ posterId: data.id })
  }
  const hoverRef = useRef(null)
  if (data == null) {
    return null
  }
  return (
    <div className="byline" ref={hoverRef}>
      <Image
        image={data.profilePicture}
        width={60}
        height={60}
        className="byline__image"
      />
      <div className="byline__name">{data.name}</div>
      <Hovercard targetRef={hoverRef} onBeginHover={onBeginHover}>
        <PosterDetailsHovercardContents queryRef={hovercardQueryRef!} />
      </Hovercard>
    </div>
  )
}
