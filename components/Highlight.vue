<template>
    <pre class="highlight"><code v-html="hlCode" class="hljs text-sm"></code></pre>
</template>

<script>
import 'highlight.js/styles/github.css'
import hljs from "highlight.js/lib/common";

export default {
    name: "Highlight",
    props: {
        code: {
            type: String,
            default: ''
        },
    },
    computed: {
        hlCode() {
            return hljs.highlightAuto(this.code).value
        },
    },
}
</script>

<style>
.markdown-body .highlight {
    @apply mb-0;
}

.markdown-body .highlight + .highlight {
    @apply mt-4;
}

.markdown-body pre code.hljs {
    padding: 0;
}
</style>
