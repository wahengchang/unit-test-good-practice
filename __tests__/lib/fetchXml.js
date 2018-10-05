const {fetchXml} = require('../../lib/fetchXml')

describe('fetchXml', ()=>{
    it('should return ', ()=>{
      const result = fetchXml('foo')
        expect(result).toBe(`<note>
            <1to>Tove</to>
            <from>Jani</from>
            <heading>Reminder</heading>
            <body>Don't forget me this weekend!</body>
            <url>foo</url>
        </note>`)
    })
})