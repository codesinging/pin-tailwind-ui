<template>
    <div class="border rounded hover:shadow">
        <div class="p-4">
            <component v-if="componentName" :is="componentName"/>
        </div>
        <div v-if="codeVisibleValue" class="border-t p-4">
            <highlight :code="code"/>
        </div>
        <div @click="codeVisibleValue = !codeVisibleValue" class="flex items-center justify-center text-sm text-gray-400 hover:text-gray-500 border-t h-12 cursor-pointer">
            <span v-if="codeVisibleValue">隐藏代码</span>
            <span v-else>显示代码</span>
        </div>
    </div>
</template>

<script>
import {unescape} from 'lodash'
export default {
    name: "Demo",
    props: {
        name: {
            type: String,
            default: ''
        },
        codeVisible: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            componentName: '',
            code: '',
            codeVisibleValue: this.codeVisible
        }
    },
    created() {
        import(`../demos/components/${this.name}`).then(res=>{
            if (res && res.default){
                this.componentName = res.default.name
                this.$options.components[res.default.name] = res.default
            }
        }).catch(()=>{
            console.log('Component not found: ' + this.name)
        })
        import(`../demos/codes/${this.name}`).then(res=>{
            if (res){
                this.code = unescape(res.default).replace(/<br>/g, "\r")
            }
        }).catch(()=>{
            console.log('Code not found: ' + this.name)
        })
    },
}
</script>

<style scoped>

</style>
