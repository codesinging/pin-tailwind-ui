<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" class="pin-icon" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0H48V48H0V0Z" fill="white" fill-opacity="0.01"/><g><path d="M33 6H42V15M42 33V42H33M15 42H6V33M6 15V6H15" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 24H38" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></g></g></svg>
</template>

<script>
export default {
    name: "PinIconScanCode",
    props: {
        size: {
            type: [Number, String],
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
}
</script>
