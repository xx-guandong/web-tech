/* eslint-disable @typescript-eslint/ban-ts-comment */
import Story from '@/components/Story'
import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import type { newsfeedQuery as NewsfeedQueryType } from '@/__generated__/newsfeedQuery.graphql'
const NewsfeedQuery = graphql`
  query newsfeedQuery {
    topStory {
      title
      summary
      poster {
        name
        profilePicture {
          url
        }
      }
      thumbnail {
        url
      }
    }
  }
`

export default function Newsfeed() {
  const data = useLazyLoadQuery<NewsfeedQueryType>(NewsfeedQuery, {})
  return (
    <div className="newsfeed">
      {/* @ts-expect-error */}
      {data.topStory && <Story story={data.topStory} />}
    </div>
  )
}
