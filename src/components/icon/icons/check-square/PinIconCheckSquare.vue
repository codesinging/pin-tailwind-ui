<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" class="pin-icon" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#icon-be6212d268f371)"><path d="M42 20V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6H30" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 20L26 28L41 7" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="icon-be6212d268f371"><rect width="48" height="48" :fill="color"/></clipPath></defs></svg>
</template>

<script>
export default {
    name: "PinIconCheckSquare",
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
