import "graphql-import-node";
import { createServer } from "node:http";
import { createYoga, createSchema } from "graphql-yoga";
import typeDefs from "./graphql/schema.graphql";
import resolvers from "./graphql/resolvers";

const schema = createSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
});
const server = createServer(yoga);

server.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
