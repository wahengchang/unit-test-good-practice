const AWS = require('aws-sdk')
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' })

const handler = (event, context, callback) => {
  try {
    sqs.sendMessage({ DelaySeconds, MessageBody, QueueUrl }).promise()
    .then((result1) => sqs.someFunction1(result1).promise())
    .then((result2) => sqs.someFunction2(result2).promise())
    .then((result3) => sqs.someFunction3(result3).promise())
    .then((result4) => sqs.someFunction4(result4).promise())
    // ...
    .then((result99) => sqs.someFunction99(result99).promise())
    .then((result100)=> callback(null, {result: result100}))
  } catch(err) {
    callback(err)
  }
}
