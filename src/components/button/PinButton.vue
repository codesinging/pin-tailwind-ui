<template>
    <button
        type="button"
        :class="[commonClasses, typeClasses, shapeClasses, heightClass, widthClass, paddingClass, fontSizeClass]"
        :disabled="disabledValue"
        @click="click"
    >
        <slot name="icon" v-if="!loading"></slot>
        <svg v-if="loading" class="animate-spin" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
            <path d="M512 981.312a469.312 469.312 0 1 0-445.824-322.24A42.688 42.688 0 1 0 147.2 632.32 384 384 0 1 1 512 896a42.688 42.688 0 1 0 0 85.312z"/>
        </svg>
        <span v-if="$slots.default" class="inline-flex items-center justify-center"><slot></slot></span>
    </button>
</template>

<script>
export default {
    name: "PinButton",
    props: {
        type: {
            type: String,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        shape: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'md'
        },
        width: {
            type: [String, Number],
            default: ''
        },
        height: {
            type: [String, Number],
            default: ''
        },
    },
    computed: {
        commonClasses() {
            return 'inline-flex justify-center items-center font-medium disabled:cursor-not-allowed focus:outline-none space-x-2'
        },
        typeClasses() {
            const classes = {
                default: 'border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 focus:bg-gray-100 disabled:border-opacity-25 disabled:text-opacity-30 disabled:bg-white',
                primary: 'border-transparent text-white bg-blue-500 hover:bg-blue-400 focus:bg-blue-600 disabled:text-opacity-50 disabled:bg-blue-300 transition-all',
                secondary: 'border-transparent text-white bg-gray-500 hover:bg-gray-400 focus:bg-gray-600 disabled:text-opacity-50 disabled:bg-gray-300 transition-all',
                success: 'border-transparent text-white bg-green-500 hover:bg-green-400 focus:bg-green-600 disabled:text-opacity-50 disabled:bg-green-300 transition-all',
                danger: 'border-transparent text-white bg-red-500 hover:bg-red-400 focus:bg-red-600 disabled:text-opacity-50 disabled:bg-red-300 transition-all',
                warning: 'border-transparent text-white bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 disabled:text-opacity-50 disabled:bg-yellow-300 transition-all',
                strong: 'border-transparent text-white bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-600 disabled:text-opacity-50 disabled:bg-indigo-300 transition-all',
                info: 'border-transparent text-white bg-purple-500 hover:bg-purple-400 focus:bg-purple-600 disabled:text-opacity-50 disabled:bg-purple-300 transition-all',
            }
            return classes[this.type] || classes.default
        },
        shapeClasses() {
            const classes = {
                default: 'rounded',
                square: 'rounded-none',
                rounded: 'rounded-md',
                pill: 'rounded-full',
                circle: 'rounded-full overflow-hidden',
            }
            return classes[this.shape] || classes.default
        },
        heightClass() {
            const classes = {
                xs: 'h-6',
                sm: 'h-8',
                md: 'h-10',
                lg: 'h-12',
                xl: 'h-14',
            }

            return this.height ? `h-${this.height}` : classes[this.size] || classes.md
        },
        widthClass() {
            const classes = {
                xs: 'w-6',
                sm: 'w-8',
                md: 'w-10',
                lg: 'w-12',
                xl: 'w-14',
            }
            return this.shape === 'circle'
                ? (classes[this.size] || classes.md)
                : `w-${this.width}`
        },
        paddingClass() {
            const classes = {
                xs: 'px-2',
                sm: 'px-3',
                md: 'px-4',
                lg: 'px-8',
                xl: 'px-12',
            }
            return this.shape === 'circle' ? '' : (classes[this.size] || classes.md)
        },
        fontSizeClass() {
            const classes = {
                xs: 'text-xs',
                sm: 'text-sm',
                md: 'text-base',
                lg: 'text-lg',
                xl: 'text-xl',
            }
            return classes[this.size] || classes.md
        },
        disabledValue() {
            return this.disabled || this.loading
        },
    },
    methods: {
        click() {
            this.$emit('click')
        },
    },
}
</script>

<style scoped>

</style>
