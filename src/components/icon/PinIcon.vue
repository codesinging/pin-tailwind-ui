<template>
    <component v-if="componentName" :is="componentName" v-bind="props"/>
</template>

<script>
export default {
    name: "PinIcon",
    props: {
        name: {
            type: String,
            default: '',
            required: true,
        },
        size: {
            type: [String, Number],
            default: '1rem'
        },
        color: {
            type: String,
            default: 'currentColor'
        },
        strokeWidth: {
            type: [String, Number],
            default: 4
        },
    },
    data() {
        return {
            componentName: '',
            props: {
                size: this.size,
                color: this.color,
                strokeWidth: this.strokeWidth,
            }
        }
    },
    created() {
        import('./icons/' + this.name).then(res => {
            if (res && res.default) {
                this.componentName = res.default.name
                this.$options.components[res.default.name] = res.default
            }
        })
    }
}
</script>

<style scoped>

</style>
