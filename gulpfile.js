const iconBuilder = require('./src/icon-builder/builder')

exports.buildIcons = async () => {
    await iconBuilder.clean()
    await iconBuilder.createComponents()
    await iconBuilder.createIndexes()
    await iconBuilder.printResult()
}
