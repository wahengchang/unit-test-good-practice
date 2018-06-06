const {dataHandler} = require('../../lib/dataHandler')

describe('dataHandler', ()=>{
    it('should return xml tag with foo', ()=>{
        const mock = 'foo'
        const result = dataHandler(mock)
        expect(result).toBe('<tag>foo</tag>')
    })

    it('should return "" when given null parameter', ()=>{
        const result = dataHandler()
        expect(result).toBe('')
    })

    it('should return "" when given null parameter', ()=>{
        const result = dataHandler({})
        expect(result).toBe('')
    })
})