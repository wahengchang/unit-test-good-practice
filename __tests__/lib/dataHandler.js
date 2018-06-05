const {dataHandler} = require('../../lib/dataHandler')

describe('dataHandler', ()=>{
    it('should return xml tag with foo', ()=>{
        const mock = 'foo'
        const result = dataHandler(mock)
        expect(result).toBe('<tag>foo</tag>')
    })
})