<template>
    <div class="flex items-center justify-between h-12 mt-4 border-t">
        <div class="h-full flex items-center">
            <nuxt-link v-if="prev" :to="prev.to">
                <icon-arrow-left-small/>
                {{ prev.name }}
            </nuxt-link>
        </div>
        <div class="h-full flex items-center">
            <nuxt-link v-if="next" :to="next.to">
                {{ next.name }}
                <icon-arrow-right-small/>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import menu from "../utils/memu";

export default {
    name: "PageNav",
    computed: {
        prev() {
            return menu.prev(this.$route.path)
        },
        next() {
            return menu.next(this.$route.path)
        },
    },
}
</script>

<style scoped>

</style>
