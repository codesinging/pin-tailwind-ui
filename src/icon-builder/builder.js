const path = require('path')
const fs = require('fs')
const del = require('del')
const kebab = require('lodash.kebabcase')

const iconPark = require('@icon-park/svg')
const sources = require('./sources')

class Builder {
    prefix = 'PinIcon'

    successfulCount = 0
    failedCount = 0

    successfulComponents = []
    failedComponents = []

    srcDir = ''
    destDir = ''
    stubDir = ''
    indexesFilename = ''

    constructor() {
        this.srcDir = path.resolve(__dirname, '..')
        this.stubDir = path.resolve(__dirname, 'stubs')
        this.destDir = path.resolve(this.srcDir, 'components/icon')
        this.indexesFilename = path.resolve(this.destDir, 'indexes.js')
    }

    clean(){
        del.sync(path.resolve(this.destDir, 'icons/*'))
    }

    svgContent(name) {
        let svg = iconPark[name]
        return svg ? svg({}) : ''
    }

    stubContent(filename){
        return fs.readFileSync(path.resolve(this.stubDir, filename)).toString()
    }

    createBuilder(name){
        let svgContent = this.svgContent(name)

        if (!svgContent) {
            return false
        }

        svgContent = svgContent
            .replace('<?xml version="1.0" encoding="UTF-8"?>', '')
            .replace('xmlns=', 'class="pin-icon" xmlns=')
            .replace('width="1em"', ':width="size"')
            .replace('height="1em"', ':height="size"')
            .replace(/stroke="currentColor"/g, ':stroke="color"')
            .replace(/fill="currentColor"/g, ':fill="color"')
            .replace(/stroke-width="4"/g, ':stroke-width="strokeWidth"')

        let saveName = sources[name]
        let componentName = this.prefix + saveName

        let componentContent = this.stubContent('vue.vue')
            .replace('__NAME__', componentName)
            .replace('<div>__SVG__</div>', svgContent)

        let indexContent = this.stubContent('index.js')
            .replace(/__NAME__/g, componentName)

        return {
            name,
            saveName,
            componentName,
            componentContent,
            indexContent,
        }
    }

    createComponent(name) {
        let builder = this.createBuilder(name)

        if (builder) {
            let saveDir = path.resolve(this.destDir, 'icons', kebab(builder.saveName))

            if (!fs.existsSync(saveDir)) {
                fs.mkdirSync(saveDir)
            }

            fs.writeFileSync(path.resolve(saveDir, builder.componentName + '.vue'), builder.componentContent)
            fs.writeFileSync(path.resolve(saveDir, 'index' + '.js'), builder.indexContent)
            console.log('Created component: ' + builder.componentName)
            this.successfulCount++
            this.successfulComponents.push(builder)
        } else {
            this.failedCount++
            this.failedComponents.push(name)
            console.log('Failed to create: ' + name)
        }
    }

    createComponents() {
        Object.keys(sources).forEach(name => {
            this.createComponent(name)
        })
    }

    createIndexes() {
        let indexes = this.successfulComponents.map(item => `"${item.saveName}"`).join(",\n    ")

        let content = this.stubContent('indexes.js')
            .replace('__ICONS__', indexes)

        fs.writeFileSync(this.indexesFilename, content)

        console.log('Created indexes: ' + this.indexesFilename)
    }

    printResult(){
        console.log(`Component creation result: ${this.successfulCount} successes, ${this.failedCount} errors`)

        if (this.failedCount){
            console.log('Component failed: ', this.failedComponents)
        }
    }
}

module.exports = new Builder()
