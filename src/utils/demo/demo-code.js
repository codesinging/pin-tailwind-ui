const fs = require('fs')
const path = require('path')
const del = require('del')
const {escape} = require('lodash')

const basePath = require('../../../basePath')

class DemoCode {
    basePath = ''
    destPath = ''
    componentDir = 'demos/components'
    componentPath = ''

    constructor() {
        this.basePath = basePath()
        this.destPath = basePath('demos/codes')
        this.componentPath = path.resolve(this.basePath, this.componentDir)
    }

    basename(filename) {
        return path.parse(filename).name
    }

    relativeDir(filename) {
        return path.relative(this.componentDir, path.dirname(filename))
    }

    destFilename(filename) {
        return path.resolve(this.destPath, this.relativeDir(filename), this.basename(filename) + '.js')
    }

    srcContent(filename) {
        return fs.readFileSync(path.resolve(this.basePath, filename)).toString()
    }

    destContent(filename) {
        let content = this.srcContent(filename)
        content = escape(content)
            .replace(/\r\n/g, "<br>")
            .replace(/\n/g, "<br>")
        return `export default "${content}"`
    }

    fileList(fileDir, fileList = []) {
        const files = fs.readdirSync(path.join(this.basePath, fileDir))
        files.forEach(file => {
            const stat = fs.statSync(path.join(this.basePath, fileDir, file))
            if (stat.isDirectory()) {
                this.fileList(path.join(fileDir, file), fileList)
            } else {
                fileList.push(path.join(fileDir, file))
            }
        })
        return fileList
    }

    componentList(){
        return this.fileList(this.componentDir)
    }

    create(filename) {
        let destFilename = this.destFilename(filename)
        let destDirname = path.dirname(destFilename)
        if (!fs.existsSync(destDirname)) {
            fs.mkdirSync(destDirname)
        }

        fs.writeFileSync(destFilename, this.destContent(filename))
        console.log('Created:', this.destFilename(filename))
    }

    remove(filename) {
        fs.unlinkSync(this.destFilename(filename))
        console.log('Removed:', this.destFilename(filename))
    }

    removeAll(){
        del.sync(path.resolve(this.destPath, '*'))
        console.log('Removed all demo codes')
    }

    createAll() {
        this.componentList().forEach(filename => {
            this.create(filename)
        })
    }
}

module.exports = new DemoCode()
