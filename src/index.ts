import { ApolloServer } from "apollo-server"
// import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core"

import { schema } from "./schema"
import { context } from "./context"

export const server = new ApolloServer({
  schema,
  context,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
})

const port = process.env.PORT || 5000
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})