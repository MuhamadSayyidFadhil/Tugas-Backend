const fruits = require('../data/fruit');

const index = () => {
  console.log(fruits.join("\n"));
};

const store = (name) => {
  fruits.push(name); 
};

const update = (position, name) => {
  if (position >= 0 && position < fruits.length) {
    fruits[position] = name;
  }
};

const destroy = (position) => {
  if (position >= 0 && position < fruits.length) {
    fruits.splice(position, 1);
  }
};

module.exports = { index, store, update, destroy };
