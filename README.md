# 1: No Versioning
This offers a demonstration of making a change to the API without any versioning being done to try to maintain backwards compatibility. This is an example of a change that would break existing consumers.

## File changes
* **serialize.js** - The serializer has been updated to delete the "position" field from all entries

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
$ curl "localhost:3000/a"
{
  "id": "a",
  "role": "body",
  "data": "The content of a body",
}
```
