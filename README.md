# 1: Base
A base demonstration of an incredibly simple API server without any versioning. The server can be started by running `npm install` and `node app.js` (with Node 8 installed) to start a server on `localhost:3000`.

## Files
* **app.js** - Starts our express application
* **data.js** - Holds our testing data and provides functions to mimic database calls
* **routes.js** - Initializes `GET` routes at `/` and `/:id` for receiving content from the database
* **serialize.js** - Provides the stub of a function for transforming an element from the database into an API presentable response

## Example Requests
```
$ curl "localhost:3000"
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

```
$ curl "localhost:3000/a"
{
  "id": "a",
  "role": "body",
  "data": "The content of a body",
  "position": 1
}
```
