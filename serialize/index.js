'use strict';
const { changes, orderedChanges } = require('./changes');

// Converts our data payload into something consumable by the client's requested
// version
function version(req, raw, data) {
  // We start by iterating from the top of API changes, looking at the newest first...
  orderedChanges.some((key) => {
    // ...if the user requested a version earlier than a change date...
    if (key[0] > req.version) {
      // ...for every change for that date...
      changes[key[1]].forEach(change => {
        // ...we apply that change's "backport" function to the data...
        data = change.backport(req, raw, data);
      });
      // ..and then we continue and inspect the next change...
      return false;
    }

    // ...otherwise we abort early, as no update needs to be made
    return true;
  })
  // We return our, possibly modified, payload
  return data;
}

// Our main function for serializing data from the database to a user consumable format
module.exports = (req, raw) => {
  // Make a copy of the raw object so that we still have reference to it
  const data = Object.assign({}, raw);

  // Strip the position field from what we are sending to the user. Think of this has a generic piece
  // of business logic
  delete data.position;

  return version(req, raw, data);
};
