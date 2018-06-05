const fetchXml = (url) => Promise.resolve(`<note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend!</body>
        <url>${url}</url>
    </note>`)

module.exports = {fetchXml}