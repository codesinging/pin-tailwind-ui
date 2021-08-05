<template>
    <div class="space-x-4">
        <pin-icon name="user" size="48" class="text-blue-500 hover:text-green-500 cursor-pointer"/>
        <pin-icon name="user" size="48" class="p-2 bg-gray-600 text-white"/>
        <pin-icon name="user" size="48" class="border p-2"/>
        <pin-icon name="user" size="48" class="p-2 bg-gray-600 text-white rounded-full"/>
        <pin-icon name="user" size="48" class="p-2 border rounded-full"/>
        <pin-icon name="user" size="48" class="p-2 border rounded"/>
    </div>
</template>

<script>
import PinIcon from "../../../src/components/icon/PinIcon";
export default {
    name: "Class",
    components: {PinIcon},
}
</script>

<style scoped>

</style>
