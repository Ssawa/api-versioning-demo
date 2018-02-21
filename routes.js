'use strict';
const router = require('express').Router()
const db = require('./data')
const serialize = require('./serialize');

// Simple GET methods that return one or multiple 
// components serialized

router.get('/', (req, res) => {
  res.send(
    JSON.stringify(
      db.all().map(serialize.bind(null, req)),
      null, 2
    )
  )
});

router.get('/:id', (req, res) => {
  res.send(
    JSON.stringify(
      serialize(req, db.one(req.params.id)),
      null, 2)
    )
});

module.exports = router;
