const {sendMessage} = require('./sqs')

const handler = (event, context, callback) => {
  try {
    sendMessage({ DelaySeconds, MessageBody, QueueUrl })
    .then( () => {
      const res1= dothings1(result)
      const res2= dothings2(res1)
      const res3= dothings3(res2)
      const res4= dothings4(res3)
      const res5= dothings5(res4)
      // ...
      callback(null, {foo: res5})
    })
  } catch(err) {
    callback(err)
  }
}
