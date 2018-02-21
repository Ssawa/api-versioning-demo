'use strict';

const app = require('express')();
const routes = require('./routes');

// Before we do anything we associate a "version" with our API request. A version in this case
// is a date, indicating the state of the API you wish to use.
app.use((req, res, next) => {
  // A version can be specified with the "version" query parameter however if no
  // version is explicitly provided we use the current date
  const version = req.query.version ? new Date(req.query.version) : new Date();

  if (isNaN(version.getTime())) {
    throw new Error(`Invalid version entered. Must be a parsable date: ${req.query.version}`);
  }

  req.version = version;
  next();
});

app.use(routes);

app.listen(3000, () => console.log('Listening on port 3000'));
