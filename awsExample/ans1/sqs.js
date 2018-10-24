const AWS = require('aws-sdk')
AWS.config.update({ region: 'ap-southeast-1' })
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' })

const sendMessage = (QueueUrl, MessageBody, attribute) => {
  if(!QueueUrl || !MessageBody || !attribute) throw new Error('missing paramters')
  return sqs.sendMessage({ DelaySeconds, MessageBody, QueueUrl }).promise()
}

module.exports = {sendMessage}