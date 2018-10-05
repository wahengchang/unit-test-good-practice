describe('handler', async () => {
  beforeAll(() => {
    jest.mock('../aws', () => ({
      initSqs: () => ({
        sendMessage: function () {
          return this
        },
        someFunction1: function () {
          return this
        },
        someFunction2: function () {
          return this
        },
        // someFunction99
        promise: jest
          .fn()
          .mockImplementationOnce(() => Promise.resolve('mockUpdateResponse'))
      })
    }))
  })

  it('should return Error, when given null new DynamoDb(null)', async done => {
    const handler = require('../handler')
    handler(null, null, (err, result) => {
      expect(result.result).toBe('something')
      done()
    })
  })
})
