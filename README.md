# 3: Versioning
Demonstrates an approach for handling versioning. Here we're updating our server to apply a date based `version` to every request so that we can properly modify the serialized data.

## File changes
* **[app.js](./app.js)** - Middleware added to add a `version` to user requests
* **[routes.js](./routes.js)** - Updated to pass the `req` object to the serializer
* **serialize.js** - Moved to `serialize/index.js`
* **[serialize](./serialize)** - Folder created
* **[serialize/changes.js](./serialize/changes.js)** - A new file for holding a programmatic listing of all the breaking changes we've made to our database.
* **[serialize/index.js](./serialize/index.js)** - What was originally `serialize.js`, updated to make sure any breaking changes we make are backwards compatible using our versioning.
* ****

## Example Requests
```
$ curl "localhost:3000"
[
  {
    "id": "a",
    "role": "body",
    "data": "The content of a body",
  },
  {
    "id": "b",
    "role": "image",
    "data": "https://image.com",
  },
  {
    "id": "c",
    "role": "body",
    "data": "the end of the article",
  }
]
```

```
$ curl "localhost:3000?version=2018-01-01"
[
  {
    "id": "a",
    "role": "body",
    "data": "The content of a body",
    "position": 1
  },
  {
    "id": "b",
    "role": "image",
    "data": "https://image.com",
    "position": 2
  },
  {
    "id": "c",
    "role": "body",
    "data": "the end of the article",
    "position": 3
  }
]
```
