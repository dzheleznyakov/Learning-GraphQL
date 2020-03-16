const { sequelize } = require('./models/database');
const models = require('./models');

const createData = async () => {
  await models.User.create({
    name: 'Dmitriy',
    cars:[{
      make: 'Chevrolet',
      model: 'Aveo',
      colour: 'black',
    }]
  }, {
    include: [models.Car],
  });

  await models.User.create({
    name: 'Susan',
    cars: [{
      make: 'Toyota',
      model: 'Yaris',
      colour: 'red',
    }]
  }, {
    include: [models.Car],
  });

  await models.User.create({
    name: 'Steven',
    cars:[{
      make: 'Fiat',
      model: '500',
      colour: 'yellow',
    }, {
      make: 'Ford',
      model: 'Focus',
      colour: 'green',
    }]
  }, {
    include: [models.Car],
  });
};

sequelize.sync({ forse: true }).then(async () => {
  try {
    await createData();
    process.exit();
  } catch (error) {
    console.log(error);
  }
});