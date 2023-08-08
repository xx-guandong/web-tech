import Card from './Card'
import Heading from './Heading'
import PosterByline, { type Props as PosterBylineProps } from './PosterByline'
import StorySummary from './StorySummary'
import Image from './Image'

type Props = {
  story: {
    title: string | null
    summary: string | null
    thumbnail: {
      url: string | null
    } | null
    poster: PosterBylineProps['poster'] | null
  }
}

export default function Story({ story }: Props): React.ReactElement {
  return (
    <Card>
      <PosterByline poster={story?.poster} />
      <Heading>{story.title}</Heading>
      <Image image={story?.thumbnail} width={400} height={400} />
      <StorySummary summary={story.summary} />
    </Card>
  )
}
