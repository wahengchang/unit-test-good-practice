const {fetchUser} = require('../../lib/fetchApi')

jest.mock('isomorphic-fetch', (para) => jest.fn())

const fetch = require('isomorphic-fetch')

describe('fetchUser', ()=>{
    it('should return ', ()=>{
        const result = fetchUser('wahengchang')
        expect(fetch.mock.calls[0][0]).toBe('https://api.github.com/users/wahengchang')
    })
})