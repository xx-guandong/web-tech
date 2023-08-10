import * as React from 'react'
import { graphql } from 'relay-runtime'
import { usePaginationFragment } from 'react-relay'
import type { StoryCommentsSectionFragment$key } from '@/__generated__/StoryCommentsSectionFragment.graphql'
import Comment from './Comment'
import LoadMoreCommentsButton from './LoadMoreCommentsButton'
import LoadingSpinner from './LoadingSpinner'
import StoryCommentsComposer from './StoryCommentsComposer'

const { useTransition } = React

export type Props = {
  story: StoryCommentsSectionFragment$key
}

const StoryCommentsSectionFragment = graphql`
  fragment StoryCommentsSectionFragment on Story
  @refetchable(queryName: "StoryCommentsSectionPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  ) {
    comments(after: $cursor, first: $count)
      @connection(key: "StoryCommentsSectionFragment_comments") {
      pageInfo {
        startCursor
        hasNextPage
      }
      edges {
        node {
          id
          ...CommentFragment
        }
      }
    }
    ...StoryCommentsComposerFragment
  }
`

export default function StoryCommentsSection({ story }: Props) {
  const [isPending, startTransition] = useTransition()
  const { data, loadNext } = usePaginationFragment(
    StoryCommentsSectionFragment,
    story
  )
  const onLoadMore = () =>
    startTransition(() => {
      loadNext(3)
    })
  return (
    <div>
      <StoryCommentsComposer story={data} />
      {data.comments?.edges?.map((edge) => (
        <Comment key={edge!.node!.id} comment={edge!.node!} />
      ))}
      {data.comments?.pageInfo?.hasNextPage && (
        <LoadMoreCommentsButton onClick={onLoadMore} disabled={isPending} />
      )}
      {isPending && <LoadingSpinner />}
    </div>
  )
}
