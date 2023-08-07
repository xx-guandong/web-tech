import { schema } from '@/server/graphql/schema'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

const server = new ApolloServer({
  //   resolvers,
  //   typeDefs,
  schema,
})

export default startServerAndCreateNextHandler(server)
