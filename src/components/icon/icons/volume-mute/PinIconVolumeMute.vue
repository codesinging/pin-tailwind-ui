<template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" class="pin-icon" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><mask id="icon-ffe4fae5e29f041" maskUnits="userSpaceOnUse" x="30" y="18" width="13" height="13" style="mask-type: alpha"><rect x="30" y="18" width="13" height="13" :fill="color"/></mask><g mask="url(#icon-ffe4fae5e29f041)"><path d="M40.7351 20.2858L32.2498 28.7711" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/><path d="M32.2498 20.2858L40.735 28.7711" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/></g><path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z" fill="none" :stroke="color" :stroke-width="strokeWidth" stroke-linejoin="round"/></svg>
</template>

<script>
export default {
    name: "PinIconVolumeMute",
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
