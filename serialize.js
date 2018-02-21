'use strict';

module.exports = (raw) => {
  // Strip the "position" field from our serialization
  delete raw.position;

  return raw;
};
