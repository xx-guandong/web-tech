/* eslint-disable @typescript-eslint/ban-ts-comment */
import Story from '@/components/Story'
import { useLazyLoadQuery, usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import type { NewsfeedQuery as NewsfeedQueryType } from '@/__generated__/NewsfeedQuery.graphql'
import type { NewsfeedContentsFragment$key as NewsfeedContentsFragmentType } from '@/__generated__/NewsfeedContentsFragment.graphql'
import InfiniteScrollTrigger from './InfiniteScrollTrigger'
const NewsfeedQuery = graphql`
  query NewsfeedQuery {
    ...NewsfeedContentsFragment
  }
`

const NewsfeedContentsFragment = graphql`
  fragment NewsfeedContentsFragment on Query
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  )
  @refetchable(queryName: "NewsfeedContentsRefetchQuery") {
    viewer {
      newsfeedStories(after: $cursor, first: $count)
        @connection(key: "NewsfeedContentsFragment_newsfeedStories") {
        edges {
          node {
            id
            ...StoryFragment
          }
        }
      }
    }
  }
`

export default function Newsfeed() {
  const queryData = useLazyLoadQuery<NewsfeedQueryType>(
    NewsfeedQuery,
    {}
  ) as NewsfeedContentsFragmentType

  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment(
    NewsfeedContentsFragment,
    queryData
  )
  function onEndReached() {
    loadNext(3)
  }
  const storyEdges = data.viewer?.newsfeedStories?.edges
  return (
    <div className="newsfeed">
      {storyEdges?.map(
        (story) => story && <Story key={story.node?.id} story={story.node!} />
      )}
      <InfiniteScrollTrigger
        onEndReached={onEndReached}
        hasNext={hasNext}
        isLoadingNext={isLoadingNext}
      />
    </div>
  )
}
