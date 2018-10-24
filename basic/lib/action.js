const {fetchXml} = require('./fetchXml')
const {dataHandler} = require('./dataHandler')

const dispatch = (url) => {
    return fetchXml(url)
    .then(xml => dataHandler(xml))
}

module.exports = {dispatch}