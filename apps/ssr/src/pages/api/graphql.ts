import { schema } from '@/server/graphql/schema'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'

const server = new ApolloServer({
  schema,
})

export default startServerAndCreateNextHandler(server)
