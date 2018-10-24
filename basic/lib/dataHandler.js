const dataHandler = (str) => {
    if(!str) return ''

    if(typeof str !== 'string') return ''

    return `<tag>${str}</tag>`
}

module.exports = {dataHandler}