import { nodes } from '../db/fake.ts'

export function nodeResolver({ id }) {
  return nodes.find((node) => node.id === id)
}

export function storyPosterResolver(story) {
  return nodeResolver({ id: story.authorID })
}

export function storyCommentsResolver(story, { first, after: afterStr }) {
  const count = first ?? Infinity
  const after = parseInt(afterStr, 10) || 0
  const next = count + after
  const comments = story.comments
  return {
    pageInfo: {
      hasNextPage: comments.length >= next,
      endCursor: '' + next,
    },
    edges: comments.slice(after, next).map((comment) => ({
      node: comment,
    })),
  }
}

export function newsfeedStoriesResolver(
  _,
  { first, after: afterStr, category }
) {
  const count = first ?? Infinity
  const after = parseInt(afterStr, 10) || 0
  const next = count + after
  const edges = nodes.filter(
    (node) =>
      node.__typename === 'Story' &&
      (typeof category !== 'string' ||
        category === 'ALL' ||
        category === node.category)
  )
  return {
    pageInfo: {
      hasNextPage: edges.length >= next,
      endCursor: '' + next,
    },
    edges: edges.slice(after, next).map((node) => ({ node, cursor: node.id })),
  }
}

export function contactsResolver(_, { search }) {
  const persons = nodes.filter(
    (node) => node.__typename === 'Person' && node.id !== 'the-viewer'
  )
  if (search == null || search == '') {
    return persons
  } else {
    return persons.filter(
      (person) =>
        person.name?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
  }
}

export function topStoryResolver(_, { category }) {
  if (typeof category === 'string' && category !== 'ALL') {
    return nodes.filter(
      (node) => node.__typename === 'Story' && node.category === category
    )[0]
  } else {
    return nodes.filter((node) => node.__typename === 'Story')[0]
  }
}

export function topStoriesResolver() {
  return nodes.filter((node) => node.__typename === 'Story').slice(0, 3)
}

export function resolveImageURL({ url }, { width, height }) {
  const params = [
    ['width', width],
    ['height', height],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ].filter(([_, v]) => v != null)
  return (
    url +
    (params.length ? '?' + params.map(([k, v]) => `${k}=${v}`).join('&') : '')
  )
}

export function resolveLikeStoryMutation(_, { id, doesLike }) {
  const story = nodes.find((node) => node.id === id)
  if (!story) {
    return // TODO should report an error
  }
  if (story.likeCount) {
    story.likeCount += doesLike - Number(story.doesViewerLike)
  }
  story.doesViewerLike = doesLike
  return {
    story,
  }
}

let nextCommentID = 0
export function resolvePostStoryCommentMutation(_, { id, text }) {
  const story = nodes.find((node) => node.id === id)
  if (!story) {
    return // TODO should report an error
  }
  const newComment = {
    id: `posted-comment-${nextCommentID++}`,
    text,
  }
  story.comments?.unshift(newComment)
  return {
    story,
    commentEdge: {
      node: newComment,
    },
  }
}

export const rootValue = {
  viewer: () => {
    return {
      actor: nodes.find((node) => node.id === 'the-viewer'),
    }
  },
  node: (args) => {
    return nodeResolver(args)
  },
}
