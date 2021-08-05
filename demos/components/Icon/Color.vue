<template>
    <div>
        <pin-icon name="user" color="red"/>
        <pin-icon name="user" color="#0000ff"/>
        <pin-icon name="user" class="text-green-600"/>
        <pin-icon name="user" style="color: #ff0000;"/>
    </div>
</template>

<script>
import PinIcon from "../../../src/components/icon/PinIcon";
export default {
    name: "Color",
    components: {PinIcon},
}
</script>

<style scoped>

</style>
