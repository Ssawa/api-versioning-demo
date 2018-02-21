# 5: New Field
This demonstrates how adding new, non-breaking, changes are handled with our versioning system. In this case we add a new field, `animation`, to our raw data. However, because this change would not break any of our existing consumers no Change definition is necessary, and the update is propagated out to all consumers.

## File changes
* **[data.js](./data.js)** - Added new field `animation` to one of our components

## Example Requests
```
$ curl "localhost:3000/a"
{
  "id": "a",
  "role": "body",
  "data": "The content of a body",
  "animation": "ease-from-left"
}
```


```
$ curl "localhost:3000/a?version=2018-01-01"
{
  "id": "a",
  "role": "body",
  "data": "The content of a body",
  "animation": "ease-from-left",
  "position": 1
}
```
