'use strict';

// Simulate sample data as we would retrieve it from the database
const components = [
  { id: 'a', role: 'body', data: 'The content of a body', position: 1 },
  { id: 'b', role: 'image', data: 'https://image.com', position: 2 },
  { id: 'c', role: 'body', data: 'the end of the article', position: 3 }
];

module.exports = {
  all: () => components,
  one: id => components.filter(obj => obj.id === id)[0],
};
