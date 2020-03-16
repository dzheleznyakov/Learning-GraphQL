const resolvers = {
  Query: {
    cars: (parent, args, { models }) => models.Car.findAll(),
    car: (parent, { id }, { models }) => models.Car.findByPk(id),
  },
  Mutation: {
    createCar: (parent, { make, model, colour }, { models }) => models.Car.create({ make, model, colour }),
    removeCar: (parent, { id }, { models }) => models.Car.destroy({
      where: { id },
    }),
  },
  Car: {
    owner: (parent, args, { models }) => models.User.findByPk(parent.userId),
  },
};

module.exports = resolvers;
