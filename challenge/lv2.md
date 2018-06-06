## Challenge Lv2

change `./lib/fetchXml.js` to 

```js
const fetchXml = (url) => Promise.resolve(`<Note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend!</body>
        <url>${url}</url>
    </Note>`)

module.exports = {fetchXml}
```

To see who has the less side effect