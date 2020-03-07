const express = require('express')
const app = express();
const { ApolloServer, gql } = require('apollo-server-express');
const { users, cars } = require('./data')

const me = users[0];

const typeDefs = gql`
  type Query {
    users: [User]
    user(id: Int!): User

    cars: [Car]
    car(id: Int!): Car
    
    me: User
  }

  type User {
    id: ID!
    name: String!
    car: [Car]
  }

  type Car {
    id: ID!
    make: String!
    model: String!
    colour: String!
    owner: User!
  }
`;
const resolvers = {
  Query: {
    users: () => users,
    user: (parent, { id }, context, info) => {
      const user = users.filter(user => user.id === id);
      return user[0];
    },
    cars: () => cars,
    car: (parent, { id }, context, info) => {
      const car = cars.filter(cars => cars.id === id);
      return car[0];
    },
    me: () => me,
  },
  Car: {
    owner: (parent) => users[parent.ownedBy - 1],
  },
  User: {
    car: (parent) => {
      return parent.cars.map(carId => cars[carId - 1]);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app });

app.listen(3000, () => console.info('Apollo GraphQL server is running on port 3000'));
