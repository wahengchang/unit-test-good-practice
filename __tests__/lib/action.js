const {dispatch} = require('../../lib/action')

describe('dispatch', ()=>{
    it('should return ', ()=>{
        dispatch('foo').then(data => 
            expect(data).toBe('foo')
        )
    })
})