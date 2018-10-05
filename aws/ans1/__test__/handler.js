describe('handler', async () => {
  beforeAll(() => {
    jest.mock('../sqs', () => new Promise((resolve) => resolve({foo: 'foo'})))
  })

  it('should return Error, when given null new DynamoDb(null)', async done => {
    const handler = require('../handler')
    handler(null, null, (err, result) => {
      expect(result.result).toBe('something')
      done()
    })
  })
})
