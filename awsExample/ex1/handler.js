const AWS = require('aws-sdk')
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' })

const handler = (event, context, callback) => {
  try {
    sqs.sendMessage({ DelaySeconds, MessageBody, QueueUrl }).promise()
    .then( (result) => {
      const res1= dothings1(result)
      const res2= dothings2(res1)
      const res3= dothings3(res2)
      const res4= dothings4(res3)
      const res5= dothings5(res4)
      // ...
      callback(null, {result: res5})
    })
  } catch(err) {
    callback(err)
  }
}
