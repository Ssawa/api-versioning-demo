# 6 Documentation Generation
Here we show how our system of explicit entries for API changes can assist in auto generating documentation. Here we demonstrate how it can be used to generate a changelog. The new script can be run by executing `node gen-docs.js`

## Files Added
* **[gen-docs.js](./gen-docs.js)** - A script for auto generating documentation using our Changes
* **[changes.md](./changes.md)** - Example markdown output from running `node gen-docs.js > changes.md`

## Example Output
```
$ node gen-docs.js

>> # Components changelog
>>
>> ## 2018-01-12
>> * Added video component
>>
>>
>> ## 2018-01-05
>> * Removed the position field
>>
```
