const {dispatch} = require('./lib/action')
const url = 'https://foo.com'

return dispatch(url)
.then(result => console.log(result))