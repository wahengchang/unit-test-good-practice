const AWS = require('aws-sdk')
AWS.config.update({ region: 'ap-southeast-1' })

const initSqs = () => new AWS.SQS({ apiVersion: '2012-11-05' })

module.exports = {initSqs}