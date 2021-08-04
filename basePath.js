const path = require('path')

module.exports = (...paths) => {
    return path.resolve(__dirname, ...paths)
}
