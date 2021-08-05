const iconBuilder = require('./src/utils/icon/builder')
const demoCode = require('./src/utils/demo/demo-code')
const {watch, series} = require('gulp')

const watchDemoCodes = async () => {
    const watcher = watch('./demos/components/**/*.*')
    watcher.on('change', (path, stats) => {
        demoCode.create(path)
    })
    watcher.on('add', (path, stats) => {
        demoCode.create(path)
    })
    watcher.on('unlink', (path, stats) => {
        demoCode.remove(path)
    })
}

const syncDemoCodes = async () => {
    await demoCode.removeAll()
    await demoCode.createAll()
}

const buildIcons = async () => {
    await iconBuilder.clean()
    await iconBuilder.createComponents()
    await iconBuilder.createIndexes()
    await iconBuilder.printResult()
}

exports.watchDemoCodes = watchDemoCodes
exports.syncDemoCodes = syncDemoCodes
exports.devDemoCodes = series(syncDemoCodes, watchDemoCodes)

exports.buildIcons = buildIcons

exports.test = async () => {

}
