let users = [{
  id: 1,
  name: 'Dmitriy',
  cars: [1, 2],
}, {
  id: 2,
  name: 'Susan',
  cars: [],
}, {
  id: 3,
  name: 'Steven',
  cars: [3],
}];


let cars = [{
  id: 1,
  make: 'Chevrolet',
  model: 'Aveo',
  colour: 'black',
  ownedBy: 1,
}, {
  id: 2,
  make: 'Mercedez',
  model: 'Benz',
  colour: 'black',
  ownedBy: 1,
}, {
  id: 3,
  make: 'Nissan',
  model: 'Passat',
  colour: 'blue',
  ownedBy: 3,
}];

module.exports = {
  users,
  cars,
};
