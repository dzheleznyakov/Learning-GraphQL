const resolvers = {
  Query: {
    users: (parent, args, { models }) => models.User.findAll(),
    user: (parent, { id }, { models }) => models.User.findByPk(id),
    // me: (parent, args, { me }) => me,
  },
  Mutation: {
    makeUser: (parent, { name }, { models }) => {
      const user = { name };
      return models.User.create(user);
    },
    removeUser: (parent, { id }, { models }) => models.User.destroy({
      where: { id },
    }),
  },
  User: {
    car: (parent, args, { models }) => models.Car.findAll({
      where: { userId: parent.id },
    })
  }
};

module.exports = resolvers;
