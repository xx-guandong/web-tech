import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServer } from '@apollo/server'
import { schema } from '@/server/graphql/schema'

const server = new ApolloServer({
  schema,
})

const handler = startServerAndCreateNextHandler(server)

export async function GET(request) {
  return handler(request)
}

export async function POST(request) {
  return handler(request)
}
