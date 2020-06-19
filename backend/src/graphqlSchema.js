const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () =>
        new Promise(resolve => {
          resolve('hello world!')
        })
    }
  }
})

module.exports = new GraphQLSchema({
  query: queryType
})
