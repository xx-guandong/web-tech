import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'

const UserQuery = {
  type: GraphQLString,
  args: {},
  resolve: () => 'Hello World',
}

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: UserQuery,
    // node: nodeField,
  },
})

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     // addTodo: AddTodoMutation,
//     // changeTodoStatus: ChangeTodoStatusMutation,
//     // markAllTodos: MarkAllTodosMutation,
//     // removeCompletedTodos: RemoveCompletedTodosMutation,
//     // removeTodo: RemoveTodoMutation,
//     // renameTodo: RenameTodoMutation,
//   },
// })

export const schema = new GraphQLSchema({
  query: Query,
  // mutation: Mutation,
})
