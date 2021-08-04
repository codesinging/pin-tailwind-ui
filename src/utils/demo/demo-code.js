const fs = require('fs')
const path = require('path')
const {escape} = require('lodash')

const basePath = require('../../../basePath')

class DemoCode {
    basePath = ''
    destPath = ''
    componentDir = 'demos/components'

    constructor() {
        this.basePath = basePath()
        this.destPath = basePath('demos/codes')
    }

    basename(filename){
        return path.parse(filename).name
    }

    relativeDir(filename){
        return path.relative(this.componentDir, path.dirname(filename))
    }

    destFilename(filename){
        return path.resolve(this.destPath, this.relativeDir(filename), this.basename(filename)+'.js')
    }

    srcContent(filename){
        return fs.readFileSync(path.resolve(this.basePath, filename)).toString()
    }

    destContent(filename){
        let content = this.srcContent(filename)
        content = escape(content)
            .replace(/\r\n/g, "<br>")
            .replace(/\n/g, "<br>")
        return `export default "${content}"`
    }

    create(filename){
        let destFilename = this.destFilename(filename)
        let destDirname = path.dirname(destFilename)
        if (!fs.existsSync(destDirname)){
            fs.mkdirSync(destDirname)
        }

        fs.writeFileSync(destFilename, this.destContent(filename))
        console.log('Created:', this.destFilename(filename))
    }

    remove(filename){
        fs.unlinkSync(this.destFilename(filename))
        console.log('Removed:', this.destFilename(filename))
    }
}

module.exports = new DemoCode()
