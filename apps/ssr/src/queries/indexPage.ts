import { graphql } from 'react-relay'

export default graphql`
  query indexPage_indexQuery {
    viewer {
      allBlogPosts(first: 10, orderBy: { createdAt: desc }) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`
