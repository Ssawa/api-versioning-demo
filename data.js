'use strict';

// Simulate sample data as we would retrieve it from the database
const components = [
  // We've added a new field called "animation"
  { id: 'a', role: 'body', data: 'The content of a body', position: 1, animation: 'ease-from-left' },

  // We've added a new component role called "video" here that may not be supported by our
  // consumers
  { id: 'b', role: 'video', data: 'https://video.com', position: 2 },

  { id: 'c', role: 'body', data: 'the end of the article', position: 3 }
];

module.exports = {
  all: () => components,
  one: id => components.filter(obj => obj.id === id)[0],
};
