import Card from './Card'
import Heading from './Heading'
import PosterByline from './PosterByline'
import StorySummary from './StorySummary'
import Image from './Image'
import Timestamp from './Timestamp'
import { graphql } from 'relay-runtime'
import { useFragment } from 'react-relay'
import type { StoryFragment$key } from '@/__generated__/StoryFragment.graphql'
import StoryCommentsSection from './StoryCommentsSection'
import StoryLikeButton from './StoryLikeButton'

type Props = {
  story: StoryFragment$key
}

const StoryFragment = graphql`
  fragment StoryFragment on Story {
    poster {
      ...PosterBylineFragment
    }
    title
    summary
    createdAt
    thumbnail {
      ...ImageFragment @arguments(width: 400)
    }
    ...StoryCommentsSectionFragment
    ...StoryLikeButtonFragment
  }
`

export default function Story({ story }: Props): React.ReactElement {
  const data = useFragment(StoryFragment, story)

  return (
    <Card>
      <PosterByline poster={data.poster} />
      <Heading>{data.title}</Heading>
      <Timestamp time={data.createdAt} />
      <Image image={data.thumbnail} width={400} height={400} />
      <StorySummary summary={data.summary} />
      <StoryLikeButton story={data} />
      <StoryCommentsSection story={data} />
    </Card>
  )
}
