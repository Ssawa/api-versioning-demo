'use strict';

// A simple class definition that gives us a defined and reusable pattern
// for defining new changes to our API in a backwards compatible manner
class Change {
  constructor(description, backport) {
    this.description = description;
    this.backport = backport;
  }
}

// A mapping of all the breaking changes that happened to our API, the date they happened,
// and a function for mapping converting that change into backwards compliance
const changes = {
  '2018-01-05': [
    // We've updated our API to strip out the "position" field from the response but to maintain
    // compatibility we need to add it back for consumers who are using a version of our API
    // from before this change
    new Change('Removed the position field', (req, raw, data) => {
      data.position = raw.position;
      return data;
    }),
  ],
}

// We preprocess our "changes" before the server starts so that the keys are converted
// into Date objects and ordered from newest to oldest in descending order
const orderedChanges = Object.keys(changes).map((timestamp) => {
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date entered in changes: ${timestamp}`);
  }
  return [ date, timestamp ]
}).sort((a, b) => b[0] - a[0]); // Sort the change keys in order from newest to oldest


module.exports = {
  changes,
  orderedChanges,
};
