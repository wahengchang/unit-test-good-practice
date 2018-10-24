const {initSqs} = require('./aws')
const sqs = initSqs()

const handler = (event, context, callback) => {
  try {
    sqs.sendMessage({ DelaySeconds, MessageBody, QueueUrl }).promise()
    .then((result1) => sqs.someFunction1(result1)
    .then((result2) => sqs.someFunction2(result2)
    .then((result3) => sqs.someFunction3(result3)
    .then((result4) => sqs.someFunction4(result4)
    // ...
    .then((result99) => sqs.someFunction99(result99)
    .then((result100)=> callback(null, {result: result100}))
  } catch(err) {
    callback(err)
  }
}
