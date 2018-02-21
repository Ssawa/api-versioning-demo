'use strict';

const { changes, orderedChanges } = require('./serialize/changes');

// Use the metadata of our changes to generate markdown and emit it to stdout
console.log('# Components changelog\n')
orderedChanges.forEach((data) => {
  console.log(`## ${data[1]}`);
  changes[data[1]].forEach( change => console.log(`* ${change.description}`))
  console.log('\n');
});
