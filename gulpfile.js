const iconBuilder = require('./src/utils/icon/builder')
const demoCode = require('./src/utils/demo/demo-code')
const {watch} = require('gulp')

exports.buildDemoCodes = async () => {
    const watcher =  watch('./demos/components/**/*.*')
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

exports.buildIcons = async () => {
    await iconBuilder.clean()
    await iconBuilder.createComponents()
    await iconBuilder.createIndexes()
    await iconBuilder.printResult()
}

const test = async () => {

}

exports.test =  test
