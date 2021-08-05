<template>
    <div class="space-x-4">
        <pin-icon name="user" v-for="n in 6" :key="n" :stroke-width="n" size="48"/>
    </div>
</template>

<script>
import PinIcon from "../../../src/components/icon/PinIcon";
export default {
    name: "Stroke",
    components: {PinIcon},
}
</script>

<style scoped>

</style>
