require('es6-promise').polyfill()
const fetch = require('isomorphic-fetch')

const fetchUser = (username) => {
    if(!username) return Promise.reject('username name not be null')
    return fetch(`https://api.github.com/users/${username}`)
}

module.exports = {fetchUser}